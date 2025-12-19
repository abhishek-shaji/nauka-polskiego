import { NextRequest, NextResponse } from "next/server";
import { getRandomMiejscownikSentence } from "../../data/miejscownik";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const sentence = getRandomMiejscownikSentence(category);

  return NextResponse.json(sentence);
}

