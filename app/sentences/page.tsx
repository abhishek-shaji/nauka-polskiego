"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { sentences, type SentenceExercise } from "../data/sentences";

type QuestionState = {
  sentence: SentenceExercise;
  userAnswer: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

function createInitialQuestion(): QuestionState {
  const randomSentence =
    sentences[Math.floor(Math.random() * sentences.length)];
  return {
    sentence: randomSentence,
    userAnswer: "",
    isCorrect: null,
    showAnswer: false,
  };
}

export default function SentencePractice() {
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
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const normalizeAnswer = (answer: string): string => {
    return answer.toLowerCase().trim();
  };

  const checkAnswer = () => {
    if (currentQuestion.isCorrect !== null) return;

    const correctAnswer = currentQuestion.sentence.answer;
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
      if (currentQuestion.isCorrect !== null) {
        generateQuestion();
      } else {
        checkAnswer();
      }
    }
  };

  const accuracy =
    score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  // Split sentence into parts around the blank
  const sentenceParts = currentQuestion.sentence.sentence.split("___");

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

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Page Header */}
        <div className="pb-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight">
              Wypełnij lukę
            </h2>
            <p className="text-slate-400 text-center mt-2 text-lg font-light tracking-wide">
              Fill in the Blank — Sentence Practice
            </p>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="/"
                className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all text-sm"
              >
                ← Conjugation Practice
              </Link>
              <span className="px-4 py-2 bg-red-600/30 border border-red-500/50 rounded-xl text-red-300 text-sm">
                Sentence Practice
              </span>
            </div>
          </div>
        </div>

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
            className={`w-full max-w-3xl transition-all duration-500 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Question card */}
            <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Verb info header */}
              <div className="bg-gradient-to-r from-emerald-600/20 via-emerald-500/10 to-emerald-600/20 px-8 py-5 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">
                      Verb
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {currentQuestion.sentence.verb}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">
                      Pronoun
                    </div>
                    <div className="text-xl font-semibold text-emerald-400">
                      {currentQuestion.sentence.pronoun}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sentence with blank */}
              <div className="p-8">
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-4 text-center">
                  Complete the sentence
                </div>

                {/* Sentence display with inline input */}
                <div className="text-2xl md:text-3xl text-center leading-relaxed mb-6 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-white">{sentenceParts[0]}</span>
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
                    placeholder="..."
                    className={`w-40 md:w-52 px-4 py-2 text-center bg-slate-900/50 border-2 border-dashed rounded-xl outline-none transition-all duration-300 placeholder:text-slate-600 ${
                      currentQuestion.isCorrect === null
                        ? "border-slate-500 focus:border-emerald-500/50 text-white"
                        : currentQuestion.isCorrect
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 border-solid"
                        : "border-red-500 bg-red-500/10 text-red-400 border-solid"
                    }`}
                    style={{ fontSize: "inherit" }}
                  />
                  <span className="text-white">{sentenceParts[1]}</span>
                </div>

                {/* Translation */}
                <div className="text-center mb-6">
                  <div className="text-slate-500 text-sm italic">
                    &quot;{currentQuestion.sentence.translation}&quot;
                  </div>
                </div>

                {/* Result feedback */}
                {currentQuestion.isCorrect !== null && (
                  <div
                    className={`text-center p-4 rounded-2xl mb-6 ${
                      currentQuestion.isCorrect
                        ? "bg-emerald-500/10 border border-emerald-500/30"
                        : "bg-red-500/10 border border-red-500/30"
                    }`}
                  >
                    {currentQuestion.isCorrect ? (
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-4xl">✓</span>
                        <div>
                          <div className="text-emerald-400 font-semibold text-lg">
                            Doskonale!
                          </div>
                          <div className="text-emerald-300/70 text-sm">
                            Excellent!
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <span className="text-4xl">✗</span>
                          <div>
                            <div className="text-red-400 font-semibold text-lg">
                              Nie całkiem...
                            </div>
                            <div className="text-red-300/70 text-sm">
                              Not quite...
                            </div>
                          </div>
                        </div>
                        <div className="text-slate-400 text-sm mb-1">
                          Correct answer:
                        </div>
                        <div className="text-2xl font-semibold text-emerald-400">
                          {currentQuestion.sentence.answer}
                        </div>
                        <div className="text-slate-500 text-sm mt-2">
                          {sentenceParts[0]}
                          <span className="text-emerald-400 font-semibold">
                            {currentQuestion.sentence.answer}
                          </span>
                          {sentenceParts[1]}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Hint toggle */}
                {currentQuestion.isCorrect === null && (
                  <div className="text-center mb-6">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {showHint ? "Hide hint" : "Need a hint?"}
                    </button>
                    {showHint && (
                      <div className="mt-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700 inline-block">
                        <div className="text-slate-400 text-sm mb-1">
                          First letter:
                        </div>
                        <div className="text-xl font-semibold text-amber-400">
                          {currentQuestion.sentence.answer.charAt(0)}...
                        </div>
                        {currentQuestion.sentence.hint && (
                          <div className="text-slate-500 text-xs mt-2">
                            {currentQuestion.sentence.hint}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-4">
                  {currentQuestion.isCorrect === null ? (
                    <button
                      onClick={checkAnswer}
                      disabled={!currentQuestion.userAnswer.trim()}
                      className="flex-1 py-4 px-8 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 disabled:shadow-none"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button
                      onClick={generateQuestion}
                      className="flex-1 py-4 px-8 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg"
                    >
                      Next Sentence →
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

            {/* Info card */}
            <div className="mt-6 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5">
              <div className="flex items-start gap-4">
                <div className="text-2xl">💡</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Tip</h3>
                  <p className="text-slate-400 text-sm">
                    Focus on the pronoun and verb pattern. Polish verbs follow
                    predictable patterns once you learn the endings for each
                    conjugation group!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
