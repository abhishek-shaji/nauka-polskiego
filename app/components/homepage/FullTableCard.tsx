"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import {
  pronounLabels,
  pronounKeys,
  pastTensePronounLabels,
  pastTensePronounKeys,
  futureTensePronounLabels,
  futureTensePronounKeys,
  type PronounKey,
  type PastTensePronounKey,
  type FutureTensePronounKey,
  type VerbConjugation,
  type Tense,
} from "../../data/verbs";

type FullTableCardProps = {
  verb: VerbConjugation;
  tense: Tense;
  onComplete: (allCorrect: boolean, correctCount: number, total: number) => void;
  onSkip: () => void;
};

type InputState = {
  value: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

export default function FullTableCard({
  verb,
  tense,
  onComplete,
  onSkip,
}: FullTableCardProps) {
  const keys =
    tense === "future"
      ? futureTensePronounKeys
      : tense === "past"
      ? pastTensePronounKeys
      : pronounKeys;

  const labels =
    tense === "future"
      ? futureTensePronounLabels
      : tense === "past"
      ? pastTensePronounLabels
      : pronounLabels;

  const getCorrectAnswer = (key: string): string => {
    if (tense === "future") {
      return verb.futureTense[key as FutureTensePronounKey];
    } else if (tense === "past") {
      return verb.pastTense[key as PastTensePronounKey];
    }
    return verb.conjugations[key as PronounKey];
  };

  const initialInputs = keys.reduce((acc, key) => {
    acc[key] = { value: "", isCorrect: null, showAnswer: false };
    return acc;
  }, {} as Record<string, InputState>);

  const [inputs, setInputs] = useState<Record<string, InputState>>(initialInputs);
  const [isChecked, setIsChecked] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Focus first input on mount
  useEffect(() => {
    const firstKey = keys[0];
    inputRefs.current[firstKey]?.focus();
  }, [keys]);

  const normalizeAnswer = (answer: string): string => {
    return answer.toLowerCase().trim();
  };

  const handleInputChange = (key: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, key: string) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (isChecked) {
        onSkip();
      } else {
        // Move to next input or check if this is the last one
        const currentIndex = keys.indexOf(key as never);
        if (currentIndex < keys.length - 1) {
          const nextKey = keys[currentIndex + 1];
          inputRefs.current[nextKey]?.focus();
        } else {
          // Last input, check all answers
          checkAllAnswers();
        }
      }
    } else if (e.key === "Tab" && !e.shiftKey) {
      // Allow natural tab navigation but prevent focus leaving the card
      const currentIndex = keys.indexOf(key as never);
      if (currentIndex === keys.length - 1) {
        e.preventDefault();
        // Optionally loop back or focus check button
      }
    }
  };

  const checkAllAnswers = () => {
    if (isChecked) return;

    let correctCount = 0;
    const newInputs = { ...inputs };

    keys.forEach((key) => {
      const correctAnswer = getCorrectAnswer(key);
      const userAnswer = inputs[key].value;
      const isCorrect =
        normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

      newInputs[key] = {
        ...newInputs[key],
        isCorrect,
        showAnswer: !isCorrect,
      };

      if (isCorrect) correctCount++;
    });

    setInputs(newInputs);
    setIsChecked(true);
    onComplete(correctCount === keys.length, correctCount, keys.length);
  };

  const allFilled = keys.every((key) => inputs[key].value.trim() !== "");

  const tenseColors = {
    present: {
      gradient: "from-emerald-600/20 via-emerald-500/10 to-emerald-600/20",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      input: "focus:border-emerald-500/50",
      correct: "border-emerald-500 bg-emerald-500/10 text-emerald-400",
      button: "from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-emerald-500/20 hover:shadow-emerald-500/30",
    },
    past: {
      gradient: "from-amber-600/20 via-amber-500/10 to-amber-600/20",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      input: "focus:border-amber-500/50",
      correct: "border-amber-500 bg-amber-500/10 text-amber-400",
      button: "from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-amber-500/20 hover:shadow-amber-500/30",
    },
    future: {
      gradient: "from-sky-600/20 via-sky-500/10 to-sky-600/20",
      badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      input: "focus:border-sky-500/50",
      correct: "border-sky-500 bg-sky-500/10 text-sky-400",
      button: "from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-sky-500/20 hover:shadow-sky-500/30",
    },
  };

  const colors = tenseColors[tense];

  return (
    <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
      {/* Verb header */}
      <div
        className={`px-8 py-6 border-b border-slate-700/50 bg-gradient-to-r ${colors.gradient}`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">
            Fill in all conjugations
          </div>
          <div className="flex gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} border`}
            >
              {tense === "future"
                ? "Future Tense"
                : tense === "past"
                ? "Past Tense"
                : "Present Tense"}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Full Table
            </span>
          </div>
        </div>
        <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          {verb.infinitive}
        </div>
        <div className="text-slate-400 mt-2 text-lg italic">
          &quot;{verb.meaning}&quot;
        </div>
        <div className="mt-3 inline-block px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 tracking-wide">
          {verb.group}
        </div>
      </div>

      {/* Conjugation inputs */}
      <div className="p-6 md:p-8">
        <div
          className={`grid gap-4 ${
            tense === "present"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {keys.map((key) => {
            const input = inputs[key];
            const correctAnswer = getCorrectAnswer(key);

            return (
              <div
                key={key}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  input.isCorrect === true
                    ? "bg-emerald-500/10 border border-emerald-500/30"
                    : input.isCorrect === false
                    ? "bg-red-500/10 border border-red-500/30"
                    : "bg-slate-700/30 border border-transparent"
                }`}
              >
                <label className="block text-slate-400 text-sm mb-2 font-medium">
                  {labels[key as keyof typeof labels]}
                </label>
                <div className="relative">
                  <input
                    ref={(el) => {
                      inputRefs.current[key] = el;
                    }}
                    type="text"
                    value={input.value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, key)}
                    disabled={isChecked}
                    placeholder="..."
                    className={`w-full px-3 py-2.5 text-lg bg-slate-900/50 border-2 rounded-xl outline-none transition-all duration-300 placeholder:text-slate-600 ${
                      input.isCorrect === null
                        ? `border-slate-600 ${colors.input} text-white`
                        : input.isCorrect
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500 bg-red-500/10 text-red-400"
                    }`}
                  />
                  {input.isCorrect !== null && (
                    <div
                      className={`absolute -right-2 -top-2 w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                        input.isCorrect
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {input.isCorrect ? "✓" : "✗"}
                    </div>
                  )}
                </div>
                {/* Show correct answer when wrong */}
                {input.showAnswer && (
                  <div className="mt-2 text-emerald-400 text-sm font-medium">
                    → {correctAnswer}
                  </div>
                )}
                {/* Show hint */}
                {showHints && !isChecked && (
                  <div className="mt-2 text-amber-400 text-sm">
                    {correctAnswer.charAt(0)}...
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Score summary when checked */}
        {isChecked && (
          <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-center">
            <div className="text-slate-400 text-sm mb-1">Your score</div>
            <div className="text-3xl font-bold text-white">
              {Object.values(inputs).filter((i) => i.isCorrect).length} /{" "}
              {keys.length}
            </div>
            {Object.values(inputs).every((i) => i.isCorrect) && (
              <div className="text-emerald-400 mt-2 font-medium">
                🎉 Perfect! All correct!
              </div>
            )}
          </div>
        )}

        {/* Hint toggle */}
        {!isChecked && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              {showHints ? "Hide hints" : "Need hints?"}
            </button>
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-6 flex gap-4">
          {!isChecked ? (
            <>
              <button
                onClick={checkAllAnswers}
                disabled={!allFilled}
                className={`flex-1 py-4 px-8 bg-gradient-to-r ${colors.button} disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg disabled:shadow-none`}
              >
                Check All ({keys.length})
              </button>
              <button
                onClick={onSkip}
                className="py-4 px-6 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white font-medium rounded-2xl transition-all duration-300"
              >
                Skip
              </button>
            </>
          ) : (
            <button
              onClick={onSkip}
              className="flex-1 py-4 px-8 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg"
            >
              Next Verb →
            </button>
          )}
        </div>

        <p className="text-slate-500 text-center mt-4 text-sm">
          Press{" "}
          <kbd className="px-2 py-1 bg-slate-700 rounded text-slate-300">
            Enter
          </kbd>{" "}
          to {isChecked ? "continue" : "move to next input"}
          {!isChecked && (
            <>
              {" "}or{" "}
              <kbd className="px-2 py-1 bg-slate-700 rounded text-slate-300">
                Tab
              </kbd>{" "}
              to navigate
            </>
          )}
        </p>
      </div>
    </div>
  );
}

