import React from 'react';

export default function Page() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
    .ab-scope {
        display: block;
    }

    .ab-scope * {
        box-sizing: border-box;
    }

    /* Tokens */
    .ab-scope {
        --ink: #0f1720;
        --muted: #6b7b8d;
        --accent: #1db993;
        --accent-hover: #169b78;
        --accent-ink: #179c79;
        --pill-bg: #e9f9f3;
        --panel: #f8fbfa;
        --card: #ffffff;
        --border: #E7EDF2;
        --soft: #f6f8fb;
        --radius: 22px;
    }

    /* Container */
    .ab-scope .ab-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 18px;
    }

    /* HERO */
    .ab-scope .ab-hero {
        background: #fff;
        color: var(--ink);
        padding: 44px 0;
        text-align: center;
    }

    .ab-scope .ab-title {
        margin: 0 auto 12px;
        font-weight: 800;
        line-height: 1.08;
        letter-spacing: -.01em;
        font-size: 32px;
    }

    .ab-scope .ab-subtitle {
        margin: 0 auto 24px;
        max-width: 70ch;
        color: var(--muted);
        font-size: 1.05rem;
        font-weight: 500;
    }

    .ab-scope .ab-intro {
        max-width: 80ch;
        margin: 0 auto;
        text-align: left;
    }

    .ab-scope .ab-intro p {
        margin: 0 0 1em;
        line-height: 1.6;
        color: var(--ink);
    }

    .ab-scope .ab-link {
        color: var(--accent);
        text-decoration: none;
        font-weight: 600;
        border-bottom: 2px solid var(--accent);
    }

    .ab-scope .ab-link:hover {
        color: var(--accent-hover);
        border-bottom-color: var(--accent-hover);
    }

    @media (min-width: 768px) {
        .ab-scope .ab-hero {
            padding: 64px 0;
        }

        .ab-scope .ab-title {
            font-size: 48px;
        }
    }

    @media (min-width: 1200px) {
        .ab-scope .ab-title {
            font-size: 56px;
        }
    }

    /* EXPERIENCE SECTION */
    .ab-scope .ab-experience {
        width: 100vw;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        background: #f8fafc;
        color: var(--ink);
        padding: 40px 0;
        text-align: center;
    }

    .ab-scope .ab-h2 {
        font-size: 28px;
        line-height: 1.15;
        letter-spacing: -.02em;
        margin: 10px 0 6px;
        font-weight: 800;
        text-wrap: balance;
    }

    .ab-scope .ab-content {
        max-width: 900px;
        margin: 32px auto 0;
        text-align: left;
    }

    .ab-scope .ab-content p {
        margin-bottom: 24px;
        line-height: 1.7;
        font-size: 1.05rem;
        color: var(--ink);
    }

    .ab-scope .ab-highlight-box {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 32px;
        margin: 32px 0;
        box-shadow: 0 4px 12px rgba(15, 23, 32, 0.04);
    }

    .ab-scope .ab-highlight-title {
        font-weight: 700;
        font-size: 1.2rem;
        margin-bottom: 16px;
        color: var(--accent-ink);
    }

    .ab-scope .ab-industry-list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .ab-scope .ab-industry-tag {
        background: var(--pill-bg);
        color: var(--accent-ink);
        padding: 6px 14px;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.9rem;
    }

    @media (min-width: 768px) {
        .ab-scope .ab-experience {
            padding: 64px 0;
        }
        
        .ab-scope .ab-h2 {
            font-size: 44px;
        }
    }

    /* CLOSING CTA */
    .ab-scope .ab-cta {
        background: #fff;
        color: var(--ink);
        padding: 48px 0;
        text-align: center;
    }

    .ab-scope .ab-cta-text {
        max-width: 70ch;
        margin: 16px auto 24px;
        color: var(--muted);
        line-height: 1.6;
    }

    .ab-scope .ab-cta-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .ab-scope .ab-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.8rem 1.2rem;
        border-radius: 999px;
        font-weight: 800;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .ab-scope .ab-primary {
        background: var(--accent);
        color: #fff;
        box-shadow: 0 10px 26px rgba(29, 185, 147, 0.28);
    }

    .ab-scope .ab-primary:hover {
        background: var(--accent-hover);
        transform: translateY(-2px);
    }

    .ab-scope .ab-secondary {
        background: transparent;
        color: var(--accent);
        border: 2px solid var(--accent);
    }

    .ab-scope .ab-secondary:hover {
        background: var(--pill-bg);
    }
` }} />
            <div dangerouslySetInnerHTML={{
                __html: `<div class="ab-scope">

    <!-- ============== HERO ============== -->
    <section class="ab-hero" aria-labelledby="ab-hero-title">
        <div class="ab-container">
            <h1 id="ab-hero-title" class="ab-title">Company Overview</h1>
            <p class="ab-subtitle">Building modern, state-of-the-art enterprise systems to enhance your business.</p>
        </div>
    </section>

    <!-- ============== EXPERIENCE CONTENT ============== -->
    <section class="ab-experience" aria-labelledby="ab-exp-title">
        <div class="ab-container">
            <h2 id="ab-exp-title" class="ab-h2">Our Experience</h2>

            <div class="ab-content">
                <p>Our highly experienced, capable, and motivated team has worked with dozens of companies of all sizes—from Fortune 500s to mom-and-pop shops. We bring deep expertise in building modern, state-of-the-art, enterprise-grade systems directly to your operations.</p>
                
                <div class="ab-highlight-box">
                    <h3 class="ab-highlight-title">Industry Expertise</h3>
                    <p>Our business and development experience spans a wide variety of industries:</p>
                    <ul class="ab-industry-list">
                        <li class="ab-industry-tag">Professional Services</li>
                        <li class="ab-industry-tag">Financial Services</li>
                        <li class="ab-industry-tag">Industrial Manufacturing</li>
                        <li class="ab-industry-tag">Healthcare</li>
                        <li class="ab-industry-tag">Hospitality</li>
                        <li class="ab-industry-tag">Restaurants</li>
                        <li class="ab-industry-tag">Transportation</li>
                        <li class="ab-industry-tag">Logistics</li>
                        <li class="ab-industry-tag">Real Estate</li>
                        <li class="ab-industry-tag">Construction</li>
                        <li class="ab-industry-tag">Home Services</li>
                    </ul>
                </div>

                <p>Please see our <a href="/industries" class="ab-link">Industries page</a> to get a better idea of our past work. Even if you don't see your business type listed, please don't hesitate to reach out.</p>
                
                <p>We keep a focused list of our top industries online, but our experience and capabilities extend far beyond just what you see there.</p>
            </div>
        </div>
    </section>

    <!-- ============== CLOSING CTA ============== -->
    <section class="ab-cta" aria-labelledby="ab-cta-title">
        <div class="ab-container">
            <h2 id="ab-cta-title" class="ab-h2">Ready to scale?</h2>

            <p class="ab-cta-text">Whether you're a Fortune 500 or a growing local business, we have the tools to help you succeed.</p>

            <div class="ab-cta-actions">
                <a href="https://automate4u.co/contact/" class="ab-btn ab-primary">Book a Free Consultation</a>
                <a href="/industries" class="ab-btn ab-secondary">View Industries</a>
            </div>
        </div>
    </section>

</div> <!-- /ab-scope -->
` }} />
        </>
    );
}
