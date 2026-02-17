export const navLinks = [
  { href: '#how', label: 'How it Works' },
  { href: '#outputs', label: 'Outputs' },
  { href: '#why', label: 'Why Prodigy' },
  { href: '#faq', label: 'FAQ' }
] as const;

export const pipeline = ['Signals', 'Insights', 'Ideas', 'Specs', 'Code'] as const;

export const sourceCards = [
  {
    title: 'Customer Feedback',
    body: 'Support tickets, NPS comments, sales calls, interview notes, and reviews are clustered into recurring problem themes.'
  },
  {
    title: 'Usage Analytics',
    body: 'Funnels, drop-offs, session behavior, and event trends reveal where users struggle or abandon value.'
  }
] as const;

export const flowSteps = [
  {
    step: '01',
    title: 'Signal -> Insight',
    question: 'What are users actually telling us?',
    body: 'Prodigy aggregates explicit and implicit signals, then ranks problems by impact, urgency, frequency, and confidence.'
  },
  {
    step: '02',
    title: 'Insight -> Idea',
    question: 'What should we build next?',
    body: 'It proposes feature concepts mapped to user pain, expected outcomes, and measurable success metrics.'
  },
  {
    step: '03',
    title: 'Idea -> Transition',
    question: 'How do we evolve without chaos?',
    body: 'Workflow impact, migration planning, dependency mapping, and rollout strategy are generated before execution starts.'
  },
  {
    step: '04',
    title: 'Spec -> Implementation',
    question: 'What does engineering need?',
    body: 'Prodigy outputs implementation-ready specs with UX flows, data model implications, and decision rationale.'
  }
] as const;

export const outputCards = [
  {
    title: 'Ranked Problem Clusters',
    body: 'Prioritized by business impact, urgency, and confidence score.'
  },
  {
    title: 'Feature Concepts',
    body: 'Evidence-backed ideas tied directly to user friction and goals.'
  },
  {
    title: 'Rollout + Risk Plan',
    body: 'Dependencies, rollout phases, and failure risks before launch.'
  },
  {
    title: 'Implementation Specs',
    body: 'UX flows, acceptance logic, and data/API implications for execution.'
  }
] as const;

export const comparisonCards = [
  {
    title: 'Dashboards',
    current: 'Show what happened.',
    contrast: 'Prodigy tells you what to build next.'
  },
  {
    title: 'IDE Copilots',
    current: 'Help write code faster.',
    contrast: 'Prodigy decides which code is worth writing.'
  },
  {
    title: 'Static PM Docs',
    current: 'Capture assumptions manually.',
    contrast: 'Prodigy generates evidence-backed direction.'
  }
] as const;

export const faqs = [
  {
    question: 'Does Prodigy replace product managers?',
    answer:
      'No. Prodigy strengthens PM judgment with clear signal aggregation, ranked opportunities, and execution-ready artifacts.'
  },
  {
    question: 'Can Prodigy use both feedback and analytics?',
    answer:
      'Yes. It is built specifically to combine qualitative feedback with quantitative usage behavior.'
  },
  {
    question: 'Is Prodigy a coding copilot?',
    answer: 'No. Prodigy focuses on deciding what to build and handing teams build-ready specs.'
  },
  {
    question: 'How does Prodigy fit our stack?',
    answer:
      'It sits upstream of design and engineering workflows by providing prioritized direction and implementation context.'
  }
] as const;
