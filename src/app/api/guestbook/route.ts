import { NextResponse } from "next/server";
import client, { initDatabase } from "@/lib/turso";

export async function GET() {
  try {
    await initDatabase();
    const result = await client.execute(
      "SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 20"
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message required" },
        { status: 400 }
      );
    }
    
    await initDatabase();
    await client.execute({
      sql: "INSERT INTO guestbook (name, message) VALUES (?, ?)",
      args: [name, message],
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
