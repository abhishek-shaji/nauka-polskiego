// Polish Narzędnik (Instrumental Case) Sentence Practice
// Fill in the blank with the correct instrumental form
// Answers the questions: Z kim? Czym? Kim? (With whom? With what? As whom?)

export type Gender =
  | "masculine_animate"
  | "masculine_inanimate"
  | "feminine"
  | "neuter";

export type NarzednikExercise = {
  sentence: string; // Sentence with ___ for blank
  nominative: string; // Base form of the noun (shown to user)
  answer: string; // Correct instrumental form
  gender: Gender;
  translation: string; // English translation
  category: string;
  hint?: string;
};

// Categories for filtering
export const narzednikCategories = [
  "Professions (być)",
  "With People (z + instr)",
  "Means & Tools",
  "Prepositions",
  "Interests (się)",
  "Daily Life",
] as const;

export type NarzednikCategory = (typeof narzednikCategories)[number];

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

// Instrumental rules for hints
export const instrumentalRules: Record<Gender, string> = {
  masculine_animate: "Masculine: -em (hard), -iem (soft/k/g)",
  masculine_inanimate: "Masculine: -em (hard), -iem (soft/k/g)",
  feminine: "Feminine: -a → -ą, -ia → -ią",
  neuter: "Neuter: -o → -em, -e → -em, -ę → -ęciem",
};

