"use client";

import { useState } from "react";

interface Props {
  action: (formData: FormData) => Promise<void>;
}

export function GuestbookForm({ action }: Props) {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    await action(formData);
    setIsPending(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
      <div>
        <label className="block text-sm text-muted mb-2">Ton nom</label>
        <input
          name="name"
          required
          placeholder="Mathis"
          className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Écris quelque chose de cool..."
          className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "⏳ Envoi..." : "🚀 Envoyer"}
      </button>
      <p className="text-xs text-muted text-center">
        Stocké dans <span className="text-accent-green">Turso</span> — SQLite Edge Database 🗄️
      </p>
    </form>
  );
}
