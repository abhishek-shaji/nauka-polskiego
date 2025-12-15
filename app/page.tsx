"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import {
  type PronounKey,
  type PastTensePronounKey,
  type FutureTensePronounKey,
  type VerbConjugation,
  type Tense,
} from "./data/verbs";
import BackgroundPattern from "./components/shared/BackgroundPattern";
import StatsBar from "./components/shared/StatsBar";
import QuestionCard from "./components/homepage/QuestionCard";
import ConjugationTable from "./components/homepage/ConjugationTable";

type QuestionState = {
  verb: VerbConjugation;
  pronoun: PronounKey | PastTensePronounKey | FutureTensePronounKey;
  tense: Tense;
  userAnswer: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

async function fetchQuestion(tense: Tense): Promise<QuestionState> {
  const res = await fetch(`/api/question?tense=${tense}`);
  const data = await res.json();

  return {
    verb: data.verb,
    pronoun: data.pronoun,
    tense: data.tense,
    userAnswer: "",
    isCorrect: null,
    showAnswer: false,
  };
}

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionState | null>(
    null
  );
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTense, setSelectedTense] = useState<Tense>("present");
  const inputRef = useRef<HTMLInputElement>(null);

  const generateQuestion = useCallback(async () => {
    setShowHint(false);
    setIsAnimating(true);
    const question = await fetchQuestion(selectedTense);
    setCurrentQuestion(question);
    setTimeout(() => setIsAnimating(false), 500);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [selectedTense]);

  useEffect(() => {
    fetchQuestion(selectedTense).then((question) => {
      setCurrentQuestion(question);
      inputRef.current?.focus();
    });
  }, [selectedTense]);

  const handleTenseChange = (tense: Tense) => {
    setSelectedTense(tense);
    // Reset score when switching tenses
    setScore({ correct: 0, total: 0 });
    setStreak(0);
  };

  // Track if answer was just checked to prevent the global listener from firing on the same keypress
  const justCheckedAnswer = useRef(false);

  // Global keyboard listener for Enter key when answer has been checked
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && currentQuestion?.isCorrect !== null) {
        // Skip if we just checked the answer on this same keypress
        if (justCheckedAnswer.current) {
          justCheckedAnswer.current = false;
          return;
        }
        generateQuestion();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [currentQuestion?.isCorrect, generateQuestion]);

  const normalizeAnswer = (answer: string): string => {
    return answer.toLowerCase().trim();
  };

  const checkAnswer = () => {
    if (!currentQuestion || currentQuestion.isCorrect !== null) return;

    // Mark that we just checked an answer so the global listener doesn't fire on this same keypress
    justCheckedAnswer.current = true;

    const correctAnswer =
      currentQuestion.tense === "future"
        ? currentQuestion.verb.futureTense[
            currentQuestion.pronoun as FutureTensePronounKey
          ]
        : currentQuestion.tense === "past"
        ? currentQuestion.verb.pastTense[
            currentQuestion.pronoun as PastTensePronounKey
          ]
        : currentQuestion.verb.conjugations[
            currentQuestion.pronoun as PronounKey
          ];
    const isCorrect =
      normalizeAnswer(currentQuestion.userAnswer) ===
      normalizeAnswer(correctAnswer);

    setCurrentQuestion((prev) =>
      prev
        ? {
            ...prev,
            isCorrect,
            showAnswer: !isCorrect,
          }
        : null
    );

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

  const handleAnswerChange = (value: string) => {
    setCurrentQuestion((prev) =>
      prev
        ? {
            ...prev,
            userAnswer: value,
          }
        : null
    );
  };

  // Show loading state until client-side hydration is complete
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden py-10">
        <BackgroundPattern />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
          <div className="text-slate-400 text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden py-10">
      <BackgroundPattern />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Page Header */}
        <div className="pb-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight">
              Czasowniki Polskie
            </h2>
            <p className="text-slate-400 text-center mt-2 text-lg font-light tracking-wide">
              Polish Verb Conjugation Practice
            </p>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-4">
              <span className="px-4 py-2 bg-red-600/30 border border-red-500/50 rounded-xl text-red-300 text-sm">
                Conjugation Practice
              </span>
              <Link
                href="/sentences"
                className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all text-sm"
              >
                Sentence Practice →
              </Link>
            </div>

            {/* Tense Toggle */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => handleTenseChange("present")}
                className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  selectedTense === "present"
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                }`}
              >
                Present Tense
              </button>
              <button
                onClick={() => handleTenseChange("past")}
                className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  selectedTense === "past"
                    ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/30"
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                }`}
              >
                Past Tense
              </button>
              <button
                onClick={() => handleTenseChange("future")}
                className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  selectedTense === "future"
                    ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                }`}
              >
                Future Tense
              </button>
            </div>
          </div>
        </div>
        <StatsBar score={score} streak={streak} maxStreak={maxStreak} />

        {/* Main content */}
        <main className="flex items-center justify-center px-4 py-20">
          <div
            className={`w-full max-w-2xl transition-all duration-500 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <QuestionCard
              currentQuestion={currentQuestion}
              onAnswerChange={handleAnswerChange}
              onCheckAnswer={checkAnswer}
              onNextQuestion={generateQuestion}
              onKeyDown={handleKeyDown}
              showHint={showHint}
              onToggleHint={() => setShowHint(!showHint)}
              inputRef={inputRef}
              tense={currentQuestion.tense}
            />

            {currentQuestion.isCorrect !== null && (
              <ConjugationTable
                verb={currentQuestion.verb}
                currentPronoun={currentQuestion.pronoun}
                tense={currentQuestion.tense}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
