import Link from "next/link";
import { StatCard } from "@/components/ui/StatCard";
import {
  Users,
  MessageSquare,
  Database,
  Shield,
  Globe,
  Palette,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          <span className="gradient-text">Smart Dashboard</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
          Une démo de la puissance de la stack gratuite : Next.js, Clerk Auth,
          Turso Database, Figma, déployé sur Vercel.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/guestbook"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            📖 Voir le Guestbook
          </Link>
          <a
            href="https://github.com/suuuucdcz/smart-dashboard"
            target="_blank"
            className="glass px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            📦 Code source
          </a>
        </div>
      </section>

      {/* Stats */}
      <section>
        <h2 className="text-2xl font-bold mb-6">📊 Statistiques live</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Utilisateurs actifs"
            value="1"
            change="Nouveau"
            icon={<Users className="w-6 h-6 text-accent-green" />}
            glowColor="glow-green"
          />
          <StatCard
            title="Messages Guestbook"
            value="∞"
            change="Turso"
            icon={<MessageSquare className="w-6 h-6 text-accent-blue" />}
            glowColor="glow-blue"
          />
          <StatCard
            title="Temps de réponse"
            value="<50ms"
            change="Edge"
            icon={<Database className="w-6 h-6 text-accent-purple" />}
            glowColor="glow-purple"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-6">🛠️ Stack utilisée</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechCard
            icon="🔐"
            name="Clerk"
            description="Auth complète : Google, email, magic link. 10 000 users gratuits."
            color="border-blue-500/30"
          />
          <TechCard
            icon="🗄️"
            name="Turso"
            description="SQLite Edge — BDD ultra-rapide, réplication mondiale, gratuit."
            color="border-green-500/30"
          />
          <TechCard
            icon="📐"
            name="Figma"
            description="Design UI/UX avant de coder. API accessible pour extraire les assets."
            color="border-purple-500/30"
          />
          <TechCard
            icon="⚡"
            name="Next.js"
            description="Framework React. SSR, API routes, server actions. Standard de l'industrie."
            color="border-orange-500/30"
          />
          <TechCard
            icon="🎨"
            name="Tailwind CSS"
            description="CSS utility-first. Design rapide sans quitter le HTML."
            color="border-cyan-500/30"
          />
          <TechCard
            icon="🌐"
            name="Vercel"
            description="Déploiement auto à chaque push. CDN mondial. Gratuit."
            color="border-gray-500/30"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">💡 Comment ça marche ?</h2>
        <div className="space-y-4">
          <Step
            number={1}
            title="Design sur Figma"
            description="Maquetter l'interface avant de coder"
          />
          <Step
            number={2}
            title="Coder avec Next.js + Tailwind"
            description="Transformer le design en code propre et responsive"
          />
          <Step
            number={3}
            title="Auth avec Clerk"
            description="Login/logout en 5 lignes de code, Google inclus"
          />
          <Step
            number={4}
            title="Données dans Turso"
            description="BDD SQLite edge — rapide, gratuit, scalable"
          />
          <Step
            number={5}
            title="Déployer sur Vercel"
            description="git push → site en ligne en 30 secondes"
          />
        </div>
      </section>
    </div>
  );
}

function TechCard({
  icon,
  name,
  description,
  color,
}: {
  icon: string;
  name: string;
  description: string;
  color: string;
}) {
  return (
    <div className={`glass rounded-2xl p-6 border-l-4 ${color} hover:scale-105 transition-transform`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}
