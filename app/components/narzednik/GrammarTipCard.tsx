"use client";

export default function GrammarTipCard() {
  return (
    <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📚</span>
        Narzędnik Rules (Instrumental Case)
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Masculine */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <h4 className="font-medium text-blue-300">Masculine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Add -em (hard) or -iem (soft/k/g)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>student → student<span className="text-blue-400">em</span></div>
            <div>nauczyciel → nauczyciel<span className="text-blue-400">em</span></div>
            <div>prawnik → prawnik<span className="text-blue-400">iem</span></div>
            <div>kolega → koleg<span className="text-blue-400">ą</span> <span className="text-slate-600">(masc. -a)</span></div>
          </div>
        </div>

        {/* Feminine */}
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <h4 className="font-medium text-pink-300">Feminine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Changes -a to -ą, -ia to -ią
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>siostr<span className="text-slate-600">a</span> → siostr<span className="text-pink-400">ą</span></div>
            <div>kaw<span className="text-slate-600">a</span> → kaw<span className="text-pink-400">ą</span></div>
            <div>babci<span className="text-slate-600">a</span> → babci<span className="text-pink-400">ą</span></div>
            <div>histori<span className="text-slate-600">a</span> → histori<span className="text-pink-400">ą</span></div>
          </div>
        </div>

        {/* Neuter */}
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
            <h4 className="font-medium text-violet-300">Neuter</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            -o/-e → -em, -ę → -ęciem
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>mlek<span className="text-slate-600">o</span> → mlek<span className="text-violet-400">iem</span></div>
            <div>win<span className="text-slate-600">o</span> → win<span className="text-violet-400">em</span></div>
            <div>morz<span className="text-slate-600">e</span> → morz<span className="text-violet-400">em</span></div>
            <div>dziecko → dzieck<span className="text-violet-400">iem</span></div>
          </div>
        </div>

        {/* Common Uses */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <h4 className="font-medium text-orange-300">Common Uses</h4>
          </div>
          <div className="text-slate-500 text-xs space-y-1">
            <div><span className="text-orange-400">być +</span> Jestem studentem</div>
            <div><span className="text-orange-400">z +</span> Idę z bratem</div>
            <div><span className="text-orange-400">means:</span> Jadę samochodem</div>
            <div><span className="text-orange-400">przed/za/nad/pod/między</span></div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-slate-400 text-sm">
          <span className="text-amber-400">💡 Remember:</span> Narzędnik (Instrumental) answers{" "}
          <span className="text-white font-medium">&quot;Z kim? Czym? Kim?&quot;</span> (With whom? With what? As whom?)
          — used for companionship, tools/means, and after być for professions.
        </p>
      </div>

      <div className="mt-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-slate-400 text-sm">
          <span className="text-cyan-400">🔑 Prepositions:</span>{" "}
          <span className="text-white">z</span> (with),{" "}
          <span className="text-white">przed</span> (in front of),{" "}
          <span className="text-white">za</span> (behind),{" "}
          <span className="text-white">nad</span> (above),{" "}
          <span className="text-white">pod</span> (under),{" "}
          <span className="text-white">między</span> (between)
        </p>
      </div>
    </div>
  );
}

