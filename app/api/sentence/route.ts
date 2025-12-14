import { NextResponse } from "next/server";
import { sentences } from "../../data/sentences";

export async function GET() {
  const randomSentence =
    sentences[Math.floor(Math.random() * sentences.length)];

  return NextResponse.json(randomSentence);
}
