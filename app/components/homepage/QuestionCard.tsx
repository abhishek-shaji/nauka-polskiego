"use client";

import { RefObject } from "react";
import {
  pronounLabels,
  pastTensePronounLabels,
  futureTensePronounLabels,
  type PronounKey,
  type PastTensePronounKey,
  type FutureTensePronounKey,
  type VerbConjugation,
  type Tense,
} from "../../data/verbs";

type QuestionState = {
  verb: VerbConjugation;
  pronoun: PronounKey | PastTensePronounKey | FutureTensePronounKey;
  tense: Tense;
  userAnswer: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

type QuestionCardProps = {
  currentQuestion: QuestionState;
  onAnswerChange: (value: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  showHint: boolean;
  onToggleHint: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
  tense: Tense;
};

export default function QuestionCard({
  currentQuestion,
  onAnswerChange,
  onCheckAnswer,
  onNextQuestion,
  onKeyDown,
  showHint,
  onToggleHint,
  inputRef,
  tense,
}: QuestionCardProps) {
  const correctAnswer =
    tense === "future"
      ? currentQuestion.verb.futureTense[
          currentQuestion.pronoun as FutureTensePronounKey
        ]
      : tense === "past"
      ? currentQuestion.verb.pastTense[
          currentQuestion.pronoun as PastTensePronounKey
        ]
      : currentQuestion.verb.conjugations[
          currentQuestion.pronoun as PronounKey
        ];

  const pronounLabel =
    tense === "future"
      ? futureTensePronounLabels[
          currentQuestion.pronoun as FutureTensePronounKey
        ]
      : tense === "past"
      ? pastTensePronounLabels[currentQuestion.pronoun as PastTensePronounKey]
      : pronounLabels[currentQuestion.pronoun as PronounKey];

  return (
    <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
      {/* Verb header */}
      <div
        className={`px-8 py-6 border-b border-slate-700/50 ${
          tense === "future"
            ? "bg-gradient-to-r from-sky-600/20 via-sky-500/10 to-sky-600/20"
            : tense === "past"
            ? "bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-amber-600/20"
            : "bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">
            Conjugate the verb
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              tense === "future"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                : tense === "past"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
            }`}
          >
            {tense === "future"
              ? "Future Tense"
              : tense === "past"
              ? "Past Tense"
              : "Present Tense"}
          </span>
        </div>
        <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
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
          <div className="text-slate-400 text-sm uppercase tracking-wider mb-2 font-medium">
            For the pronoun
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white">
            {pronounLabel}
          </div>
        </div>

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={currentQuestion.userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            onKeyDown={onKeyDown}
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
            <div className="text-slate-400 text-sm mb-1">Correct answer:</div>
            <div className="text-2xl font-semibold text-emerald-400">
              {correctAnswer}
            </div>
          </div>
        )}

        {/* Hint toggle */}
        {currentQuestion.isCorrect === null && (
          <div className="mt-4 text-center">
            <button
              onClick={onToggleHint}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              {showHint ? "Hide hint" : "Need a hint?"}
            </button>
            {showHint && (
              <div className="mt-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-sm mb-2">First letter:</div>
                <div className="text-xl font-semibold text-amber-400">
                  {correctAnswer.charAt(0)}...
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-8 flex gap-4">
          {currentQuestion.isCorrect === null ? (
            <button
              onClick={onCheckAnswer}
              disabled={!currentQuestion.userAnswer.trim()}
              className="flex-1 py-4 px-8 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 disabled:shadow-none"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
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
          to {currentQuestion.isCorrect === null ? "submit" : "continue"}
        </p>
      </div>
    </div>
  );
}
