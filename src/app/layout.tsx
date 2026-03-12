import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Dashboard — OpenClaw Demo",
  description: "Demo de la puissance : Next.js + Turso + Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-bg text-text antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="glass sticky top-0 z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-bold text-lg gradient-text">Smart Dashboard</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-muted hover:text-text transition-colors">
              Dashboard
            </Link>
            <Link href="/guestbook" className="text-muted hover:text-text transition-colors">
              Guestbook
            </Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-sm font-bold cursor-pointer">
              M
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
