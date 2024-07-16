import { NextResponse, NextRequest } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';
import { db } from '../../../lib/firebase';
import admin from 'firebase-admin';
import base32 from 'base32';

async function getGitHubURL(username: string) {
    const githubApiUrl = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(githubApiUrl);
        if (response.status === 200) {
            return `https://github.com/${username}`;
        } else if (response.status === 404) {
            return null;
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    }
}

export async function GET(request: NextRequest) {
    noStore();
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    try {
        if (!name) throw new Error("Name parameter required");
        if (name === 'download') {
            const agent = searchParams.get("agent");
            const nickname = searchParams.get("nickname");
            const githubURL = nickname && getGitHubURL(nickname);
            const ip = request.ip ?? request.headers.get('X-Forwarded-For');
            const fullAgent = [ip, agent].join(' ');
            await db.collection("agents").doc(base32.encode(fullAgent).slice(20)).set({
                agent: fullAgent,
                nickname,
                githubURL
            });
            return NextResponse.json({ msg: "OK", agent: fullAgent });
        }
        await db.collection("analytics").doc(name).update({
            engagement: admin.firestore.FieldValue.increment(1)
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.toString() }, { status: 500 });
    }
    return NextResponse.json({ msg: "OK" });
}
