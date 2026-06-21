/** Primary site navigation (same paths on localhost and prodigy.com). */
export const mainNavLinks = [
  { href: '/product', label: 'Product' },
  { href: '/product#use-cases', label: 'Use cases' },
  { href: '/#integrations', label: 'Integrations' },
  { href: '/#proof', label: 'Customers/Proof' },
  { href: '/product#security', label: 'Security' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
] as const;

export const earlyAccessFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfP5-CnfJGWy6d2tNsdvQN5Cu5MRo8lPdhO1_FPHNZz14WtKg/viewform?usp=sharing&ouid=112116776085482031537';

export const hero = {
  headline: 'Your AI FTE for product and engineering',
  headlineLines: ['Owns work', 'end to end'] as const,
  subhead:
    'Prodigy lives inside Slack, Microsoft Teams, or Discord, understands team context, switches roles, writes code, opens PRs, and reports progress with accountability.',
  realityLines: [
    'Critical context is trapped across Slack threads, docs, tickets, and memory.',
    'Teams lose speed from context-switching, repeated discussions, and unclear ownership.',
    'Existing AI tools generate outputs but rarely produce accountable execution.',
    'Result: slower delivery, inconsistent prioritization, and missed opportunities.'
  ] as const,
  missionQuestion:
    'What if one teammate lived in your channel, held context across every thread, and owned work from decision through shipped code?',
  missionClosing: 'Prodigy is that teammate.'
} as const;

export const problemStats = [
  { value: '31%', label: 'of IT projects are not delivered on time' },
  { value: '189%', label: 'average cost overrun on over half of all projects' }
] as const;

export const pipeline = ['Context', 'Decide', 'Delegate', 'Execute', 'Ship'] as const;

/** Full-width pipeline diagram: label + one-line story for hover */
export const pipelineFlowSteps = [
  {
    id: 'context',
    label: 'Context',
    description:
      'Prodigy reads Slack threads, docs, tickets, and memory so nothing important lives in a silo.'
  },
  {
    id: 'decide',
    label: 'Decide',
    description:
      'In PM mode, Prodigy analyzes the backlog, ranks work, and sets clear priorities with rationale.'
  },
  {
    id: 'delegate',
    label: 'Delegate',
    description:
      'Work is assigned to humans or Prodigy based on current workload, expertise, and who is available.'
  },
  {
    id: 'execute',
    label: 'Execute',
    description:
      'As Senior or Junior Engineer, Prodigy codes, posts status updates, escalates blockers, and takes over when needed.'
  },
  {
    id: 'ship',
    label: 'Ship',
    description:
      'Changes land as pull requests, overnight runs clear pending work, and the team gets accountable digests.'
  }
] as const;

export const sourceCards = [
  {
    title: 'Slack threads & channels',
    body: 'Every discussion, decision, and blocker in your team channel becomes persistent context Prodigy can act on—not another summary lost in search.'
  },
  {
    title: 'Docs, tickets & memory',
    body: 'Notion pages, Jira issues, Linear tasks, and prior Prodigy sessions feed a unified workspace view so ownership and history stay connected.'
  },
  {
    title: 'Code & delivery signals',
    body: 'GitHub pull requests, CI status, and sprint board state tell Prodigy what is moving, what is stuck, and what needs a handoff.'
  }
] as const;

export const flowSteps = [
  {
    step: '01',
    title: 'Shared scrum board',
    question: 'How do agents and humans work from the same plan?',
    body: 'Prodigy maintains a shared board where your team and Prodigy see the same tickets, owners, and status—no parallel trackers or lost handoffs.'
  },
  {
    step: '02',
    title: 'Ownership delegation',
    question: 'Who should own this right now?',
    body: 'Work is assigned based on current workload and expertise. Prodigy routes to the right human or takes the task itself when the team is stretched.'
  },
  {
    step: '03',
    title: 'Convertible roles',
    question: 'What hat is Prodigy wearing today?',
    body: 'Switch Prodigy between Product Manager, Senior Engineer, and Junior Engineer based on who is in, who is out, and what the sprint needs.'
  },
  {
    step: '04',
    title: 'End-to-end execution',
    question: 'Does it stop at a draft or ship the work?',
    body: 'Prodigy decides from context, writes the code, opens pull requests, runs overnight when the team is offline, and reports back with accountability.'
  }
] as const;

export const teamScenarios = [
  {
    title: 'Full team present',
    situation: '1 PM + 2 Senior SDEs + 2 Junior SDEs',
    body: 'Prodigy is your fifth SDE—takes issues, codes, ships, and helps every member without waiting to be asked.'
  },
  {
    title: 'Senior SDE absent',
    situation: 'PM converts Prodigy to Senior Engineer',
    body: 'Prodigy codes, gives periodic updates on issues assigned to juniors, and takes over bugs that miss the daily goal—even overnight.'
  },
  {
    title: 'PM absent',
    situation: 'Prior-day PM role assignment',
    body: 'Prodigy analyzes tasks, delegates issues, posts work updates, and delivers a full summary when the PM returns.'
  },
  {
    title: 'Weekend execution',
    situation: 'Team offline, work pending',
    body: 'Pending tickets move to overnight execution. Prodigy ships while the team is away and surfaces results Monday morning.'
  }
] as const;

export const outputCards = [
  {
    title: 'Clear ownership',
    body: 'Every ticket has an owner, a next action, and visible status on the shared board—no more "who is on this?"'
  },
  {
    title: 'Role-appropriate updates',
    body: 'PM digests, engineering status, and escalation messages arrive in Slack with the right voice for the situation.'
  },
  {
    title: 'Accountable execution',
    body: 'Prodigy does not stop at suggestions—it codes, opens PRs, and reports what shipped with evidence attached.'
  },
  {
    title: 'Overnight progress',
    body: 'When the team is offline, pending work keeps moving. Digests show what landed while you were away.'
  }
] as const;

export const comparisonCards = [
  {
    title: 'Generic AI assistants',
    current: 'Generate drafts and summaries on demand.',
    contrast: 'Prodigy owns tickets end to end—with assigned owners, status, and shipped code.'
  },
  {
    title: 'IDE copilots',
    current: 'Help individual developers write code faster.',
    contrast: 'Prodigy coordinates the team, delegates work, and ships when humans are unavailable.'
  },
  {
    title: 'Static PM tools',
    current: 'Capture plans that drift from reality.',
    contrast: 'Prodigy lives in Slack, holds live context, and executes against the actual board.'
  }
] as const;

export const aiCapabilities = [
  {
    title: 'Convertible roles',
    body: 'Prodigy switches between PM, Senior Engineer, and Junior Engineer based on team availability and sprint needs—one teammate, three operating modes.'
  },
  {
    title: 'Smart delegation',
    body: 'Incoming work is routed to the right human or to Prodigy based on workload, expertise, and who is online.'
  },
  {
    title: 'Thread-native context',
    body: 'Slack threads, linked docs, and prior sessions form persistent memory so Prodigy never starts from zero.'
  },
  {
    title: 'Governed execution',
    body: 'Approval gates, policy controls, and overnight runs let teams trust Prodigy with real work—not just chat responses.'
  }
] as const;

export const demoTabs = [
  {
    id: 'slack',
    label: 'Slack teammate',
    description:
      'Watch Prodigy respond in-channel as PM or engineer—logging issues, assigning owners, and posting status without leaving the thread.'
  },
  {
    id: 'roles',
    label: 'Convertible roles',
    description:
      'See how a team switches Prodigy between PM, Senior, and Junior modes when members are in, out, or overloaded.'
  },
  {
    id: 'board',
    label: 'Shared board',
    description:
      'Agents and humans work from the same ticket view—owners, blockers, and progress visible to the whole team.'
  },
  {
    id: 'overnight',
    label: 'Overnight execution',
    description:
      'Pending work runs while the team is offline. Monday morning starts with shipped PRs and a clear digest.'
  }
] as const;

/** High-level product story (marketing site). */
export const productPillars = [
  {
    title: '1. Lives where your team works',
    body: 'Prodigy is a native teammate in Slack, Microsoft Teams, or Discord—not another dashboard your team has to check.'
  },
  {
    title: '2. Convertible roles',
    body: 'Assign Prodigy as PM, Senior Engineer, or Junior Engineer for the day. Each mode has distinct responsibilities, voice, and constraints.'
  },
  {
    title: '3. Shared board & delegation',
    body: 'Humans and Prodigy share one scrum board. Work is assigned by workload and expertise, with clear owners and escalation paths.'
  },
  {
    title: '4. Codes and ships',
    body: 'Prodigy implements changes, opens pull requests, runs overnight when needed, and reports back with accountable updates.'
  }
] as const;

export const faqs = [
  {
    question: 'Does Prodigy replace product managers or engineers?',
    answer:
      'No. Prodigy fills gaps—acting as a fifth SDE when the team is full, stepping into Senior or PM roles when someone is out, and running overnight when work would otherwise stall.'
  },
  {
    question: 'Where does Prodigy live?',
    answer:
      'Prodigy operates inside Slack today, with Microsoft Teams and Discord on the roadmap. Your team interacts with Prodigy in the channels where work already happens.'
  },
  {
    question: 'How do convertible roles work?',
    answer:
      'A team lead assigns Prodigy a role for the day—PM, Senior Engineer, or Junior Engineer. Each mode changes how Prodigy delegates, communicates, and whether it writes code directly.'
  },
  {
    question: 'Is Prodigy just another coding copilot?',
    answer:
      'No. Copilots help individuals type faster. Prodigy owns delivery operations—prioritizing work, delegating to the right owner, coding when needed, and shipping with accountability.'
  },
  {
    question: 'What is the client portal?',
    answer:
      'Each workspace gets a secure portal for the shared scrum board, ticket status, agent progress, pull requests, and ROI summaries. It complements the in-channel experience.'
  }
] as const;

/** Stats bar: headline numbers for the homepage trust strip. */
export const statsBar = [
  { value: 'Slack', label: 'Native' },
  { value: '3', label: 'Convertible roles' },
  { value: '24/7', label: 'Overnight runs' },
  { value: 'E2E', label: 'Decision to PR' },
  { value: '1', label: 'Shared board' }
] as const;

/** Chat platforms where Prodigy lives. */
export const chatPlatforms = [
  { name: 'Slack', category: 'Chat', logo: '/logos/slack.svg' },
  { name: 'Microsoft Teams', category: 'Chat', logo: '/logos/microsoft-teams.svg' },
  { name: 'Discord', category: 'Chat', logo: '/logos/discord.svg' }
] as const;

/** Work tools Prodigy connects to. */
export const workIntegrations = [
  { name: 'GitHub', category: 'Code', logo: '/logos/github.svg' },
  { name: 'Jira', category: 'Tickets', logo: '/logos/jira.svg' },
  { name: 'Linear', category: 'Tickets', logo: '/logos/linear.svg' },
  { name: 'Notion', category: 'Docs', logo: '/logos/notion.svg' }
] as const;

/** Feedback + usage integrations that feed context. */
export const sourceIntegrations = [
  { name: 'Slack', category: 'Chat', logo: '/logos/slack.svg' },
  { name: 'Notion', category: 'Docs', logo: '/logos/notion.svg' },
  { name: 'Zendesk', category: 'Feedback', logo: '/logos/zendesk.svg' },
  { name: 'Intercom', category: 'Feedback', logo: '/logos/intercom.svg' },
  { name: 'HubSpot', category: 'Feedback', logo: '/logos/hubspot.svg' },
  { name: 'Gong', category: 'Feedback', logo: '/logos/gong.svg' }
] as const;

/** Usage analytics integrations that feed context. */
export const analyticsIntegrations = [
  { name: 'Amplitude', category: 'Analytics', logo: '/logos/amplitude.svg' },
  { name: 'Mixpanel', category: 'Analytics', logo: '/logos/mixpanel.svg' },
  { name: 'Datadog', category: 'Analytics', logo: '/logos/datadog.svg' }
] as const;

/** Coding agents Prodigy can dispatch to when needed. */
export const agentDestinations = [
  { name: 'Cursor', category: 'Agent', logo: '/logos/cursor.svg' },
  { name: 'Claude Code', category: 'Agent', logo: '/logos/claude-code.svg' },
  { name: 'Codex', category: 'Agent', logo: '/logos/codex.svg' }
] as const;

/** Client portal feature cards. */
export const portalFeatures = [
  {
    title: 'Shared scrum board',
    body: 'Humans and Prodigy work from the same ticket view—owners, blockers, WIP limits, and status in one place.'
  },
  {
    title: 'Role & queue visibility',
    body: "See Prodigy's current acting role, queue depth, and what is assigned to each team member."
  },
  {
    title: 'Execution tracking',
    body: 'Pull request links, agent progress, overnight run results, and handoff history for every ticket.'
  },
  {
    title: 'ROI & impact',
    body: 'Metric snapshots tied to shipped changes so teams can show what moved and why it mattered.'
  }
] as const;

/** Client-facing outcome metrics. */
export const outcomeMetrics = [
  {
    label: 'Design partners',
    value: 'Live',
    trend: 'Early access',
    source: 'Slack-native teams',
    series: [38, 42, 45, 48, 52, 56, 60]
  },
  {
    label: 'Convertible roles',
    value: '3',
    trend: 'PM · Senior · Junior',
    source: 'Per-workspace config',
    series: [1, 1, 2, 2, 3, 3, 3]
  },
  {
    label: 'Tickets managed',
    value: '90+',
    trend: 'To date',
    source: 'Shared board flow',
    series: [22, 34, 48, 58, 68, 78, 90]
  },
  {
    label: 'Changes shipped',
    value: '85+',
    trend: 'To date',
    source: 'Agent execution',
    series: [18, 30, 42, 54, 64, 74, 85]
  }
] as const;
