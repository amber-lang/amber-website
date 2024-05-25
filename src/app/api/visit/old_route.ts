import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: NextRequest) {
    noStore();
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    try {
        if (!name) throw new Error("Name parameter required");
        if (name === 'download') {
            const agent = searchParams.get("agent");
            const ip = request.ip ?? request.headers.get('X-Forwarded-For');
            const fullAgent = [ip, agent].join(' ');
            await sql`
                INSERT INTO amber_download_agents (agent)
                VALUES (${fullAgent})
                ON CONFLICT (agent) DO NOTHING;
            `;
            return NextResponse.json({ msg: "OK", agent: fullAgent });
        }
        await sql`
            UPDATE amber_analytics
            SET engagement = engagement + 1
            WHERE name = ${name};
        `;
    } catch (error: any) {
        return NextResponse.json({ error: error.toString() }, { status: 500 });
    }
    return NextResponse.json({ msg: "OK" });
}
