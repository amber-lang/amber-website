import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    try {
        if (!name) throw new Error("Name parameter required");
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
