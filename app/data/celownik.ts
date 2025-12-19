// Polish Celownik (Dative Case) Sentence Practice
// Fill in the blank with the correct dative form
// Answers the questions: Komu? Czemu? (To whom? To what?)

export type Gender =
  | "masculine_animate"
  | "masculine_inanimate"
  | "feminine"
  | "neuter";

export type CelownikExercise = {
  sentence: string; // Sentence with ___ for blank
  nominative: string; // Base form of the noun (shown to user)
  answer: string; // Correct dative form
  gender: Gender;
  translation: string; // English translation
  category: string;
  hint?: string;
};

// Categories for filtering
export const celownikCategories = [
  "Giving (dawać)",
  "Helping (pomagać)",
  "Communication",
  "Feelings & Reactions",
  "People & Family",
  "Prepositions",
] as const;

export type CelownikCategory = (typeof celownikCategories)[number];

// Gender display names
export const genderLabels: Record<Gender, { polish: string; english: string }> =
  {
    masculine_animate: {
      polish: "męski żywotny",
      english: "masculine animate",
    },
    masculine_inanimate: {
      polish: "męski nieżywotny",
      english: "masculine inanimate",
    },
    feminine: { polish: "żeński", english: "feminine" },
    neuter: { polish: "nijaki", english: "neuter" },
  };

// Dative rules for hints
export const dativeRules: Record<Gender, string> = {
  masculine_animate: "Masculine: -owi (most nouns), -u (special cases)",
  masculine_inanimate: "Masculine: -owi (most nouns), -u (special cases)",
  feminine: "Feminine: -e (hard consonants), -i (soft/k/g)",
  neuter: "Neuter: -u (all neuter nouns)",
};

