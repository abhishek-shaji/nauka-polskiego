"use client";

import { RefObject } from "react";
import {
  type MiejscownikExercise,
  genderLabels,
  locativeRules,
} from "../../data/miejscownik";

type QuestionState = {
  sentence: MiejscownikExercise;
  userAnswer: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

type MiejscownikCardProps = {
  currentQuestion: QuestionState;
  onAnswerChange: (value: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  showHint: boolean;
  onToggleHint: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export default function MiejscownikCard({
  currentQuestion,
  onAnswerChange,
  onCheckAnswer,
  onNextQuestion,
  onKeyDown,
  showHint,
  onToggleHint,
  inputRef,
}: MiejscownikCardProps) {
  const sentenceParts = currentQuestion.sentence.sentence.split("___");
  const correctAnswer = currentQuestion.sentence.answer;
  const genderInfo = genderLabels[currentQuestion.sentence.gender];
  const rule = locativeRules[currentQuestion.sentence.gender];

  return (
    <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
      {/* Noun info header */}
      <div className="bg-gradient-to-r from-teal-600/20 via-cyan-500/15 to-teal-600/20 px-8 py-5 border-b border-slate-700/50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">
              Nominative (Mianownik)
            </div>
            <div className="text-3xl font-bold text-white">
              {currentQuestion.sentence.nominative}
            </div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">
              Gender
            </div>
            <div
              className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${
                currentQuestion.sentence.gender === "masculine_animate"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : currentQuestion.sentence.gender === "masculine_inanimate"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : currentQuestion.sentence.gender === "feminine"
                  ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                  : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
              }`}
            >
              {genderInfo.polish}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {genderInfo.english}
            </div>
          </div>
          <div className="text-right">
            <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">
              Category
            </div>
            <div className="text-lg font-semibold text-teal-400">
              {currentQuestion.sentence.category}
            </div>
          </div>
        </div>
      </div>

      {/* Sentence with blank */}
      <div className="p-8">
        <div className="text-slate-400 text-sm uppercase tracking-wider mb-4 text-center">
          Fill in the Locative (Miejscownik)
        </div>

        {/* Sentence display with inline input */}
        <div className="text-2xl md:text-3xl text-center leading-relaxed mb-6 flex flex-wrap items-center justify-center gap-4">
          <span className="text-white">{sentenceParts[0]}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentQuestion.userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={currentQuestion.isCorrect !== null}
            placeholder="..."
            className={`w-40 md:w-52 px-4 py-2 text-center bg-slate-900/50 border-2 border-dashed rounded-xl outline-none transition-all duration-300 placeholder:text-slate-600 ${
              currentQuestion.isCorrect === null
                ? "border-slate-500 focus:border-teal-500/50 text-white"
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
                    Świetnie!
                  </div>
                  <div className="text-emerald-300/70 text-sm">Great!</div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-4xl">✗</span>
                  <div>
                    <div className="text-red-400 font-semibold text-lg">
                      Prawie!
                    </div>
                    <div className="text-red-300/70 text-sm">Almost!</div>
                  </div>
                </div>
                <div className="text-slate-400 text-sm mb-1">
                  Correct answer:
                </div>
                <div className="text-2xl font-semibold text-emerald-400">
                  {correctAnswer}
                </div>
                <div className="text-slate-500 text-sm mt-2">
                  {sentenceParts[0]}
                  <span className="text-emerald-400 font-semibold">
                    {correctAnswer}
                  </span>
                  {sentenceParts[1]}
                </div>
              </div>
            )}

            {/* Show the rule after answering */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                Grammar Rule
              </div>
              <div className="text-slate-300 text-sm">{rule}</div>
              <div className="text-xs text-slate-500 mt-2 italic">
                ({currentQuestion.sentence.nominative} → {correctAnswer})
              </div>
            </div>
          </div>
        )}

        {/* Hint toggle */}
        {currentQuestion.isCorrect === null && (
          <div className="text-center mb-6">
            <button
              onClick={onToggleHint}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              {showHint ? "Hide hint" : "Need a hint?"}
            </button>
            {showHint && (
              <div className="mt-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700 inline-block">
                <div className="text-slate-400 text-sm mb-1">💡 Rule:</div>
                <div className="text-teal-400 text-sm mb-2">{rule}</div>
                <div className="text-slate-500 text-xs">
                  First letter:{" "}
                  <span className="text-teal-300">
                    {correctAnswer.charAt(0)}
                  </span>
                  ...
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
              onClick={onCheckAnswer}
              disabled={!currentQuestion.userAnswer.trim()}
              className="flex-1 py-4 px-8 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 disabled:shadow-none"
            >
              Sprawdź
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="flex-1 py-4 px-8 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg"
            >
              Następne zdanie →
            </button>
          )}
        </div>

        <p className="text-slate-500 text-center mt-4 text-sm">
          Press{" "}
          <kbd className="px-2 py-1 bg-slate-700 rounded text-slate-300">
            Enter
          </kbd>{" "}
          to {currentQuestion.isCorrect === null ? "check" : "continue"}
        </p>
      </div>
    </div>
  );
}

