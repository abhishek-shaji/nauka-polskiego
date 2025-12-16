import { NextResponse, NextRequest } from "next/server";
import { sentences, type Tense } from "../../data/sentences";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tenseFilter = searchParams.get("tense") as Tense | null;

  let filteredSentences = sentences;

  if (tenseFilter && ["present", "past", "future"].includes(tenseFilter)) {
    filteredSentences = sentences.filter((s) => s.tense === tenseFilter);
  }

  const randomSentence =
    filteredSentences[Math.floor(Math.random() * filteredSentences.length)];

  return NextResponse.json(randomSentence);
}
