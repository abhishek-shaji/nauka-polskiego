import {
  pronounLabels,
  pronounKeys,
  type PronounKey,
  type VerbConjugation,
} from "../../data/verbs";

type ConjugationTableProps = {
  verb: VerbConjugation;
  currentPronoun: PronounKey;
};

export default function ConjugationTable({
  verb,
  currentPronoun,
}: ConjugationTableProps) {
  return (
    <div className="mt-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 animate-fade-in">
      <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-4">
        Full Conjugation Table
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {pronounKeys.map((key) => (
          <div
            key={key}
            className={`p-3 rounded-xl ${
              key === currentPronoun
                ? "bg-red-500/20 border border-red-500/30"
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
