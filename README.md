# prodigy-web

Prodigy Web is the product experience site for Prodigy, showcasing how customer feedback and usage analytics are transformed into prioritized insights, product ideas, rollout plans, and implementation-ready specs.

## Tech stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint + Prettier + Husky + lint-staged
- Vitest + Testing Library + Playwright

## Website narrative

- Signal -> Insight: aggregate feedback + usage analytics and rank opportunities
- Insight -> Idea: generate feature concepts tied to measurable outcomes
- Idea -> Transition: map risks, dependencies, and rollout path
- Spec -> Implementation: produce build-ready product specs for execution

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run local dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```
