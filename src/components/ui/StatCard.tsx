import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: React.ReactNode;
  glowColor: string;
}

export function StatCard({ title, value, change, positive = true, icon, glowColor }: StatCardProps) {
  return (
    <div className={`glass rounded-2xl p-6 transition-all hover:scale-105 ${glowColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-white/5">{icon}</div>
        <span className={`text-sm font-medium ${positive ? "text-accent-green" : "text-red-400"}`}>
          {positive ? "↑" : "↓"} {change}
        </span>
      </div>
      <p className="text-3xl font-bold text-text mb-1">{value}</p>
      <p className="text-sm text-muted">{title}</p>
    </div>
  );
}
