const fs = require('fs');
const path = require('path');

const BACKUP_DIR = path.join(__dirname, 'legacy_backup');
const APP_DIR = path.join(__dirname, 'app');

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function processFile(filePath, category, slug) {
    console.log(`Processing: ${category}/${slug}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract scoped content
    // Tries to find <div class=".*scope.*"> ... </div> (roughly)
    // and <style> ... </style>

    let bodyContent = '';
    let styleContent = '';

    // Simple regex extraction - assuming standard format in these files
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/i);
    if (styleMatch) {
        styleContent = styleMatch[1];
    }

    // Extract the main scope div. 
    // This is tricky with regex if nested divs exist, but usually these are flat exports.
    // We'll try to find the opening tag and just take everything until the end of file (minus style/script).
    // Actually, let's just take everything inside <body> if possible, or just the whole file content minus wrapping?
    // The files are partials? No, they seem to be full HTML widgets.

    // Inspecting file content earlier:
    // It starts with comments, then <div class="hs-pro-scope" ...>
    // It ends with </div> <!-- /hs-pro-scope -->
    // Then <style> ... </style>
    // Then <script> ... </script>

    // Strategy:
    // 1. Find index of <div class=".*scope
    // 2. Find index of <style>
    // 3. Take substring between 1 and 2.

    const scopeStartRegex = /<div class="[^"]*scope[^"]*"/i;
    const scopeStartMatch = content.match(scopeStartRegex);

    if (scopeStartMatch) {
        const startIdx = scopeStartMatch.index;

        let endIdx = content.indexOf('<style>');
        if (endIdx === -1) endIdx = content.length;

        // Trim content before style
        bodyContent = content.substring(startIdx, endIdx);

        // Clean up any trailing scripts if they are before style?
        // In the example, script was AFTER style.
        // Let's just remove <script> tags from bodyContent for safety (React hates script tags usually)
        // or keep them if we use dangerouslySetInnerHTML
    } else {
        console.warn(`No scope found in ${slug}`);
        return;
    }

    // React Component
    const componentCode = `import React from 'react';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`${styleContent.replace(/`/g, '\\`')}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </>
  );
}
`;

    const outDir = path.join(APP_DIR, category, slug);
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, 'page.tsx'), componentCode);
}

function traverse(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            // subdirectories like 'industries', 'about'
            const category = item.name;
            const subItems = fs.readdirSync(path.join(dir, category));
            for (const subItem of subItems) {
                if (subItem.endsWith('.html')) {
                    const slug = subItem.replace('.html', '');
                    processFile(path.join(dir, category, subItem), category, slug);
                }
            }
        } else if (item.name.endsWith('.html') && item.name !== 'home.html') {
            // root html files like 'contact.html'
            const slug = item.name.replace('.html', '');
            processFile(path.join(dir, item.name), '.', slug);
        }
    }
}

// Manually mapping 'contact.html' to 'contact' route (which is '.', 'contact')
// traverse(BACKUP_DIR);

// Execute
const categories = ['industries', 'capabilities', 'about'];
categories.forEach(cat => {
    const catDir = path.join(BACKUP_DIR, cat);
    if (fs.existsSync(catDir)) {
        const files = fs.readdirSync(catDir);
        files.forEach(f => {
            if (f.endsWith('.html')) {
                processFile(path.join(catDir, f), cat, f.replace('.html', ''));
            }
        });
    }
});

// Root files
['contact.html'].forEach(f => {
    const p = path.join(BACKUP_DIR, f);
    if (fs.existsSync(p)) {
        processFile(p, '.', f.replace('.html', ''));
    }
});
