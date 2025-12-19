"use client";

import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  isActive?: boolean;
};

type CasePageHeaderProps = {
  title: string;
  subtitle: string;
  accentColor: "rose" | "amber" | "emerald" | "violet" | "sky" | "orange";
  navItems?: NavItem[];
};

const colorClasses = {
  rose: {
    gradient: "from-rose-300 via-pink-200 to-rose-300",
    activeBg: "bg-rose-600/30",
    activeBorder: "border-rose-500/50",
    activeText: "text-rose-300",
  },
  amber: {
    gradient: "from-amber-300 via-orange-200 to-amber-300",
    activeBg: "bg-amber-600/30",
    activeBorder: "border-amber-500/50",
    activeText: "text-amber-300",
  },
  emerald: {
    gradient: "from-emerald-300 via-green-200 to-emerald-300",
    activeBg: "bg-emerald-600/30",
    activeBorder: "border-emerald-500/50",
    activeText: "text-emerald-300",
  },
  violet: {
    gradient: "from-violet-300 via-purple-200 to-violet-300",
    activeBg: "bg-violet-600/30",
    activeBorder: "border-violet-500/50",
    activeText: "text-violet-300",
  },
  sky: {
    gradient: "from-sky-300 via-blue-200 to-sky-300",
    activeBg: "bg-sky-600/30",
    activeBorder: "border-sky-500/50",
    activeText: "text-sky-300",
  },
  orange: {
    gradient: "from-orange-300 via-amber-200 to-orange-300",
    activeBg: "bg-orange-600/30",
    activeBorder: "border-orange-500/50",
    activeText: "text-orange-300",
  },
};

const defaultNavItems: NavItem[] = [
  { href: "/", label: "← Conjugation" },
  { href: "/biernik", label: "Biernik" },
  { href: "/dopelniacz", label: "Dopełniacz" },
  { href: "/narzednik", label: "Narzędnik" },
  { href: "/sentences", label: "Sentences →" },
];

export default function CasePageHeader({
  title,
  subtitle,
  accentColor,
  navItems = defaultNavItems,
}: CasePageHeaderProps) {
  const colors = colorClasses[accentColor];

  return (
    <div className="pb-4 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-5xl font-bold text-center bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent tracking-tight`}
        >
          {title}
        </h2>
        <p className="text-slate-400 text-center mt-2 text-lg tracking-wide">
          {subtitle}
        </p>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {navItems.map((item) =>
            item.isActive ? (
              <span
                key={item.href}
                className={`px-4 py-2 ${colors.activeBg} border ${colors.activeBorder} rounded-xl ${colors.activeText} text-sm`}
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all text-sm"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
