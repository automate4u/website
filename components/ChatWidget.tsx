'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
    useEffect(() => {
        // Inject the Botpress webchat script
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            window.botpress?.init({
                clientId: 'd1e38d95-8589-4de9-85b6-7ef8c8bd59de',
                configUrl:
                    'https://files.bpcontent.cloud/2026/04/03/09/20260403091732-HZQH2OYN.json',
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
