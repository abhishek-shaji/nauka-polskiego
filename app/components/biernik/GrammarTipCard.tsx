"use client";

export default function GrammarTipCard() {
  return (
    <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📚</span>
        Biernik Rules (Accusative Case)
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Masculine Animate */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <h4 className="font-medium text-blue-300">Masculine Animate</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Takes genitive ending (-a)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>pies → ps<span className="text-blue-400">a</span></div>
            <div>kot → kot<span className="text-blue-400">a</span></div>
            <div>chłopiec → chłopc<span className="text-blue-400">a</span></div>
          </div>
        </div>

        {/* Masculine Inanimate */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <h4 className="font-medium text-cyan-300">Masculine Inanimate</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Stays the same as nominative
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>telefon → <span className="text-cyan-400">telefon</span></div>
            <div>dom → <span className="text-cyan-400">dom</span></div>
            <div>samochód → <span className="text-cyan-400">samochód</span></div>
          </div>
        </div>

        {/* Feminine */}
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <h4 className="font-medium text-pink-300">Feminine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Changes -a to -ę
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>kaw<span className="text-slate-600">a</span> → kaw<span className="text-pink-400">ę</span></div>
            <div>książk<span className="text-slate-600">a</span> → książk<span className="text-pink-400">ę</span></div>
            <div>kobiet<span className="text-slate-600">a</span> → kobiet<span className="text-pink-400">ę</span></div>
          </div>
        </div>

        {/* Neuter */}
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
            <h4 className="font-medium text-violet-300">Neuter</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Stays the same as nominative
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>jabłko → <span className="text-violet-400">jabłko</span></div>
            <div>mleko → <span className="text-violet-400">mleko</span></div>
            <div>okno → <span className="text-violet-400">okno</span></div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-slate-400 text-sm">
          <span className="text-amber-400">💡 Remember:</span> Biernik (Accusative) is used for direct objects — 
          the thing being acted upon. Ask <span className="text-white font-medium">&quot;Kogo? Co?&quot;</span> (Whom? What?)
        </p>
      </div>
    </div>
  );
}

