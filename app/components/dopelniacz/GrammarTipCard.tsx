"use client";

export default function GrammarTipCard() {
  return (
    <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📚</span>
        Dopełniacz Rules (Genitive Case)
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Masculine Animate */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <h4 className="font-medium text-blue-300">Masculine Animate</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            -a (like biernik), -y/-i for soft stems
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>kuzyn → kuzyn<span className="text-blue-400">a</span></div>
            <div>kolega → koleg<span className="text-blue-400">i</span></div>
            <div>dentysta → dentyst<span className="text-blue-400">y</span></div>
          </div>
        </div>

        {/* Masculine Inanimate */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <h4 className="font-medium text-cyan-300">Masculine Inanimate</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            -a (concrete) or -u (abstract/places)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>Kraków → Krakow<span className="text-cyan-400">a</span></div>
            <div>sklep → sklep<span className="text-cyan-400">u</span></div>
            <div>klub → klub<span className="text-cyan-400">u</span></div>
          </div>
        </div>

        {/* Feminine */}
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <h4 className="font-medium text-pink-300">Feminine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            -y (hard), -i (after k, g, soft consonants)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>szkół<span className="text-slate-600">a</span> → szkoł<span className="text-pink-400">y</span></div>
            <div>aptek<span className="text-slate-600">a</span> → aptek<span className="text-pink-400">i</span></div>
            <div>babci<span className="text-slate-600">a</span> → babc<span className="text-pink-400">i</span></div>
          </div>
        </div>

        {/* Neuter */}
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
            <h4 className="font-medium text-violet-300">Neuter</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            -a (most), -um words stay same
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>kin<span className="text-slate-600">o</span> → kin<span className="text-violet-400">a</span></div>
            <div>muzeum → <span className="text-violet-400">muzeum</span></div>
            <div>mieszkani<span className="text-slate-600">e</span> → mieszkan<span className="text-violet-400">ia</span></div>
          </div>
        </div>
      </div>

      {/* Adjective endings */}
      <div className="mt-4 p-4 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-xl border border-amber-500/20">
        <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
          <span className="text-amber-400">✨</span>
          Adjective Endings (Przymiotnik)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="text-center bg-slate-800/50 rounded-lg p-3">
            <div className="text-blue-400 text-xs mb-1">Masc/Neut (hard)</div>
            <div className="text-amber-400 font-bold text-lg">-ego</div>
            <div className="text-slate-500 text-xs mt-2">nowy → now<span className="text-amber-400">ego</span></div>
            <div className="text-slate-500 text-xs">stary → star<span className="text-amber-400">ego</span></div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-lg p-3">
            <div className="text-cyan-400 text-xs mb-1">Masc/Neut (k, g)</div>
            <div className="text-amber-400 font-bold text-lg">-iego</div>
            <div className="text-slate-500 text-xs mt-2">polski → polsk<span className="text-amber-400">iego</span></div>
            <div className="text-slate-500 text-xs">drogi → drog<span className="text-amber-400">iego</span></div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-lg p-3">
            <div className="text-pink-400 text-xs mb-1">Feminine (hard)</div>
            <div className="text-pink-400 font-bold text-lg">-ej</div>
            <div className="text-slate-500 text-xs mt-2">nowa → now<span className="text-pink-400">ej</span></div>
            <div className="text-slate-500 text-xs">stara → star<span className="text-pink-400">ej</span></div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-lg p-3">
            <div className="text-violet-400 text-xs mb-1">Feminine (k, g)</div>
            <div className="text-pink-400 font-bold text-lg">-iej</div>
            <div className="text-slate-500 text-xs mt-2">polska → polsk<span className="text-pink-400">iej</span></div>
            <div className="text-slate-500 text-xs">droga → drog<span className="text-pink-400">iej</span></div>
          </div>
        </div>
        <div className="mt-3 text-center text-xs text-slate-500">
          Question: <span className="text-amber-400 font-medium">Jakiego?</span> (masc/neut) • <span className="text-pink-400 font-medium">Jakiej?</span> (fem)
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-slate-400 text-sm">
          <span className="text-amber-400">💡 Remember:</span> Dopełniacz (Genitive) is used after &quot;do&quot; (to), &quot;bez&quot; (without), 
          &quot;od/z&quot; (from), for possession, and with quantities. Ask <span className="text-white font-medium">&quot;Kogo? Czego?&quot;</span> (Whom? What? - of)
        </p>
      </div>
    </div>
  );
}

