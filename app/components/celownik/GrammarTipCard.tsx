"use client";

export default function GrammarTipCard() {
  return (
    <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📚</span>
        Celownik Rules (Dative Case)
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Masculine */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <h4 className="font-medium text-blue-300">Masculine</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Most take <span className="text-blue-400">-owi</span>, some take{" "}
            <span className="text-blue-400">-u</span>
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              student → student<span className="text-blue-400">owi</span>
            </div>
            <div>
              nauczyciel → nauczyciel<span className="text-blue-400">owi</span>
            </div>
            <div>
              brat → brat<span className="text-blue-400">u</span>{" "}
              <span className="text-slate-600">(special)</span>
            </div>
            <div>
              ojciec → ojc<span className="text-blue-400">u</span>{" "}
              <span className="text-slate-600">(-iec drops)</span>
            </div>
            <div>
              pan → pan<span className="text-blue-400">u</span>{" "}
              <span className="text-slate-600">(special)</span>
            </div>
          </div>
        </div>

        {/* Masculine -a ending */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <h4 className="font-medium text-cyan-300">Masculine (-a ending)</h4>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Takes <span className="text-cyan-400">-e/-ie</span> like feminine
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              koleg<span className="text-slate-600">a</span> → koleg
              <span className="text-cyan-400">e</span>
            </div>
            <div>
              tat<span className="text-slate-600">a</span> → tac
              <span className="text-cyan-400">ie</span>
            </div>
            <div>
              turyst<span className="text-slate-600">a</span> → turyśc
              <span className="text-cyan-400">ie</span>
            </div>
            <div>
              artyst<span className="text-slate-600">a</span> → artyśc
              <span className="text-cyan-400">ie</span>
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
            <span className="text-pink-400">-i/-y</span> (soft/k/g)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              mam<span className="text-slate-600">a</span> → mam
              <span className="text-pink-400">ie</span>
            </div>
            <div>
              siostr<span className="text-slate-600">a</span> → siostr
              <span className="text-pink-400">ze</span>
            </div>
            <div>
              córk<span className="text-slate-600">a</span> → cór
              <span className="text-pink-400">ce</span>
            </div>
            <div>
              babci<span className="text-slate-600">a</span> → babc
              <span className="text-pink-400">i</span>
            </div>
            <div>
              pan<span className="text-slate-600">i</span> → pan
              <span className="text-pink-400">i</span>{" "}
              <span className="text-slate-600">(same)</span>
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
            Takes <span className="text-violet-400">-u</span> (all neuter nouns)
          </p>
          <div className="text-slate-500 text-xs space-y-1">
            <div>
              dzieck<span className="text-slate-600">o</span> → dzieck
              <span className="text-violet-400">u</span>
            </div>
            <div>
              nieb<span className="text-slate-600">o</span> → nieb
              <span className="text-violet-400">u</span>
            </div>
            <div>
              zdrow<span className="text-slate-600">ie</span> → zdrowi
              <span className="text-violet-400">u</span>
            </div>
            <div>
              niemowl<span className="text-slate-600">ę</span> → niemowlęci
              <span className="text-violet-400">u</span>
            </div>
          </div>
        </div>
      </div>

      {/* Common verbs with dative */}
      <div className="mt-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
        <h4 className="font-medium text-amber-300 mb-3">
          🎯 Common Verbs Taking Dative
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div className="text-slate-400">
            <span className="text-amber-400">dawać</span> - to give
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">pomagać</span> - to help
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">dziękować</span> - to thank
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">wierzyć</span> - to believe
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">ufać</span> - to trust
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">odpowiadać</span> - to answer
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">mówić</span> - to tell
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">podobać się</span> - to like
          </div>
          <div className="text-slate-400">
            <span className="text-amber-400">przeszkadzać</span> - to disturb
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
        <p className="text-slate-400 text-sm">
          <span className="text-amber-400">💡 Remember:</span> Celownik (Dative)
          is used for indirect objects — the person receiving something. Ask{" "}
          <span className="text-white font-medium">&quot;Komu? Czemu?&quot;</span> (To
          whom? To what?)
        </p>
      </div>
    </div>
  );
}