export const celownikSentences: CelownikExercise[] = [
  // ============================================
  // GIVING (dawać, kupować, przynosić + dative)
  // ============================================

  // Masculine animate - dawać
  {
    sentence: "Daję prezent ___.",
    nominative: "brat",
    answer: "bratu",
    gender: "masculine_animate",
    translation: "I'm giving a present to my brother.",
    category: "Giving (dawać)",
    hint: "-owi is standard, but 'brat' takes -u",
  },
  {
    sentence: "Daję książkę ___.",
    nominative: "ojciec",
    answer: "ojcu",
    gender: "masculine_animate",
    translation: "I'm giving a book to my father.",
    category: "Giving (dawać)",
    hint: "-iec → -cu",
  },
  {
    sentence: "Kupuję kwiaty ___.",
    nominative: "dziadek",
    answer: "dziadkowi",
    gender: "masculine_animate",
    translation: "I'm buying flowers for grandfather.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Daję pieniądze ___.",
    nominative: "syn",
    answer: "synowi",
    gender: "masculine_animate",
    translation: "I'm giving money to my son.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Przynoszę kawę ___.",
    nominative: "kolega",
    answer: "koledze",
    gender: "masculine_animate",
    translation: "I'm bringing coffee to my colleague.",
    category: "Giving (dawać)",
    hint: "Masculine -a nouns take -e like feminine",
  },
  {
    sentence: "Daję ciastko ___.",
    nominative: "chłopiec",
    answer: "chłopcu",
    gender: "masculine_animate",
    translation: "I'm giving a cookie to the boy.",
    category: "Giving (dawać)",
    hint: "-iec → -cu",
  },
  {
    sentence: "Kupuję prezent ___.",
    nominative: "przyjaciel",
    answer: "przyjacielowi",
    gender: "masculine_animate",
    translation: "I'm buying a present for my friend.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Daję klucze ___.",
    nominative: "sąsiad",
    answer: "sąsiadowi",
    gender: "masculine_animate",
    translation: "I'm giving keys to the neighbor.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Przynoszę herbatę ___.",
    nominative: "mąż",
    answer: "mężowi",
    gender: "masculine_animate",
    translation: "I'm bringing tea to my husband.",
    category: "Giving (dawać)",
    hint: "ą → ę in some forms",
  },
  {
    sentence: "Daję bilet ___.",
    nominative: "student",
    answer: "studentowi",
    gender: "masculine_animate",
    translation: "I'm giving a ticket to the student.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Kupuję lody ___.",
    nominative: "wujek",
    answer: "wujkowi",
    gender: "masculine_animate",
    translation: "I'm buying ice cream for uncle.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Daję telefon ___.",
    nominative: "nauczyciel",
    answer: "nauczycielowi",
    gender: "masculine_animate",
    translation: "I'm giving the phone to the teacher.",
    category: "Giving (dawać)",
  },

  // Feminine - dawać
  {
    sentence: "Daję kwiaty ___.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "I'm giving flowers to mom.",
    category: "Giving (dawać)",
    hint: "-a → -ie (soft ending)",
  },
  {
    sentence: "Kupuję prezent ___.",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "I'm buying a present for my sister.",
    category: "Giving (dawać)",
    hint: "-a → -ze (after r)",
  },
  {
    sentence: "Daję książkę ___.",
    nominative: "córka",
    answer: "córce",
    gender: "feminine",
    translation: "I'm giving a book to my daughter.",
    category: "Giving (dawać)",
    hint: "-ka → -ce",
  },
  {
    sentence: "Przynoszę kawę ___.",
    nominative: "babcia",
    answer: "babci",
    gender: "feminine",
    translation: "I'm bringing coffee to grandma.",
    category: "Giving (dawać)",
    hint: "-ia → -i",
  },
  {
    sentence: "Daję czekoladę ___.",
    nominative: "żona",
    answer: "żonie",
    gender: "feminine",
    translation: "I'm giving chocolate to my wife.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Kupuję bilet ___.",
    nominative: "kobieta",
    answer: "kobiecie",
    gender: "feminine",
    translation: "I'm buying a ticket for the woman.",
    category: "Giving (dawać)",
    hint: "-ta → -cie",
  },
  {
    sentence: "Daję pieniądze ___.",
    nominative: "ciocia",
    answer: "cioci",
    gender: "feminine",
    translation: "I'm giving money to my aunt.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Przynoszę herbatę ___.",
    nominative: "przyjaciółka",
    answer: "przyjaciółce",
    gender: "feminine",
    translation: "I'm bringing tea to my friend.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Daję prezent ___.",
    nominative: "dziewczyna",
    answer: "dziewczynie",
    gender: "feminine",
    translation: "I'm giving a present to the girl.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Kupuję kwiaty ___.",
    nominative: "nauczycielka",
    answer: "nauczycielce",
    gender: "feminine",
    translation: "I'm buying flowers for the teacher.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Daję telefon ___.",
    nominative: "koleżanka",
    answer: "koleżance",
    gender: "feminine",
    translation: "I'm giving the phone to my colleague.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Przynoszę wodę ___.",
    nominative: "matka",
    answer: "matce",
    gender: "feminine",
    translation: "I'm bringing water to my mother.",
    category: "Giving (dawać)",
  },

  // Neuter - dawać
  {
    sentence: "Daję zabawkę ___.",
    nominative: "dziecko",
    answer: "dziecku",
    gender: "neuter",
    translation: "I'm giving a toy to the child.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Daję mleko ___.",
    nominative: "niemowlę",
    answer: "niemowlęciu",
    gender: "neuter",
    translation: "I'm giving milk to the baby.",
    category: "Giving (dawać)",
    hint: "-ę → -ęciu",
  },
  {
    sentence: "Kupuję jedzenie ___.",
    nominative: "zwierzę",
    answer: "zwierzęciu",
    gender: "neuter",
    translation: "I'm buying food for the animal.",
    category: "Giving (dawać)",
  },

  // ============================================
  // HELPING (pomagać + dative)
  // ============================================

  // Masculine animate
  {
    sentence: "Pomagam ___.",
    nominative: "brat",
    answer: "bratu",
    gender: "masculine_animate",
    translation: "I'm helping my brother.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "ojciec",
    answer: "ojcu",
    gender: "masculine_animate",
    translation: "I'm helping my father.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "kolega",
    answer: "koledze",
    gender: "masculine_animate",
    translation: "I'm helping my colleague.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "student",
    answer: "studentowi",
    gender: "masculine_animate",
    translation: "I'm helping the student.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "dziadek",
    answer: "dziadkowi",
    gender: "masculine_animate",
    translation: "I'm helping grandfather.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "nauczyciel",
    answer: "nauczycielowi",
    gender: "masculine_animate",
    translation: "I'm helping the teacher.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "sąsiad",
    answer: "sąsiadowi",
    gender: "masculine_animate",
    translation: "I'm helping the neighbor.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "chłopiec",
    answer: "chłopcu",
    gender: "masculine_animate",
    translation: "I'm helping the boy.",
    category: "Helping (pomagać)",
  },

  // Feminine
  {
    sentence: "Pomagam ___.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "I'm helping mom.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "I'm helping my sister.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "babcia",
    answer: "babci",
    gender: "feminine",
    translation: "I'm helping grandma.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "koleżanka",
    answer: "koleżance",
    gender: "feminine",
    translation: "I'm helping my colleague.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "córka",
    answer: "córce",
    gender: "feminine",
    translation: "I'm helping my daughter.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "żona",
    answer: "żonie",
    gender: "feminine",
    translation: "I'm helping my wife.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "studentka",
    answer: "studentce",
    gender: "feminine",
    translation: "I'm helping the student.",
    category: "Helping (pomagać)",
  },
  {
    sentence: "Pomagam ___.",
    nominative: "dziewczyna",
    answer: "dziewczynie",
    gender: "feminine",
    translation: "I'm helping the girl.",
    category: "Helping (pomagać)",
  },

  // Neuter
  {
    sentence: "Pomagam ___.",
    nominative: "dziecko",
    answer: "dziecku",
    gender: "neuter",
    translation: "I'm helping the child.",
    category: "Helping (pomagać)",
  },

  // ============================================
  // COMMUNICATION (mówić, pisać, odpowiadać + dative)
  // ============================================

  // Masculine animate
  {
    sentence: "Mówię ___.",
    nominative: "student",
    answer: "studentowi",
    gender: "masculine_animate",
    translation: "I'm telling the student.",
    category: "Communication",
  },
  {
    sentence: "Odpowiadam ___.",
    nominative: "nauczyciel",
    answer: "nauczycielowi",
    gender: "masculine_animate",
    translation: "I'm answering the teacher.",
    category: "Communication",
  },
  {
    sentence: "Piszę list ___.",
    nominative: "przyjaciel",
    answer: "przyjacielowi",
    gender: "masculine_animate",
    translation: "I'm writing a letter to my friend.",
    category: "Communication",
  },
  {
    sentence: "Opowiadam historię ___.",
    nominative: "syn",
    answer: "synowi",
    gender: "masculine_animate",
    translation: "I'm telling a story to my son.",
    category: "Communication",
  },
  {
    sentence: "Tłumaczę ___.",
    nominative: "turysta",
    answer: "turyście",
    gender: "masculine_animate",
    translation: "I'm explaining to the tourist.",
    category: "Communication",
    hint: "-sta → -ście",
  },
  {
    sentence: "Wysyłam email ___.",
    nominative: "szef",
    answer: "szefowi",
    gender: "masculine_animate",
    translation: "I'm sending an email to the boss.",
    category: "Communication",
  },
  {
    sentence: "Dzwonię ___.",
    nominative: "lekarz",
    answer: "lekarzowi",
    gender: "masculine_animate",
    translation: "I'm calling the doctor.",
    category: "Communication",
  },
  {
    sentence: "Pokazuję zdjęcia ___.",
    nominative: "kolega",
    answer: "koledze",
    gender: "masculine_animate",
    translation: "I'm showing photos to my colleague.",
    category: "Communication",
  },

  // Feminine
  {
    sentence: "Mówię ___.",
    nominative: "nauczycielka",
    answer: "nauczycielce",
    gender: "feminine",
    translation: "I'm telling the teacher.",
    category: "Communication",
  },
  {
    sentence: "Odpowiadam ___.",
    nominative: "kobieta",
    answer: "kobiecie",
    gender: "feminine",
    translation: "I'm answering the woman.",
    category: "Communication",
  },
  {
    sentence: "Piszę list ___.",
    nominative: "przyjaciółka",
    answer: "przyjaciółce",
    gender: "feminine",
    translation: "I'm writing a letter to my friend.",
    category: "Communication",
  },
  {
    sentence: "Opowiadam bajkę ___.",
    nominative: "córka",
    answer: "córce",
    gender: "feminine",
    translation: "I'm telling a fairy tale to my daughter.",
    category: "Communication",
  },
  {
    sentence: "Tłumaczę ___.",
    nominative: "turystka",
    answer: "turystce",
    gender: "feminine",
    translation: "I'm explaining to the tourist.",
    category: "Communication",
  },
  {
    sentence: "Wysyłam wiadomość ___.",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "I'm sending a message to my sister.",
    category: "Communication",
  },
  {
    sentence: "Dzwonię ___.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "I'm calling mom.",
    category: "Communication",
  },
  {
    sentence: "Pokazuję mieszkanie ___.",
    nominative: "koleżanka",
    answer: "koleżance",
    gender: "feminine",
    translation: "I'm showing the apartment to my colleague.",
    category: "Communication",
  },

  // Neuter
  {
    sentence: "Czytam bajkę ___.",
    nominative: "dziecko",
    answer: "dziecku",
    gender: "neuter",
    translation: "I'm reading a fairy tale to the child.",
    category: "Communication",
  },

  // ============================================
  // FEELINGS & REACTIONS (dziękować, wierzyć, ufać, podobać się)
  // ============================================

  // Dziękować (to thank) - masculine
  {
    sentence: "Dziękuję ___.",
    nominative: "pan",
    answer: "panu",
    gender: "masculine_animate",
    translation: "Thank you, sir.",
    category: "Feelings & Reactions",
    hint: "pan → panu (special form)",
  },
  {
    sentence: "Dziękuję ___.",
    nominative: "lekarz",
    answer: "lekarzowi",
    gender: "masculine_animate",
    translation: "I thank the doctor.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Dziękuję ___.",
    nominative: "nauczyciel",
    answer: "nauczycielowi",
    gender: "masculine_animate",
    translation: "I thank the teacher.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Dziękuję ___.",
    nominative: "kelner",
    answer: "kelnerowi",
    gender: "masculine_animate",
    translation: "I thank the waiter.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Dziękuję ___ za pomoc.",
    nominative: "kolega",
    answer: "koledze",
    gender: "masculine_animate",
    translation: "I thank my colleague for help.",
    category: "Feelings & Reactions",
  },

  // Dziękować - feminine
  {
    sentence: "Dziękuję ___.",
    nominative: "pani",
    answer: "pani",
    gender: "feminine",
    translation: "Thank you, ma'am.",
    category: "Feelings & Reactions",
    hint: "pani stays the same in dative",
  },
  {
    sentence: "Dziękuję ___.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "I thank mom.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Dziękuję ___.",
    nominative: "kelnerka",
    answer: "kelnerce",
    gender: "feminine",
    translation: "I thank the waitress.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Dziękuję ___ za wszystko.",
    nominative: "babcia",
    answer: "babci",
    gender: "feminine",
    translation: "I thank grandma for everything.",
    category: "Feelings & Reactions",
  },

  // Wierzyć (to believe) / Ufać (to trust)
  {
    sentence: "Wierzę ___.",
    nominative: "przyjaciel",
    answer: "przyjacielowi",
    gender: "masculine_animate",
    translation: "I believe my friend.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Ufam ___.",
    nominative: "brat",
    answer: "bratu",
    gender: "masculine_animate",
    translation: "I trust my brother.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Nie wierzę ___.",
    nominative: "polityk",
    answer: "politykowi",
    gender: "masculine_animate",
    translation: "I don't believe the politician.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Ufam ___.",
    nominative: "lekarz",
    answer: "lekarzowi",
    gender: "masculine_animate",
    translation: "I trust the doctor.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Wierzę ___.",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "I believe my sister.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Ufam ___.",
    nominative: "żona",
    answer: "żonie",
    gender: "feminine",
    translation: "I trust my wife.",
    category: "Feelings & Reactions",
  },

  // Podobać się (to please/like)
  {
    sentence: "Ten film podoba się ___.",
    nominative: "brat",
    answer: "bratu",
    gender: "masculine_animate",
    translation: "My brother likes this film.",
    category: "Feelings & Reactions",
    hint: "Literally: This film pleases to brother",
  },
  {
    sentence: "Ta książka podoba się ___.",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "My sister likes this book.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "To mieszkanie podoba się ___.",
    nominative: "żona",
    answer: "żonie",
    gender: "feminine",
    translation: "My wife likes this apartment.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Ta zabawka podoba się ___.",
    nominative: "dziecko",
    answer: "dziecku",
    gender: "neuter",
    translation: "The child likes this toy.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Ten samochód podoba się ___.",
    nominative: "syn",
    answer: "synowi",
    gender: "masculine_animate",
    translation: "My son likes this car.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Ta sukienka podoba się ___.",
    nominative: "córka",
    answer: "córce",
    gender: "feminine",
    translation: "My daughter likes this dress.",
    category: "Feelings & Reactions",
  },

  // Przeszkadzać (to disturb)
  {
    sentence: "Nie przeszkadzaj ___!",
    nominative: "ojciec",
    answer: "ojcu",
    gender: "masculine_animate",
    translation: "Don't disturb father!",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Hałas przeszkadza ___.",
    nominative: "sąsiad",
    answer: "sąsiadowi",
    gender: "masculine_animate",
    translation: "The noise disturbs the neighbor.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Muzyka przeszkadza ___.",
    nominative: "babcia",
    answer: "babci",
    gender: "feminine",
    translation: "The music disturbs grandma.",
    category: "Feelings & Reactions",
  },

  // ============================================
  // PEOPLE & FAMILY (general dative practice)
  // ============================================

  // Masculine
  {
    sentence: "To należy do ___.",
    nominative: "tata",
    answer: "tacie",
    gender: "masculine_animate",
    translation: "This belongs to dad.",
    category: "People & Family",
    hint: "tata → tacie (like feminine)",
  },
  {
    sentence: "Gratuluję ___!",
    nominative: "brat",
    answer: "bratu",
    gender: "masculine_animate",
    translation: "Congratulations to my brother!",
    category: "People & Family",
  },
  {
    sentence: "Życzę ___ wszystkiego najlepszego.",
    nominative: "dziadek",
    answer: "dziadkowi",
    gender: "masculine_animate",
    translation: "I wish grandfather all the best.",
    category: "People & Family",
  },
  {
    sentence: "Obiecuję ___ że przyjdę.",
    nominative: "przyjaciel",
    answer: "przyjacielowi",
    gender: "masculine_animate",
    translation: "I promise my friend I will come.",
    category: "People & Family",
  },
  {
    sentence: "Oddaję książkę ___.",
    nominative: "bibliotekarz",
    answer: "bibliotekarzowi",
    gender: "masculine_animate",
    translation: "I'm returning the book to the librarian.",
    category: "People & Family",
  },
  {
    sentence: "Przedstawiam się ___.",
    nominative: "dyrektor",
    answer: "dyrektorowi",
    gender: "masculine_animate",
    translation: "I'm introducing myself to the director.",
    category: "People & Family",
  },

  // Feminine
  {
    sentence: "Gratuluję ___!",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "Congratulations to my sister!",
    category: "People & Family",
  },
  {
    sentence: "Życzę ___ zdrowia.",
    nominative: "babcia",
    answer: "babci",
    gender: "feminine",
    translation: "I wish grandma good health.",
    category: "People & Family",
  },
  {
    sentence: "Obiecuję ___.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "I promise mom.",
    category: "People & Family",
  },
  {
    sentence: "Oddaję klucze ___.",
    nominative: "sąsiadka",
    answer: "sąsiadce",
    gender: "feminine",
    translation: "I'm returning the keys to the neighbor.",
    category: "People & Family",
  },
  {
    sentence: "Przedstawiam się ___.",
    nominative: "sekretarka",
    answer: "sekretarce",
    gender: "feminine",
    translation: "I'm introducing myself to the secretary.",
    category: "People & Family",
  },
  {
    sentence: "Życzę ___ powodzenia.",
    nominative: "studentka",
    answer: "studentce",
    gender: "feminine",
    translation: "I wish the student good luck.",
    category: "People & Family",
  },

  // Neuter
  {
    sentence: "Śpiewam kołysankę ___.",
    nominative: "dziecko",
    answer: "dziecku",
    gender: "neuter",
    translation: "I'm singing a lullaby to the child.",
    category: "People & Family",
  },

  // ============================================
  // PREPOSITIONS (dzięki, przeciwko, ku, wbrew)
  // ============================================

  // Dzięki (thanks to)
  {
    sentence: "Dzięki ___ zdałem egzamin.",
    nominative: "nauczyciel",
    answer: "nauczycielowi",
    gender: "masculine_animate",
    translation: "Thanks to the teacher, I passed the exam.",
    category: "Prepositions",
  },
  {
    sentence: "Dzięki ___ mam pracę.",
    nominative: "przyjaciel",
    answer: "przyjacielowi",
    gender: "masculine_animate",
    translation: "Thanks to my friend, I have a job.",
    category: "Prepositions",
  },
  {
    sentence: "Dzięki ___ jestem zdrowy.",
    nominative: "lekarz",
    answer: "lekarzowi",
    gender: "masculine_animate",
    translation: "Thanks to the doctor, I'm healthy.",
    category: "Prepositions",
  },
  {
    sentence: "Dzięki ___ wszystko jest w porządku.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "Thanks to mom, everything is fine.",
    category: "Prepositions",
  },
  {
    sentence: "Dzięki ___ mam dom.",
    nominative: "rodzina",
    answer: "rodzinie",
    gender: "feminine",
    translation: "Thanks to my family, I have a home.",
    category: "Prepositions",
  },
  {
    sentence: "Dzięki ___ nauczyłem się polskiego.",
    nominative: "żona",
    answer: "żonie",
    gender: "feminine",
    translation: "Thanks to my wife, I learned Polish.",
    category: "Prepositions",
  },

  // Przeciwko (against)
  {
    sentence: "Głosuję przeciwko ___.",
    nominative: "kandydat",
    answer: "kandydatowi",
    gender: "masculine_animate",
    translation: "I'm voting against the candidate.",
    category: "Prepositions",
  },
  {
    sentence: "Jestem przeciwko ___.",
    nominative: "ta decyzja",
    answer: "tej decyzji",
    gender: "feminine",
    translation: "I'm against this decision.",
    category: "Prepositions",
    hint: "Demonstrative + noun both decline",
  },
  {
    sentence: "Protestuję przeciwko ___.",
    nominative: "ten plan",
    answer: "temu planowi",
    gender: "masculine_inanimate",
    translation: "I'm protesting against this plan.",
    category: "Prepositions",
  },

  // Ku (towards - more literary)
  {
    sentence: "Idę ku ___.",
    nominative: "dom",
    answer: "domowi",
    gender: "masculine_inanimate",
    translation: "I'm walking towards the house.",
    category: "Prepositions",
  },
  {
    sentence: "Patrzę ku ___.",
    nominative: "niebo",
    answer: "niebu",
    gender: "neuter",
    translation: "I'm looking towards the sky.",
    category: "Prepositions",
  },
  {
    sentence: "Ku ___ radości...",
    nominative: "moja",
    answer: "mojej",
    gender: "feminine",
    translation: "To my joy...",
    category: "Prepositions",
    hint: "Possessive adjective in dative",
  },

  // Wbrew (contrary to)
  {
    sentence: "Wbrew ___ poszedłem.",
    nominative: "rada",
    answer: "radzie",
    gender: "feminine",
    translation: "Contrary to advice, I went.",
    category: "Prepositions",
  },
  {
    sentence: "Wbrew ___ zdałem.",
    nominative: "oczekiwanie",
    answer: "oczekiwaniu",
    gender: "neuter",
    translation: "Contrary to expectations, I passed.",
    category: "Prepositions",
  },

  // ============================================
  // ADDITIONAL COMMON VERBS WITH DATIVE
  // ============================================

  // Życzyć (to wish)
  {
    sentence: "Życzę ___ wesołych świąt.",
    nominative: "wszyscy",
    answer: "wszystkim",
    gender: "masculine_animate",
    translation: "I wish everyone a merry Christmas.",
    category: "Communication",
    hint: "Plural pronoun",
  },

  // Pozwalać (to allow)
  {
    sentence: "Pozwalam ___ grać.",
    nominative: "syn",
    answer: "synowi",
    gender: "masculine_animate",
    translation: "I allow my son to play.",
    category: "People & Family",
  },
  {
    sentence: "Mama pozwala ___ oglądać telewizję.",
    nominative: "córka",
    answer: "córce",
    gender: "feminine",
    translation: "Mom allows her daughter to watch TV.",
    category: "People & Family",
  },

  // Przebaczać (to forgive)
  {
    sentence: "Przebaczam ___.",
    nominative: "brat",
    answer: "bratu",
    gender: "masculine_animate",
    translation: "I forgive my brother.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Przebaczam ___.",
    nominative: "przyjaciółka",
    answer: "przyjaciółce",
    gender: "feminine",
    translation: "I forgive my friend.",
    category: "Feelings & Reactions",
  },

  // Szkodzić (to harm)
  {
    sentence: "Palenie szkodzi ___.",
    nominative: "zdrowie",
    answer: "zdrowiu",
    gender: "neuter",
    translation: "Smoking harms health.",
    category: "Feelings & Reactions",
  },

  // Brakować (to lack/miss)
  {
    sentence: "Brakuje ___ pieniędzy.",
    nominative: "student",
    answer: "studentowi",
    gender: "masculine_animate",
    translation: "The student lacks money.",
    category: "Feelings & Reactions",
    hint: "Impersonal construction",
  },
  {
    sentence: "Brakuje ___ czasu.",
    nominative: "mama",
    answer: "mamie",
    gender: "feminine",
    translation: "Mom lacks time.",
    category: "Feelings & Reactions",
  },

  // Smakować (to taste good to)
  {
    sentence: "Ta zupa smakuje ___.",
    nominative: "dziadek",
    answer: "dziadkowi",
    gender: "masculine_animate",
    translation: "Grandfather likes this soup.",
    category: "Feelings & Reactions",
    hint: "Literally: tastes good to grandfather",
  },
  {
    sentence: "To ciasto smakuje ___.",
    nominative: "dziecko",
    answer: "dziecku",
    gender: "neuter",
    translation: "The child likes this cake.",
    category: "Feelings & Reactions",
  },

  // Udawać się (to succeed)
  {
    sentence: "Wszystko udaje się ___.",
    nominative: "siostra",
    answer: "siostrze",
    gender: "feminine",
    translation: "Everything works out for my sister.",
    category: "Feelings & Reactions",
  },

  // Przyglądać się (to watch/observe)
  {
    sentence: "Przyglądam się ___.",
    nominative: "artysta",
    answer: "artyście",
    gender: "masculine_animate",
    translation: "I'm watching the artist.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Przyglądam się ___.",
    nominative: "aktorka",
    answer: "aktorce",
    gender: "feminine",
    translation: "I'm watching the actress.",
    category: "Feelings & Reactions",
  },

  // Additional nouns for variety
  {
    sentence: "Oddaję pożyczkę ___.",
    nominative: "bank",
    answer: "bankowi",
    gender: "masculine_inanimate",
    translation: "I'm repaying a loan to the bank.",
    category: "Giving (dawać)",
  },
  {
    sentence: "Służę ___.",
    nominative: "kraj",
    answer: "krajowi",
    gender: "masculine_inanimate",
    translation: "I serve my country.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Poświęcam czas ___.",
    nominative: "praca",
    answer: "pracy",
    gender: "feminine",
    translation: "I dedicate time to work.",
    category: "Giving (dawać)",
    hint: "-ca → -cy",
  },
  {
    sentence: "Oddaję się ___.",
    nominative: "muzyka",
    answer: "muzyce",
    gender: "feminine",
    translation: "I devote myself to music.",
    category: "Feelings & Reactions",
  },
  {
    sentence: "Sprzeciwiam się ___.",
    nominative: "przemoc",
    answer: "przemocy",
    gender: "feminine",
    translation: "I oppose violence.",
    category: "Feelings & Reactions",
    hint: "-c → -cy",
  },
];

// Helper function to get a random sentence
export function getRandomCelownikSentence(
  category?: string | null
): CelownikExercise {
  const filteredSentences = category
    ? celownikSentences.filter((s) => s.category === category)
    : celownikSentences;
  return filteredSentences[
    Math.floor(Math.random() * filteredSentences.length)
  ];
}

