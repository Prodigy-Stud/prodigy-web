export const navLinks = [
  { href: '#how', label: 'How It Works' },
  { href: '#features', label: 'Core Features' },
  { href: '#ops', label: 'Live Ops' },
  { href: '#safety', label: 'Safety' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#impact', label: 'Impact' },
  { href: '#faq', label: 'FAQ' }
] as const;

export const pipeline = ['Listen', 'Decide', 'Ship'] as const;

export const sourceCards = [
  {
    title: 'Feedback + Analytics Ingestion',
    body: 'Unify support tickets, NPS comments, interviews, Slack threads, and behavioral analytics into one normalized signal stream.'
  },
  {
    title: 'Connector-Style Integrations',
    body: 'Pluggable ingestion for Slack and analytics sources, with mock/local-file inputs for fast testing and onboarding.'
  },
  {
    title: 'Persisted Signal Layer',
    body: 'Signal processing, plans, and task state are persisted for full product and ops visibility across teams.'
  }
] as const;

export const flowSteps = [
  {
    step: '01',
    title: 'Listen',
    question: 'What is happening across customers and product usage?',
    body: 'Prodigy pulls and normalizes customer feedback plus behavioral analytics so teams stop triaging in silos.'
  },
  {
    step: '02',
    title: 'Decide',
    question: 'Which opportunities deserve engineering attention now?',
    body: 'Signals become prioritized opportunities and structured ticket drafts (EPIC, DESIGN, BE, FE, QA) with execution context.'
  },
  {
    step: '03',
    title: 'Ship',
    question: 'How does this move from task to merged PR?',
    body: 'Prodigy dispatches to coding agents and runs optional git automation (prepare, commit, push, PR) with human oversight.'
  }
] as const;

export const outputCards = [
  {
    title: 'Opportunity Discovery Engine',
    body: 'Converts raw product signals into structured opportunities with clear prioritization and execution context.'
  },
  {
    title: 'Ticket Generation',
    body: 'Drafts Jira-style work items across EPIC, DESIGN, BE, FE, and QA for faster handoff into delivery.'
  },
  {
    title: 'Agent Dispatch System',
    body: 'Queues tasks to coding agents through Codex and Claude-compatible bridge scaffolding with callback updates.'
  },
  {
    title: 'Execution Bridge + Git Automation',
    body: 'Optional prepare, commit, push, and PR flow with branch handling, metadata, and execution payload traces.'
  }
] as const;

export const comparisonCards = [
  {
    title: 'Queue and Idempotency Controls',
    current: 'Prevents duplicate runs and runaway task storms.',
    contrast: 'Built-in controls reduce noisy retries and unsafe automation loops.'
  },
  {
    title: 'Retry + Worker Limits + Jitter',
    current: 'Manages throughput and backpressure.',
    contrast: 'Keeps autonomous execution stable under real team workloads.'
  },
  {
    title: 'No-Op Protection',
    current: 'Fails tasks that produce no code change.',
    contrast: 'Prevents false-success runs and protects trust in outputs.'
  }
] as const;

export const aiCapabilities = [
  {
    title: 'Operator UI (Chat-Style Inbox)',
    body: 'WhatsApp-like task threads with timeline updates, severity tiers, tabbed queues, and dismiss/cleanup workflows.'
  },
  {
    title: 'Rich Implementation Output',
    body: 'Each run returns formatted summaries, touched files, tests, and error details so teams can review fast.'
  },
  {
    title: 'Auth + Machine Clients',
    body: 'Bearer/JWT machine-client model with docs and environment-driven local bypass for controlled development.'
  },
  {
    title: 'Testing + Migrations',
    body: 'Alembic migrations, backend coverage for bridge and cleanup flows, and end-to-end local workflows.'
  }
] as const;

export const demoTabs = [
  {
    id: 'feedback',
    label: 'Thread View',
    description:
      'Chat-style ticket thread with status transitions from opened to running to implemented or failed.'
  },
  {
    id: 'analytics',
    label: 'Timeline',
    description:
      'Live timeline updates show severity, agent activity, completion markers, and execution outcomes.'
  },
  {
    id: 'jira',
    label: 'Buckets',
    description:
      'Operational buckets keep work organized across new, attention, quick wins, and done.'
  },
  {
    id: 'ai',
    label: 'PR Output',
    description:
      'Implementation output includes rationale, changed files, tests, and errors for fast human review.'
  }
] as const;

export const faqs = [
  {
    question: 'Is Prodigy fully autonomous with no human control?',
    answer:
      'No. Prodigy is designed for human oversight. Teams control approvals, monitor execution, and decide what gets merged.'
  },
  {
    question: 'Can we integrate feedback, analytics, and engineering systems together?',
    answer:
      'Yes. Prodigy unifies feedback and analytics signals, then maps output to Jira-style workflows and GitHub-based delivery.'
  },
  {
    question: 'What protects us from unsafe or noisy automation?',
    answer:
      'Safety layers include idempotency controls, queue management, retries with jitter, worker limits, and no-op protection.'
  },
  {
    question: 'Does Prodigy support serious engineering workflows?',
    answer:
      'Yes. Prodigy includes orchestration, agent dispatch, status callbacks, and optional git automation into pull requests.'
  }
] as const;

export const integrations = [
  'Slack',
  'Product Analytics',
  'GitHub',
  'Jira-Style Workflows',
  'Machine Clients (Bearer/JWT)'
] as const;

export const impactCards = [
  {
    title: 'For Engineering Leaders',
    points: [
      'Reduce triage toil across product and engineering.',
      'Shorten cycle time from customer signal to merged PR.',
      'Keep humans in the final approval loop.'
    ]
  },
  {
    title: 'For IC Developers',
    points: [
      'Receive cleaner ticket context with rationale.',
      'Spend less time on repetitive implementation chores.',
      'Review PR-ready outputs with changed files and test evidence.'
    ]
  }
] as const;
