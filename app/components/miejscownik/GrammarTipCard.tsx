"use client";

export default function GrammarTipCard() {
  return (
    <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📚</span>
        Miejscownik Rules (Locative Case)
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Masculine */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <h4 className="font-medium text-blue-300">Masculine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            <span className="text-blue-400">-e</span> (hard) or{" "}
            <span className="text-blue-400">-u</span> (k, g, ch, soft)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              sklep → sklep<span className="text-blue-400">ie</span>
            </div>
            <div>
              samochód → samochod<span className="text-blue-400">zie</span>{" "}
              <span className="text-slate-600">(ó→o)</span>
            </div>
            <div>
              bank → bank<span className="text-blue-400">u</span>{" "}
              <span className="text-slate-600">(-k→-ku)</span>
            </div>
            <div>
              pokój → pokoj<span className="text-blue-400">u</span>{" "}
              <span className="text-slate-600">(ó→o, soft)</span>
            </div>
            <div>
              dom → dom<span className="text-blue-400">u</span>{" "}
              <span className="text-slate-600">(special)</span>
            </div>
          </div>
        </div>

        {/* Feminine */}
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <h4 className="font-medium text-pink-300">Feminine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            <span className="text-pink-400">-e/-ie</span> (hard) or{" "}
            <span className="text-pink-400">-i/-y</span> (k, g, soft, -c)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              szkoł<span className="text-slate-600">a</span> → szkol
              <span className="text-pink-400">e</span>
            </div>
            <div>
              książk<span className="text-slate-600">a</span> → książ
              <span className="text-pink-400">ce</span>{" "}
              <span className="text-slate-600">(-ka→-ce)</span>
            </div>
            <div>
              kawiarni<span className="text-slate-600">a</span> → kawiarn
              <span className="text-pink-400">i</span>
            </div>
            <div>
              ulic<span className="text-slate-600">a</span> → ulic
              <span className="text-pink-400">y</span>{" "}
              <span className="text-slate-600">(-ca→-cy)</span>
            </div>
            <div>
              Polsk<span className="text-slate-600">a</span> → Pols
              <span className="text-pink-400">ce</span>
            </div>
          </div>
        </div>

        {/* Neuter */}
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
            <h4 className="font-medium text-violet-300">Neuter</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            <span className="text-violet-400">-e</span> (hard -o) or{" "}
            <span className="text-violet-400">-u</span> (soft -e/-ę)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              kin<span className="text-slate-600">o</span> → kin
              <span className="text-violet-400">ie</span>
            </div>
            <div>
              krzesł<span className="text-slate-600">o</span> → krześl
              <span className="text-violet-400">e</span>
            </div>
            <div>
              mieszkani<span className="text-slate-600">e</span> → mieszkani
              <span className="text-violet-400">u</span>
            </div>
            <div>
              muz<span className="text-slate-600">eum</span> → muz
              <span className="text-violet-400">eum</span>{" "}
              <span className="text-slate-600">(no change)</span>
            </div>
            <div>
              lotnisk<span className="text-slate-600">o</span> → lotnisk
              <span className="text-violet-400">u</span>{" "}
              <span className="text-slate-600">(-ko→-ku)</span>
            </div>
          </div>
        </div>

        {/* Prepositions */}
        <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            <h4 className="font-medium text-teal-300">Prepositions</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Always used with prepositions
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              <span className="text-teal-400">w</span> - in (w domu, w szkole)
            </div>
            <div>
              <span className="text-teal-400">na</span> - on/at (na stole, na
              lotnisku)
            </div>
            <div>
              <span className="text-teal-400">o</span> - about (o mamie, o
              pracy)
            </div>
            <div>
              <span className="text-teal-400">przy</span> - near (przy oknie)
            </div>
            <div>
              <span className="text-teal-400">po</span> - around/after (po
              mieście)
            </div>
          </div>
        </div>
      </div>

      {/* Common consonant changes */}
      <div className="mt-4 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
        <h4 className="font-medium text-cyan-300 mb-3">
          🔄 Common Consonant Changes
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="text-slate-400">
            <span className="text-cyan-400">k → c</span>
            <div className="text-xs text-slate-500">ręka → ręce</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">g → dz</span>
            <div className="text-xs text-slate-500">noga → nodze</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">ch → sz</span>
            <div className="text-xs text-slate-500">mucha → musze</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">d → dzi</span>
            <div className="text-xs text-slate-500">samochód → samochodzie</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">t → ci</span>
            <div className="text-xs text-slate-500">kot → kocie</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">r → rz</span>
            <div className="text-xs text-slate-500">teatr → teatrze</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">ł → l</span>
            <div className="text-xs text-slate-500">stół → stole</div>
          </div>
          <div className="text-slate-400">
            <span className="text-cyan-400">ó → o</span>
            <div className="text-xs text-slate-500">ogród → ogrodzie</div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-slate-400 text-sm">
          <span className="text-teal-400">💡 Remember:</span> Miejscownik
          (Locative) is used for locations and talking about things. Ask{" "}
          <span className="text-white font-medium">
            &quot;O kim? O czym? Gdzie?&quot;
          </span>{" "}
          (About whom? About what? Where?)
        </p>
      </div>
    </div>
  );
}

