import { NextResponse } from "next/server";
import { verbs, pronounKeys, pastTensePronounKeys, futureTensePronounKeys, type Tense } from "../../data/verbs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tense = (searchParams.get("tense") as Tense) || "present";
  const group = searchParams.get("group");

  // Filter verbs by group if specified
  const filteredVerbs = group ? verbs.filter((v) => v.group === group) : verbs;
  
  // Fall back to all verbs if the filter results in empty array
  const verbPool = filteredVerbs.length > 0 ? filteredVerbs : verbs;
  
  const randomVerb = verbPool[Math.floor(Math.random() * verbPool.length)];

  if (tense === "future") {
    const randomPronoun =
      futureTensePronounKeys[Math.floor(Math.random() * futureTensePronounKeys.length)];
    return NextResponse.json({
      verb: randomVerb,
      pronoun: randomPronoun,
      tense: "future",
    });
  }

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
