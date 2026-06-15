# StudyTech AWS Cloud Practitioner Study Engine

Mini Next.js + TypeScript prototype for the StudyTech technical assessment. It models the AWS Certified Cloud Practitioner certification, maps quiz attempts to skills, calculates weak areas, and creates a recommended study session.

## How to run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## What I built

- A certification structure for AWS Certified Cloud Practitioner (`CLF-C02`) with domains, skill sets, and skills.
- Mocked question and quiz attempt data in `lib/data.ts`.
- Shared domain types in `types/study.ts`.
- Study utility functions in `lib/study-utils.ts` that:
  - joins attempts to questions and skills
  - ranks weak skills by missed attempts, accuracy, and domain exam weight
  - generates today's study session
- Reusable UI components in `components/`.
- A single dashboard page showing:
  - certification structure
  - recent quiz attempts
  - weakest skills
  - recommended lesson summary
  - 3 flashcards
  - 5-question quiz plan

## Structure

- `app/page.tsx` prepares the view data and composes the dashboard.
- `components/` contains focused presentation components.
- `lib/data.ts` contains mocked assessment data.
- `lib/study-utils.ts` contains scoring and study-session logic.
- `lib/study-content.ts` contains simple lesson, flashcard, and quiz-plan content.
- `types/study.ts` contains shared TypeScript models.

## Tradeoffs

- Mock JSON-style data instead of a database, because this task is about modelling and product logic rather than infrastructure.
- Simple deterministic study content instead of a live AI integration, so the prototype runs without API keys and is easy to review.
- Single-page dashboard instead of auth, routing, or admin tooling.
- Lightweight CSS instead of a full component library to keep the code easy to inspect during a live interview.

## What I would improve with more time

- Store quiz attempts and generated study sessions in Postgres/Supabase.
- Add tests for weak-skill ranking, tie-breaking, and recommendation generation.
- Let students complete the generated quiz plan and update mastery over time.
