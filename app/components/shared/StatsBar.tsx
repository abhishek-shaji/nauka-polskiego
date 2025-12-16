type StatsBarProps = {
  score: { correct: number; total: number };
  streak: number;
  maxStreak: number;
};

export default function StatsBar({ score, streak, maxStreak }: StatsBarProps) {
  const accuracy =
    score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50">
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">
              Score
            </div>
            <div className="text-2xl font-bold text-white">
              {score.correct}
              <span className="text-slate-500">/{score.total}</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50">
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">
              Accuracy
            </div>
            <div
              className={`text-2xl font-bold text-center ${
                accuracy >= 80
                  ? "text-emerald-400"
                  : accuracy >= 50
                  ? "text-amber-400"
                  : "text-red-400"
              }`}
            >
              {accuracy}%
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50">
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">
              Streak
            </div>
            <div className="text-2xl font-bold text-amber-400 text-center">
              {streak}
              <span className="text-slate-500 text-sm ml-1 block text-center">
                (best: {maxStreak})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
