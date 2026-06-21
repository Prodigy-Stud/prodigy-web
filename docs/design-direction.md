# Prodigy Web Design Direction (WEB-1)

## Positioning

The website should feel like **infra software with premium taste**:

- Clean enough for enterprise trust
- Bold enough for investor memorability
- Technical enough to signal execution depth

## Principles

1. **Infra clarity first**  
   Every section must map to a real system behavior: ingest, rank, plan, dispatch, ship.

2. **Premium restraint**  
   Strong typography, generous spacing, limited accent color, precise micro-interactions.

3. **Operational confidence**  
   Show flow state, reliability, and measurable outcomes, not decorative fluff.

4. **Proof over promises**  
   Favor metrics, examples, and process visuals over generalized claims.

## Visual Language

- Tone: `infra luxury`
- Base: warm light surfaces with slate ink
- Accent: teal family for actions and status
- Surface treatment: subtle elevation, soft glass, minimal gradients
- Motion: purposeful transitions to explain pipeline movement

## Motion Rules

- Use motion to explain transitions between pipeline stages.
- Keep default transitions short (roughly 180-260ms).
- Limit each viewport section to one dominant animated element.
- Respect reduced-motion preferences.

## Components to Prioritize

- Primary CTA buttons with strong contrast
- Status badges for agent/pipeline state
- Metric cards for conversion and system confidence
- Timeline / flow cards for `feedback -> insight -> ticket -> PR`

## Stack Direction

- Continue Next.js + Tailwind + Framer Motion
- Add Radix primitives for accessible interactions
- Introduce shared token/component package across:
  - `prodigy-web`
  - `prodigy-analytics`
  - core `prodigy` app UI (phase 2)