export const narzednikSentences: NarzednikExercise[] = [
  // ============================================
  // PROFESSIONS (być + instrumental)
  // ============================================

  // Masculine animate professions
  {
    sentence: "Jestem ___.",
    nominative: "student",
    answer: "studentem",
    gender: "masculine_animate",
    translation: "I am a student.",
    category: "Professions (być)",
  },
  {
    sentence: "On jest ___.",
    nominative: "lekarz",
    answer: "lekarzem",
    gender: "masculine_animate",
    translation: "He is a doctor.",
    category: "Professions (być)",
  },
  {
    sentence: "Mój tata jest ___.",
    nominative: "nauczyciel",
    answer: "nauczycielem",
    gender: "masculine_animate",
    translation: "My dad is a teacher.",
    category: "Professions (być)",
    hint: "-l becomes -lem",
  },
  {
    sentence: "Mój brat jest ___.",
    nominative: "prawnik",
    answer: "prawnikiem",
    gender: "masculine_animate",
    translation: "My brother is a lawyer.",
    category: "Professions (być)",
    hint: "-k becomes -kiem",
  },
  {
    sentence: "On jest ___.",
    nominative: "aktor",
    answer: "aktorem",
    gender: "masculine_animate",
    translation: "He is an actor.",
    category: "Professions (być)",
  },
  {
    sentence: "Mój dziadek był ___.",
    nominative: "inżynier",
    answer: "inżynierem",
    gender: "masculine_animate",
    translation: "My grandfather was an engineer.",
    category: "Professions (być)",
  },
  {
    sentence: "Chcę być ___.",
    nominative: "pilot",
    answer: "pilotem",
    gender: "masculine_animate",
    translation: "I want to be a pilot.",
    category: "Professions (być)",
  },
  {
    sentence: "On jest ___.",
    nominative: "kelner",
    answer: "kelnerem",
    gender: "masculine_animate",
    translation: "He is a waiter.",
    category: "Professions (być)",
  },
  {
    sentence: "Będę ___.",
    nominative: "programista",
    answer: "programistą",
    gender: "masculine_animate",
    translation: "I will be a programmer.",
    category: "Professions (być)",
    hint: "Masculine nouns ending in -a take -ą",
  },
  {
    sentence: "On jest ___.",
    nominative: "dentysta",
    answer: "dentystą",
    gender: "masculine_animate",
    translation: "He is a dentist.",
    category: "Professions (być)",
    hint: "Masculine nouns ending in -a take -ą",
  },
  {
    sentence: "Mój wujek jest ___.",
    nominative: "mechanik",
    answer: "mechanikiem",
    gender: "masculine_animate",
    translation: "My uncle is a mechanic.",
    category: "Professions (być)",
  },
  {
    sentence: "On jest ___.",
    nominative: "kucharz",
    answer: "kucharzem",
    gender: "masculine_animate",
    translation: "He is a chef.",
    category: "Professions (być)",
  },
  {
    sentence: "Jestem ___.",
    nominative: "muzyk",
    answer: "muzykiem",
    gender: "masculine_animate",
    translation: "I am a musician.",
    category: "Professions (być)",
  },
  {
    sentence: "On jest ___.",
    nominative: "pisarz",
    answer: "pisarzem",
    gender: "masculine_animate",
    translation: "He is a writer.",
    category: "Professions (być)",
  },
  {
    sentence: "Mój sąsiad jest ___.",
    nominative: "policjant",
    answer: "policjantem",
    gender: "masculine_animate",
    translation: "My neighbor is a policeman.",
    category: "Professions (być)",
  },

  // Feminine professions
  {
    sentence: "Jestem ___.",
    nominative: "studentka",
    answer: "studentką",
    gender: "feminine",
    translation: "I am a student (f).",
    category: "Professions (być)",
  },
  {
    sentence: "Ona jest ___.",
    nominative: "lekarka",
    answer: "lekarką",
    gender: "feminine",
    translation: "She is a doctor.",
    category: "Professions (być)",
  },
  {
    sentence: "Moja mama jest ___.",
    nominative: "nauczycielka",
    answer: "nauczycielką",
    gender: "feminine",
    translation: "My mom is a teacher.",
    category: "Professions (być)",
  },
  {
    sentence: "Moja siostra jest ___.",
    nominative: "prawniczka",
    answer: "prawniczką",
    gender: "feminine",
    translation: "My sister is a lawyer.",
    category: "Professions (być)",
  },
  {
    sentence: "Ona jest ___.",
    nominative: "aktorka",
    answer: "aktorką",
    gender: "feminine",
    translation: "She is an actress.",
    category: "Professions (być)",
  },
  {
    sentence: "Chcę być ___.",
    nominative: "pielęgniarka",
    answer: "pielęgniarką",
    gender: "feminine",
    translation: "I want to be a nurse.",
    category: "Professions (być)",
  },
  {
    sentence: "Ona jest ___.",
    nominative: "kelnerka",
    answer: "kelnerką",
    gender: "feminine",
    translation: "She is a waitress.",
    category: "Professions (być)",
  },
  {
    sentence: "Moja ciocia jest ___.",
    nominative: "sekretarka",
    answer: "sekretarką",
    gender: "feminine",
    translation: "My aunt is a secretary.",
    category: "Professions (być)",
  },
  {
    sentence: "Będę ___.",
    nominative: "architektka",
    answer: "architektką",
    gender: "feminine",
    translation: "I will be an architect.",
    category: "Professions (być)",
  },
  {
    sentence: "Ona jest ___.",
    nominative: "dziennikarka",
    answer: "dziennikarką",
    gender: "feminine",
    translation: "She is a journalist.",
    category: "Professions (być)",
  },

  // ============================================
  // WITH PEOPLE (z + instrumental)
  // ============================================

  // Masculine animate
  {
    sentence: "Idę do kina z ___.",
    nominative: "brat",
    answer: "bratem",
    gender: "masculine_animate",
    translation: "I'm going to the cinema with my brother.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Rozmawiam z ___.",
    nominative: "ojciec",
    answer: "ojcem",
    gender: "masculine_animate",
    translation: "I'm talking with my father.",
    category: "With People (z + instr)",
    hint: "-iec → -cem (vowel drops)",
  },
  {
    sentence: "Gram w piłkę z ___.",
    nominative: "syn",
    answer: "synem",
    gender: "masculine_animate",
    translation: "I'm playing football with my son.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Mieszkam z ___.",
    nominative: "kolega",
    answer: "kolegą",
    gender: "masculine_animate",
    translation: "I live with a friend.",
    category: "With People (z + instr)",
    hint: "Masculine -a → -ą",
  },
  {
    sentence: "Pracuję z ___.",
    nominative: "szef",
    answer: "szefem",
    gender: "masculine_animate",
    translation: "I work with the boss.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Idę na spacer z ___.",
    nominative: "dziadek",
    answer: "dziadkiem",
    gender: "masculine_animate",
    translation: "I'm going for a walk with grandfather.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Jem obiad z ___.",
    nominative: "przyjaciel",
    answer: "przyjacielem",
    gender: "masculine_animate",
    translation: "I'm eating dinner with a friend.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Rozmawiam z ___.",
    nominative: "sąsiad",
    answer: "sąsiadem",
    gender: "masculine_animate",
    translation: "I'm talking with the neighbor.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Tańczę z ___.",
    nominative: "chłopiec",
    answer: "chłopcem",
    gender: "masculine_animate",
    translation: "I'm dancing with a boy.",
    category: "With People (z + instr)",
    hint: "-iec → -cem",
  },
  {
    sentence: "Spotykam się z ___.",
    nominative: "lekarz",
    answer: "lekarzem",
    gender: "masculine_animate",
    translation: "I'm meeting with a doctor.",
    category: "With People (z + instr)",
  },

  // Feminine people
  {
    sentence: "Idę na zakupy z ___.",
    nominative: "siostra",
    answer: "siostrą",
    gender: "feminine",
    translation: "I'm going shopping with my sister.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Rozmawiam z ___.",
    nominative: "matka",
    answer: "matką",
    gender: "feminine",
    translation: "I'm talking with my mother.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Piję kawę z ___.",
    nominative: "koleżanka",
    answer: "koleżanką",
    gender: "feminine",
    translation: "I'm drinking coffee with a friend.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Mieszkam z ___.",
    nominative: "babcia",
    answer: "babcią",
    gender: "feminine",
    translation: "I live with grandma.",
    category: "With People (z + instr)",
    hint: "-ia → -ią",
  },
  {
    sentence: "Pracuję z ___.",
    nominative: "kobieta",
    answer: "kobietą",
    gender: "feminine",
    translation: "I work with a woman.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Idę do parku z ___.",
    nominative: "córka",
    answer: "córką",
    gender: "feminine",
    translation: "I'm going to the park with my daughter.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Rozmawiam z ___.",
    nominative: "nauczycielka",
    answer: "nauczycielką",
    gender: "feminine",
    translation: "I'm talking with the teacher.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Tańczę z ___.",
    nominative: "dziewczyna",
    answer: "dziewczyną",
    gender: "feminine",
    translation: "I'm dancing with a girl.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Jem śniadanie z ___.",
    nominative: "żona",
    answer: "żoną",
    gender: "feminine",
    translation: "I'm eating breakfast with my wife.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Idę do kina z ___.",
    nominative: "przyjaciółka",
    answer: "przyjaciółką",
    gender: "feminine",
    translation: "I'm going to the cinema with a friend.",
    category: "With People (z + instr)",
  },
  {
    sentence: "Spotykam się z ___.",
    nominative: "ciocia",
    answer: "ciocią",
    gender: "feminine",
    translation: "I'm meeting with my aunt.",
    category: "With People (z + instr)",
  },

  // Neuter
  {
    sentence: "Bawię się z ___.",
    nominative: "dziecko",
    answer: "dzieckiem",
    gender: "neuter",
    translation: "I'm playing with a child.",
    category: "With People (z + instr)",
    hint: "-o → -iem after k",
  },

  // ============================================
  // MEANS & TOOLS (instrumental for "with what")
  // ============================================

  // Masculine inanimate tools
  {
    sentence: "Piszę ___.",
    nominative: "długopis",
    answer: "długopisem",
    gender: "masculine_inanimate",
    translation: "I write with a pen.",
    category: "Means & Tools",
  },
  {
    sentence: "Kroję chleb ___.",
    nominative: "nóż",
    answer: "nożem",
    gender: "masculine_inanimate",
    translation: "I'm cutting bread with a knife.",
    category: "Means & Tools",
    hint: "ó → o in some forms",
  },
  {
    sentence: "Jem zupę ___.",
    nominative: "widelec",
    answer: "widelcem",
    gender: "masculine_inanimate",
    translation: "I eat soup with a fork.",
    category: "Means & Tools",
    hint: "-ec → -cem",
  },
  {
    sentence: "Rysuję ___.",
    nominative: "ołówek",
    answer: "ołówkiem",
    gender: "masculine_inanimate",
    translation: "I draw with a pencil.",
    category: "Means & Tools",
  },
  {
    sentence: "Jadę do pracy ___.",
    nominative: "samochód",
    answer: "samochodem",
    gender: "masculine_inanimate",
    translation: "I go to work by car.",
    category: "Means & Tools",
    hint: "ó → o",
  },
  {
    sentence: "Jadę ___.",
    nominative: "autobus",
    answer: "autobusem",
    gender: "masculine_inanimate",
    translation: "I'm going by bus.",
    category: "Means & Tools",
  },
  {
    sentence: "Jadę ___.",
    nominative: "rower",
    answer: "rowerem",
    gender: "masculine_inanimate",
    translation: "I'm going by bicycle.",
    category: "Means & Tools",
  },
  {
    sentence: "Otwieram drzwi ___.",
    nominative: "klucz",
    answer: "kluczem",
    gender: "masculine_inanimate",
    translation: "I open the door with a key.",
    category: "Means & Tools",
  },
  {
    sentence: "Myję podłogę ___.",
    nominative: "mop",
    answer: "mopem",
    gender: "masculine_inanimate",
    translation: "I wash the floor with a mop.",
    category: "Means & Tools",
  },
  {
    sentence: "Płacę ___.",
    nominative: "przelew",
    answer: "przelewem",
    gender: "masculine_inanimate",
    translation: "I pay by bank transfer.",
    category: "Means & Tools",
  },
  {
    sentence: "Lecę ___.",
    nominative: "samolot",
    answer: "samolotem",
    gender: "masculine_inanimate",
    translation: "I'm flying by plane.",
    category: "Means & Tools",
  },
  {
    sentence: "Jadę ___.",
    nominative: "pociąg",
    answer: "pociągiem",
    gender: "masculine_inanimate",
    translation: "I'm going by train.",
    category: "Means & Tools",
    hint: "-g → -giem",
  },
  {
    sentence: "Jadę ___.",
    nominative: "tramwaj",
    answer: "tramwajem",
    gender: "masculine_inanimate",
    translation: "I'm going by tram.",
    category: "Means & Tools",
  },
  {
    sentence: "Koszę trawę ___.",
    nominative: "kosiarka",
    answer: "kosiarką",
    gender: "feminine",
    translation: "I mow the grass with a lawn mower.",
    category: "Means & Tools",
  },
  {
    sentence: "Suszę włosy ___.",
    nominative: "suszarka",
    answer: "suszarką",
    gender: "feminine",
    translation: "I dry my hair with a hair dryer.",
    category: "Means & Tools",
  },
  {
    sentence: "Odkurzam ___.",
    nominative: "odkurzacz",
    answer: "odkurzaczem",
    gender: "masculine_inanimate",
    translation: "I vacuum with a vacuum cleaner.",
    category: "Means & Tools",
  },

  // Feminine tools
  {
    sentence: "Jem zupę ___.",
    nominative: "łyżka",
    answer: "łyżką",
    gender: "feminine",
    translation: "I eat soup with a spoon.",
    category: "Means & Tools",
  },
  {
    sentence: "Czyszczę zęby ___.",
    nominative: "szczoteczka",
    answer: "szczoteczką",
    gender: "feminine",
    translation: "I brush my teeth with a toothbrush.",
    category: "Means & Tools",
  },
  {
    sentence: "Gotuję zupę z ___.",
    nominative: "marchewka",
    answer: "marchewką",
    gender: "feminine",
    translation: "I cook soup with a carrot.",
    category: "Means & Tools",
  },
  {
    sentence: "Piszę ___.",
    nominative: "kredka",
    answer: "kredką",
    gender: "feminine",
    translation: "I write with a crayon.",
    category: "Means & Tools",
  },
  {
    sentence: "Myję ręce ___.",
    nominative: "woda",
    answer: "wodą",
    gender: "feminine",
    translation: "I wash my hands with water.",
    category: "Means & Tools",
  },
  {
    sentence: "Ścieram kurz ___.",
    nominative: "ścierka",
    answer: "ścierką",
    gender: "feminine",
    translation: "I wipe dust with a cloth.",
    category: "Means & Tools",
  },

  // Neuter
  {
    sentence: "Dzwonię ___.",
    nominative: "metro",
    answer: "metrem",
    gender: "neuter",
    translation: "I'm going by metro.",
    category: "Means & Tools",
  },

  // ============================================
  // PREPOSITIONS (przed, za, nad, pod, między)
  // ============================================

  // Przed (in front of, before)
  {
    sentence: "Stoję przed ___.",
    nominative: "dom",
    answer: "domem",
    gender: "masculine_inanimate",
    translation: "I'm standing in front of the house.",
    category: "Prepositions",
  },
  {
    sentence: "Samochód jest przed ___.",
    nominative: "garaż",
    answer: "garażem",
    gender: "masculine_inanimate",
    translation: "The car is in front of the garage.",
    category: "Prepositions",
  },
  {
    sentence: "Czekam przed ___.",
    nominative: "szkoła",
    answer: "szkołą",
    gender: "feminine",
    translation: "I'm waiting in front of the school.",
    category: "Prepositions",
  },
  {
    sentence: "Spotkamy się przed ___.",
    nominative: "kino",
    answer: "kinem",
    gender: "neuter",
    translation: "We'll meet in front of the cinema.",
    category: "Prepositions",
  },
  {
    sentence: "Stoi przed ___.",
    nominative: "sklep",
    answer: "sklepem",
    gender: "masculine_inanimate",
    translation: "He/she is standing in front of the shop.",
    category: "Prepositions",
  },

  // Za (behind)
  {
    sentence: "Ogród jest za ___.",
    nominative: "dom",
    answer: "domem",
    gender: "masculine_inanimate",
    translation: "The garden is behind the house.",
    category: "Prepositions",
  },
  {
    sentence: "Kot jest za ___.",
    nominative: "szafa",
    answer: "szafą",
    gender: "feminine",
    translation: "The cat is behind the wardrobe.",
    category: "Prepositions",
  },
  {
    sentence: "Parking jest za ___.",
    nominative: "budynek",
    answer: "budynkiem",
    gender: "masculine_inanimate",
    translation: "The parking lot is behind the building.",
    category: "Prepositions",
  },
  {
    sentence: "Bawię się za ___.",
    nominative: "drzewo",
    answer: "drzewem",
    gender: "neuter",
    translation: "I'm playing behind the tree.",
    category: "Prepositions",
  },
  {
    sentence: "Schowaj się za ___.",
    nominative: "ściana",
    answer: "ścianą",
    gender: "feminine",
    translation: "Hide behind the wall.",
    category: "Prepositions",
  },

  // Nad (above, over)
  {
    sentence: "Lampa wisi nad ___.",
    nominative: "stół",
    answer: "stołem",
    gender: "masculine_inanimate",
    translation: "The lamp hangs above the table.",
    category: "Prepositions",
    hint: "ó → o",
  },
  {
    sentence: "Obraz wisi nad ___.",
    nominative: "łóżko",
    answer: "łóżkiem",
    gender: "neuter",
    translation: "The picture hangs above the bed.",
    category: "Prepositions",
  },
  {
    sentence: "Mieszkam nad ___.",
    nominative: "morze",
    answer: "morzem",
    gender: "neuter",
    translation: "I live by the sea.",
    category: "Prepositions",
  },
  {
    sentence: "Chmura jest nad ___.",
    nominative: "góra",
    answer: "górą",
    gender: "feminine",
    translation: "The cloud is above the mountain.",
    category: "Prepositions",
  },
  {
    sentence: "Ptak leci nad ___.",
    nominative: "las",
    answer: "lasem",
    gender: "masculine_inanimate",
    translation: "The bird flies over the forest.",
    category: "Prepositions",
  },

  // Pod (under)
  {
    sentence: "Kot śpi pod ___.",
    nominative: "stół",
    answer: "stołem",
    gender: "masculine_inanimate",
    translation: "The cat sleeps under the table.",
    category: "Prepositions",
  },
  {
    sentence: "Klucze są pod ___.",
    nominative: "dywan",
    answer: "dywanem",
    gender: "masculine_inanimate",
    translation: "The keys are under the carpet.",
    category: "Prepositions",
  },
  {
    sentence: "Pies leży pod ___.",
    nominative: "drzewo",
    answer: "drzewem",
    gender: "neuter",
    translation: "The dog lies under the tree.",
    category: "Prepositions",
  },
  {
    sentence: "Kapcie są pod ___.",
    nominative: "łóżko",
    answer: "łóżkiem",
    gender: "neuter",
    translation: "The slippers are under the bed.",
    category: "Prepositions",
  },
  {
    sentence: "Tunel jest pod ___.",
    nominative: "rzeka",
    answer: "rzeką",
    gender: "feminine",
    translation: "The tunnel is under the river.",
    category: "Prepositions",
  },

  // Między (between)
  {
    sentence: "Siedzę między ___ a siostrą.",
    nominative: "brat",
    answer: "bratem",
    gender: "masculine_animate",
    translation: "I sit between my brother and sister.",
    category: "Prepositions",
  },
  {
    sentence: "Dom jest między ___ a parkiem.",
    nominative: "sklep",
    answer: "sklepem",
    gender: "masculine_inanimate",
    translation: "The house is between the shop and the park.",
    category: "Prepositions",
  },
  {
    sentence: "Krzesło jest między ___ a szafą.",
    nominative: "okno",
    answer: "oknem",
    gender: "neuter",
    translation: "The chair is between the window and the wardrobe.",
    category: "Prepositions",
  },
  {
    sentence: "Kuchnia jest między ___ a łazienką.",
    nominative: "sypialnia",
    answer: "sypialnią",
    gender: "feminine",
    translation: "The kitchen is between the bedroom and bathroom.",
    category: "Prepositions",
  },

  // ============================================
  // INTERESTS (interesować się, zajmować się)
  // ============================================

  {
    sentence: "Interesuję się ___.",
    nominative: "historia",
    answer: "historią",
    gender: "feminine",
    translation: "I'm interested in history.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "muzyka",
    answer: "muzyką",
    gender: "feminine",
    translation: "I'm interested in music.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "sport",
    answer: "sportem",
    gender: "masculine_inanimate",
    translation: "I'm interested in sports.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "sztuka",
    answer: "sztuką",
    gender: "feminine",
    translation: "I'm interested in art.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "literatura",
    answer: "literaturą",
    gender: "feminine",
    translation: "I'm interested in literature.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "piłka nożna",
    answer: "piłką nożną",
    gender: "feminine",
    translation: "I'm interested in football.",
    category: "Interests (się)",
    hint: "Both words decline: piłka nożna → piłką nożną",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "fotografią",
    answer: "fotografią",
    gender: "feminine",
    translation: "I'm interested in photography.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "teatr",
    answer: "teatrem",
    gender: "masculine_inanimate",
    translation: "I'm interested in theater.",
    category: "Interests (się)",
  },
  {
    sentence: "Zajmuję się ___.",
    nominative: "marketing",
    answer: "marketingiem",
    gender: "masculine_inanimate",
    translation: "I deal with marketing.",
    category: "Interests (się)",
  },
  {
    sentence: "Zajmuję się ___.",
    nominative: "ogrodnictwo",
    answer: "ogrodnictwem",
    gender: "neuter",
    translation: "I do gardening.",
    category: "Interests (się)",
  },
  {
    sentence: "Zajmuję się ___.",
    nominative: "gotowanie",
    answer: "gotowaniem",
    gender: "neuter",
    translation: "I do cooking.",
    category: "Interests (się)",
  },
  {
    sentence: "Zajmuję się ___.",
    nominative: "sprzątanie",
    answer: "sprzątaniem",
    gender: "neuter",
    translation: "I deal with cleaning.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "film",
    answer: "filmem",
    gender: "masculine_inanimate",
    translation: "I'm interested in film.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "moda",
    answer: "modą",
    gender: "feminine",
    translation: "I'm interested in fashion.",
    category: "Interests (się)",
  },
  {
    sentence: "Interesuję się ___.",
    nominative: "architektura",
    answer: "architekturą",
    gender: "feminine",
    translation: "I'm interested in architecture.",
    category: "Interests (się)",
  },

  // ============================================
  // DAILY LIFE (various instrumental uses)
  // ============================================

  // With food/drinks
  {
    sentence: "Piję kawę z ___.",
    nominative: "mleko",
    answer: "mlekiem",
    gender: "neuter",
    translation: "I drink coffee with milk.",
    category: "Daily Life",
  },
  {
    sentence: "Jem chleb z ___.",
    nominative: "masło",
    answer: "masłem",
    gender: "neuter",
    translation: "I eat bread with butter.",
    category: "Daily Life",
  },
  {
    sentence: "Piję herbatę z ___.",
    nominative: "cytryna",
    answer: "cytryną",
    gender: "feminine",
    translation: "I drink tea with lemon.",
    category: "Daily Life",
  },
  {
    sentence: "Jem makaron z ___.",
    nominative: "sos",
    answer: "sosem",
    gender: "masculine_inanimate",
    translation: "I eat pasta with sauce.",
    category: "Daily Life",
  },
  {
    sentence: "Jem naleśniki z ___.",
    nominative: "dżem",
    answer: "dżemem",
    gender: "masculine_inanimate",
    translation: "I eat pancakes with jam.",
    category: "Daily Life",
  },
  {
    sentence: "Piję herbatę z ___.",
    nominative: "miód",
    answer: "miodem",
    gender: "masculine_inanimate",
    translation: "I drink tea with honey.",
    category: "Daily Life",
    hint: "ó → o",
  },
  {
    sentence: "Jem lody z ___.",
    nominative: "śmietana",
    answer: "śmietaną",
    gender: "feminine",
    translation: "I eat ice cream with cream.",
    category: "Daily Life",
  },
  {
    sentence: "Jem kanapkę z ___.",
    nominative: "ser",
    answer: "serem",
    gender: "masculine_inanimate",
    translation: "I eat a sandwich with cheese.",
    category: "Daily Life",
  },
  {
    sentence: "Jem zupę z ___.",
    nominative: "chleb",
    answer: "chlebem",
    gender: "masculine_inanimate",
    translation: "I eat soup with bread.",
    category: "Daily Life",
  },
  {
    sentence: "Jem pizzę z ___.",
    nominative: "piwo",
    answer: "piwem",
    gender: "neuter",
    translation: "I eat pizza with beer.",
    category: "Daily Life",
  },

  // Descriptions/qualities
  {
    sentence: "Mówię z ___.",
    nominative: "akcent",
    answer: "akcentem",
    gender: "masculine_inanimate",
    translation: "I speak with an accent.",
    category: "Daily Life",
  },
  {
    sentence: "Czekam z ___.",
    nominative: "niecierpliwość",
    answer: "niecierpliwością",
    gender: "feminine",
    translation: "I wait with impatience.",
    category: "Daily Life",
    hint: "-ość → -ością",
  },
  {
    sentence: "Słucham z ___.",
    nominative: "uwaga",
    answer: "uwagą",
    gender: "feminine",
    translation: "I listen with attention.",
    category: "Daily Life",
  },
  {
    sentence: "Pracuję z ___.",
    nominative: "entuzjazm",
    answer: "entuzjazmem",
    gender: "masculine_inanimate",
    translation: "I work with enthusiasm.",
    category: "Daily Life",
  },
  {
    sentence: "Patrzę z ___.",
    nominative: "ciekawość",
    answer: "ciekawością",
    gender: "feminine",
    translation: "I look with curiosity.",
    category: "Daily Life",
  },
  {
    sentence: "Mówię z ___.",
    nominative: "radość",
    answer: "radością",
    gender: "feminine",
    translation: "I speak with joy.",
    category: "Daily Life",
  },

  // More with animals
  {
    sentence: "Spaceru z ___.",
    nominative: "pies",
    answer: "psem",
    gender: "masculine_animate",
    translation: "I walk with a dog.",
    category: "With People (z + instr)",
    hint: "ie drops: pies → psem",
  },
  {
    sentence: "Bawię się z ___.",
    nominative: "kot",
    answer: "kotem",
    gender: "masculine_animate",
    translation: "I play with a cat.",
    category: "With People (z + instr)",
  },

  // Seasons/weather expressions
  {
    sentence: "Jesień kojarzy mi się z ___.",
    nominative: "deszcz",
    answer: "deszczem",
    gender: "masculine_inanimate",
    translation: "Autumn reminds me of rain.",
    category: "Daily Life",
  },
  {
    sentence: "Zima kojarzy mi się ze ___.",
    nominative: "śnieg",
    answer: "śniegiem",
    gender: "masculine_inanimate",
    translation: "Winter reminds me of snow.",
    category: "Daily Life",
    hint: "z + ś/sz → ze",
  },
  {
    sentence: "Lato kojarzy mi się ze ___.",
    nominative: "słońce",
    answer: "słońcem",
    gender: "neuter",
    translation: "Summer reminds me of the sun.",
    category: "Daily Life",
  },

  // Body language
  {
    sentence: "Kiwam ___.",
    nominative: "głowa",
    answer: "głową",
    gender: "feminine",
    translation: "I nod my head.",
    category: "Daily Life",
  },
  {
    sentence: "Machám ___.",
    nominative: "ręka",
    answer: "ręką",
    gender: "feminine",
    translation: "I wave my hand.",
    category: "Daily Life",
  },
  {
    sentence: "Wzruszam ___.",
    nominative: "ramiona",
    answer: "ramionami",
    gender: "neuter",
    translation: "I shrug my shoulders.",
    category: "Daily Life",
    hint: "Plural: -a → -ami",
  },
];

// Helper function to get a random sentence
export function getRandomNarzednikSentence(
  category?: string | null
): NarzednikExercise {
  const filteredSentences = category
    ? narzednikSentences.filter((s) => s.category === category)
    : narzednikSentences;
  return filteredSentences[
    Math.floor(Math.random() * filteredSentences.length)
  ];
}

