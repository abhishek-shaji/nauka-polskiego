import { NextRequest, NextResponse } from "next/server";
import { getRandomBiernikSentence } from "../../data/biernik";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const sentence = getRandomBiernikSentence(category);

  return NextResponse.json(sentence);
}
