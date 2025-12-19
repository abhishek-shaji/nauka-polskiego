import { NextRequest, NextResponse } from "next/server";
import { getRandomCelownikSentence } from "../../data/celownik";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const sentence = getRandomCelownikSentence(category);

  return NextResponse.json(sentence);
}

