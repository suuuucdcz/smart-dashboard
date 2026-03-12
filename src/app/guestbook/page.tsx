import client, { initDatabase } from "@/lib/turso";
import { GuestbookForm } from "@/components/GuestbookForm";
import { GuestbookList } from "@/components/GuestbookList";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
  await initDatabase();
  
  const result = await client.execute(
    "SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 20"
  );

  async function addEntry(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    
    if (!name || !message) return;
    
    await initDatabase();
    await client.execute({
      sql: "INSERT INTO guestbook (name, message) VALUES (?, ?)",
      args: [name, message],
    });
    
    revalidatePath("/guestbook");
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text mb-2">📖 Guestbook</h1>
        <p className="text-muted">Laisse un message — tout est stocké dans Turso Database !</p>
      </div>

      <GuestbookForm action={addEntry} />
      <GuestbookList entries={result.rows} />
    </div>
  );
}
