interface Entry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export function GuestbookList({ entries }: { entries: unknown[] }) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-12 text-muted">
        <p className="text-4xl mb-4">📭</p>
        <p>Aucun message pour l'instant. Sois le premier !</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-muted">
        💬 {entries.length} message{entries.length > 1 ? "s" : ""}
      </h2>
      {(entries as Entry[]).map((entry) => (
        <div
          key={entry.id}
          className="glass rounded-xl p-4 hover:bg-card-hover transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-sm font-bold">
                {entry.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-semibold text-text">{entry.name}</span>
            </div>
            <span className="text-xs text-muted">
              {new Date(entry.created_at).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <p className="text-muted/80 pl-10">{entry.message}</p>
        </div>
      ))}
    </div>
  );
}
