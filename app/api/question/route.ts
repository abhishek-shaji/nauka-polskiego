import { NextResponse } from "next/server";
import { verbs, pronounKeys, pastTensePronounKeys, type Tense } from "../../data/verbs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tense = (searchParams.get("tense") as Tense) || "present";

  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

  if (tense === "past") {
    const randomPronoun =
      pastTensePronounKeys[Math.floor(Math.random() * pastTensePronounKeys.length)];
    return NextResponse.json({
      verb: randomVerb,
      pronoun: randomPronoun,
      tense: "past",
    });
  }

  const randomPronoun =
    pronounKeys[Math.floor(Math.random() * pronounKeys.length)];

  return NextResponse.json({
    verb: randomVerb,
    pronoun: randomPronoun,
    tense: "present",
  });
}
