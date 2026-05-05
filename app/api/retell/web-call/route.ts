import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Use defaults matching the original WordPress plugin
        const agent_id = body.agent_id || 'agent_8eb3dcb6ee11e198779d6b762f';
        const agent_version = body.agent_version || 9;
        const metadata = body.metadata || {};

        const apiKey = process.env.RETELL_API_KEY;

        if (!apiKey) {
            console.error('[Retell API Route] API key not found in process.env.RETELL_API_KEY');
            return NextResponse.json({ error: 'RETELL_API_KEY not set' }, { status: 500 });
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
            return NextResponse.json({ error: 'Failed to create web call', details: data }, { status: retellResponse.status });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('[Retell API Route] Server error:', error);
        return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
    }
}
