import { NextResponse } from 'next/server';

type RetellWebCallRequest = {
    agent_id?: string;
    agent_version?: number;
    metadata?: Record<string, string | number | boolean>;
};

function isRequestBody(value: unknown): value is RetellWebCallRequest {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
    try {
        const payload: unknown = await request.json();
        const body = isRequestBody(payload) ? payload : {};

        // Use defaults matching the original WordPress plugin
        const agent_id = body.agent_id || 'agent_8eb3dcb6ee11e198779d6b762f';
        const agent_version = body.agent_version || 9;
        const metadata = body.metadata || {};

        const apiKey = process.env.RETELL_API_KEY;

        if (!apiKey) {
            console.error('[Retell API Route] API key not found in process.env.RETELL_API_KEY');
            return NextResponse.json({ error: 'Voice demo is not configured' }, { status: 500 });
        }

        const retellResponse = await fetch('https://api.retellai.com/v2/create-web-call', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                agent_id,
                agent_version,
                metadata,
            }),
        });

        const data = await retellResponse.json();

        if (!retellResponse.ok) {
            console.error('[Retell API Route] Retell API error:', retellResponse.status, data);
            return NextResponse.json({ error: 'Failed to create web call' }, { status: retellResponse.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('[Retell API Route] Server error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
