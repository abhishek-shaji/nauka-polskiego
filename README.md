# Czasowniki Polskie 🇵🇱

An interactive Polish verb conjugation practice app built with Next.js. Master Polish verb conjugations through engaging exercises with instant feedback, streak tracking, and comprehensive conjugation tables.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

### 🎯 Conjugation Practice
Practice conjugating Polish verbs across all six personal pronouns:
- **ja** (I), **ty** (you), **on/ona/ono** (he/she/it)
- **my** (we), **wy** (you plural), **oni/one** (they)

After each answer, view the complete conjugation table to reinforce your learning.

### 📝 Sentence Practice (Fill in the Blank)
Apply your knowledge in context with sentence completion exercises. Given a Polish sentence with a blank and the infinitive form of a verb, fill in the correctly conjugated form.

### 📊 Progress Tracking
- Track your correct answers and accuracy percentage
- Build and maintain answer streaks
- See your maximum streak achieved in the session

### 📚 Comprehensive Verb Library
80+ Polish verbs covering all major conjugation patterns:
- **-ać verbs** (am, asz): mieszkać, czytać, słuchać, grać...
- **-ować verbs** (uję, ujesz): pracować, kupować, podróżować...
- **-ić/-yć verbs** (ę, isz/ysz): mówić, robić, lubić, uczyć się...
- **-eć verbs** (em, esz): rozumieć, umieć...
- **Irregular verbs**: być, mieć, iść, jeść, wiedzieć, chcieć, móc...

### 💡 Learning Aids
- Show/hide hints for difficult questions
- View complete conjugation tables after answering
- English translations for all sentences
- Verb group/pattern information

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/polish-conjugation-practice.git
cd polish-conjugation-practice

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start practicing!

## Project Structure

```
app/
├── api/
│   ├── question/     # API for random verb conjugation questions
│   └── sentence/     # API for random sentence exercises
├── components/
│   ├── homepage/     # Conjugation practice components
│   ├── sentences/    # Sentence practice components
│   └── shared/       # Shared UI components
├── data/
│   ├── verbs.ts      # 80+ Polish verbs with conjugations
│   └── sentences.ts  # 150+ sentence exercises
├── sentences/        # Sentence practice page
└── page.tsx          # Main conjugation practice page
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI**: [React 19](https://react.dev/) with [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Usage Tips

- Press **Enter** to submit your answer or proceed to the next question
- Use the **Show Hint** button if you need help
- After answering, review the full conjugation table to learn the pattern
- Switch between **Conjugation Practice** and **Sentence Practice** modes for variety

## License

MIT

---

*Powodzenia!* (Good luck!) 🍀
