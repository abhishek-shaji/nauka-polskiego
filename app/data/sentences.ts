// Polish sentences with blanks for verb conjugation practice

export type Tense = "present" | "past" | "future";

export interface SentenceExercise {
  sentence: string; // Use ___ for the blank
  verb: string; // infinitive form
  pronoun: string; // which pronoun is used
  answer: string; // correct conjugated form
  translation: string; // English translation
  tense: Tense; // present, past, or future
  hint?: string; // optional hint
}

export const sentences: SentenceExercise[] = [
  // ============================================
  // być (to be)
  // ============================================

  // Present tense - być
  {
    sentence: "Ja ___ studentem.",
    verb: "być",
    pronoun: "ja",
    answer: "jestem",
    translation: "I am a student.",
    tense: "present",
  },
  {
    sentence: "Ty ___ bardzo miły.",
    verb: "być",
    pronoun: "ty",
    answer: "jesteś",
    translation: "You are very nice.",
    tense: "present",
  },
  {
    sentence: "On ___ lekarzem.",
    verb: "być",
    pronoun: "on",
    answer: "jest",
    translation: "He is a doctor.",
    tense: "present",
  },
  {
    sentence: "Ona ___ nauczycielką.",
    verb: "być",
    pronoun: "ona",
    answer: "jest",
    translation: "She is a teacher.",
    tense: "present",
  },
  {
    sentence: "My ___ z Polski.",
    verb: "być",
    pronoun: "my",
    answer: "jesteśmy",
    translation: "We are from Poland.",
    tense: "present",
  },
  {
    sentence: "Wy ___ bardzo zmęczeni.",
    verb: "być",
    pronoun: "wy",
    answer: "jesteście",
    translation: "You (plural) are very tired.",
    tense: "present",
  },
  {
    sentence: "Oni ___ w domu.",
    verb: "być",
    pronoun: "oni",
    answer: "są",
    translation: "They are at home.",
    tense: "present",
  },
  {
    sentence: "Państwo ___ bardzo uprzejmi.",
    verb: "być",
    pronoun: "państwo",
    answer: "są",
    translation: "You (formal plural) are very kind.",
    tense: "present",
  },

  // Past tense - być
  {
    sentence: "Ja ___ wczoraj w szkole.",
    verb: "być",
    pronoun: "ja (m)",
    answer: "byłem",
    translation: "I was at school yesterday.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ja ___ wczoraj w domu.",
    verb: "być",
    pronoun: "ja (f)",
    answer: "byłam",
    translation: "I was at home yesterday.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "Ty ___ bardzo zmęczony.",
    verb: "być",
    pronoun: "ty (m)",
    answer: "byłeś",
    translation: "You were very tired.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ bardzo miła.",
    verb: "być",
    pronoun: "ty (f)",
    answer: "byłaś",
    translation: "You were very nice.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ lekarzem.",
    verb: "być",
    pronoun: "on",
    answer: "był",
    translation: "He was a doctor.",
    tense: "past",
  },
  {
    sentence: "Ona ___ nauczycielką.",
    verb: "być",
    pronoun: "ona",
    answer: "była",
    translation: "She was a teacher.",
    tense: "past",
  },
  {
    sentence: "My ___ w kinie wczoraj.",
    verb: "być",
    pronoun: "my (m)",
    answer: "byliśmy",
    translation: "We were at the cinema yesterday.",
    tense: "past",
    hint: "masculine personal form",
  },
  {
    sentence: "Oni ___ w parku.",
    verb: "być",
    pronoun: "oni",
    answer: "byli",
    translation: "They were in the park.",
    tense: "past",
  },
  {
    sentence: "One ___ na zakupach.",
    verb: "być",
    pronoun: "one",
    answer: "były",
    translation: "They (women) were shopping.",
    tense: "past",
  },

  // Future tense - być
  {
    sentence: "Ja ___ lekarzem.",
    verb: "być",
    pronoun: "ja",
    answer: "będę",
    translation: "I will be a doctor.",
    tense: "future",
  },
  {
    sentence: "Ty ___ szczęśliwy.",
    verb: "być",
    pronoun: "ty",
    answer: "będziesz",
    translation: "You will be happy.",
    tense: "future",
  },
  {
    sentence: "On ___ tutaj o piątej.",
    verb: "być",
    pronoun: "on",
    answer: "będzie",
    translation: "He will be here at five.",
    tense: "future",
  },
  {
    sentence: "Ona ___ nauczycielką.",
    verb: "być",
    pronoun: "ona",
    answer: "będzie",
    translation: "She will be a teacher.",
    tense: "future",
  },
  {
    sentence: "My ___ razem na wakacjach.",
    verb: "być",
    pronoun: "my",
    answer: "będziemy",
    translation: "We will be together on vacation.",
    tense: "future",
  },
  {
    sentence: "Wy ___ zadowoleni.",
    verb: "być",
    pronoun: "wy",
    answer: "będziecie",
    translation: "You (plural) will be satisfied.",
    tense: "future",
  },
  {
    sentence: "Oni ___ w Polsce za tydzień.",
    verb: "być",
    pronoun: "oni",
    answer: "będą",
    translation: "They will be in Poland in a week.",
    tense: "future",
  },

  // ============================================
  // mieć (to have)
  // ============================================

  // Present tense - mieć
  {
    sentence: "Ja ___ dwa koty.",
    verb: "mieć",
    pronoun: "ja",
    answer: "mam",
    translation: "I have two cats.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ czas?",
    verb: "mieć",
    pronoun: "ty",
    answer: "masz",
    translation: "Do you have time?",
    tense: "present",
  },
  {
    sentence: "On ___ nowy samochód.",
    verb: "mieć",
    pronoun: "on",
    answer: "ma",
    translation: "He has a new car.",
    tense: "present",
  },
  {
    sentence: "Ona ___ piękne oczy.",
    verb: "mieć",
    pronoun: "ona",
    answer: "ma",
    translation: "She has beautiful eyes.",
    tense: "present",
  },
  {
    sentence: "My ___ dużo pracy.",
    verb: "mieć",
    pronoun: "my",
    answer: "mamy",
    translation: "We have a lot of work.",
    tense: "present",
  },
  {
    sentence: "Czy wy ___ dzieci?",
    verb: "mieć",
    pronoun: "wy",
    answer: "macie",
    translation: "Do you (plural) have children?",
    tense: "present",
  },
  {
    sentence: "Oni ___ duży dom.",
    verb: "mieć",
    pronoun: "oni",
    answer: "mają",
    translation: "They have a big house.",
    tense: "present",
  },

  // Past tense - mieć
  {
    sentence: "Ja ___ psa, kiedy byłem dzieckiem.",
    verb: "mieć",
    pronoun: "ja (m)",
    answer: "miałem",
    translation: "I had a dog when I was a child.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ja ___ dobry dzień.",
    verb: "mieć",
    pronoun: "ja (f)",
    answer: "miałam",
    translation: "I had a good day.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "Ty ___ rację.",
    verb: "mieć",
    pronoun: "ty (m)",
    answer: "miałeś",
    translation: "You were right.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "On ___ szczęście.",
    verb: "mieć",
    pronoun: "on",
    answer: "miał",
    translation: "He was lucky.",
    tense: "past",
  },
  {
    sentence: "Ona ___ piękny ogród.",
    verb: "mieć",
    pronoun: "ona",
    answer: "miała",
    translation: "She had a beautiful garden.",
    tense: "past",
  },
  {
    sentence: "My ___ dużo czasu wczoraj.",
    verb: "mieć",
    pronoun: "my (m)",
    answer: "mieliśmy",
    translation: "We had a lot of time yesterday.",
    tense: "past",
    hint: "masculine personal form",
  },
  {
    sentence: "Oni ___ problem z komputerem.",
    verb: "mieć",
    pronoun: "oni",
    answer: "mieli",
    translation: "They had a problem with the computer.",
    tense: "past",
  },

  // Future tense - mieć (compound: będę + infinitive)
  {
    sentence: "Ja ___ czas jutro.",
    verb: "mieć",
    pronoun: "ja",
    answer: "będę mieć",
    translation: "I will have time tomorrow.",
    tense: "future",
    hint: "będę + infinitive",
  },
  {
    sentence: "Ty ___ nowy samochód.",
    verb: "mieć",
    pronoun: "ty",
    answer: "będziesz mieć",
    translation: "You will have a new car.",
    tense: "future",
    hint: "będziesz + infinitive",
  },
  {
    sentence: "On ___ dużo pracy.",
    verb: "mieć",
    pronoun: "on",
    answer: "będzie mieć",
    translation: "He will have a lot of work.",
    tense: "future",
    hint: "będzie + infinitive",
  },
  {
    sentence: "My ___ gości w weekend.",
    verb: "mieć",
    pronoun: "my",
    answer: "będziemy mieć",
    translation: "We will have guests on the weekend.",
    tense: "future",
    hint: "będziemy + infinitive",
  },
  {
    sentence: "Oni ___ dzieci.",
    verb: "mieć",
    pronoun: "oni",
    answer: "będą mieć",
    translation: "They will have children.",
    tense: "future",
    hint: "będą + infinitive",
  },

  // ============================================
  // mieszkać (to live)
  // ============================================

  // Present tense - mieszkać
  {
    sentence: "Ja ___ w Warszawie.",
    verb: "mieszkać",
    pronoun: "ja",
    answer: "mieszkam",
    translation: "I live in Warsaw.",
    tense: "present",
  },
  {
    sentence: "Gdzie ty ___?",
    verb: "mieszkać",
    pronoun: "ty",
    answer: "mieszkasz",
    translation: "Where do you live?",
    tense: "present",
  },
  {
    sentence: "On ___ z rodzicami.",
    verb: "mieszkać",
    pronoun: "on",
    answer: "mieszka",
    translation: "He lives with his parents.",
    tense: "present",
  },
  {
    sentence: "My ___ w centrum miasta.",
    verb: "mieszkać",
    pronoun: "my",
    answer: "mieszkamy",
    translation: "We live in the city center.",
    tense: "present",
  },
  {
    sentence: "Oni ___ na wsi.",
    verb: "mieszkać",
    pronoun: "oni",
    answer: "mieszkają",
    translation: "They live in the countryside.",
    tense: "present",
  },

  // Past tense - mieszkać
  {
    sentence: "Ja ___ w Krakowie przez pięć lat.",
    verb: "mieszkać",
    pronoun: "ja (m)",
    answer: "mieszkałem",
    translation: "I lived in Kraków for five years.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ w hotelu?",
    verb: "mieszkać",
    pronoun: "ty (f)",
    answer: "mieszkałaś",
    translation: "Did you stay in a hotel?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ z rodzicami do 25 roku życia.",
    verb: "mieszkać",
    pronoun: "on",
    answer: "mieszkał",
    translation: "He lived with his parents until 25.",
    tense: "past",
  },
  {
    sentence: "Ona ___ w Paryżu.",
    verb: "mieszkać",
    pronoun: "ona",
    answer: "mieszkała",
    translation: "She lived in Paris.",
    tense: "past",
  },
  {
    sentence: "My ___ razem przez rok.",
    verb: "mieszkać",
    pronoun: "my (m)",
    answer: "mieszkaliśmy",
    translation: "We lived together for a year.",
    tense: "past",
  },

  // Future tense - mieszkać
  {
    sentence: "Ja ___ w nowym mieszkaniu.",
    verb: "mieszkać",
    pronoun: "ja",
    answer: "będę mieszkać",
    translation: "I will live in a new apartment.",
    tense: "future",
  },
  {
    sentence: "Ty ___ z nami?",
    verb: "mieszkać",
    pronoun: "ty",
    answer: "będziesz mieszkać",
    translation: "Will you live with us?",
    tense: "future",
  },
  {
    sentence: "Ona ___ w centrum.",
    verb: "mieszkać",
    pronoun: "ona",
    answer: "będzie mieszkać",
    translation: "She will live in the center.",
    tense: "future",
  },
  {
    sentence: "My ___ w domu nad morzem.",
    verb: "mieszkać",
    pronoun: "my",
    answer: "będziemy mieszkać",
    translation: "We will live in a house by the sea.",
    tense: "future",
  },

  // ============================================
  // mówić (to speak)
  // ============================================

  // Present tense - mówić
  {
    sentence: "Ja ___ po polsku.",
    verb: "mówić",
    pronoun: "ja",
    answer: "mówię",
    translation: "I speak Polish.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ po angielsku?",
    verb: "mówić",
    pronoun: "ty",
    answer: "mówisz",
    translation: "Do you speak English?",
    tense: "present",
  },
  {
    sentence: "Ona ___ bardzo cicho.",
    verb: "mówić",
    pronoun: "ona",
    answer: "mówi",
    translation: "She speaks very quietly.",
    tense: "present",
  },
  {
    sentence: "My ___ prawdę.",
    verb: "mówić",
    pronoun: "my",
    answer: "mówimy",
    translation: "We speak the truth.",
    tense: "present",
  },
  {
    sentence: "Oni ___ po niemiecku.",
    verb: "mówić",
    pronoun: "oni",
    answer: "mówią",
    translation: "They speak German.",
    tense: "present",
  },

  // Past tense - mówić
  {
    sentence: "Co ty ___?",
    verb: "mówić",
    pronoun: "ty (m)",
    answer: "mówiłeś",
    translation: "What did you say?",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ona ___ bardzo głośno.",
    verb: "mówić",
    pronoun: "ona",
    answer: "mówiła",
    translation: "She spoke very loudly.",
    tense: "past",
  },
  {
    sentence: "On ___ prawdę.",
    verb: "mówić",
    pronoun: "on",
    answer: "mówił",
    translation: "He told the truth.",
    tense: "past",
  },
  {
    sentence: "My ___ o tobie.",
    verb: "mówić",
    pronoun: "my (m)",
    answer: "mówiliśmy",
    translation: "We were talking about you.",
    tense: "past",
  },
  {
    sentence: "Oni ___ po angielsku na spotkaniu.",
    verb: "mówić",
    pronoun: "oni",
    answer: "mówili",
    translation: "They spoke English at the meeting.",
    tense: "past",
  },

  // Future tense - mówić
  {
    sentence: "Ja ___ z szefem jutro.",
    verb: "mówić",
    pronoun: "ja",
    answer: "będę mówić",
    translation: "I will talk to the boss tomorrow.",
    tense: "future",
  },
  {
    sentence: "Ty ___ pierwszy.",
    verb: "mówić",
    pronoun: "ty",
    answer: "będziesz mówić",
    translation: "You will speak first.",
    tense: "future",
  },
  {
    sentence: "On ___ na konferencji.",
    verb: "mówić",
    pronoun: "on",
    answer: "będzie mówić",
    translation: "He will speak at the conference.",
    tense: "future",
  },

  // ============================================
  // pracować (to work)
  // ============================================

  // Present tense - pracować
  {
    sentence: "Ja ___ w biurze.",
    verb: "pracować",
    pronoun: "ja",
    answer: "pracuję",
    translation: "I work in an office.",
    tense: "present",
  },
  {
    sentence: "Gdzie ty ___?",
    verb: "pracować",
    pronoun: "ty",
    answer: "pracujesz",
    translation: "Where do you work?",
    tense: "present",
  },
  {
    sentence: "On ___ jako programista.",
    verb: "pracować",
    pronoun: "on",
    answer: "pracuje",
    translation: "He works as a programmer.",
    tense: "present",
  },
  {
    sentence: "My ___ razem.",
    verb: "pracować",
    pronoun: "my",
    answer: "pracujemy",
    translation: "We work together.",
    tense: "present",
  },
  {
    sentence: "Oni ___ w weekendy.",
    verb: "pracować",
    pronoun: "oni",
    answer: "pracują",
    translation: "They work on weekends.",
    tense: "present",
  },

  // Past tense - pracować
  {
    sentence: "Ja ___ w fabryce przez dziesięć lat.",
    verb: "pracować",
    pronoun: "ja (m)",
    answer: "pracowałem",
    translation: "I worked in a factory for ten years.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ cały dzień.",
    verb: "pracować",
    pronoun: "ty (f)",
    answer: "pracowałaś",
    translation: "You worked all day.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ jako kelner.",
    verb: "pracować",
    pronoun: "on",
    answer: "pracował",
    translation: "He worked as a waiter.",
    tense: "past",
  },
  {
    sentence: "Ona ___ w banku.",
    verb: "pracować",
    pronoun: "ona",
    answer: "pracowała",
    translation: "She worked at a bank.",
    tense: "past",
  },
  {
    sentence: "My ___ nad tym projektem.",
    verb: "pracować",
    pronoun: "my (m)",
    answer: "pracowaliśmy",
    translation: "We worked on this project.",
    tense: "past",
  },

  // Future tense - pracować
  {
    sentence: "Ja ___ w domu jutro.",
    verb: "pracować",
    pronoun: "ja",
    answer: "będę pracować",
    translation: "I will work from home tomorrow.",
    tense: "future",
  },
  {
    sentence: "Ty ___ z nami?",
    verb: "pracować",
    pronoun: "ty",
    answer: "będziesz pracować",
    translation: "Will you work with us?",
    tense: "future",
  },
  {
    sentence: "On ___ w nowej firmie.",
    verb: "pracować",
    pronoun: "on",
    answer: "będzie pracować",
    translation: "He will work at a new company.",
    tense: "future",
  },
  {
    sentence: "My ___ ciężko.",
    verb: "pracować",
    pronoun: "my",
    answer: "będziemy pracować",
    translation: "We will work hard.",
    tense: "future",
  },

  // ============================================
  // czytać (to read)
  // ============================================

  // Present tense - czytać
  {
    sentence: "Ja ___ książkę.",
    verb: "czytać",
    pronoun: "ja",
    answer: "czytam",
    translation: "I am reading a book.",
    tense: "present",
  },
  {
    sentence: "Co ty ___?",
    verb: "czytać",
    pronoun: "ty",
    answer: "czytasz",
    translation: "What are you reading?",
    tense: "present",
  },
  {
    sentence: "Ona ___ gazetę każdego ranka.",
    verb: "czytać",
    pronoun: "ona",
    answer: "czyta",
    translation: "She reads the newspaper every morning.",
    tense: "present",
  },
  {
    sentence: "My ___ dużo.",
    verb: "czytać",
    pronoun: "my",
    answer: "czytamy",
    translation: "We read a lot.",
    tense: "present",
  },
  {
    sentence: "Dzieci ___ bajki.",
    verb: "czytać",
    pronoun: "one",
    answer: "czytają",
    translation: "Children read fairy tales.",
    tense: "present",
  },

  // Past tense - czytać
  {
    sentence: "Ja ___ tę książkę w zeszłym roku.",
    verb: "czytać",
    pronoun: "ja (m)",
    answer: "czytałem",
    translation: "I read this book last year.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ mój list?",
    verb: "czytać",
    pronoun: "ty (f)",
    answer: "czytałaś",
    translation: "Did you read my letter?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ gazetę przy śniadaniu.",
    verb: "czytać",
    pronoun: "on",
    answer: "czytał",
    translation: "He read the newspaper at breakfast.",
    tense: "past",
  },
  {
    sentence: "Ona ___ nam bajki przed snem.",
    verb: "czytać",
    pronoun: "ona",
    answer: "czytała",
    translation: "She read us fairy tales before bed.",
    tense: "past",
  },
  {
    sentence: "My ___ razem wieczorami.",
    verb: "czytać",
    pronoun: "my (m)",
    answer: "czytaliśmy",
    translation: "We used to read together in the evenings.",
    tense: "past",
  },

  // Future tense - czytać
  {
    sentence: "Ja ___ tę książkę w weekend.",
    verb: "czytać",
    pronoun: "ja",
    answer: "będę czytać",
    translation: "I will read this book on the weekend.",
    tense: "future",
  },
  {
    sentence: "Ty ___ mi na głos?",
    verb: "czytać",
    pronoun: "ty",
    answer: "będziesz czytać",
    translation: "Will you read aloud to me?",
    tense: "future",
  },
  {
    sentence: "Ona ___ nową powieść.",
    verb: "czytać",
    pronoun: "ona",
    answer: "będzie czytać",
    translation: "She will read a new novel.",
    tense: "future",
  },

  // ============================================
  // pisać (to write)
  // ============================================

  // Present tense - pisać
  {
    sentence: "Ja ___ list do mamy.",
    verb: "pisać",
    pronoun: "ja",
    answer: "piszę",
    translation: "I am writing a letter to my mom.",
    tense: "present",
  },
  {
    sentence: "Ty ___ bardzo ładnie.",
    verb: "pisać",
    pronoun: "ty",
    answer: "piszesz",
    translation: "You write very nicely.",
    tense: "present",
  },
  {
    sentence: "On ___ książkę.",
    verb: "pisać",
    pronoun: "on",
    answer: "pisze",
    translation: "He is writing a book.",
    tense: "present",
  },
  {
    sentence: "My ___ e-maile.",
    verb: "pisać",
    pronoun: "my",
    answer: "piszemy",
    translation: "We write emails.",
    tense: "present",
  },

  // Past tense - pisać
  {
    sentence: "Ja ___ list przez godzinę.",
    verb: "pisać",
    pronoun: "ja (m)",
    answer: "pisałem",
    translation: "I was writing the letter for an hour.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ do niego wczoraj?",
    verb: "pisać",
    pronoun: "ty (f)",
    answer: "pisałaś",
    translation: "Did you write to him yesterday?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ wiersze.",
    verb: "pisać",
    pronoun: "on",
    answer: "pisał",
    translation: "He wrote poems.",
    tense: "past",
  },
  {
    sentence: "Ona ___ pamiętnik.",
    verb: "pisać",
    pronoun: "ona",
    answer: "pisała",
    translation: "She wrote a diary.",
    tense: "past",
  },

  // Future tense - pisać
  {
    sentence: "Ja ___ do ciebie jutro.",
    verb: "pisać",
    pronoun: "ja",
    answer: "będę pisać",
    translation: "I will write to you tomorrow.",
    tense: "future",
  },
  {
    sentence: "On ___ swoją autobiografię.",
    verb: "pisać",
    pronoun: "on",
    answer: "będzie pisać",
    translation: "He will write his autobiography.",
    tense: "future",
  },

  // ============================================
  // robić (to do/make)
  // ============================================

  // Present tense - robić
  {
    sentence: "Co ty ___?",
    verb: "robić",
    pronoun: "ty",
    answer: "robisz",
    translation: "What are you doing?",
    tense: "present",
  },
  {
    sentence: "Ja ___ śniadanie.",
    verb: "robić",
    pronoun: "ja",
    answer: "robię",
    translation: "I am making breakfast.",
    tense: "present",
  },
  {
    sentence: "Ona ___ zakupy.",
    verb: "robić",
    pronoun: "ona",
    answer: "robi",
    translation: "She is doing the shopping.",
    tense: "present",
  },
  {
    sentence: "Co wy ___?",
    verb: "robić",
    pronoun: "wy",
    answer: "robicie",
    translation: "What are you (plural) doing?",
    tense: "present",
  },
  {
    sentence: "Oni ___ porządki.",
    verb: "robić",
    pronoun: "oni",
    answer: "robią",
    translation: "They are cleaning up.",
    tense: "present",
  },

  // Past tense - robić
  {
    sentence: "Co ty ___ wczoraj wieczorem?",
    verb: "robić",
    pronoun: "ty (m)",
    answer: "robiłeś",
    translation: "What were you doing yesterday evening?",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ja ___ zakupy rano.",
    verb: "robić",
    pronoun: "ja (f)",
    answer: "robiłam",
    translation: "I was doing the shopping in the morning.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ obiad dla gości.",
    verb: "robić",
    pronoun: "on",
    answer: "robił",
    translation: "He was making dinner for the guests.",
    tense: "past",
  },
  {
    sentence: "Ona ___ porządek w szafie.",
    verb: "robić",
    pronoun: "ona",
    answer: "robiła",
    translation: "She was tidying up the wardrobe.",
    tense: "past",
  },
  {
    sentence: "My ___ projekt całą noc.",
    verb: "robić",
    pronoun: "my (m)",
    answer: "robiliśmy",
    translation: "We were working on the project all night.",
    tense: "past",
  },

  // Future tense - robić
  {
    sentence: "Co ty ___ w weekend?",
    verb: "robić",
    pronoun: "ty",
    answer: "będziesz robić",
    translation: "What will you be doing on the weekend?",
    tense: "future",
  },
  {
    sentence: "Ja ___ to jutro.",
    verb: "robić",
    pronoun: "ja",
    answer: "będę robić",
    translation: "I will do it tomorrow.",
    tense: "future",
  },
  {
    sentence: "My ___ remont w lecie.",
    verb: "robić",
    pronoun: "my",
    answer: "będziemy robić",
    translation: "We will do renovations in the summer.",
    tense: "future",
  },

  // ============================================
  // jeść (to eat)
  // ============================================

  // Present tense - jeść
  {
    sentence: "Ja ___ obiad.",
    verb: "jeść",
    pronoun: "ja",
    answer: "jem",
    translation: "I am eating lunch.",
    tense: "present",
  },
  {
    sentence: "Co ty ___?",
    verb: "jeść",
    pronoun: "ty",
    answer: "jesz",
    translation: "What are you eating?",
    tense: "present",
  },
  {
    sentence: "On ___ jabłko.",
    verb: "jeść",
    pronoun: "on",
    answer: "je",
    translation: "He is eating an apple.",
    tense: "present",
  },
  {
    sentence: "My ___ razem.",
    verb: "jeść",
    pronoun: "my",
    answer: "jemy",
    translation: "We eat together.",
    tense: "present",
  },
  {
    sentence: "Dzieci ___ słodycze.",
    verb: "jeść",
    pronoun: "one",
    answer: "jedzą",
    translation: "Children eat sweets.",
    tense: "present",
  },

  // Past tense - jeść
  {
    sentence: "Ja ___ śniadanie o ósmej.",
    verb: "jeść",
    pronoun: "ja (m)",
    answer: "jadłem",
    translation: "I ate breakfast at eight.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ obiad w restauracji?",
    verb: "jeść",
    pronoun: "ty (f)",
    answer: "jadłaś",
    translation: "Did you eat lunch at a restaurant?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ za dużo.",
    verb: "jeść",
    pronoun: "on",
    answer: "jadł",
    translation: "He ate too much.",
    tense: "past",
  },
  {
    sentence: "Ona ___ kolację sama.",
    verb: "jeść",
    pronoun: "ona",
    answer: "jadła",
    translation: "She ate dinner alone.",
    tense: "past",
  },
  {
    sentence: "My ___ razem wczoraj.",
    verb: "jeść",
    pronoun: "my (m)",
    answer: "jedliśmy",
    translation: "We ate together yesterday.",
    tense: "past",
  },

  // Future tense - jeść
  {
    sentence: "Ja ___ śniadanie o siódmej.",
    verb: "jeść",
    pronoun: "ja",
    answer: "będę jeść",
    translation: "I will eat breakfast at seven.",
    tense: "future",
  },
  {
    sentence: "Ty ___ z nami?",
    verb: "jeść",
    pronoun: "ty",
    answer: "będziesz jeść",
    translation: "Will you eat with us?",
    tense: "future",
  },
  {
    sentence: "Oni ___ obiad o pierwszej.",
    verb: "jeść",
    pronoun: "oni",
    answer: "będą jeść",
    translation: "They will eat lunch at one.",
    tense: "future",
  },

  // ============================================
  // pić (to drink)
  // ============================================

  // Present tense - pić
  {
    sentence: "Ja ___ kawę.",
    verb: "pić",
    pronoun: "ja",
    answer: "piję",
    translation: "I drink coffee.",
    tense: "present",
  },
  {
    sentence: "Co ty ___?",
    verb: "pić",
    pronoun: "ty",
    answer: "pijesz",
    translation: "What are you drinking?",
    tense: "present",
  },
  {
    sentence: "Ona ___ herbatę.",
    verb: "pić",
    pronoun: "ona",
    answer: "pije",
    translation: "She drinks tea.",
    tense: "present",
  },
  {
    sentence: "My ___ wodę.",
    verb: "pić",
    pronoun: "my",
    answer: "pijemy",
    translation: "We drink water.",
    tense: "present",
  },
  {
    sentence: "Oni ___ piwo.",
    verb: "pić",
    pronoun: "oni",
    answer: "piją",
    translation: "They drink beer.",
    tense: "present",
  },

  // Past tense - pić
  {
    sentence: "Ja ___ kawę rano.",
    verb: "pić",
    pronoun: "ja (m)",
    answer: "piłem",
    translation: "I drank coffee in the morning.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ herbatę przed snem?",
    verb: "pić",
    pronoun: "ty (f)",
    answer: "piłaś",
    translation: "Did you drink tea before bed?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ dużo wody.",
    verb: "pić",
    pronoun: "on",
    answer: "pił",
    translation: "He drank a lot of water.",
    tense: "past",
  },
  {
    sentence: "Ona ___ wino na kolacji.",
    verb: "pić",
    pronoun: "ona",
    answer: "piła",
    translation: "She drank wine at dinner.",
    tense: "past",
  },
  {
    sentence: "My ___ szampana na sylwestra.",
    verb: "pić",
    pronoun: "my (m)",
    answer: "piliśmy",
    translation: "We drank champagne on New Year's Eve.",
    tense: "past",
  },

  // Future tense - pić
  {
    sentence: "Ja ___ tylko wodę.",
    verb: "pić",
    pronoun: "ja",
    answer: "będę pić",
    translation: "I will only drink water.",
    tense: "future",
  },
  {
    sentence: "Ty ___ z nami wino?",
    verb: "pić",
    pronoun: "ty",
    answer: "będziesz pić",
    translation: "Will you drink wine with us?",
    tense: "future",
  },
  {
    sentence: "Oni ___ kawę po obiedzie.",
    verb: "pić",
    pronoun: "oni",
    answer: "będą pić",
    translation: "They will drink coffee after lunch.",
    tense: "future",
  },

  // ============================================
  // lubić (to like)
  // ============================================

  // Present tense - lubić
  {
    sentence: "Ja ___ czekoladę.",
    verb: "lubić",
    pronoun: "ja",
    answer: "lubię",
    translation: "I like chocolate.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ muzykę?",
    verb: "lubić",
    pronoun: "ty",
    answer: "lubisz",
    translation: "Do you like music?",
    tense: "present",
  },
  {
    sentence: "On ___ sport.",
    verb: "lubić",
    pronoun: "on",
    answer: "lubi",
    translation: "He likes sports.",
    tense: "present",
  },
  {
    sentence: "My ___ podróżować.",
    verb: "lubić",
    pronoun: "my",
    answer: "lubimy",
    translation: "We like to travel.",
    tense: "present",
  },
  {
    sentence: "Oni ___ polską kuchnię.",
    verb: "lubić",
    pronoun: "oni",
    answer: "lubią",
    translation: "They like Polish cuisine.",
    tense: "present",
  },

  // Past tense - lubić
  {
    sentence: "Ja ___ tę piosenkę kiedy byłem młodszy.",
    verb: "lubić",
    pronoun: "ja (m)",
    answer: "lubiłem",
    translation: "I used to like this song when I was younger.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty zawsze ___ lody.",
    verb: "lubić",
    pronoun: "ty (f)",
    answer: "lubiłaś",
    translation: "You always liked ice cream.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ czytać książki.",
    verb: "lubić",
    pronoun: "on",
    answer: "lubił",
    translation: "He used to like reading books.",
    tense: "past",
  },
  {
    sentence: "Ona nie ___ gotować.",
    verb: "lubić",
    pronoun: "ona",
    answer: "lubiła",
    translation: "She didn't like cooking.",
    tense: "past",
  },
  {
    sentence: "My ___ chodzić na spacery.",
    verb: "lubić",
    pronoun: "my (m)",
    answer: "lubiliśmy",
    translation: "We used to like going for walks.",
    tense: "past",
  },

  // Future tense - lubić
  // (częściej używa się: polubić jako czasownik dokonany, ale tu ćwiczymy konstrukcję będę lubić)
  {
    sentence: "Ty ___ to miejsce.",
    verb: "lubić",
    pronoun: "ty",
    answer: "będziesz lubić",
    translation: "You will like this place.",
    tense: "future",
  },
  {
    sentence: "Ona ___ moich rodziców.",
    verb: "lubić",
    pronoun: "ona",
    answer: "będzie lubić",
    translation: "She will like my parents.",
    tense: "future",
  },

  // ============================================
  // chcieć (to want)
  // ============================================

  // Present tense - chcieć
  {
    sentence: "Ja ___ herbatę.",
    verb: "chcieć",
    pronoun: "ja",
    answer: "chcę",
    translation: "I want tea.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ iść do kina?",
    verb: "chcieć",
    pronoun: "ty",
    answer: "chcesz",
    translation: "Do you want to go to the cinema?",
    tense: "present",
  },
  {
    sentence: "On ___ kupić nowy telefon.",
    verb: "chcieć",
    pronoun: "on",
    answer: "chce",
    translation: "He wants to buy a new phone.",
    tense: "present",
  },
  {
    sentence: "My ___ odpocząć.",
    verb: "chcieć",
    pronoun: "my",
    answer: "chcemy",
    translation: "We want to rest.",
    tense: "present",
  },
  {
    sentence: "Oni ___ pojechać na wakacje.",
    verb: "chcieć",
    pronoun: "oni",
    answer: "chcą",
    translation: "They want to go on vacation.",
    tense: "present",
  },

  // Past tense - chcieć
  {
    sentence: "Ja ___ zostać w domu.",
    verb: "chcieć",
    pronoun: "ja (m)",
    answer: "chciałem",
    translation: "I wanted to stay home.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Co ty ___ powiedzieć?",
    verb: "chcieć",
    pronoun: "ty (f)",
    answer: "chciałaś",
    translation: "What did you want to say?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ ci pomóc.",
    verb: "chcieć",
    pronoun: "on",
    answer: "chciał",
    translation: "He wanted to help you.",
    tense: "past",
  },
  {
    sentence: "Ona ___ wyjść wcześniej.",
    verb: "chcieć",
    pronoun: "ona",
    answer: "chciała",
    translation: "She wanted to leave earlier.",
    tense: "past",
  },
  {
    sentence: "My ___ to zrobić inaczej.",
    verb: "chcieć",
    pronoun: "my (m)",
    answer: "chcieliśmy",
    translation: "We wanted to do it differently.",
    tense: "past",
  },
  {
    sentence: "Oni nie ___ słuchać.",
    verb: "chcieć",
    pronoun: "oni",
    answer: "chcieli",
    translation: "They didn't want to listen.",
    tense: "past",
  },

  // Future tense - chcieć
  {
    sentence: "Ja ___ nauczyć się polskiego.",
    verb: "chcieć",
    pronoun: "ja",
    answer: "będę chciał",
    translation: "I will want to learn Polish.",
    tense: "future",
    hint: "masculine: będę chciał, feminine: będę chciała",
  },
  {
    sentence: "Ty ___ wiedzieć więcej.",
    verb: "chcieć",
    pronoun: "ty",
    answer: "będziesz chciał",
    translation: "You will want to know more.",
    tense: "future",
    hint: "masculine form",
  },
  {
    sentence: "On ___ wrócić.",
    verb: "chcieć",
    pronoun: "on",
    answer: "będzie chciał",
    translation: "He will want to come back.",
    tense: "future",
  },

  // ============================================
  // móc (can/to be able to)
  // ============================================

  // Present tense - móc
  {
    sentence: "Ja ___ ci pomóc.",
    verb: "móc",
    pronoun: "ja",
    answer: "mogę",
    translation: "I can help you.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ przyjść jutro?",
    verb: "móc",
    pronoun: "ty",
    answer: "możesz",
    translation: "Can you come tomorrow?",
    tense: "present",
  },
  {
    sentence: "On nie ___ spać.",
    verb: "móc",
    pronoun: "on",
    answer: "może",
    translation: "He cannot sleep.",
    tense: "present",
  },
  {
    sentence: "My ___ to zrobić.",
    verb: "móc",
    pronoun: "my",
    answer: "możemy",
    translation: "We can do it.",
    tense: "present",
  },
  {
    sentence: "Oni ___ przyjść później.",
    verb: "móc",
    pronoun: "oni",
    answer: "mogą",
    translation: "They can come later.",
    tense: "present",
  },

  // Past tense - móc
  {
    sentence: "Ja nie ___ zasnąć.",
    verb: "móc",
    pronoun: "ja (m)",
    answer: "mogłem",
    translation: "I couldn't fall asleep.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ mi powiedzieć wcześniej.",
    verb: "móc",
    pronoun: "ty (f)",
    answer: "mogłaś",
    translation: "You could have told me earlier.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On nie ___ przyjść.",
    verb: "móc",
    pronoun: "on",
    answer: "mógł",
    translation: "He couldn't come.",
    tense: "past",
  },
  {
    sentence: "Ona ___ wszystko zrozumieć.",
    verb: "móc",
    pronoun: "ona",
    answer: "mogła",
    translation: "She could understand everything.",
    tense: "past",
  },
  {
    sentence: "My nie ___ tego zrobić.",
    verb: "móc",
    pronoun: "my (m)",
    answer: "mogliśmy",
    translation: "We couldn't do it.",
    tense: "past",
  },
  {
    sentence: "Oni ___ wyjść wcześniej.",
    verb: "móc",
    pronoun: "oni",
    answer: "mogli",
    translation: "They were able to leave earlier.",
    tense: "past",
  },

  // Future tense - móc
  {
    sentence: "Ja ___ to zrobić jutro.",
    verb: "móc",
    pronoun: "ja",
    answer: "będę mógł",
    translation: "I will be able to do it tomorrow.",
    tense: "future",
    hint: "masculine: będę mógł, feminine: będę mogła",
  },
  {
    sentence: "Ty ___ przyjść?",
    verb: "móc",
    pronoun: "ty",
    answer: "będziesz mógł",
    translation: "Will you be able to come?",
    tense: "future",
    hint: "masculine form",
  },
  {
    sentence: "On ___ nam pomóc.",
    verb: "móc",
    pronoun: "on",
    answer: "będzie mógł",
    translation: "He will be able to help us.",
    tense: "future",
  },
  {
    sentence: "Ona ___ to zrobić sama.",
    verb: "móc",
    pronoun: "ona",
    answer: "będzie mogła",
    translation: "She will be able to do it herself.",
    tense: "future",
  },

  // ============================================
  // musieć (must/to have to)
  // ============================================

  // Present tense - musieć
  {
    sentence: "Ja ___ iść do pracy.",
    verb: "musieć",
    pronoun: "ja",
    answer: "muszę",
    translation: "I have to go to work.",
    tense: "present",
  },
  {
    sentence: "Ty ___ się uczyć.",
    verb: "musieć",
    pronoun: "ty",
    answer: "musisz",
    translation: "You have to study.",
    tense: "present",
  },
  {
    sentence: "On ___ wstać wcześnie.",
    verb: "musieć",
    pronoun: "on",
    answer: "musi",
    translation: "He has to get up early.",
    tense: "present",
  },
  {
    sentence: "My ___ to skończyć.",
    verb: "musieć",
    pronoun: "my",
    answer: "musimy",
    translation: "We have to finish it.",
    tense: "present",
  },
  {
    sentence: "Oni ___ zapłacić rachunek.",
    verb: "musieć",
    pronoun: "oni",
    answer: "muszą",
    translation: "They have to pay the bill.",
    tense: "present",
  },

  // Past tense - musieć
  {
    sentence: "Ja ___ zostać w domu.",
    verb: "musieć",
    pronoun: "ja (m)",
    answer: "musiałem",
    translation: "I had to stay at home.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ wyjść wcześniej?",
    verb: "musieć",
    pronoun: "ty (f)",
    answer: "musiałaś",
    translation: "Did you have to leave earlier?",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ pracować do późna.",
    verb: "musieć",
    pronoun: "on",
    answer: "musiał",
    translation: "He had to work late.",
    tense: "past",
  },
  {
    sentence: "Ona ___ się uczyć na egzamin.",
    verb: "musieć",
    pronoun: "ona",
    answer: "musiała",
    translation: "She had to study for the exam.",
    tense: "past",
  },
  {
    sentence: "My ___ to zrobić sami.",
    verb: "musieć",
    pronoun: "my (m)",
    answer: "musieliśmy",
    translation: "We had to do it ourselves.",
    tense: "past",
  },

  // Future tense - musieć
  {
    sentence: "Ja ___ iść do lekarza.",
    verb: "musieć",
    pronoun: "ja",
    answer: "będę musiał",
    translation: "I will have to go to the doctor.",
    tense: "future",
    hint: "masculine: będę musiał, feminine: będę musiała",
  },
  {
    sentence: "Ty ___ to przemyśleć.",
    verb: "musieć",
    pronoun: "ty",
    answer: "będziesz musiał",
    translation: "You will have to think about it.",
    tense: "future",
    hint: "masculine form",
  },
  {
    sentence: "On ___ zdecydować.",
    verb: "musieć",
    pronoun: "on",
    answer: "będzie musiał",
    translation: "He will have to decide.",
    tense: "future",
  },

  // ============================================
  // iść (to go - on foot)
  // ============================================

  // Present tense - iść
  {
    sentence: "Ja ___ do szkoły.",
    verb: "iść",
    pronoun: "ja",
    answer: "idę",
    translation: "I am going to school.",
    tense: "present",
  },
  {
    sentence: "Dokąd ty ___?",
    verb: "iść",
    pronoun: "ty",
    answer: "idziesz",
    translation: "Where are you going?",
    tense: "present",
  },
  {
    sentence: "Ona ___ na spacer.",
    verb: "iść",
    pronoun: "ona",
    answer: "idzie",
    translation: "She is going for a walk.",
    tense: "present",
  },
  {
    sentence: "My ___ do kina.",
    verb: "iść",
    pronoun: "my",
    answer: "idziemy",
    translation: "We are going to the cinema.",
    tense: "present",
  },
  {
    sentence: "Oni ___ do parku.",
    verb: "iść",
    pronoun: "oni",
    answer: "idą",
    translation: "They are going to the park.",
    tense: "present",
  },

  // Past tense - iść (szedłem/szłam)
  {
    sentence: "Ja ___ ulicą, kiedy zaczęło padać.",
    verb: "iść",
    pronoun: "ja (m)",
    answer: "szedłem",
    translation: "I was walking down the street when it started to rain.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ja ___ do domu bardzo wolno.",
    verb: "iść",
    pronoun: "ja (f)",
    answer: "szłam",
    translation: "I was walking home very slowly.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ przez park.",
    verb: "iść",
    pronoun: "on",
    answer: "szedł",
    translation: "He was walking through the park.",
    tense: "past",
  },
  {
    sentence: "Ona ___ do sklepu.",
    verb: "iść",
    pronoun: "ona",
    answer: "szła",
    translation: "She was going to the store.",
    tense: "past",
  },
  {
    sentence: "My ___ razem do szkoły.",
    verb: "iść",
    pronoun: "my (m)",
    answer: "szliśmy",
    translation: "We were walking to school together.",
    tense: "past",
  },
  {
    sentence: "Oni ___ bardzo szybko.",
    verb: "iść",
    pronoun: "oni",
    answer: "szli",
    translation: "They were walking very fast.",
    tense: "past",
  },

  // Future tense - iść (pójść - perfective for future)
  {
    sentence: "Ja ___ do lekarza jutro.",
    verb: "iść",
    pronoun: "ja",
    answer: "pójdę",
    translation: "I will go to the doctor tomorrow.",
    tense: "future",
    hint: "Use perfective: pójść",
  },
  {
    sentence: "Ty ___ z nami?",
    verb: "iść",
    pronoun: "ty",
    answer: "pójdziesz",
    translation: "Will you go with us?",
    tense: "future",
    hint: "Use perfective: pójść",
  },
  {
    sentence: "Ona ___ na zakupy po pracy.",
    verb: "iść",
    pronoun: "ona",
    answer: "pójdzie",
    translation: "She will go shopping after work.",
    tense: "future",
    hint: "Use perfective: pójść",
  },
  {
    sentence: "My ___ do kina w sobotę.",
    verb: "iść",
    pronoun: "my",
    answer: "pójdziemy",
    translation: "We will go to the cinema on Saturday.",
    tense: "future",
    hint: "Use perfective: pójść",
  },
  {
    sentence: "Oni ___ na plażę.",
    verb: "iść",
    pronoun: "oni",
    answer: "pójdą",
    translation: "They will go to the beach.",
    tense: "future",
    hint: "Use perfective: pójść",
  },

  // ============================================
  // jechać (to go - by vehicle)
  // ============================================

  // Present tense - jechać
  {
    sentence: "Ja ___ do Krakowa.",
    verb: "jechać",
    pronoun: "ja",
    answer: "jadę",
    translation: "I am going to Kraków.",
    tense: "present",
  },
  {
    sentence: "Dokąd ty ___?",
    verb: "jechać",
    pronoun: "ty",
    answer: "jedziesz",
    translation: "Where are you going (by vehicle)?",
    tense: "present",
  },
  {
    sentence: "On ___ samochodem.",
    verb: "jechać",
    pronoun: "on",
    answer: "jedzie",
    translation: "He is going by car.",
    tense: "present",
  },
  {
    sentence: "My ___ pociągiem.",
    verb: "jechać",
    pronoun: "my",
    answer: "jedziemy",
    translation: "We are going by train.",
    tense: "present",
  },
  {
    sentence: "Oni ___ autobusem.",
    verb: "jechać",
    pronoun: "oni",
    answer: "jadą",
    translation: "They are going by bus.",
    tense: "present",
  },

  // Past tense - jechać
  {
    sentence: "Ja ___ do pracy autobusem.",
    verb: "jechać",
    pronoun: "ja (m)",
    answer: "jechałem",
    translation: "I was going to work by bus.",
    tense: "past",
    hint: "masculine form",
  },
  {
    sentence: "Ty ___ bardzo szybko.",
    verb: "jechać",
    pronoun: "ty (f)",
    answer: "jechałaś",
    translation: "You were driving very fast.",
    tense: "past",
    hint: "feminine form",
  },
  {
    sentence: "On ___ przez całą noc.",
    verb: "jechać",
    pronoun: "on",
    answer: "jechał",
    translation: "He drove through the whole night.",
    tense: "past",
  },
  {
    sentence: "Ona ___ na wakacje do Włoch.",
    verb: "jechać",
    pronoun: "ona",
    answer: "jechała",
    translation: "She was going on vacation to Italy.",
    tense: "past",
  },
  {
    sentence: "My ___ razem do Gdańska.",
    verb: "jechać",
    pronoun: "my (m)",
    answer: "jechaliśmy",
    translation: "We traveled together to Gdańsk.",
    tense: "past",
  },

  // Future tense - jechać (pojechać - perfective)
  {
    sentence: "Ja ___ do Warszawy w przyszłym tygodniu.",
    verb: "jechać",
    pronoun: "ja",
    answer: "pojadę",
    translation: "I will go to Warsaw next week.",
    tense: "future",
    hint: "Use perfective: pojechać",
  },
  {
    sentence: "Ty ___ z nami?",
    verb: "jechać",
    pronoun: "ty",
    answer: "pojedziesz",
    translation: "Will you go with us?",
    tense: "future",
    hint: "Use perfective: pojechać",
  },
  {
    sentence: "On ___ samochodem.",
    verb: "jechać",
    pronoun: "on",
    answer: "pojedzie",
    translation: "He will go by car.",
    tense: "future",
    hint: "Use perfective: pojechać",
  },
  {
    sentence: "My ___ nad morze.",
    verb: "jechać",
    pronoun: "my",
    answer: "pojedziemy",
    translation: "We will go to the seaside.",
    tense: "future",
    hint: "Use perfective: pojechać",
  },

  // ============================================
  // rozumieć (to understand)
  // ============================================

  // Present tense - rozumieć
  {
    sentence: "Ja ___ po polsku.",
    verb: "rozumieć",
    pronoun: "ja",
    answer: "rozumiem",
    translation: "I understand Polish.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___?",
    verb: "rozumieć",
    pronoun: "ty",
    answer: "rozumiesz",
    translation: "Do you understand?",
    tense: "present",
  },
  {
    sentence: "On nie ___ tego.",
    verb: "rozumieć",
    pronoun: "on",
    answer: "rozumie",
    translation: "He doesn't understand this.",
    tense: "present",
  },
  {
    sentence: "My ___ problem.",
    verb: "rozumieć",
    pronoun: "my",
    answer: "rozumiemy",
    translation: "We understand the problem.",
    tense: "present",
  },
  {
    sentence: "Oni nie ___ instrukcji.",
    verb: "rozumieć",
    pronoun: "oni",
    answer: "rozumieją",
    translation: "They don't understand the instructions.",
    tense: "present",
  },

  // Past tense - rozumieć
  {
    sentence: "Ja ___ wszystko, co powiedziałeś.",
    verb: "rozumieć",
    pronoun: "ja (m)",
    answer: "rozumiałem",
    translation: "I understood everything you said.",
    tense: "past",
  },
  {
    sentence: "Ty nie ___ pytania?",
    verb: "rozumieć",
    pronoun: "ty (f)",
    answer: "rozumiałaś",
    translation: "Didn't you understand the question?",
    tense: "past",
  },
  {
    sentence: "On nie ___ dlaczego ona wyszła.",
    verb: "rozumieć",
    pronoun: "on",
    answer: "rozumiał",
    translation: "He didn't understand why she left.",
    tense: "past",
  },
  {
    sentence: "Ona ___ sytuację.",
    verb: "rozumieć",
    pronoun: "ona",
    answer: "rozumiała",
    translation: "She understood the situation.",
    tense: "past",
  },

  // Future tense - rozumieć (zrozumieć - perfective)
  {
    sentence: "Ty ___ to lepiej później.",
    verb: "rozumieć",
    pronoun: "ty",
    answer: "zrozumiesz",
    translation: "You will understand it better later.",
    tense: "future",
    hint: "Use perfective: zrozumieć",
  },
  {
    sentence: "On ___ swój błąd.",
    verb: "rozumieć",
    pronoun: "on",
    answer: "zrozumie",
    translation: "He will understand his mistake.",
    tense: "future",
    hint: "Use perfective: zrozumieć",
  },

  // ============================================
  // wiedzieć (to know - a fact)
  // ============================================

  // Present tense - wiedzieć
  {
    sentence: "Ja ___, gdzie to jest.",
    verb: "wiedzieć",
    pronoun: "ja",
    answer: "wiem",
    translation: "I know where it is.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___, jak to zrobić?",
    verb: "wiedzieć",
    pronoun: "ty",
    answer: "wiesz",
    translation: "Do you know how to do it?",
    tense: "present",
  },
  {
    sentence: "On ___ wszystko.",
    verb: "wiedzieć",
    pronoun: "on",
    answer: "wie",
    translation: "He knows everything.",
    tense: "present",
  },
  {
    sentence: "My ___, że masz rację.",
    verb: "wiedzieć",
    pronoun: "my",
    answer: "wiemy",
    translation: "We know that you are right.",
    tense: "present",
  },
  {
    sentence: "Oni nie ___ prawdy.",
    verb: "wiedzieć",
    pronoun: "oni",
    answer: "wiedzą",
    translation: "They don't know the truth.",
    tense: "present",
  },

  // Past tense - wiedzieć
  {
    sentence: "Ja nie ___, że on tu jest.",
    verb: "wiedzieć",
    pronoun: "ja (m)",
    answer: "wiedziałem",
    translation: "I didn't know he was here.",
    tense: "past",
  },
  {
    sentence: "Ty ___ o spotkaniu?",
    verb: "wiedzieć",
    pronoun: "ty (f)",
    answer: "wiedziałaś",
    translation: "Did you know about the meeting?",
    tense: "past",
  },
  {
    sentence: "On ___, że to było trudne.",
    verb: "wiedzieć",
    pronoun: "on",
    answer: "wiedział",
    translation: "He knew it was difficult.",
    tense: "past",
  },
  {
    sentence: "Ona ___, co robić.",
    verb: "wiedzieć",
    pronoun: "ona",
    answer: "wiedziała",
    translation: "She knew what to do.",
    tense: "past",
  },
  {
    sentence: "My ___ o problemie.",
    verb: "wiedzieć",
    pronoun: "my (m)",
    answer: "wiedzieliśmy",
    translation: "We knew about the problem.",
    tense: "past",
  },

  // Future tense - wiedzieć
  {
    sentence: "Ja ___ więcej jutro.",
    verb: "wiedzieć",
    pronoun: "ja",
    answer: "będę wiedział",
    translation: "I will know more tomorrow.",
    tense: "future",
    hint: "masculine: będę wiedział, feminine: będę wiedziała",
  },
  {
    sentence: "Ty ___ kiedy przyjdę.",
    verb: "wiedzieć",
    pronoun: "ty",
    answer: "będziesz wiedział",
    translation: "You will know when I arrive.",
    tense: "future",
  },

  // ============================================
  // uczyć się (to learn/study)
  // ============================================

  // Present tense - uczyć się
  {
    sentence: "Ja ___ polskiego.",
    verb: "uczyć się",
    pronoun: "ja",
    answer: "uczę się",
    translation: "I am learning Polish.",
    tense: "present",
  },
  {
    sentence: "Czego ty ___?",
    verb: "uczyć się",
    pronoun: "ty",
    answer: "uczysz się",
    translation: "What are you studying?",
    tense: "present",
  },
  {
    sentence: "Ona ___ na egzamin.",
    verb: "uczyć się",
    pronoun: "ona",
    answer: "uczy się",
    translation: "She is studying for an exam.",
    tense: "present",
  },
  {
    sentence: "My ___ razem.",
    verb: "uczyć się",
    pronoun: "my",
    answer: "uczymy się",
    translation: "We study together.",
    tense: "present",
  },
  {
    sentence: "Oni ___ języka angielskiego.",
    verb: "uczyć się",
    pronoun: "oni",
    answer: "uczą się",
    translation: "They are learning English.",
    tense: "present",
  },

  // Past tense - uczyć się
  {
    sentence: "Ja ___ matematyki wczoraj.",
    verb: "uczyć się",
    pronoun: "ja (m)",
    answer: "uczyłem się",
    translation: "I studied math yesterday.",
    tense: "past",
  },
  {
    sentence: "Ty ___ całą noc?",
    verb: "uczyć się",
    pronoun: "ty (f)",
    answer: "uczyłaś się",
    translation: "Did you study all night?",
    tense: "past",
  },
  {
    sentence: "On ___ hiszpańskiego przez rok.",
    verb: "uczyć się",
    pronoun: "on",
    answer: "uczył się",
    translation: "He studied Spanish for a year.",
    tense: "past",
  },
  {
    sentence: "Ona ___ gry na pianinie.",
    verb: "uczyć się",
    pronoun: "ona",
    answer: "uczyła się",
    translation: "She was learning to play piano.",
    tense: "past",
  },

  // Future tense - uczyć się
  {
    sentence: "Ja ___ polskiego codziennie.",
    verb: "uczyć się",
    pronoun: "ja",
    answer: "będę się uczyć",
    translation: "I will study Polish every day.",
    tense: "future",
  },
  {
    sentence: "Ty ___ na egzamin?",
    verb: "uczyć się",
    pronoun: "ty",
    answer: "będziesz się uczyć",
    translation: "Will you study for the exam?",
    tense: "future",
  },
  {
    sentence: "Oni ___ razem.",
    verb: "uczyć się",
    pronoun: "oni",
    answer: "będą się uczyć",
    translation: "They will study together.",
    tense: "future",
  },

  // ============================================
  // kupować (to buy)
  // ============================================

  // Present tense - kupować
  {
    sentence: "Ja ___ chleb.",
    verb: "kupować",
    pronoun: "ja",
    answer: "kupuję",
    translation: "I am buying bread.",
    tense: "present",
  },
  {
    sentence: "Co ty ___?",
    verb: "kupować",
    pronoun: "ty",
    answer: "kupujesz",
    translation: "What are you buying?",
    tense: "present",
  },
  {
    sentence: "Ona ___ nową sukienkę.",
    verb: "kupować",
    pronoun: "ona",
    answer: "kupuje",
    translation: "She is buying a new dress.",
    tense: "present",
  },
  {
    sentence: "My ___ prezenty.",
    verb: "kupować",
    pronoun: "my",
    answer: "kupujemy",
    translation: "We are buying presents.",
    tense: "present",
  },
  {
    sentence: "Oni ___ jedzenie.",
    verb: "kupować",
    pronoun: "oni",
    answer: "kupują",
    translation: "They are buying food.",
    tense: "present",
  },

  // Past tense - kupować
  {
    sentence: "Ja ___ mleko wczoraj.",
    verb: "kupować",
    pronoun: "ja (m)",
    answer: "kupowałem",
    translation: "I was buying milk yesterday.",
    tense: "past",
  },
  {
    sentence: "Ty ___ prezenty na święta?",
    verb: "kupować",
    pronoun: "ty (f)",
    answer: "kupowałaś",
    translation: "Were you buying Christmas presents?",
    tense: "past",
  },
  {
    sentence: "On ___ kwiaty dla niej.",
    verb: "kupować",
    pronoun: "on",
    answer: "kupował",
    translation: "He was buying flowers for her.",
    tense: "past",
  },
  {
    sentence: "Ona ___ ubrania w tym sklepie.",
    verb: "kupować",
    pronoun: "ona",
    answer: "kupowała",
    translation: "She used to buy clothes at this store.",
    tense: "past",
  },

  // Future tense - kupować (kupić - perfective)
  {
    sentence: "Ja ___ nowy komputer.",
    verb: "kupować",
    pronoun: "ja",
    answer: "kupię",
    translation: "I will buy a new computer.",
    tense: "future",
    hint: "Use perfective: kupić",
  },
  {
    sentence: "Ty ___ mi prezent?",
    verb: "kupować",
    pronoun: "ty",
    answer: "kupisz",
    translation: "Will you buy me a gift?",
    tense: "future",
    hint: "Use perfective: kupić",
  },
  {
    sentence: "Ona ___ nowe buty.",
    verb: "kupować",
    pronoun: "ona",
    answer: "kupi",
    translation: "She will buy new shoes.",
    tense: "future",
    hint: "Use perfective: kupić",
  },
  {
    sentence: "My ___ dom w przyszłym roku.",
    verb: "kupować",
    pronoun: "my",
    answer: "kupimy",
    translation: "We will buy a house next year.",
    tense: "future",
    hint: "Use perfective: kupić",
  },

  // ============================================
  // gotować (to cook)
  // ============================================

  // Present tense - gotować
  {
    sentence: "Ja ___ obiad.",
    verb: "gotować",
    pronoun: "ja",
    answer: "gotuję",
    translation: "I am cooking lunch.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ dobrze?",
    verb: "gotować",
    pronoun: "ty",
    answer: "gotujesz",
    translation: "Do you cook well?",
    tense: "present",
  },
  {
    sentence: "Mama ___ zupę.",
    verb: "gotować",
    pronoun: "ona",
    answer: "gotuje",
    translation: "Mom is cooking soup.",
    tense: "present",
  },
  {
    sentence: "My ___ razem w weekendy.",
    verb: "gotować",
    pronoun: "my",
    answer: "gotujemy",
    translation: "We cook together on weekends.",
    tense: "present",
  },

  // Past tense - gotować
  {
    sentence: "Ja ___ obiad przez godzinę.",
    verb: "gotować",
    pronoun: "ja (m)",
    answer: "gotowałem",
    translation: "I was cooking lunch for an hour.",
    tense: "past",
  },
  {
    sentence: "Ty ___ coś smacznego?",
    verb: "gotować",
    pronoun: "ty (f)",
    answer: "gotowałaś",
    translation: "Were you cooking something tasty?",
    tense: "past",
  },
  {
    sentence: "Babcia zawsze ___ pyszne pierogi.",
    verb: "gotować",
    pronoun: "ona",
    answer: "gotowała",
    translation: "Grandma always cooked delicious pierogi.",
    tense: "past",
  },

  // Future tense - gotować (ugotować - perfective)
  {
    sentence: "Ja ___ obiad jutro.",
    verb: "gotować",
    pronoun: "ja",
    answer: "ugotuję",
    translation: "I will cook lunch tomorrow.",
    tense: "future",
    hint: "Use perfective: ugotować",
  },
  {
    sentence: "Ty ___ coś dla gości?",
    verb: "gotować",
    pronoun: "ty",
    answer: "ugotujesz",
    translation: "Will you cook something for the guests?",
    tense: "future",
    hint: "Use perfective: ugotować",
  },
  {
    sentence: "Ona ___ kolację.",
    verb: "gotować",
    pronoun: "ona",
    answer: "ugotuje",
    translation: "She will cook dinner.",
    tense: "future",
    hint: "Use perfective: ugotować",
  },

  // ============================================
  // spać (to sleep)
  // ============================================

  // Present tense - spać
  {
    sentence: "Ja ___ osiem godzin.",
    verb: "spać",
    pronoun: "ja",
    answer: "śpię",
    translation: "I sleep eight hours.",
    tense: "present",
  },
  {
    sentence: "Czy ty dobrze ___?",
    verb: "spać",
    pronoun: "ty",
    answer: "śpisz",
    translation: "Do you sleep well?",
    tense: "present",
  },
  {
    sentence: "Dziecko ___.",
    verb: "spać",
    pronoun: "ono",
    answer: "śpi",
    translation: "The child is sleeping.",
    tense: "present",
  },
  {
    sentence: "My ___ w namiocie.",
    verb: "spać",
    pronoun: "my",
    answer: "śpimy",
    translation: "We sleep in a tent.",
    tense: "present",
  },
  {
    sentence: "Koty ___ cały dzień.",
    verb: "spać",
    pronoun: "one",
    answer: "śpią",
    translation: "Cats sleep all day.",
    tense: "present",
  },

  // Past tense - spać
  {
    sentence: "Ja ___ bardzo długo wczoraj.",
    verb: "spać",
    pronoun: "ja (m)",
    answer: "spałem",
    translation: "I slept very long yesterday.",
    tense: "past",
  },
  {
    sentence: "Ty dobrze ___?",
    verb: "spać",
    pronoun: "ty (f)",
    answer: "spałaś",
    translation: "Did you sleep well?",
    tense: "past",
  },
  {
    sentence: "On ___ na kanapie.",
    verb: "spać",
    pronoun: "on",
    answer: "spał",
    translation: "He was sleeping on the couch.",
    tense: "past",
  },
  {
    sentence: "Ona ___ do południa.",
    verb: "spać",
    pronoun: "ona",
    answer: "spała",
    translation: "She slept until noon.",
    tense: "past",
  },
  {
    sentence: "My ___ pod gołym niebem.",
    verb: "spać",
    pronoun: "my (m)",
    answer: "spaliśmy",
    translation: "We slept under the open sky.",
    tense: "past",
  },

  // Future tense - spać
  {
    sentence: "Ja ___ w hotelu.",
    verb: "spać",
    pronoun: "ja",
    answer: "będę spać",
    translation: "I will sleep at a hotel.",
    tense: "future",
  },
  {
    sentence: "Ty ___ u mnie?",
    verb: "spać",
    pronoun: "ty",
    answer: "będziesz spać",
    translation: "Will you sleep at my place?",
    tense: "future",
  },
  {
    sentence: "Oni ___ na podłodze.",
    verb: "spać",
    pronoun: "oni",
    answer: "będą spać",
    translation: "They will sleep on the floor.",
    tense: "future",
  },

  // ============================================
  // grać (to play)
  // ============================================

  // Present tense - grać
  {
    sentence: "Ja ___ w piłkę nożną.",
    verb: "grać",
    pronoun: "ja",
    answer: "gram",
    translation: "I play football.",
    tense: "present",
  },
  {
    sentence: "W co ty ___?",
    verb: "grać",
    pronoun: "ty",
    answer: "grasz",
    translation: "What do you play?",
    tense: "present",
  },
  {
    sentence: "On ___ na gitarze.",
    verb: "grać",
    pronoun: "on",
    answer: "gra",
    translation: "He plays the guitar.",
    tense: "present",
  },
  {
    sentence: "My ___ w szachy.",
    verb: "grać",
    pronoun: "my",
    answer: "gramy",
    translation: "We play chess.",
    tense: "present",
  },
  {
    sentence: "Dzieci ___ w ogrodzie.",
    verb: "grać",
    pronoun: "one",
    answer: "grają",
    translation: "Children play in the garden.",
    tense: "present",
  },

  // Past tense - grać
  {
    sentence: "Ja ___ w piłkę jako dziecko.",
    verb: "grać",
    pronoun: "ja (m)",
    answer: "grałem",
    translation: "I played football as a child.",
    tense: "past",
  },
  {
    sentence: "Ty ___ na pianinie?",
    verb: "grać",
    pronoun: "ty (f)",
    answer: "grałaś",
    translation: "Did you play the piano?",
    tense: "past",
  },
  {
    sentence: "On ___ na gitarze przez całą noc.",
    verb: "grać",
    pronoun: "on",
    answer: "grał",
    translation: "He played the guitar all night.",
    tense: "past",
  },
  {
    sentence: "Ona ___ w tenisa.",
    verb: "grać",
    pronoun: "ona",
    answer: "grała",
    translation: "She played tennis.",
    tense: "past",
  },

  // Future tense - grać
  {
    sentence: "Ja ___ z tobą w szachy.",
    verb: "grać",
    pronoun: "ja",
    answer: "będę grać",
    translation: "I will play chess with you.",
    tense: "future",
  },
  {
    sentence: "Ty ___ na koncercie?",
    verb: "grać",
    pronoun: "ty",
    answer: "będziesz grać",
    translation: "Will you play at the concert?",
    tense: "future",
  },
  {
    sentence: "Oni ___ mecz jutro.",
    verb: "grać",
    pronoun: "oni",
    answer: "będą grać",
    translation: "They will play a match tomorrow.",
    tense: "future",
  },

  // ============================================
  // słuchać (to listen)
  // ============================================

  // Present tense - słuchać
  {
    sentence: "Ja ___ muzyki.",
    verb: "słuchać",
    pronoun: "ja",
    answer: "słucham",
    translation: "I listen to music.",
    tense: "present",
  },
  {
    sentence: "Czy ty mnie ___?",
    verb: "słuchać",
    pronoun: "ty",
    answer: "słuchasz",
    translation: "Are you listening to me?",
    tense: "present",
  },
  {
    sentence: "Ona ___ radia.",
    verb: "słuchać",
    pronoun: "ona",
    answer: "słucha",
    translation: "She listens to the radio.",
    tense: "present",
  },
  {
    sentence: "My ___ podcastów.",
    verb: "słuchać",
    pronoun: "my",
    answer: "słuchamy",
    translation: "We listen to podcasts.",
    tense: "present",
  },

  // Past tense - słuchać
  {
    sentence: "Ja ___ tego albumu wczoraj.",
    verb: "słuchać",
    pronoun: "ja (m)",
    answer: "słuchałem",
    translation: "I listened to this album yesterday.",
    tense: "past",
  },
  {
    sentence: "Ty ___ uważnie?",
    verb: "słuchać",
    pronoun: "ty (f)",
    answer: "słuchałaś",
    translation: "Were you listening carefully?",
    tense: "past",
  },
  {
    sentence: "On ___ radia w samochodzie.",
    verb: "słuchać",
    pronoun: "on",
    answer: "słuchał",
    translation: "He was listening to the radio in the car.",
    tense: "past",
  },

  // Future tense - słuchać
  {
    sentence: "Ja ___ tej piosenki jeszcze raz.",
    verb: "słuchać",
    pronoun: "ja",
    answer: "będę słuchać",
    translation: "I will listen to this song again.",
    tense: "future",
  },
  {
    sentence: "Oni ___ wykładu.",
    verb: "słuchać",
    pronoun: "oni",
    answer: "będą słuchać",
    translation: "They will listen to the lecture.",
    tense: "future",
  },

  // ============================================
  // oglądać (to watch)
  // ============================================

  // Present tense - oglądać
  {
    sentence: "Ja ___ film.",
    verb: "oglądać",
    pronoun: "ja",
    answer: "oglądam",
    translation: "I am watching a movie.",
    tense: "present",
  },
  {
    sentence: "Co ty ___?",
    verb: "oglądać",
    pronoun: "ty",
    answer: "oglądasz",
    translation: "What are you watching?",
    tense: "present",
  },
  {
    sentence: "On ___ telewizję.",
    verb: "oglądać",
    pronoun: "on",
    answer: "ogląda",
    translation: "He is watching TV.",
    tense: "present",
  },
  {
    sentence: "My ___ mecz.",
    verb: "oglądać",
    pronoun: "my",
    answer: "oglądamy",
    translation: "We are watching the match.",
    tense: "present",
  },
  {
    sentence: "Oni ___ seriale.",
    verb: "oglądać",
    pronoun: "oni",
    answer: "oglądają",
    translation: "They watch TV series.",
    tense: "present",
  },

  // Past tense - oglądać
  {
    sentence: "Ja ___ film wczoraj wieczorem.",
    verb: "oglądać",
    pronoun: "ja (m)",
    answer: "oglądałem",
    translation: "I was watching a movie last night.",
    tense: "past",
  },
  {
    sentence: "Ty ___ mecz?",
    verb: "oglądać",
    pronoun: "ty (f)",
    answer: "oglądałaś",
    translation: "Were you watching the match?",
    tense: "past",
  },
  {
    sentence: "On ___ telewizję cały dzień.",
    verb: "oglądać",
    pronoun: "on",
    answer: "oglądał",
    translation: "He watched TV all day.",
    tense: "past",
  },
  {
    sentence: "Ona ___ seriale przez całą noc.",
    verb: "oglądać",
    pronoun: "ona",
    answer: "oglądała",
    translation: "She watched TV series all night.",
    tense: "past",
  },

  // Future tense - oglądać (obejrzeć - perfective)
  {
    sentence: "Ja ___ ten film jutro.",
    verb: "oglądać",
    pronoun: "ja",
    answer: "obejrzę",
    translation: "I will watch this movie tomorrow.",
    tense: "future",
    hint: "Use perfective: obejrzeć",
  },
  {
    sentence: "Ty ___ to ze mną?",
    verb: "oglądać",
    pronoun: "ty",
    answer: "obejrzysz",
    translation: "Will you watch it with me?",
    tense: "future",
    hint: "Use perfective: obejrzeć",
  },
  {
    sentence: "My ___ ten serial razem.",
    verb: "oglądać",
    pronoun: "my",
    answer: "obejrzymy",
    translation: "We will watch this series together.",
    tense: "future",
    hint: "Use perfective: obejrzeć",
  },

  // ============================================
  // kochać (to love)
  // ============================================

  // Present tense - kochać
  {
    sentence: "Ja ___ cię.",
    verb: "kochać",
    pronoun: "ja",
    answer: "kocham",
    translation: "I love you.",
    tense: "present",
  },
  {
    sentence: "Czy ty mnie ___?",
    verb: "kochać",
    pronoun: "ty",
    answer: "kochasz",
    translation: "Do you love me?",
    tense: "present",
  },
  {
    sentence: "On ___ swoją rodzinę.",
    verb: "kochać",
    pronoun: "on",
    answer: "kocha",
    translation: "He loves his family.",
    tense: "present",
  },
  {
    sentence: "My ___ Polskę.",
    verb: "kochać",
    pronoun: "my",
    answer: "kochamy",
    translation: "We love Poland.",
    tense: "present",
  },

  // Past tense - kochać
  {
    sentence: "Ja ___ ją przez wiele lat.",
    verb: "kochać",
    pronoun: "ja (m)",
    answer: "kochałem",
    translation: "I loved her for many years.",
    tense: "past",
  },
  {
    sentence: "Ty zawsze ___ zwierzęta.",
    verb: "kochać",
    pronoun: "ty (f)",
    answer: "kochałaś",
    translation: "You always loved animals.",
    tense: "past",
  },
  {
    sentence: "On ___ swoje życie.",
    verb: "kochać",
    pronoun: "on",
    answer: "kochał",
    translation: "He loved his life.",
    tense: "past",
  },
  {
    sentence: "Ona ___ muzykę.",
    verb: "kochać",
    pronoun: "ona",
    answer: "kochała",
    translation: "She loved music.",
    tense: "past",
  },

  // Future tense - kochać
  {
    sentence: "Ja zawsze ___ cię.",
    verb: "kochać",
    pronoun: "ja",
    answer: "będę kochać",
    translation: "I will always love you.",
    tense: "future",
  },
  {
    sentence: "Oni ___ ten dom.",
    verb: "kochać",
    pronoun: "oni",
    answer: "będą kochać",
    translation: "They will love this house.",
    tense: "future",
  },

  // ============================================
  // pomagać (to help)
  // ============================================

  // Present tense - pomagać
  {
    sentence: "Ja ___ mamie.",
    verb: "pomagać",
    pronoun: "ja",
    answer: "pomagam",
    translation: "I help my mom.",
    tense: "present",
  },
  {
    sentence: "Czy ty mi ___?",
    verb: "pomagać",
    pronoun: "ty",
    answer: "pomagasz",
    translation: "Are you helping me?",
    tense: "present",
  },
  {
    sentence: "Ona ___ sąsiadom.",
    verb: "pomagać",
    pronoun: "ona",
    answer: "pomaga",
    translation: "She helps the neighbors.",
    tense: "present",
  },
  {
    sentence: "My ___ sobie nawzajem.",
    verb: "pomagać",
    pronoun: "my",
    answer: "pomagamy",
    translation: "We help each other.",
    tense: "present",
  },

  // Past tense - pomagać
  {
    sentence: "Ja ___ mu z przeprowadzką.",
    verb: "pomagać",
    pronoun: "ja (m)",
    answer: "pomagałem",
    translation: "I was helping him with the move.",
    tense: "past",
  },
  {
    sentence: "Ty ___ dziadkowi?",
    verb: "pomagać",
    pronoun: "ty (f)",
    answer: "pomagałaś",
    translation: "Were you helping grandpa?",
    tense: "past",
  },
  {
    sentence: "On ___ wszystkim.",
    verb: "pomagać",
    pronoun: "on",
    answer: "pomagał",
    translation: "He used to help everyone.",
    tense: "past",
  },

  // Future tense - pomagać (pomóc - perfective)
  {
    sentence: "Ja ci ___ jutro.",
    verb: "pomagać",
    pronoun: "ja",
    answer: "pomogę",
    translation: "I will help you tomorrow.",
    tense: "future",
    hint: "Use perfective: pomóc",
  },
  {
    sentence: "Ty mi ___?",
    verb: "pomagać",
    pronoun: "ty",
    answer: "pomożesz",
    translation: "Will you help me?",
    tense: "future",
    hint: "Use perfective: pomóc",
  },
  {
    sentence: "Oni nam ___.",
    verb: "pomagać",
    pronoun: "oni",
    answer: "pomogą",
    translation: "They will help us.",
    tense: "future",
    hint: "Use perfective: pomóc",
  },

  // ============================================
  // czekać (to wait)
  // ============================================

  // Present tense - czekać
  {
    sentence: "Ja ___ na autobus.",
    verb: "czekać",
    pronoun: "ja",
    answer: "czekam",
    translation: "I am waiting for the bus.",
    tense: "present",
  },
  {
    sentence: "Na co ty ___?",
    verb: "czekać",
    pronoun: "ty",
    answer: "czekasz",
    translation: "What are you waiting for?",
    tense: "present",
  },
  {
    sentence: "On ___ na nią.",
    verb: "czekać",
    pronoun: "on",
    answer: "czeka",
    translation: "He is waiting for her.",
    tense: "present",
  },
  {
    sentence: "My ___ na odpowiedź.",
    verb: "czekać",
    pronoun: "my",
    answer: "czekamy",
    translation: "We are waiting for an answer.",
    tense: "present",
  },

  // Past tense - czekać
  {
    sentence: "Ja ___ godzinę na autobus.",
    verb: "czekać",
    pronoun: "ja (m)",
    answer: "czekałem",
    translation: "I waited an hour for the bus.",
    tense: "past",
  },
  {
    sentence: "Ty długo ___ na mnie?",
    verb: "czekać",
    pronoun: "ty (f)",
    answer: "czekałaś",
    translation: "Did you wait long for me?",
    tense: "past",
  },
  {
    sentence: "On ___ cierpliwie.",
    verb: "czekać",
    pronoun: "on",
    answer: "czekał",
    translation: "He waited patiently.",
    tense: "past",
  },

  // Future tense - czekać (poczekać - perfective)
  {
    sentence: "Ja ___ na ciebie.",
    verb: "czekać",
    pronoun: "ja",
    answer: "poczekam",
    translation: "I will wait for you.",
    tense: "future",
    hint: "Use perfective: poczekać",
  },
  {
    sentence: "Ty ___ chwilę?",
    verb: "czekać",
    pronoun: "ty",
    answer: "poczekasz",
    translation: "Will you wait a moment?",
    tense: "future",
    hint: "Use perfective: poczekać",
  },
  {
    sentence: "My ___ tutaj.",
    verb: "czekać",
    pronoun: "my",
    answer: "poczekamy",
    translation: "We will wait here.",
    tense: "future",
    hint: "Use perfective: poczekać",
  },

  // ============================================
  // dziękować (to thank)
  // ============================================

  // Present tense - dziękować
  {
    sentence: "Ja ci ___.",
    verb: "dziękować",
    pronoun: "ja",
    answer: "dziękuję",
    translation: "I thank you.",
    tense: "present",
  },
  {
    sentence: "Ty mi nigdy nie ___.",
    verb: "dziękować",
    pronoun: "ty",
    answer: "dziękujesz",
    translation: "You never thank me.",
    tense: "present",
  },
  {
    sentence: "On ___ za pomoc.",
    verb: "dziękować",
    pronoun: "on",
    answer: "dziękuje",
    translation: "He thanks for the help.",
    tense: "present",
  },
  {
    sentence: "My ___ za wszystko.",
    verb: "dziękować",
    pronoun: "my",
    answer: "dziękujemy",
    translation: "We thank you for everything.",
    tense: "present",
  },

  // Past tense - dziękować
  {
    sentence: "Ja ___ mu za prezent.",
    verb: "dziękować",
    pronoun: "ja (m)",
    answer: "dziękowałem",
    translation: "I thanked him for the gift.",
    tense: "past",
  },
  {
    sentence: "Ona ___ wszystkim gościom.",
    verb: "dziękować",
    pronoun: "ona",
    answer: "dziękowała",
    translation: "She thanked all the guests.",
    tense: "past",
  },

  // Future tense - dziękować (podziękować - perfective)
  {
    sentence: "Ja ___ mu osobiście.",
    verb: "dziękować",
    pronoun: "ja",
    answer: "podziękuję",
    translation: "I will thank him personally.",
    tense: "future",
    hint: "Use perfective: podziękować",
  },
  {
    sentence: "My ___ za zaproszenie.",
    verb: "dziękować",
    pronoun: "my",
    answer: "podziękujemy",
    translation: "We will thank for the invitation.",
    tense: "future",
    hint: "Use perfective: podziękować",
  },

  // ============================================
  // przepraszać (to apologize)
  // ============================================

  // Present tense - przepraszać
  {
    sentence: "Ja ___.",
    verb: "przepraszać",
    pronoun: "ja",
    answer: "przepraszam",
    translation: "I apologize / Excuse me.",
    tense: "present",
  },
  {
    sentence: "Czy ty mnie ___?",
    verb: "przepraszać",
    pronoun: "ty",
    answer: "przepraszasz",
    translation: "Are you apologizing to me?",
    tense: "present",
  },
  {
    sentence: "Ona ___ za spóźnienie.",
    verb: "przepraszać",
    pronoun: "ona",
    answer: "przeprasza",
    translation: "She apologizes for being late.",
    tense: "present",
  },

  // Past tense - przepraszać
  {
    sentence: "Ja ___ go wielokrotnie.",
    verb: "przepraszać",
    pronoun: "ja (m)",
    answer: "przepraszałem",
    translation: "I apologized to him many times.",
    tense: "past",
  },
  {
    sentence: "On nigdy mnie nie ___.",
    verb: "przepraszać",
    pronoun: "on",
    answer: "przepraszał",
    translation: "He never apologized to me.",
    tense: "past",
  },

  // Future tense - przepraszać (przeprosić - perfective)
  {
    sentence: "Ja ___ go jutro.",
    verb: "przepraszać",
    pronoun: "ja",
    answer: "przeproszę",
    translation: "I will apologize to him tomorrow.",
    tense: "future",
    hint: "Use perfective: przeprosić",
  },
  {
    sentence: "Ty ją ___?",
    verb: "przepraszać",
    pronoun: "ty",
    answer: "przeprosisz",
    translation: "Will you apologize to her?",
    tense: "future",
    hint: "Use perfective: przeprosić",
  },

  // ============================================
  // wracać (to return)
  // ============================================

  // Present tense - wracać
  {
    sentence: "Kiedy ty ___?",
    verb: "wracać",
    pronoun: "ty",
    answer: "wracasz",
    translation: "When are you coming back?",
    tense: "present",
  },
  {
    sentence: "Ja ___ do domu.",
    verb: "wracać",
    pronoun: "ja",
    answer: "wracam",
    translation: "I am returning home.",
    tense: "present",
  },
  {
    sentence: "On ___ z pracy o szóstej.",
    verb: "wracać",
    pronoun: "on",
    answer: "wraca",
    translation: "He returns from work at six.",
    tense: "present",
  },
  {
    sentence: "My ___ jutro.",
    verb: "wracać",
    pronoun: "my",
    answer: "wracamy",
    translation: "We are returning tomorrow.",
    tense: "present",
  },

  // Past tense - wracać
  {
    sentence: "Ja ___ późno do domu.",
    verb: "wracać",
    pronoun: "ja (m)",
    answer: "wracałem",
    translation: "I was coming home late.",
    tense: "past",
  },
  {
    sentence: "Ty ___ z wakacji?",
    verb: "wracać",
    pronoun: "ty (f)",
    answer: "wracałaś",
    translation: "Were you coming back from vacation?",
    tense: "past",
  },
  {
    sentence: "On ___ z pracy pieszo.",
    verb: "wracać",
    pronoun: "on",
    answer: "wracał",
    translation: "He used to walk home from work.",
    tense: "past",
  },

  // Future tense - wracać (wrócić - perfective)
  {
    sentence: "Ja ___ o dziesiątej.",
    verb: "wracać",
    pronoun: "ja",
    answer: "wrócę",
    translation: "I will be back at ten.",
    tense: "future",
    hint: "Use perfective: wrócić",
  },
  {
    sentence: "Ty ___ wcześnie?",
    verb: "wracać",
    pronoun: "ty",
    answer: "wrócisz",
    translation: "Will you come back early?",
    tense: "future",
    hint: "Use perfective: wrócić",
  },
  {
    sentence: "Oni ___ za tydzień.",
    verb: "wracać",
    pronoun: "oni",
    answer: "wrócą",
    translation: "They will come back in a week.",
    tense: "future",
    hint: "Use perfective: wrócić",
  },

  // ============================================
  // zaczynać (to begin/start)
  // ============================================

  // Present tense - zaczynać
  {
    sentence: "Ja ___ pracę o ósmej.",
    verb: "zaczynać",
    pronoun: "ja",
    answer: "zaczynam",
    translation: "I start work at eight.",
    tense: "present",
  },
  {
    sentence: "O której ty ___?",
    verb: "zaczynać",
    pronoun: "ty",
    answer: "zaczynasz",
    translation: "What time do you start?",
    tense: "present",
  },
  {
    sentence: "Film ___ za pięć minut.",
    verb: "zaczynać",
    pronoun: "on",
    answer: "zaczyna",
    translation: "The film starts in five minutes.",
    tense: "present",
  },
  {
    sentence: "My ___ od początku.",
    verb: "zaczynać",
    pronoun: "my",
    answer: "zaczynamy",
    translation: "We start from the beginning.",
    tense: "present",
  },

  // Past tense - zaczynać
  {
    sentence: "Ja ___ pracę o siódmej.",
    verb: "zaczynać",
    pronoun: "ja (m)",
    answer: "zaczynałem",
    translation: "I used to start work at seven.",
    tense: "past",
  },
  {
    sentence: "Film ___ o ósmej.",
    verb: "zaczynać",
    pronoun: "on",
    answer: "zaczynał",
    translation: "The movie started at eight.",
    tense: "past",
  },

  // Future tense - zaczynać (zacząć - perfective)
  {
    sentence: "Ja ___ nowy projekt.",
    verb: "zaczynać",
    pronoun: "ja",
    answer: "zacznę",
    translation: "I will start a new project.",
    tense: "future",
    hint: "Use perfective: zacząć",
  },
  {
    sentence: "Ty ___ jutro?",
    verb: "zaczynać",
    pronoun: "ty",
    answer: "zaczniesz",
    translation: "Will you start tomorrow?",
    tense: "future",
    hint: "Use perfective: zacząć",
  },
  {
    sentence: "My ___ od razu.",
    verb: "zaczynać",
    pronoun: "my",
    answer: "zaczniemy",
    translation: "We will start right away.",
    tense: "future",
    hint: "Use perfective: zacząć",
  },

  // ============================================
  // kończyć (to finish/end)
  // ============================================

  // Present tense - kończyć
  {
    sentence: "Ja ___ pracę o piątej.",
    verb: "kończyć",
    pronoun: "ja",
    answer: "kończę",
    translation: "I finish work at five.",
    tense: "present",
  },
  {
    sentence: "O której ty ___?",
    verb: "kończyć",
    pronoun: "ty",
    answer: "kończysz",
    translation: "What time do you finish?",
    tense: "present",
  },
  {
    sentence: "Lekcja ___ za chwilę.",
    verb: "kończyć",
    pronoun: "ona",
    answer: "kończy",
    translation: "The lesson ends in a moment.",
    tense: "present",
  },
  {
    sentence: "My ___ projekt.",
    verb: "kończyć",
    pronoun: "my",
    answer: "kończymy",
    translation: "We are finishing the project.",
    tense: "present",
  },

  // Past tense - kończyć
  {
    sentence: "Ja ___ pracę późno.",
    verb: "kończyć",
    pronoun: "ja (m)",
    answer: "kończyłem",
    translation: "I used to finish work late.",
    tense: "past",
  },
  {
    sentence: "Ona ___ czytać książkę.",
    verb: "kończyć",
    pronoun: "ona",
    answer: "kończyła",
    translation: "She was finishing reading the book.",
    tense: "past",
  },

  // Future tense - kończyć (skończyć - perfective)
  {
    sentence: "Ja ___ to za godzinę.",
    verb: "kończyć",
    pronoun: "ja",
    answer: "skończę",
    translation: "I will finish this in an hour.",
    tense: "future",
    hint: "Use perfective: skończyć",
  },
  {
    sentence: "Ty ___ przed obiadem?",
    verb: "kończyć",
    pronoun: "ty",
    answer: "skończysz",
    translation: "Will you finish before lunch?",
    tense: "future",
    hint: "Use perfective: skończyć",
  },
  {
    sentence: "Oni ___ projekt w piątek.",
    verb: "kończyć",
    pronoun: "oni",
    answer: "skończą",
    translation: "They will finish the project on Friday.",
    tense: "future",
    hint: "Use perfective: skończyć",
  },

  // ============================================
  // bać się (to be afraid)
  // ============================================

  // Present tense - bać się
  {
    sentence: "Ja ___ pająków.",
    verb: "bać się",
    pronoun: "ja",
    answer: "boję się",
    translation: "I am afraid of spiders.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ ciemności?",
    verb: "bać się",
    pronoun: "ty",
    answer: "boisz się",
    translation: "Are you afraid of the dark?",
    tense: "present",
  },
  {
    sentence: "Ona ___ burzy.",
    verb: "bać się",
    pronoun: "ona",
    answer: "boi się",
    translation: "She is afraid of storms.",
    tense: "present",
  },
  {
    sentence: "My ___ o przyszłość.",
    verb: "bać się",
    pronoun: "my",
    answer: "boimy się",
    translation: "We are afraid for the future.",
    tense: "present",
  },

  // Past tense - bać się
  {
    sentence: "Ja ___ psów jako dziecko.",
    verb: "bać się",
    pronoun: "ja (m)",
    answer: "bałem się",
    translation: "I was afraid of dogs as a child.",
    tense: "past",
  },
  {
    sentence: "Ty ___ ciemności?",
    verb: "bać się",
    pronoun: "ty (f)",
    answer: "bałaś się",
    translation: "Were you afraid of the dark?",
    tense: "past",
  },
  {
    sentence: "On ___ egzaminu.",
    verb: "bać się",
    pronoun: "on",
    answer: "bał się",
    translation: "He was afraid of the exam.",
    tense: "past",
  },
  {
    sentence: "Ona ___ lecieć samolotem.",
    verb: "bać się",
    pronoun: "ona",
    answer: "bała się",
    translation: "She was afraid to fly.",
    tense: "past",
  },

  // Future tense - bać się
  {
    sentence: "Ja nie ___ więcej.",
    verb: "bać się",
    pronoun: "ja",
    answer: "będę się bać",
    translation: "I won't be afraid anymore.",
    tense: "future",
  },
  {
    sentence: "Ty ___ tego?",
    verb: "bać się",
    pronoun: "ty",
    answer: "będziesz się bać",
    translation: "Will you be afraid of it?",
    tense: "future",
  },

  // ============================================
  // cieszyć się (to be happy/enjoy)
  // ============================================

  // Present tense - cieszyć się
  {
    sentence: "Ja ___ na wakacje.",
    verb: "cieszyć się",
    pronoun: "ja",
    answer: "cieszę się",
    translation: "I am looking forward to the vacation.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___?",
    verb: "cieszyć się",
    pronoun: "ty",
    answer: "cieszysz się",
    translation: "Are you happy?",
    tense: "present",
  },
  {
    sentence: "On ___ z prezentu.",
    verb: "cieszyć się",
    pronoun: "on",
    answer: "cieszy się",
    translation: "He is happy with the gift.",
    tense: "present",
  },
  {
    sentence: "My ___ razem.",
    verb: "cieszyć się",
    pronoun: "my",
    answer: "cieszymy się",
    translation: "We are happy together.",
    tense: "present",
  },

  // Past tense - cieszyć się
  {
    sentence: "Ja bardzo ___ z wygranej.",
    verb: "cieszyć się",
    pronoun: "ja (m)",
    answer: "cieszyłem się",
    translation: "I was very happy about the win.",
    tense: "past",
  },
  {
    sentence: "Ty ___ z prezentu?",
    verb: "cieszyć się",
    pronoun: "ty (f)",
    answer: "cieszyłaś się",
    translation: "Were you happy with the gift?",
    tense: "past",
  },
  {
    sentence: "Ona ___ z każdego dnia.",
    verb: "cieszyć się",
    pronoun: "ona",
    answer: "cieszyła się",
    translation: "She enjoyed every day.",
    tense: "past",
  },

  // Future tense - cieszyć się
  {
    sentence: "Ty ___ z tego.",
    verb: "cieszyć się",
    pronoun: "ty",
    answer: "będziesz się cieszyć",
    translation: "You will be happy about it.",
    tense: "future",
  },
  {
    sentence: "Oni ___ na spotkanie.",
    verb: "cieszyć się",
    pronoun: "oni",
    answer: "będą się cieszyć",
    translation: "They will look forward to the meeting.",
    tense: "future",
  },

  // ============================================
  // nazywać się (to be called/named)
  // ============================================

  // Present tense - nazywać się (note: rarely used in past/future for names)
  {
    sentence: "Jak ty ___?",
    verb: "nazywać się",
    pronoun: "ty",
    answer: "nazywasz się",
    translation: "What is your name?",
    tense: "present",
  },
  {
    sentence: "Ja ___ Anna.",
    verb: "nazywać się",
    pronoun: "ja",
    answer: "nazywam się",
    translation: "My name is Anna.",
    tense: "present",
  },
  {
    sentence: "On ___ Piotr.",
    verb: "nazywać się",
    pronoun: "on",
    answer: "nazywa się",
    translation: "His name is Piotr.",
    tense: "present",
  },
  {
    sentence: "Jak państwo ___?",
    verb: "nazywać się",
    pronoun: "państwo",
    answer: "nazywają się",
    translation: "What are your names? (formal)",
    tense: "present",
  },

  // Past tense - nazywać się
  {
    sentence: "Ten sklep ___ inaczej.",
    verb: "nazywać się",
    pronoun: "on",
    answer: "nazywał się",
    translation: "This store used to be called differently.",
    tense: "past",
  },
  {
    sentence: "Ta ulica ___ Kwiatowa.",
    verb: "nazywać się",
    pronoun: "ona",
    answer: "nazywała się",
    translation: "This street was called Kwiatowa.",
    tense: "past",
  },

  // Future tense - nazywać się
  {
    sentence: "Nasza firma ___ 'Nowak i Syn'.",
    verb: "nazywać się",
    pronoun: "ona",
    answer: "będzie się nazywać",
    translation: "Our company will be called 'Nowak and Son'.",
    tense: "future",
  },

  // ============================================
  // interesować się (to be interested in)
  // ============================================

  // Present tense - interesować się
  {
    sentence: "Ja ___ historią.",
    verb: "interesować się",
    pronoun: "ja",
    answer: "interesuję się",
    translation: "I am interested in history.",
    tense: "present",
  },
  {
    sentence: "Czym ty ___?",
    verb: "interesować się",
    pronoun: "ty",
    answer: "interesujesz się",
    translation: "What are you interested in?",
    tense: "present",
  },
  {
    sentence: "On ___ sportem.",
    verb: "interesować się",
    pronoun: "on",
    answer: "interesuje się",
    translation: "He is interested in sports.",
    tense: "present",
  },
  {
    sentence: "My ___ kulturą polską.",
    verb: "interesować się",
    pronoun: "my",
    answer: "interesujemy się",
    translation: "We are interested in Polish culture.",
    tense: "present",
  },

  // Past tense - interesować się
  {
    sentence: "Ja zawsze ___ sztuką.",
    verb: "interesować się",
    pronoun: "ja (m)",
    answer: "interesowałem się",
    translation: "I was always interested in art.",
    tense: "past",
  },
  {
    sentence: "Ty ___ muzyką?",
    verb: "interesować się",
    pronoun: "ty (f)",
    answer: "interesowałaś się",
    translation: "Were you interested in music?",
    tense: "past",
  },
  {
    sentence: "On ___ astronomią jako dziecko.",
    verb: "interesować się",
    pronoun: "on",
    answer: "interesował się",
    translation: "He was interested in astronomy as a child.",
    tense: "past",
  },

  // Future tense - interesować się
  {
    sentence: "Ty ___ tym tematem.",
    verb: "interesować się",
    pronoun: "ty",
    answer: "będziesz się interesować",
    translation: "You will be interested in this topic.",
    tense: "future",
  },

  // ============================================
  // śpiewać (to sing)
  // ============================================

  // Present tense - śpiewać
  {
    sentence: "Ja ___ pod prysznicem.",
    verb: "śpiewać",
    pronoun: "ja",
    answer: "śpiewam",
    translation: "I sing in the shower.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ w chórze?",
    verb: "śpiewać",
    pronoun: "ty",
    answer: "śpiewasz",
    translation: "Do you sing in a choir?",
    tense: "present",
  },
  {
    sentence: "Ona pięknie ___.",
    verb: "śpiewać",
    pronoun: "ona",
    answer: "śpiewa",
    translation: "She sings beautifully.",
    tense: "present",
  },
  {
    sentence: "My ___ razem.",
    verb: "śpiewać",
    pronoun: "my",
    answer: "śpiewamy",
    translation: "We sing together.",
    tense: "present",
  },

  // Past tense - śpiewać
  {
    sentence: "Ja ___ tę piosenkę wczoraj.",
    verb: "śpiewać",
    pronoun: "ja (m)",
    answer: "śpiewałem",
    translation: "I sang this song yesterday.",
    tense: "past",
  },
  {
    sentence: "Ty ___ na weselu?",
    verb: "śpiewać",
    pronoun: "ty (f)",
    answer: "śpiewałaś",
    translation: "Did you sing at the wedding?",
    tense: "past",
  },
  {
    sentence: "Ona ___ kołysankę dla dziecka.",
    verb: "śpiewać",
    pronoun: "ona",
    answer: "śpiewała",
    translation: "She was singing a lullaby to the child.",
    tense: "past",
  },

  // Future tense - śpiewać (zaśpiewać - perfective)
  {
    sentence: "Ja ___ dla ciebie.",
    verb: "śpiewać",
    pronoun: "ja",
    answer: "zaśpiewam",
    translation: "I will sing for you.",
    tense: "future",
    hint: "Use perfective: zaśpiewać",
  },
  {
    sentence: "Ty ___ na koncercie?",
    verb: "śpiewać",
    pronoun: "ty",
    answer: "zaśpiewasz",
    translation: "Will you sing at the concert?",
    tense: "future",
    hint: "Use perfective: zaśpiewać",
  },

  // ============================================
  // tańczyć (to dance)
  // ============================================

  // Present tense - tańczyć
  {
    sentence: "Ja ___ tango.",
    verb: "tańczyć",
    pronoun: "ja",
    answer: "tańczę",
    translation: "I dance tango.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___?",
    verb: "tańczyć",
    pronoun: "ty",
    answer: "tańczysz",
    translation: "Do you dance?",
    tense: "present",
  },
  {
    sentence: "Ona ___ balet.",
    verb: "tańczyć",
    pronoun: "ona",
    answer: "tańczy",
    translation: "She dances ballet.",
    tense: "present",
  },
  {
    sentence: "My ___ na weselu.",
    verb: "tańczyć",
    pronoun: "my",
    answer: "tańczymy",
    translation: "We dance at the wedding.",
    tense: "present",
  },

  // Past tense - tańczyć
  {
    sentence: "Ja ___ całą noc.",
    verb: "tańczyć",
    pronoun: "ja (m)",
    answer: "tańczyłem",
    translation: "I danced all night.",
    tense: "past",
  },
  {
    sentence: "Ty ___ z nim?",
    verb: "tańczyć",
    pronoun: "ty (f)",
    answer: "tańczyłaś",
    translation: "Did you dance with him?",
    tense: "past",
  },
  {
    sentence: "Ona ___ w balecie jako dziecko.",
    verb: "tańczyć",
    pronoun: "ona",
    answer: "tańczyła",
    translation: "She danced ballet as a child.",
    tense: "past",
  },

  // Future tense - tańczyć (zatańczyć - perfective)
  {
    sentence: "Ja ___ z tobą.",
    verb: "tańczyć",
    pronoun: "ja",
    answer: "zatańczę",
    translation: "I will dance with you.",
    tense: "future",
    hint: "Use perfective: zatańczyć",
  },
  {
    sentence: "My ___ walca.",
    verb: "tańczyć",
    pronoun: "my",
    answer: "zatańczymy",
    translation: "We will dance a waltz.",
    tense: "future",
    hint: "Use perfective: zatańczyć",
  },

  // ============================================
  // podróżować (to travel)
  // ============================================

  // Present tense - podróżować
  {
    sentence: "Ja dużo ___.",
    verb: "podróżować",
    pronoun: "ja",
    answer: "podróżuję",
    translation: "I travel a lot.",
    tense: "present",
  },
  {
    sentence: "Czy ty często ___?",
    verb: "podróżować",
    pronoun: "ty",
    answer: "podróżujesz",
    translation: "Do you travel often?",
    tense: "present",
    hint: "Use the conjugated form, not infinitive.",
  },
  {
    sentence: "On ___ po świecie.",
    verb: "podróżować",
    pronoun: "on",
    answer: "podróżuje",
    translation: "He travels around the world.",
    tense: "present",
  },
  {
    sentence: "My ___ razem.",
    verb: "podróżować",
    pronoun: "my",
    answer: "podróżujemy",
    translation: "We travel together.",
    tense: "present",
  },

  // Past tense - podróżować
  {
    sentence: "Ja ___ po Europie w zeszłym roku.",
    verb: "podróżować",
    pronoun: "ja (m)",
    answer: "podróżowałem",
    translation: "I traveled around Europe last year.",
    tense: "past",
  },
  {
    sentence: "Ty ___ sama?",
    verb: "podróżować",
    pronoun: "ty (f)",
    answer: "podróżowałaś",
    translation: "Did you travel alone?",
    tense: "past",
  },
  {
    sentence: "On ___ przez całe życie.",
    verb: "podróżować",
    pronoun: "on",
    answer: "podróżował",
    translation: "He traveled his whole life.",
    tense: "past",
  },
  {
    sentence: "Ona ___ po Azji.",
    verb: "podróżować",
    pronoun: "ona",
    answer: "podróżowała",
    translation: "She traveled around Asia.",
    tense: "past",
  },

  // Future tense - podróżować
  {
    sentence: "Ja ___ więcej w przyszłym roku.",
    verb: "podróżować",
    pronoun: "ja",
    answer: "będę podróżować",
    translation: "I will travel more next year.",
    tense: "future",
  },
  {
    sentence: "Ty ___ ze mną?",
    verb: "podróżować",
    pronoun: "ty",
    answer: "będziesz podróżować",
    translation: "Will you travel with me?",
    tense: "future",
  },
  {
    sentence: "My ___ po Ameryce Południowej.",
    verb: "podróżować",
    pronoun: "my",
    answer: "będziemy podróżować",
    translation: "We will travel around South America.",
    tense: "future",
  },

  // ============================================
  // kontrolować (to control)
  // ============================================

  // Present tense - kontrolować
  {
    sentence: "Ja ___ sytuację.",
    verb: "kontrolować",
    pronoun: "ja",
    answer: "kontroluję",
    translation: "I control the situation.",
    tense: "present",
  },
  {
    sentence: "Czy ty dobrze ___ swoje wydatki?",
    verb: "kontrolować",
    pronoun: "ty",
    answer: "kontrolujesz",
    translation: "Do you control your expenses well?",
    tense: "present",
  },
  {
    sentence: "On ___ projekt od początku do końca.",
    verb: "kontrolować",
    pronoun: "on",
    answer: "kontroluje",
    translation: "He controls the project from beginning to end.",
    tense: "present",
  },
  {
    sentence: "My ___ jakość pracy.",
    verb: "kontrolować",
    pronoun: "my",
    answer: "kontrolujemy",
    translation: "We control the quality of the work.",
    tense: "present",
  },

  // Past tense - kontrolować
  {
    sentence: "Ja ___ wszystko osobiście.",
    verb: "kontrolować",
    pronoun: "ja (m)",
    answer: "kontrolowałem",
    translation: "I controlled everything personally.",
    tense: "past",
  },
  {
    sentence: "Ty ___ budżet?",
    verb: "kontrolować",
    pronoun: "ty (f)",
    answer: "kontrolowałaś",
    translation: "Did you control the budget?",
    tense: "past",
  },
  {
    sentence: "On ___ każdy detal projektu.",
    verb: "kontrolować",
    pronoun: "on",
    answer: "kontrolował",
    translation: "He controlled every detail of the project.",
    tense: "past",
  },

  // Future tense - kontrolować (skontrolować - perfective)
  {
    sentence: "Ja ___ wyniki jutro.",
    verb: "kontrolować",
    pronoun: "ja",
    answer: "skontroluję",
    translation: "I will check the results tomorrow.",
    tense: "future",
    hint: "Use perfective: skontrolować",
  },
  {
    sentence: "My ___ wszystko przed spotkaniem.",
    verb: "kontrolować",
    pronoun: "my",
    answer: "skontrolujemy",
    translation: "We will check everything before the meeting.",
    tense: "future",
    hint: "Use perfective: skontrolować",
  },

  // ============================================
  // koniugować (to conjugate)
  // ============================================

  // Present tense - koniugować
  {
    sentence: "Ja dobrze ___ polskie czasowniki.",
    verb: "koniugować",
    pronoun: "ja",
    answer: "koniuguję",
    translation: "I conjugate Polish verbs well.",
    tense: "present",
  },
  {
    sentence: "Jak ty ___ ten czasownik?",
    verb: "koniugować",
    pronoun: "ty",
    answer: "koniugujesz",
    translation: "How do you conjugate this verb?",
    tense: "present",
  },
  {
    sentence: "Nauczyciel ___ czasowniki na tablicy.",
    verb: "koniugować",
    pronoun: "on",
    answer: "koniuguje",
    translation: "The teacher conjugates verbs on the board.",
    tense: "present",
  },
  {
    sentence: "Na lekcji my ___ nowe czasowniki.",
    verb: "koniugować",
    pronoun: "my",
    answer: "koniugujemy",
    translation: "In class we conjugate new verbs.",
    tense: "present",
  },

  // Past tense - koniugować
  {
    sentence: "Ja ___ te czasowniki na egzaminie.",
    verb: "koniugować",
    pronoun: "ja (m)",
    answer: "koniugowałem",
    translation: "I conjugated these verbs on the exam.",
    tense: "past",
  },
  {
    sentence: "Ty ___ wszystkie czasowniki poprawnie?",
    verb: "koniugować",
    pronoun: "ty (f)",
    answer: "koniugowałaś",
    translation: "Did you conjugate all verbs correctly?",
    tense: "past",
  },

  // Future tense - koniugować
  {
    sentence: "Jutro my ___ nowe czasowniki.",
    verb: "koniugować",
    pronoun: "my",
    answer: "będziemy koniugować",
    translation: "Tomorrow we will conjugate new verbs.",
    tense: "future",
  },

  // ============================================
  // surfować (to surf)
  // ============================================

  // Present tense - surfować
  {
    sentence: "Ja często ___ w internecie.",
    verb: "surfować",
    pronoun: "ja",
    answer: "surfuję",
    translation: "I often surf the internet.",
    tense: "present",
  },
  {
    sentence: "Czy ty ___ po falach?",
    verb: "surfować",
    pronoun: "ty",
    answer: "surfujesz",
    translation: "Do you surf the waves?",
    tense: "present",
  },
  {
    sentence: "On ___ po stronach z wiadomościami.",
    verb: "surfować",
    pronoun: "on",
    answer: "surfuje",
    translation: "He surfs news websites.",
    tense: "present",
  },
  {
    sentence: "W wolnym czasie my ___ po sieci.",
    verb: "surfować",
    pronoun: "my",
    answer: "surfujemy",
    translation: "In our free time we surf the web.",
    tense: "present",
  },

  // Past tense - surfować
  {
    sentence: "Ja ___ cały dzień po internecie.",
    verb: "surfować",
    pronoun: "ja (m)",
    answer: "surfowałem",
    translation: "I was surfing the internet all day.",
    tense: "past",
  },
  {
    sentence: "Ty ___ na Hawajach?",
    verb: "surfować",
    pronoun: "ty (f)",
    answer: "surfowałaś",
    translation: "Did you surf in Hawaii?",
    tense: "past",
  },
  {
    sentence: "On ___ na deskach od dziecka.",
    verb: "surfować",
    pronoun: "on",
    answer: "surfował",
    translation: "He has been surfing since childhood.",
    tense: "past",
  },

  // Future tense - surfować
  {
    sentence: "Ja ___ jutro na plaży.",
    verb: "surfować",
    pronoun: "ja",
    answer: "będę surfować",
    translation: "I will surf at the beach tomorrow.",
    tense: "future",
  },
  {
    sentence: "Ty ___ ze mną?",
    verb: "surfować",
    pronoun: "ty",
    answer: "będziesz surfować",
    translation: "Will you surf with me?",
    tense: "future",
  },

  // ============================================
  // dekorować (to decorate)
  // ============================================

  // Present tense - dekorować
  {
    sentence: "Ja ___ pokój na święta.",
    verb: "dekorować",
    pronoun: "ja",
    answer: "dekoruję",
    translation: "I decorate the room for Christmas.",
    tense: "present",
  },
  {
    sentence: "Jak ty ___ mieszkanie?",
    verb: "dekorować",
    pronoun: "ty",
    answer: "dekorujesz",
    translation: "How do you decorate the apartment?",
    tense: "present",
  },
  {
    sentence: "Ona pięknie ___ ciasta.",
    verb: "dekorować",
    pronoun: "ona",
    answer: "dekoruje",
    translation: "She beautifully decorates cakes.",
    tense: "present",
  },
  {
    sentence: "My razem ___ choinkę.",
    verb: "dekorować",
    pronoun: "my",
    answer: "dekorujemy",
    translation: "We decorate the Christmas tree together.",
    tense: "present",
  },

  // Past tense - dekorować
  {
    sentence: "Ja ___ mieszkanie na imprezę.",
    verb: "dekorować",
    pronoun: "ja (m)",
    answer: "dekorowałem",
    translation: "I was decorating the apartment for the party.",
    tense: "past",
  },
  {
    sentence: "Ty ___ salę na wesele?",
    verb: "dekorować",
    pronoun: "ty (f)",
    answer: "dekorowałaś",
    translation: "Did you decorate the hall for the wedding?",
    tense: "past",
  },
  {
    sentence: "Ona ___ tort przez godzinę.",
    verb: "dekorować",
    pronoun: "ona",
    answer: "dekorowała",
    translation: "She was decorating the cake for an hour.",
    tense: "past",
  },

  // Future tense - dekorować (udekorować - perfective)
  {
    sentence: "Ja ___ pokój jutro.",
    verb: "dekorować",
    pronoun: "ja",
    answer: "udekoruję",
    translation: "I will decorate the room tomorrow.",
    tense: "future",
    hint: "Use perfective: udekorować",
  },
  {
    sentence: "My ___ salę przed przyjęciem.",
    verb: "dekorować",
    pronoun: "my",
    answer: "udekorujemy",
    translation: "We will decorate the hall before the party.",
    tense: "future",
    hint: "Use perfective: udekorować",
  },

  // ============================================
  // dyskutować (to discuss)
  // ============================================

  // Present tense - dyskutować
  {
    sentence: "My często ___ o polityce.",
    verb: "dyskutować",
    pronoun: "my",
    answer: "dyskutujemy",
    translation: "We often discuss politics.",
    tense: "present",
  },
  {
    sentence: "O czym ty ___ z kolegami?",
    verb: "dyskutować",
    pronoun: "ty",
    answer: "dyskutujesz",
    translation: "What do you discuss with your friends?",
    tense: "present",
  },
  {
    sentence: "Na zajęciach studenci ___ problem.",
    verb: "dyskutować",
    pronoun: "oni",
    answer: "dyskutują",
    translation: "In class the students discuss the problem.",
    tense: "present",
  },
  {
    sentence: "Ja rzadko ___ z nim.",
    verb: "dyskutować",
    pronoun: "ja",
    answer: "dyskutuję",
    translation: "I rarely discuss things with him.",
    tense: "present",
  },

  // Past tense - dyskutować
  {
    sentence: "Ja ___ z nim przez godzinę.",
    verb: "dyskutować",
    pronoun: "ja (m)",
    answer: "dyskutowałem",
    translation: "I was discussing with him for an hour.",
    tense: "past",
  },
  {
    sentence: "Ty ___ o tym wczoraj?",
    verb: "dyskutować",
    pronoun: "ty (f)",
    answer: "dyskutowałaś",
    translation: "Did you discuss this yesterday?",
    tense: "past",
  },
  {
    sentence: "Oni ___ plan przez całą noc.",
    verb: "dyskutować",
    pronoun: "oni",
    answer: "dyskutowali",
    translation: "They discussed the plan all night.",
    tense: "past",
  },

  // Future tense - dyskutować (przedyskutować - perfective)
  {
    sentence: "My ___ to na spotkaniu.",
    verb: "dyskutować",
    pronoun: "my",
    answer: "przedyskutujemy",
    translation: "We will discuss this at the meeting.",
    tense: "future",
    hint: "Use perfective: przedyskutować",
  },
  {
    sentence: "Ja ___ z nim jutro.",
    verb: "dyskutować",
    pronoun: "ja",
    answer: "przedyskutuję",
    translation: "I will discuss with him tomorrow.",
    tense: "future",
    hint: "Use perfective: przedyskutować",
  },
];

// Get a random sentence
export function getRandomSentence(): SentenceExercise {
  return sentences[Math.floor(Math.random() * sentences.length)];
}
