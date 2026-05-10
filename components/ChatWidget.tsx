'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        botpress?: {
            init: (config: { clientId: string; configUrl: string }) => void;
        };
    }
}

export default function ChatWidget() {
    useEffect(() => {
        const loadBotpress = () => {
            if (document.querySelector('script[data-botpress-webchat="true"]')) return;

            const script = document.createElement('script');
            script.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
            script.async = true;
            script.dataset.botpressWebchat = 'true';
            script.onload = () => {
                window.botpress?.init({
                    clientId: 'd1e38d95-8589-4de9-85b6-7ef8c8bd59de',
                    configUrl:
                        'https://files.bpcontent.cloud/2026/04/03/09/20260403091732-HZQH2OYN.json',
                });
            };
            document.body.appendChild(script);
        };

        const idleId = window.setTimeout(loadBotpress, 2500);

        return () => {
            window.clearTimeout(idleId);
        };
    }, []);

    return null;
}
