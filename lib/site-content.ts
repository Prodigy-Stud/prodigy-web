export const navLinks = [
  { href: '#product-demo', label: 'Watch' },
  { href: '#sources', label: 'Sources' },
  { href: '#demos', label: 'Scenarios' },
  { href: '#how', label: 'How it Works' },
  { href: '#outputs', label: 'Outputs' },
  { href: '#why', label: 'Why Prodigy' },
  { href: '#faq', label: 'FAQ' }
] as const;

/** Order must match on-page section ids for scroll-spy nav highlighting */
export const navScrollSpyIds = navLinks.map((l) => l.href.replace('#', ''));

export const hero = {
  eyebrow: 'Prodigy',
  headline: 'Turn product signals into production-ready code',
  headlineLines: ['Turn product signals', 'into production-ready code'] as const,
  storyLines: [
    'Feedback and analytics expose where the product breaks.',
    'Prodigy ranks what to build—and drafts the tickets and prompts.',
    'Your team ships code backed by traceable rationale.'
  ] as const,
  subhead:
    'Ingest feedback and usage analytics, rank what matters, and export implementation-ready plans—Jira drafts, agent handoffs, and dispatches your repo can merge.'
} as const;

export const pipeline = ['Signals', 'Insights', 'Ideas', 'Specs', 'Code'] as const;

/** Full-width pipeline diagram: label + one-line story for hover (matches product flow) */
export const pipelineFlowSteps = [
  {
    id: 'signals',
    label: 'Signals',
    description: 'Ingest feedback & usage into one ranked stream.'
  },
  {
    id: 'insights',
    label: 'Insights',
    description: 'Cluster, score, and explain what users need most.'
  },
  {
    id: 'ideas',
    label: 'Ideas',
    description: 'Turn evidence into opportunities and priorities.'
  },
  {
    id: 'specs',
    label: 'Specs',
    description: 'Produce execution-ready plans, drafts, and context.'
  },
  {
    id: 'code',
    label: 'Code',
    description: 'Hand off to Jira, agents, and your repo with confidence.'
  }
] as const;

export const sourceCards = [
  {
    title: 'Customer Feedback',
    body: 'Support tickets, NPS comments, sales calls, interview notes, and reviews are clustered into recurring problem themes. Prodigy uses AI to extract pain points, sentiment, and feature requests from unstructured text.'
  },
  {
    title: 'Usage Analytics',
    body: 'Funnels, drop-offs, session behavior, and event trends reveal where users struggle or abandon value. Connect your analytics tools to identify friction points automatically.'
  },
  {
    title: 'JIRA Exports',
    body: 'Export ranked problems and feature concepts directly to JIRA with ready-to-assign tickets, acceptance criteria, and technical prompts for your engineering team.'
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

export const aiCapabilities = [
  {
    title: 'Natural Language Queries',
    body: 'Ask questions in plain English and get instant insights from your product data. No SQL or analytics expertise required.'
  },
  {
    title: 'Automatic Problem Clustering',
    body: 'AI automatically groups similar feedback, identifies patterns, and surfaces the most impactful issues affecting your users.'
  },
  {
    title: 'Smart Feature Suggestions',
    body: 'Prodigy generates feature concepts backed by evidence, including expected outcomes and measurable success metrics.'
  },
  {
    title: 'Implementation-Ready Specs',
    body: 'Get detailed specifications with UX flows, acceptance criteria, and technical context that developers can act on immediately.'
  }
] as const;

export const demoTabs = [
  {
    id: 'feedback',
    label: 'Customer Feedback',
    description:
      'See how Prodigy analyzes support tickets, NPS comments, and user interviews to identify recurring pain points.'
  },
  {
    id: 'analytics',
    label: 'Usage Analytics',
    description:
      'Watch Prodigy connect to your analytics data and reveal where users struggle or abandon value.'
  },
  {
    id: 'jira',
    label: 'JIRA Exports',
    description:
      'See how ranked problems turn into ready-to-assign JIRA tickets with acceptance criteria and technical prompts.'
  },
  {
    id: 'ai',
    label: 'AI Analysis',
    description:
      'Experience the power of AI-driven insights—automatic clustering, sentiment analysis, and smart feature suggestions.'
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
