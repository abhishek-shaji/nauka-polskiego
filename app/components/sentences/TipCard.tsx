export default function TipCard() {
  return (
    <div className="mt-6 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5">
      <div className="flex items-start gap-4">
        <div className="text-2xl">💡</div>
        <div>
          <h3 className="text-white font-semibold mb-1">Tip</h3>
          <p className="text-slate-400 text-sm">
            Focus on the pronoun and verb pattern. Polish verbs follow
            predictable patterns once you learn the endings for each conjugation
            group!
          </p>
        </div>
      </div>
    </div>
  );
}
