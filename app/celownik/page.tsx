"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { type CelownikExercise, celownikCategories } from "../data/celownik";
import BackgroundPattern from "../components/shared/BackgroundPattern";
import StatsBar from "../components/shared/StatsBar";
import CasePageHeader from "../components/shared/CasePageHeader";
import CelownikCard from "../components/celownik/CelownikCard";
import GrammarTipCard from "../components/celownik/GrammarTipCard";

type QuestionState = {
  sentence: CelownikExercise;
  userAnswer: string;
  isCorrect: boolean | null;
  showAnswer: boolean;
};

async function fetchCelownikQuestion(
  category: string | null
): Promise<QuestionState> {
  const params = new URLSearchParams();
  if (category) params.append("category", category);

  const url = params.toString() ? `/api/celownik?${params}` : "/api/celownik";
  const res = await fetch(url);
  const sentence = await res.json();

  return {
    sentence,
    userAnswer: "",
    isCorrect: null,
    showAnswer: false,
  };
}

export default function CelownikPractice() {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionState | null>(
    null
  );
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateQuestion = useCallback(async () => {
    setShowHint(false);
    setIsAnimating(true);
    const question = await fetchCelownikQuestion(selectedCategory);
    setCurrentQuestion(question);
    setTimeout(() => setIsAnimating(false), 500);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [selectedCategory]);

  useEffect(() => {
    fetchCelownikQuestion(selectedCategory).then((question) => {
      setCurrentQuestion(question);
      inputRef.current?.focus();
    });
  }, [selectedCategory]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setScore({ correct: 0, total: 0 });
    setStreak(0);
  };

  // Track if answer was just checked
  const justCheckedAnswer = useRef(false);

  // Global keyboard listener for Enter key
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && currentQuestion?.isCorrect !== null) {
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

    justCheckedAnswer.current = true;

    const correctAnswer = currentQuestion.sentence.answer;
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

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
        <CasePageHeader
          title="Celownik"
          subtitle="Dative Case Practice — Komu? Czemu?"
          accentColor="amber"
          navItems={[
            { href: "/", label: "← Conjugation" },
            { href: "/biernik", label: "Biernik" },
            { href: "/dopelniacz", label: "Dopełniacz" },
            { href: "/celownik", label: "Celownik", isActive: true },
            { href: "/narzednik", label: "Narzędnik" },
            { href: "/sentences", label: "Sentences →" },
          ]}
        />

        <div className="px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-col items-center gap-2 mt-6">
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                Filter by Category
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-amber-600/30 border border-amber-500/50 text-amber-300"
                      : "bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white"
                  }`}
                >
                  All Categories
                </button>
                {celownikCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-amber-600/30 border border-amber-500/50 text-amber-300"
                        : "bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <StatsBar score={score} streak={streak} maxStreak={maxStreak} />

        {/* Main content */}
        <main className="flex items-center justify-center px-4 py-20">
          <div
            className={`w-full max-w-3xl transition-all duration-500 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <CelownikCard
              currentQuestion={currentQuestion}
              onAnswerChange={handleAnswerChange}
              onCheckAnswer={checkAnswer}
              onNextQuestion={generateQuestion}
              onKeyDown={handleKeyDown}
              showHint={showHint}
              onToggleHint={() => setShowHint(!showHint)}
              inputRef={inputRef}
            />

            <GrammarTipCard />
          </div>
        </main>
      </div>
    </div>
  );
}

