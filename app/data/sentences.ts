// Polish sentences with blanks for verb conjugation practice

export interface SentenceExercise {
  sentence: string; // Use ___ for the blank
  verb: string; // infinitive form
  pronoun: string; // which pronoun is used
  answer: string; // correct conjugated form
  translation: string; // English translation
  hint?: string; // optional hint
}

export const sentences: SentenceExercise[] = [
  // być (to be)
  {
    sentence: "Ja ___ studentem.",
    verb: "być",
    pronoun: "ja",
    answer: "jestem",
    translation: "I am a student.",
  },
  {
    sentence: "Ty ___ bardzo miły.",
    verb: "być",
    pronoun: "ty",
    answer: "jesteś",
    translation: "You are very nice.",
  },
  {
    sentence: "On ___ lekarzem.",
    verb: "być",
    pronoun: "on",
    answer: "jest",
    translation: "He is a doctor.",
  },
  {
    sentence: "Ona ___ nauczycielką.",
    verb: "być",
    pronoun: "ona",
    answer: "jest",
    translation: "She is a teacher.",
  },
  {
    sentence: "My ___ z Polski.",
    verb: "być",
    pronoun: "my",
    answer: "jesteśmy",
    translation: "We are from Poland.",
  },
  {
    sentence: "Wy ___ bardzo zmęczeni.",
    verb: "być",
    pronoun: "wy",
    answer: "jesteście",
    translation: "You (plural) are very tired.",
  },
  {
    sentence: "Oni ___ w domu.",
    verb: "być",
    pronoun: "oni",
    answer: "są",
    translation: "They are at home.",
  },
  {
    sentence: "Państwo ___ bardzo uprzejmi.",
    verb: "być",
    pronoun: "państwo",
    answer: "są",
    translation: "You (formal plural) are very kind.",
  },

  // mieć (to have)
  {
    sentence: "Ja ___ dwa koty.",
    verb: "mieć",
    pronoun: "ja",
    answer: "mam",
    translation: "I have two cats.",
  },
  {
    sentence: "Czy ty ___ czas?",
    verb: "mieć",
    pronoun: "ty",
    answer: "masz",
    translation: "Do you have time?",
  },
  {
    sentence: "On ___ nowy samochód.",
    verb: "mieć",
    pronoun: "on",
    answer: "ma",
    translation: "He has a new car.",
  },
  {
    sentence: "Ona ___ piękne oczy.",
    verb: "mieć",
    pronoun: "ona",
    answer: "ma",
    translation: "She has beautiful eyes.",
  },
  {
    sentence: "My ___ dużo pracy.",
    verb: "mieć",
    pronoun: "my",
    answer: "mamy",
    translation: "We have a lot of work.",
  },
  {
    sentence: "Czy wy ___ dzieci?",
    verb: "mieć",
    pronoun: "wy",
    answer: "macie",
    translation: "Do you (plural) have children?",
  },
  {
    sentence: "Oni ___ duży dom.",
    verb: "mieć",
    pronoun: "oni",
    answer: "mają",
    translation: "They have a big house.",
  },

  // mieszkać (to live)
  {
    sentence: "Ja ___ w Warszawie.",
    verb: "mieszkać",
    pronoun: "ja",
    answer: "mieszkam",
    translation: "I live in Warsaw.",
  },
  {
    sentence: "Gdzie ty ___?",
    verb: "mieszkać",
    pronoun: "ty",
    answer: "mieszkasz",
    translation: "Where do you live?",
  },
  {
    sentence: "On ___ z rodzicami.",
    verb: "mieszkać",
    pronoun: "on",
    answer: "mieszka",
    translation: "He lives with his parents.",
  },
  {
    sentence: "My ___ w centrum miasta.",
    verb: "mieszkać",
    pronoun: "my",
    answer: "mieszkamy",
    translation: "We live in the city center.",
  },
  {
    sentence: "Oni ___ na wsi.",
    verb: "mieszkać",
    pronoun: "oni",
    answer: "mieszkają",
    translation: "They live in the countryside.",
  },

  // mówić (to speak)
  {
    sentence: "Ja ___ po polsku.",
    verb: "mówić",
    pronoun: "ja",
    answer: "mówię",
    translation: "I speak Polish.",
  },
  {
    sentence: "Czy ty ___ po angielsku?",
    verb: "mówić",
    pronoun: "ty",
    answer: "mówisz",
    translation: "Do you speak English?",
  },
  {
    sentence: "Ona ___ bardzo cicho.",
    verb: "mówić",
    pronoun: "ona",
    answer: "mówi",
    translation: "She speaks very quietly.",
  },
  {
    sentence: "My ___ prawdę.",
    verb: "mówić",
    pronoun: "my",
    answer: "mówimy",
    translation: "We speak the truth.",
  },
  {
    sentence: "Oni ___ po niemiecku.",
    verb: "mówić",
    pronoun: "oni",
    answer: "mówią",
    translation: "They speak German.",
  },

  // pracować (to work)
  {
    sentence: "Ja ___ w biurze.",
    verb: "pracować",
    pronoun: "ja",
    answer: "pracuję",
    translation: "I work in an office.",
  },
  {
    sentence: "Gdzie ty ___?",
    verb: "pracować",
    pronoun: "ty",
    answer: "pracujesz",
    translation: "Where do you work?",
  },
  {
    sentence: "On ___ jako programista.",
    verb: "pracować",
    pronoun: "on",
    answer: "pracuje",
    translation: "He works as a programmer.",
  },
  {
    sentence: "My ___ razem.",
    verb: "pracować",
    pronoun: "my",
    answer: "pracujemy",
    translation: "We work together.",
  },
  {
    sentence: "Oni ___ w weekendy.",
    verb: "pracować",
    pronoun: "oni",
    answer: "pracują",
    translation: "They work on weekends.",
  },

  // czytać (to read)
  {
    sentence: "Ja ___ książkę.",
    verb: "czytać",
    pronoun: "ja",
    answer: "czytam",
    translation: "I am reading a book.",
  },
  {
    sentence: "Co ty ___?",
    verb: "czytać",
    pronoun: "ty",
    answer: "czytasz",
    translation: "What are you reading?",
  },
  {
    sentence: "Ona ___ gazetę każdego ranka.",
    verb: "czytać",
    pronoun: "ona",
    answer: "czyta",
    translation: "She reads the newspaper every morning.",
  },
  {
    sentence: "My ___ dużo.",
    verb: "czytać",
    pronoun: "my",
    answer: "czytamy",
    translation: "We read a lot.",
  },
  {
    sentence: "Dzieci ___ bajki.",
    verb: "czytać",
    pronoun: "oni",
    answer: "czytają",
    translation: "Children read fairy tales.",
  },

  // pisać (to write)
  {
    sentence: "Ja ___ list do mamy.",
    verb: "pisać",
    pronoun: "ja",
    answer: "piszę",
    translation: "I am writing a letter to my mom.",
  },
  {
    sentence: "Ty ___ bardzo ładnie.",
    verb: "pisać",
    pronoun: "ty",
    answer: "piszesz",
    translation: "You write very nicely.",
  },
  {
    sentence: "On ___ książkę.",
    verb: "pisać",
    pronoun: "on",
    answer: "pisze",
    translation: "He is writing a book.",
  },
  {
    sentence: "My ___ e-maile.",
    verb: "pisać",
    pronoun: "my",
    answer: "piszemy",
    translation: "We write emails.",
  },

  // robić (to do/make)
  {
    sentence: "Co ty ___?",
    verb: "robić",
    pronoun: "ty",
    answer: "robisz",
    translation: "What are you doing?",
  },
  {
    sentence: "Ja ___ śniadanie.",
    verb: "robić",
    pronoun: "ja",
    answer: "robię",
    translation: "I am making breakfast.",
  },
  {
    sentence: "Ona ___ zakupy.",
    verb: "robić",
    pronoun: "ona",
    answer: "robi",
    translation: "She is doing the shopping.",
  },
  {
    sentence: "Co wy ___?",
    verb: "robić",
    pronoun: "wy",
    answer: "robicie",
    translation: "What are you (plural) doing?",
  },
  {
    sentence: "Oni ___ porządki.",
    verb: "robić",
    pronoun: "oni",
    answer: "robią",
    translation: "They are cleaning up.",
  },

  // jeść (to eat)
  {
    sentence: "Ja ___ obiad.",
    verb: "jeść",
    pronoun: "ja",
    answer: "jem",
    translation: "I am eating lunch.",
  },
  {
    sentence: "Co ty ___?",
    verb: "jeść",
    pronoun: "ty",
    answer: "jesz",
    translation: "What are you eating?",
  },
  {
    sentence: "On ___ jabłko.",
    verb: "jeść",
    pronoun: "on",
    answer: "je",
    translation: "He is eating an apple.",
  },
  {
    sentence: "My ___ razem.",
    verb: "jeść",
    pronoun: "my",
    answer: "jemy",
    translation: "We eat together.",
  },
  {
    sentence: "Dzieci ___ słodycze.",
    verb: "jeść",
    pronoun: "oni",
    answer: "jedzą",
    translation: "Children eat sweets.",
  },

  // pić (to drink)
  {
    sentence: "Ja ___ kawę.",
    verb: "pić",
    pronoun: "ja",
    answer: "piję",
    translation: "I drink coffee.",
  },
  {
    sentence: "Co ty ___?",
    verb: "pić",
    pronoun: "ty",
    answer: "pijesz",
    translation: "What are you drinking?",
  },
  {
    sentence: "Ona ___ herbatę.",
    verb: "pić",
    pronoun: "ona",
    answer: "pije",
    translation: "She drinks tea.",
  },
  {
    sentence: "My ___ wodę.",
    verb: "pić",
    pronoun: "my",
    answer: "pijemy",
    translation: "We drink water.",
  },
  {
    sentence: "Oni ___ piwo.",
    verb: "pić",
    pronoun: "oni",
    answer: "piją",
    translation: "They drink beer.",
  },

  // lubić (to like)
  {
    sentence: "Ja ___ czekoladę.",
    verb: "lubić",
    pronoun: "ja",
    answer: "lubię",
    translation: "I like chocolate.",
  },
  {
    sentence: "Czy ty ___ muzykę?",
    verb: "lubić",
    pronoun: "ty",
    answer: "lubisz",
    translation: "Do you like music?",
  },
  {
    sentence: "On ___ sport.",
    verb: "lubić",
    pronoun: "on",
    answer: "lubi",
    translation: "He likes sports.",
  },
  {
    sentence: "My ___ podróżować.",
    verb: "lubić",
    pronoun: "my",
    answer: "lubimy",
    translation: "We like to travel.",
  },
  {
    sentence: "Oni ___ polską kuchnię.",
    verb: "lubić",
    pronoun: "oni",
    answer: "lubią",
    translation: "They like Polish cuisine.",
  },

  // chcieć (to want)
  {
    sentence: "Ja ___ herbatę.",
    verb: "chcieć",
    pronoun: "ja",
    answer: "chcę",
    translation: "I want tea.",
  },
  {
    sentence: "Czy ty ___ iść do kina?",
    verb: "chcieć",
    pronoun: "ty",
    answer: "chcesz",
    translation: "Do you want to go to the cinema?",
  },
  {
    sentence: "On ___ kupić nowy telefon.",
    verb: "chcieć",
    pronoun: "on",
    answer: "chce",
    translation: "He wants to buy a new phone.",
  },
  {
    sentence: "My ___ odpocząć.",
    verb: "chcieć",
    pronoun: "my",
    answer: "chcemy",
    translation: "We want to rest.",
  },
  {
    sentence: "Oni ___ pojechać na wakacje.",
    verb: "chcieć",
    pronoun: "oni",
    answer: "chcą",
    translation: "They want to go on vacation.",
  },

  // móc (can/to be able to)
  {
    sentence: "Ja ___ ci pomóc.",
    verb: "móc",
    pronoun: "ja",
    answer: "mogę",
    translation: "I can help you.",
  },
  {
    sentence: "Czy ty ___ przyjść jutro?",
    verb: "móc",
    pronoun: "ty",
    answer: "możesz",
    translation: "Can you come tomorrow?",
  },
  {
    sentence: "On nie ___ spać.",
    verb: "móc",
    pronoun: "on",
    answer: "może",
    translation: "He cannot sleep.",
  },
  {
    sentence: "My ___ to zrobić.",
    verb: "móc",
    pronoun: "my",
    answer: "możemy",
    translation: "We can do it.",
  },
  {
    sentence: "Oni ___ przyjść później.",
    verb: "móc",
    pronoun: "oni",
    answer: "mogą",
    translation: "They can come later.",
  },

  // musieć (must/to have to)
  {
    sentence: "Ja ___ iść do pracy.",
    verb: "musieć",
    pronoun: "ja",
    answer: "muszę",
    translation: "I have to go to work.",
  },
  {
    sentence: "Ty ___ się uczyć.",
    verb: "musieć",
    pronoun: "ty",
    answer: "musisz",
    translation: "You have to study.",
  },
  {
    sentence: "On ___ wstać wcześnie.",
    verb: "musieć",
    pronoun: "on",
    answer: "musi",
    translation: "He has to get up early.",
  },
  {
    sentence: "My ___ to skończyć.",
    verb: "musieć",
    pronoun: "my",
    answer: "musimy",
    translation: "We have to finish it.",
  },
  {
    sentence: "Oni ___ zapłacić rachunek.",
    verb: "musieć",
    pronoun: "oni",
    answer: "muszą",
    translation: "They have to pay the bill.",
  },

  // iść (to go - on foot)
  {
    sentence: "Ja ___ do szkoły.",
    verb: "iść",
    pronoun: "ja",
    answer: "idę",
    translation: "I am going to school.",
  },
  {
    sentence: "Dokąd ty ___?",
    verb: "iść",
    pronoun: "ty",
    answer: "idziesz",
    translation: "Where are you going?",
  },
  {
    sentence: "Ona ___ na spacer.",
    verb: "iść",
    pronoun: "ona",
    answer: "idzie",
    translation: "She is going for a walk.",
  },
  {
    sentence: "My ___ do kina.",
    verb: "iść",
    pronoun: "my",
    answer: "idziemy",
    translation: "We are going to the cinema.",
  },
  {
    sentence: "Oni ___ do parku.",
    verb: "iść",
    pronoun: "oni",
    answer: "idą",
    translation: "They are going to the park.",
  },

  // jechać (to go - by vehicle)
  {
    sentence: "Ja ___ do Krakowa.",
    verb: "jechać",
    pronoun: "ja",
    answer: "jadę",
    translation: "I am going to Kraków.",
  },
  {
    sentence: "Dokąd ty ___?",
    verb: "jechać",
    pronoun: "ty",
    answer: "jedziesz",
    translation: "Where are you going (by vehicle)?",
  },
  {
    sentence: "On ___ samochodem.",
    verb: "jechać",
    pronoun: "on",
    answer: "jedzie",
    translation: "He is going by car.",
  },
  {
    sentence: "My ___ pociągiem.",
    verb: "jechać",
    pronoun: "my",
    answer: "jedziemy",
    translation: "We are going by train.",
  },
  {
    sentence: "Oni ___ autobusem.",
    verb: "jechać",
    pronoun: "oni",
    answer: "jadą",
    translation: "They are going by bus.",
  },

  // rozumieć (to understand)
  {
    sentence: "Ja ___ po polsku.",
    verb: "rozumieć",
    pronoun: "ja",
    answer: "rozumiem",
    translation: "I understand Polish.",
  },
  {
    sentence: "Czy ty ___?",
    verb: "rozumieć",
    pronoun: "ty",
    answer: "rozumiesz",
    translation: "Do you understand?",
  },
  {
    sentence: "On nie ___ tego.",
    verb: "rozumieć",
    pronoun: "on",
    answer: "rozumie",
    translation: "He doesn't understand this.",
  },
  {
    sentence: "My ___ problem.",
    verb: "rozumieć",
    pronoun: "my",
    answer: "rozumiemy",
    translation: "We understand the problem.",
  },
  {
    sentence: "Oni nie ___ instrukcji.",
    verb: "rozumieć",
    pronoun: "oni",
    answer: "rozumieją",
    translation: "They don't understand the instructions.",
  },

  // wiedzieć (to know - a fact)
  {
    sentence: "Ja ___, gdzie to jest.",
    verb: "wiedzieć",
    pronoun: "ja",
    answer: "wiem",
    translation: "I know where it is.",
  },
  {
    sentence: "Czy ty ___, jak to zrobić?",
    verb: "wiedzieć",
    pronoun: "ty",
    answer: "wiesz",
    translation: "Do you know how to do it?",
  },
  {
    sentence: "On ___ wszystko.",
    verb: "wiedzieć",
    pronoun: "on",
    answer: "wie",
    translation: "He knows everything.",
  },
  {
    sentence: "My ___, że masz rację.",
    verb: "wiedzieć",
    pronoun: "my",
    answer: "wiemy",
    translation: "We know that you are right.",
  },
  {
    sentence: "Oni nie ___ prawdy.",
    verb: "wiedzieć",
    pronoun: "oni",
    answer: "wiedzą",
    translation: "They don't know the truth.",
  },

  // uczyć się (to learn/study)
  {
    sentence: "Ja ___ polskiego.",
    verb: "uczyć się",
    pronoun: "ja",
    answer: "uczę się",
    translation: "I am learning Polish.",
  },
  {
    sentence: "Czego ty ___?",
    verb: "uczyć się",
    pronoun: "ty",
    answer: "uczysz się",
    translation: "What are you studying?",
  },
  {
    sentence: "Ona ___ na egzamin.",
    verb: "uczyć się",
    pronoun: "ona",
    answer: "uczy się",
    translation: "She is studying for an exam.",
  },
  {
    sentence: "My ___ razem.",
    verb: "uczyć się",
    pronoun: "my",
    answer: "uczymy się",
    translation: "We study together.",
  },
  {
    sentence: "Oni ___ języka angielskiego.",
    verb: "uczyć się",
    pronoun: "oni",
    answer: "uczą się",
    translation: "They are learning English.",
  },

  // kupować (to buy)
  {
    sentence: "Ja ___ chleb.",
    verb: "kupować",
    pronoun: "ja",
    answer: "kupuję",
    translation: "I am buying bread.",
  },
  {
    sentence: "Co ty ___?",
    verb: "kupować",
    pronoun: "ty",
    answer: "kupujesz",
    translation: "What are you buying?",
  },
  {
    sentence: "Ona ___ nową sukienkę.",
    verb: "kupować",
    pronoun: "ona",
    answer: "kupuje",
    translation: "She is buying a new dress.",
  },
  {
    sentence: "My ___ prezenty.",
    verb: "kupować",
    pronoun: "my",
    answer: "kupujemy",
    translation: "We are buying presents.",
  },
  {
    sentence: "Oni ___ jedzenie.",
    verb: "kupować",
    pronoun: "oni",
    answer: "kupują",
    translation: "They are buying food.",
  },

  // gotować (to cook)
  {
    sentence: "Ja ___ obiad.",
    verb: "gotować",
    pronoun: "ja",
    answer: "gotuję",
    translation: "I am cooking lunch.",
  },
  {
    sentence: "Czy ty ___ dobrze?",
    verb: "gotować",
    pronoun: "ty",
    answer: "gotujesz",
    translation: "Do you cook well?",
  },
  {
    sentence: "Mama ___ zupę.",
    verb: "gotować",
    pronoun: "ona",
    answer: "gotuje",
    translation: "Mom is cooking soup.",
  },
  {
    sentence: "My ___ razem w weekendy.",
    verb: "gotować",
    pronoun: "my",
    answer: "gotujemy",
    translation: "We cook together on weekends.",
  },

  // spać (to sleep)
  {
    sentence: "Ja ___ osiem godzin.",
    verb: "spać",
    pronoun: "ja",
    answer: "śpię",
    translation: "I sleep eight hours.",
  },
  {
    sentence: "Czy ty dobrze ___?",
    verb: "spać",
    pronoun: "ty",
    answer: "śpisz",
    translation: "Do you sleep well?",
  },
  {
    sentence: "Dziecko ___.",
    verb: "spać",
    pronoun: "ono",
    answer: "śpi",
    translation: "The child is sleeping.",
  },
  {
    sentence: "My ___ w namiocie.",
    verb: "spać",
    pronoun: "my",
    answer: "śpimy",
    translation: "We sleep in a tent.",
  },
  {
    sentence: "Koty ___ cały dzień.",
    verb: "spać",
    pronoun: "oni",
    answer: "śpią",
    translation: "Cats sleep all day.",
  },

  // grać (to play)
  {
    sentence: "Ja ___ w piłkę nożną.",
    verb: "grać",
    pronoun: "ja",
    answer: "gram",
    translation: "I play football.",
  },
  {
    sentence: "W co ty ___?",
    verb: "grać",
    pronoun: "ty",
    answer: "grasz",
    translation: "What do you play?",
  },
  {
    sentence: "On ___ na gitarze.",
    verb: "grać",
    pronoun: "on",
    answer: "gra",
    translation: "He plays the guitar.",
  },
  {
    sentence: "My ___ w szachy.",
    verb: "grać",
    pronoun: "my",
    answer: "gramy",
    translation: "We play chess.",
  },
  {
    sentence: "Dzieci ___ w ogrodzie.",
    verb: "grać",
    pronoun: "oni",
    answer: "grają",
    translation: "Children play in the garden.",
  },

  // słuchać (to listen)
  {
    sentence: "Ja ___ muzyki.",
    verb: "słuchać",
    pronoun: "ja",
    answer: "słucham",
    translation: "I listen to music.",
  },
  {
    sentence: "Czy ty mnie ___?",
    verb: "słuchać",
    pronoun: "ty",
    answer: "słuchasz",
    translation: "Are you listening to me?",
  },
  {
    sentence: "Ona ___ radia.",
    verb: "słuchać",
    pronoun: "ona",
    answer: "słucha",
    translation: "She listens to the radio.",
  },
  {
    sentence: "My ___ podcastów.",
    verb: "słuchać",
    pronoun: "my",
    answer: "słuchamy",
    translation: "We listen to podcasts.",
  },

  // oglądać (to watch)
  {
    sentence: "Ja ___ film.",
    verb: "oglądać",
    pronoun: "ja",
    answer: "oglądam",
    translation: "I am watching a movie.",
  },
  {
    sentence: "Co ty ___?",
    verb: "oglądać",
    pronoun: "ty",
    answer: "oglądasz",
    translation: "What are you watching?",
  },
  {
    sentence: "On ___ telewizję.",
    verb: "oglądać",
    pronoun: "on",
    answer: "ogląda",
    translation: "He is watching TV.",
  },
  {
    sentence: "My ___ mecz.",
    verb: "oglądać",
    pronoun: "my",
    answer: "oglądamy",
    translation: "We are watching the match.",
  },
  {
    sentence: "Oni ___ seriale.",
    verb: "oglądać",
    pronoun: "oni",
    answer: "oglądają",
    translation: "They watch TV series.",
  },

  // kochać (to love)
  {
    sentence: "Ja ___ cię.",
    verb: "kochać",
    pronoun: "ja",
    answer: "kocham",
    translation: "I love you.",
  },
  {
    sentence: "Czy ty mnie ___?",
    verb: "kochać",
    pronoun: "ty",
    answer: "kochasz",
    translation: "Do you love me?",
  },
  {
    sentence: "On ___ swoją rodzinę.",
    verb: "kochać",
    pronoun: "on",
    answer: "kocha",
    translation: "He loves his family.",
  },
  {
    sentence: "My ___ Polskę.",
    verb: "kochać",
    pronoun: "my",
    answer: "kochamy",
    translation: "We love Poland.",
  },

  // pomagać (to help)
  {
    sentence: "Ja ___ mamie.",
    verb: "pomagać",
    pronoun: "ja",
    answer: "pomagam",
    translation: "I help my mom.",
  },
  {
    sentence: "Czy ty mi ___?",
    verb: "pomagać",
    pronoun: "ty",
    answer: "pomagasz",
    translation: "Are you helping me?",
  },
  {
    sentence: "Ona ___ sąsiadom.",
    verb: "pomagać",
    pronoun: "ona",
    answer: "pomaga",
    translation: "She helps the neighbors.",
  },
  {
    sentence: "My ___ sobie nawzajem.",
    verb: "pomagać",
    pronoun: "my",
    answer: "pomagamy",
    translation: "We help each other.",
  },

  // czekać (to wait)
  {
    sentence: "Ja ___ na autobus.",
    verb: "czekać",
    pronoun: "ja",
    answer: "czekam",
    translation: "I am waiting for the bus.",
  },
  {
    sentence: "Na co ty ___?",
    verb: "czekać",
    pronoun: "ty",
    answer: "czekasz",
    translation: "What are you waiting for?",
  },
  {
    sentence: "On ___ na nią.",
    verb: "czekać",
    pronoun: "on",
    answer: "czeka",
    translation: "He is waiting for her.",
  },
  {
    sentence: "My ___ na odpowiedź.",
    verb: "czekać",
    pronoun: "my",
    answer: "czekamy",
    translation: "We are waiting for an answer.",
  },

  // dziękować (to thank)
  {
    sentence: "Ja ci ___.",
    verb: "dziękować",
    pronoun: "ja",
    answer: "dziękuję",
    translation: "I thank you.",
  },
  {
    sentence: "Ty mi nigdy nie ___.",
    verb: "dziękować",
    pronoun: "ty",
    answer: "dziękujesz",
    translation: "You never thank me.",
  },
  {
    sentence: "On ___ za pomoc.",
    verb: "dziękować",
    pronoun: "on",
    answer: "dziękuje",
    translation: "He thanks for the help.",
  },
  {
    sentence: "My ___ za wszystko.",
    verb: "dziękować",
    pronoun: "my",
    answer: "dziękujemy",
    translation: "We thank you for everything.",
  },

  // przepraszać (to apologize)
  {
    sentence: "Ja ___.",
    verb: "przepraszać",
    pronoun: "ja",
    answer: "przepraszam",
    translation: "I apologize / Excuse me.",
  },
  {
    sentence: "Czy ty mnie ___?",
    verb: "przepraszać",
    pronoun: "ty",
    answer: "przepraszasz",
    translation: "Are you apologizing to me?",
  },
  {
    sentence: "Ona ___ za spóźnienie.",
    verb: "przepraszać",
    pronoun: "ona",
    answer: "przeprasza",
    translation: "She apologizes for being late.",
  },

  // wracać (to return)
  {
    sentence: "Kiedy ty ___?",
    verb: "wracać",
    pronoun: "ty",
    answer: "wracasz",
    translation: "When are you coming back?",
  },
  {
    sentence: "Ja ___ do domu.",
    verb: "wracać",
    pronoun: "ja",
    answer: "wracam",
    translation: "I am returning home.",
  },
  {
    sentence: "On ___ z pracy o szóstej.",
    verb: "wracać",
    pronoun: "on",
    answer: "wraca",
    translation: "He returns from work at six.",
  },
  {
    sentence: "My ___ jutro.",
    verb: "wracać",
    pronoun: "my",
    answer: "wracamy",
    translation: "We are returning tomorrow.",
  },

  // zaczynać (to begin/start)
  {
    sentence: "Ja ___ pracę o ósmej.",
    verb: "zaczynać",
    pronoun: "ja",
    answer: "zaczynam",
    translation: "I start work at eight.",
  },
  {
    sentence: "O której ty ___?",
    verb: "zaczynać",
    pronoun: "ty",
    answer: "zaczynasz",
    translation: "What time do you start?",
  },
  {
    sentence: "Film ___ za pięć minut.",
    verb: "zaczynać",
    pronoun: "on",
    answer: "zaczyna",
    translation: "The film starts in five minutes.",
  },
  {
    sentence: "My ___ od początku.",
    verb: "zaczynać",
    pronoun: "my",
    answer: "zaczynamy",
    translation: "We start from the beginning.",
  },

  // kończyć (to finish/end)
  {
    sentence: "Ja ___ pracę o piątej.",
    verb: "kończyć",
    pronoun: "ja",
    answer: "kończę",
    translation: "I finish work at five.",
  },
  {
    sentence: "O której ty ___?",
    verb: "kończyć",
    pronoun: "ty",
    answer: "kończysz",
    translation: "What time do you finish?",
  },
  {
    sentence: "Lekcja ___ za chwilę.",
    verb: "kończyć",
    pronoun: "ona",
    answer: "kończy",
    translation: "The lesson ends in a moment.",
  },
  {
    sentence: "My ___ projekt.",
    verb: "kończyć",
    pronoun: "my",
    answer: "kończymy",
    translation: "We are finishing the project.",
  },

  // bać się (to be afraid)
  {
    sentence: "Ja ___ pająków.",
    verb: "bać się",
    pronoun: "ja",
    answer: "boję się",
    translation: "I am afraid of spiders.",
  },
  {
    sentence: "Czy ty ___ ciemności?",
    verb: "bać się",
    pronoun: "ty",
    answer: "boisz się",
    translation: "Are you afraid of the dark?",
  },
  {
    sentence: "Ona ___ burzy.",
    verb: "bać się",
    pronoun: "ona",
    answer: "boi się",
    translation: "She is afraid of storms.",
  },
  {
    sentence: "My ___ o przyszłość.",
    verb: "bać się",
    pronoun: "my",
    answer: "boimy się",
    translation: "We are afraid for the future.",
  },

  // cieszyć się (to be happy/enjoy)
  {
    sentence: "Ja ___ na wakacje.",
    verb: "cieszyć się",
    pronoun: "ja",
    answer: "cieszę się",
    translation: "I am looking forward to the vacation.",
  },
  {
    sentence: "Czy ty ___?",
    verb: "cieszyć się",
    pronoun: "ty",
    answer: "cieszysz się",
    translation: "Are you happy?",
  },
  {
    sentence: "On ___ z prezentu.",
    verb: "cieszyć się",
    pronoun: "on",
    answer: "cieszy się",
    translation: "He is happy with the gift.",
  },
  {
    sentence: "My ___ razem.",
    verb: "cieszyć się",
    pronoun: "my",
    answer: "cieszymy się",
    translation: "We are happy together.",
  },

  // nazywać się (to be called/named)
  {
    sentence: "Jak ty ___?",
    verb: "nazywać się",
    pronoun: "ty",
    answer: "nazywasz się",
    translation: "What is your name?",
  },
  {
    sentence: "Ja ___ Anna.",
    verb: "nazywać się",
    pronoun: "ja",
    answer: "nazywam się",
    translation: "My name is Anna.",
  },
  {
    sentence: "On ___ Piotr.",
    verb: "nazywać się",
    pronoun: "on",
    answer: "nazywa się",
    translation: "His name is Piotr.",
  },
  {
    sentence: "Jak państwo ___?",
    verb: "nazywać się",
    pronoun: "państwo",
    answer: "nazywają się",
    translation: "What are your names? (formal)",
  },

  // interesować się (to be interested in)
  {
    sentence: "Ja ___ historią.",
    verb: "interesować się",
    pronoun: "ja",
    answer: "interesuję się",
    translation: "I am interested in history.",
  },
  {
    sentence: "Czym ty ___?",
    verb: "interesować się",
    pronoun: "ty",
    answer: "interesujesz się",
    translation: "What are you interested in?",
  },
  {
    sentence: "On ___ sportem.",
    verb: "interesować się",
    pronoun: "on",
    answer: "interesuje się",
    translation: "He is interested in sports.",
  },
  {
    sentence: "My ___ kulturą polską.",
    verb: "interesować się",
    pronoun: "my",
    answer: "interesujemy się",
    translation: "We are interested in Polish culture.",
  },

  // śpiewać (to sing)
  {
    sentence: "Ja ___ pod prysznicem.",
    verb: "śpiewać",
    pronoun: "ja",
    answer: "śpiewam",
    translation: "I sing in the shower.",
  },
  {
    sentence: "Czy ty ___ w chórze?",
    verb: "śpiewać",
    pronoun: "ty",
    answer: "śpiewasz",
    translation: "Do you sing in a choir?",
  },
  {
    sentence: "Ona pięknie ___.",
    verb: "śpiewać",
    pronoun: "ona",
    answer: "śpiewa",
    translation: "She sings beautifully.",
  },
  {
    sentence: "My ___ razem.",
    verb: "śpiewać",
    pronoun: "my",
    answer: "śpiewamy",
    translation: "We sing together.",
  },

  // tańczyć (to dance)
  {
    sentence: "Ja ___ tango.",
    verb: "tańczyć",
    pronoun: "ja",
    answer: "tańczę",
    translation: "I dance tango.",
  },
  {
    sentence: "Czy ty ___?",
    verb: "tańczyć",
    pronoun: "ty",
    answer: "tańczysz",
    translation: "Do you dance?",
  },
  {
    sentence: "Ona ___ balet.",
    verb: "tańczyć",
    pronoun: "ona",
    answer: "tańczy",
    translation: "She dances ballet.",
  },
  {
    sentence: "My ___ na weselu.",
    verb: "tańczyć",
    pronoun: "my",
    answer: "tańczymy",
    translation: "We dance at the wedding.",
  },

  // podróżować (to travel)
  {
    sentence: "Ja dużo ___.",
    verb: "podróżować",
    pronoun: "ja",
    answer: "podróżuję",
    translation: "I travel a lot.",
  },
  {
    sentence: "Czy ty często ___?",
    verb: "podróżować",
    pronoun: "ty",
    answer: "podróżujesz",
    translation: "Do you travel often?",
    hint: "Use the conjugated form, not infinitive.",
  },
  {
    sentence: "On ___ po świecie.",
    verb: "podróżować",
    pronoun: "on",
    answer: "podróżuje",
    translation: "He travels around the world.",
  },
  {
    sentence: "My ___ razem.",
    verb: "podróżować",
    pronoun: "my",
    answer: "podróżujemy",
    translation: "We travel together.",
  },

  // NOW VERBS ADDED FROM THE UPDATED VERB LIST:

  // kontrolować (to control)
  {
    sentence: "Ja ___ sytuację.",
    verb: "kontrolować",
    pronoun: "ja",
    answer: "kontroluję",
    translation: "I control the situation.",
  },
  {
    sentence: "Czy ty dobrze ___ swoje wydatki?",
    verb: "kontrolować",
    pronoun: "ty",
    answer: "kontrolujesz",
    translation: "Do you control your expenses well?",
  },
  {
    sentence: "On ___ projekt od początku do końca.",
    verb: "kontrolować",
    pronoun: "on",
    answer: "kontroluje",
    translation: "He controls the project from beginning to end.",
  },
  {
    sentence: "My ___ jakość pracy.",
    verb: "kontrolować",
    pronoun: "my",
    answer: "kontrolujemy",
    translation: "We control the quality of the work.",
  },

  // koniugować (to conjugate)
  {
    sentence: "Ja dobrze ___ polskie czasowniki.",
    verb: "koniugować",
    pronoun: "ja",
    answer: "koniuguję",
    translation: "I conjugate Polish verbs well.",
  },
  {
    sentence: "Jak ty ___ ten czasownik?",
    verb: "koniugować",
    pronoun: "ty",
    answer: "koniugujesz",
    translation: "How do you conjugate this verb?",
  },
  {
    sentence: "Nauczyciel ___ czasowniki na tablicy.",
    verb: "koniugować",
    pronoun: "on",
    answer: "koniuguje",
    translation: "The teacher conjugates verbs on the board.",
  },
  {
    sentence: "Na lekcji my ___ nowe czasowniki.",
    verb: "koniugować",
    pronoun: "my",
    answer: "koniugujemy",
    translation: "In class we conjugate new verbs.",
  },

  // surfować (to surf)
  {
    sentence: "Ja często ___ w internecie.",
    verb: "surfować",
    pronoun: "ja",
    answer: "surfuję",
    translation: "I often surf the internet.",
  },
  {
    sentence: "Czy ty ___ po falach?",
    verb: "surfować",
    pronoun: "ty",
    answer: "surfujesz",
    translation: "Do you surf the waves?",
  },
  {
    sentence: "On ___ po stronach z wiadomościami.",
    verb: "surfować",
    pronoun: "on",
    answer: "surfuje",
    translation: "He surfs news websites.",
  },
  {
    sentence: "W wolnym czasie my ___ po sieci.",
    verb: "surfować",
    pronoun: "my",
    answer: "surfujemy",
    translation: "In our free time we surf the web.",
  },

  // dekorować (to decorate)
  {
    sentence: "Ja ___ pokój na święta.",
    verb: "dekorować",
    pronoun: "ja",
    answer: "dekoruję",
    translation: "I decorate the room for Christmas.",
  },
  {
    sentence: "Jak ty ___ mieszkanie?",
    verb: "dekorować",
    pronoun: "ty",
    answer: "dekorujesz",
    translation: "How do you decorate the apartment?",
  },
  {
    sentence: "Ona pięknie ___ ciasta.",
    verb: "dekorować",
    pronoun: "ona",
    answer: "dekoruje",
    translation: "She beautifully decorates cakes.",
  },
  {
    sentence: "My razem ___ choinkę.",
    verb: "dekorować",
    pronoun: "my",
    answer: "dekorujemy",
    translation: "We decorate the Christmas tree together.",
  },

  // dyskutować (to discuss)
  {
    sentence: "My często ___ o polityce.",
    verb: "dyskutować",
    pronoun: "my",
    answer: "dyskutujemy",
    translation: "We often discuss politics.",
  },
  {
    sentence: "O czym ty ___ z kolegami?",
    verb: "dyskutować",
    pronoun: "ty",
    answer: "dyskutujesz",
    translation: "What do you discuss with your friends?",
  },
  {
    sentence: "Na zajęciach studenci ___ problem.",
    verb: "dyskutować",
    pronoun: "oni",
    answer: "dyskutują",
    translation: "In class the students discuss the problem.",
  },
  {
    sentence: "Ja rzadko ___ z nim.",
    verb: "dyskutować",
    pronoun: "ja",
    answer: "dyskutuję",
    translation: "I rarely discuss things with him.",
  },
];

// Get a random sentence
export function getRandomSentence(): SentenceExercise {
  return sentences[Math.floor(Math.random() * sentences.length)];
}
