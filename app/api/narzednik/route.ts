import { NextRequest, NextResponse } from "next/server";
import { getRandomNarzednikSentence } from "../../data/narzednik";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const sentence = getRandomNarzednikSentence(category);

  return NextResponse.json(sentence);
}

