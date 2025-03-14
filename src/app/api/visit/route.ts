import { NextResponse, NextRequest } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';
import { db } from '../../../lib/firebase';
import admin from 'firebase-admin';
import Sentiment from 'sentiment';
import crypto from 'crypto';

const sentiment = new Sentiment();

async function getGitHubURL(username: string) {
    const githubApiUrl = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(githubApiUrl);
        console.log(response.status, githubApiUrl);
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

function getOStype(agent: string) {
    if (agent.match(/microsoft|wsl|msys|windows/gi)) return 'windows'
    if (agent.match(/linux/gi)) return 'linux'
    if (agent.match(/apple|darwin/gi)) return 'darwin'
    return 'unclassified'
}

function getNickname(nickname: string) {
    const name = nickname.slice(0, 40);
    if (name.length) {
        const result = sentiment.analyze(name);
        if (result.score >= -1) {
            return name
        }
    }
    return ''
}

function getID(ip: string) {
    const key = process.env.ENCRYPTION_KEY;
    if (!key) {
        throw Error('Bad encryption key');
    }
    return crypto.createHmac('sha256', key)
        .update(ip)
        .digest('hex');
}

export async function GET(request: NextRequest) {
    noStore();
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    try {
        if (!name) throw new Error("Name parameter required");
        if (name === 'download') {
            const os = getOStype(searchParams.get("agent") ?? '');
            const nickname = getNickname(searchParams.get("nickname") ?? '');
            const githubURL = nickname && await getGitHubURL(nickname);
            const ip = request.headers.get('X-Forwarded-For');
            const id = getID(ip ?? '');
            await db.collection("downloads").doc(id).set({
                id,
                os,
                name: nickname,
                githubURL
            });
            return NextResponse.json({ msg: "OK", id });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.toString() }, { status: 500 });
    }
    return NextResponse.json({ msg: "OK" });
}
