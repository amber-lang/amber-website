import { NextResponse, NextRequest } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';
import { db } from '../../../lib/firebase';

export async function GET(request: NextRequest) {
    noStore();
    const { searchParams } = new URL(request.url);
    try {
        const lastVisibleId = searchParams.get("lastVisibleId");
        let query = db.collection('downloads').limit(50);
        if (lastVisibleId && lastVisibleId.length > 5) {
            const lastVisibleDoc = await db.collection('downloads').doc(lastVisibleId).get();
            if (lastVisibleDoc.exists) query = query.startAfter(lastVisibleDoc);
            else return NextResponse.json({ error: "Invalid document ID" }, { status: 500 });
        }
        const snapshot = await query.get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const newLastVisible = snapshot.docs.at(-1);
        const newLastVisibleId = newLastVisible && newLastVisible.id;
        return NextResponse.json({ msg: "OK", data, newLastVisibleId });
    } catch (error: any) {
        return NextResponse.json({ error: error.toString() }, { status: 500 });
    }
}
