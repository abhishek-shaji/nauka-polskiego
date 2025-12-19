import { NextRequest, NextResponse } from "next/server";
import { getRandomDopelniaczSentence } from "../../data/dopelniacz";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const sentence = getRandomDopelniaczSentence(category);

  return NextResponse.json(sentence);
}

