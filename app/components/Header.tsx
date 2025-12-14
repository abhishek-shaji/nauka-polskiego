import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0">
      {/* Polish flag colors accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white" />
      <div className="absolute top-1 left-0 w-full h-1 bg-red-600" />

      <div className="pt-4 pb-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo/Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="text-white font-bold text-lg">PL</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                Nauka Polskiego
              </h1>
              <p className="text-slate-400 text-xs font-light tracking-wide hidden sm:block">
                Learn Polish Online
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
            >
              Verbs
            </Link>
            <Link
              href="/sentences"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
            >
              Sentences
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
