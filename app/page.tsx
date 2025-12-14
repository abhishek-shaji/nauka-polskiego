"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  verbs,
  pronounLabels,
  pronounKeys,
  type PronounKey,
  type VerbConjugation,
} from "./data/verbs";

type QuestionState = {
  verb: VerbConjugation;
  pronoun: PronounKey;
  userAnswer: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

function createInitialQuestion(): QuestionState {
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomPronoun =
    pronounKeys[Math.floor(Math.random() * pronounKeys.length)];
  return {
    verb: randomVerb,
    pronoun: randomPronoun,
    userAnswer: "",
    isCorrect: null,
    showAnswer: false,
  };
}

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionState>(
    createInitialQuestion
  );
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateQuestion = useCallback(() => {
    setCurrentQuestion(createInitialQuestion());
    setShowHint(false);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);

    // Focus input after state update
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const normalizeAnswer = (answer: string): string => {
    return answer.toLowerCase().trim();
  };

  const checkAnswer = () => {
    if (currentQuestion.isCorrect !== null) return;

    const correctAnswer =
      currentQuestion.verb.conjugations[currentQuestion.pronoun];
    const isCorrect =
      normalizeAnswer(currentQuestion.userAnswer) ===
      normalizeAnswer(correctAnswer);

    setCurrentQuestion((prev) => ({
      ...prev,
      isCorrect,
      showAnswer: !isCorrect,
    }));

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
    } else {
      setStreak(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (currentQuestion?.isCorrect !== null) {
        generateQuestion();
      } else {
        checkAnswer();
      }
    }
  };

  const accuracy =
    score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements - Polish flag colors accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-white to-white opacity-80" />
      <div className="absolute top-1 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-80" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight">
              Czasowniki Polskie
            </h1>
            <p className="text-slate-400 text-center mt-2 text-lg font-light tracking-wide">
              Polish Verb Conjugation Practice
            </p>
          </div>
        </header>

        {/* Stats bar */}
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
                  className={`text-2xl font-bold ${
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
                <div className="text-2xl font-bold text-amber-400">
                  {streak}
                  <span className="text-slate-500 text-sm ml-1">
                    (best: {maxStreak})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div
            className={`w-full max-w-2xl transition-all duration-500 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Question card */}
            <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Verb header */}
              <div className="bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 px-8 py-6 border-b border-slate-700/50">
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                  Conjugate the verb
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                  {currentQuestion.verb.infinitive}
                </div>
                <div className="text-slate-400 mt-2 text-lg italic">
                  &quot;{currentQuestion.verb.meaning}&quot;
                </div>
                <div className="mt-3 inline-block px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 tracking-wide">
                  {currentQuestion.verb.group}
                </div>
              </div>

              {/* Pronoun and input */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                    For the pronoun
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-white">
                    {pronounLabels[currentQuestion.pronoun]}
                  </div>
                </div>

                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentQuestion.userAnswer}
                    onChange={(e) =>
                      setCurrentQuestion((prev) => ({
                        ...prev,
                        userAnswer: e.target.value,
                      }))
                    }
                    onKeyDown={handleKeyDown}
                    disabled={currentQuestion.isCorrect !== null}
                    placeholder="Type your answer..."
                    className={`w-full px-6 py-4 text-2xl text-center bg-slate-900/50 border-2 rounded-2xl outline-none transition-all duration-300 placeholder:text-slate-600 ${
                      currentQuestion.isCorrect === null
                        ? "border-slate-600 focus:border-red-500/50 text-white"
                        : currentQuestion.isCorrect
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500 bg-red-500/10 text-red-400"
                    }`}
                  />

                  {/* Result indicator */}
                  {currentQuestion.isCorrect !== null && (
                    <div
                      className={`absolute -right-3 -top-3 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                        currentQuestion.isCorrect
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {currentQuestion.isCorrect ? "✓" : "✗"}
                    </div>
                  )}
                </div>

                {/* Show correct answer when wrong */}
                {currentQuestion.showAnswer && (
                  <div className="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="text-slate-400 text-sm mb-1">
                      Correct answer:
                    </div>
                    <div className="text-2xl font-semibold text-emerald-400">
                      {
                        currentQuestion.verb.conjugations[
                          currentQuestion.pronoun
                        ]
                      }
                    </div>
                  </div>
                )}

                {/* Hint toggle */}
                {currentQuestion.isCorrect === null && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {showHint ? "Hide hint" : "Need a hint?"}
                    </button>
                    {showHint && (
                      <div className="mt-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                        <div className="text-slate-400 text-sm mb-2">
                          First letter:
                        </div>
                        <div className="text-xl font-semibold text-amber-400">
                          {currentQuestion.verb.conjugations[
                            currentQuestion.pronoun
                          ].charAt(0)}
                          ...
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Action buttons */}
                <div className="mt-8 flex gap-4">
                  {currentQuestion.isCorrect === null ? (
                    <button
                      onClick={checkAnswer}
                      disabled={!currentQuestion.userAnswer.trim()}
                      className="flex-1 py-4 px-8 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 disabled:shadow-none"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button
                      onClick={generateQuestion}
                      className="flex-1 py-4 px-8 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg"
                    >
                      Next Question →
                    </button>
                  )}
                </div>

                <p className="text-slate-500 text-center mt-4 text-sm">
                  Press{" "}
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-slate-300">
                    Enter
                  </kbd>{" "}
                  to{" "}
                  {currentQuestion.isCorrect === null ? "submit" : "continue"}
                </p>
              </div>
            </div>

            {/* Full conjugation table (shown after answer) */}
            {currentQuestion.isCorrect !== null && (
              <div className="mt-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 animate-fade-in">
                <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-4">
                  Full Conjugation Table
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {pronounKeys.map((key) => (
                    <div
                      key={key}
                      className={`p-3 rounded-xl ${
                        key === currentQuestion.pronoun
                          ? "bg-red-500/20 border border-red-500/30"
                          : "bg-slate-700/30"
                      }`}
                    >
                      <div className="text-slate-400 text-xs mb-1">
                        {pronounLabels[key]}
                      </div>
                      <div className="text-white font-medium">
                        {currentQuestion.verb.conjugations[key]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-500 text-sm">
              {verbs.length} verbs in database • Practice makes perfect!
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
