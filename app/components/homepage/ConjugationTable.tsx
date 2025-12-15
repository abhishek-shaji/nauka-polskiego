import {
  pronounLabels,
  pronounKeys,
  pastTensePronounLabels,
  pastTensePronounKeys,
  type PronounKey,
  type PastTensePronounKey,
  type VerbConjugation,
  type Tense,
} from "../../data/verbs";

type ConjugationTableProps = {
  verb: VerbConjugation;
  currentPronoun: PronounKey | PastTensePronounKey;
  tense: Tense;
};

export default function ConjugationTable({
  verb,
  currentPronoun,
  tense,
}: ConjugationTableProps) {
  if (tense === "past") {
    return (
      <div className="mt-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 animate-fade-in">
        <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-4">
          Full Past Tense Conjugation Table
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {pastTensePronounKeys.map((key) => (
            <div
              key={key}
              className={`p-3 rounded-xl ${
                key === currentPronoun
                  ? "bg-amber-500/20 border border-amber-500/30"
                  : "bg-slate-700/30"
              }`}
            >
              <div className="text-slate-400 text-xs mb-1">
                {pastTensePronounLabels[key]}
              </div>
              <div className="text-white font-medium">
                {verb.pastTense[key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 animate-fade-in">
      <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-4">
        Full Present Tense Conjugation Table
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {pronounKeys.map((key) => (
          <div
            key={key}
            className={`p-3 rounded-xl ${
              key === currentPronoun
                ? "bg-emerald-500/20 border border-emerald-500/30"
                : "bg-slate-700/30"
            }`}
          >
            <div className="text-slate-400 text-xs mb-1">
              {pronounLabels[key]}
            </div>
            <div className="text-white font-medium">
              {verb.conjugations[key]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
