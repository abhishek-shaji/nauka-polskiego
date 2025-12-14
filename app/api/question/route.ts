import { NextResponse } from "next/server";
import { verbs, pronounKeys } from "../../data/verbs";

export async function GET() {
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomPronoun =
    pronounKeys[Math.floor(Math.random() * pronounKeys.length)];

  return NextResponse.json({
    verb: randomVerb,
    pronoun: randomPronoun,
  });
}
