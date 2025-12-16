import { NextResponse, NextRequest } from "next/server";
import { sentences, type Tense } from "../../data/sentences";
import { verbs } from "../../data/verbs";

// Create a map of verb infinitive to group for quick lookup
const verbGroupMap = new Map(verbs.map((v) => [v.infinitive, v.group]));

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tenseFilter = searchParams.get("tense") as Tense | null;
  const groupFilter = searchParams.get("group");

  let filteredSentences = sentences;

  if (tenseFilter && ["present", "past", "future"].includes(tenseFilter)) {
    filteredSentences = filteredSentences.filter((s) => s.tense === tenseFilter);
  }

  if (groupFilter) {
    filteredSentences = filteredSentences.filter(
      (s) => verbGroupMap.get(s.verb) === groupFilter
    );
  }

  // Fall back to all sentences if filters result in empty array
  const sentencePool = filteredSentences.length > 0 ? filteredSentences : sentences;

  const randomSentence =
    sentencePool[Math.floor(Math.random() * sentencePool.length)];

  return NextResponse.json(randomSentence);
}
