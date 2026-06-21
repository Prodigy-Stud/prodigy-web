import Link from 'next/link';
import React from 'react';
import { earlyAccessFormUrl } from '@/lib/site-content';

const heroCards = [
  [
    'Context',
    'Thread-native memory',
    'Every role acts from the same Slack, docs, tickets, and previous decisions.'
  ],
  [
    'Role switch',
    'PM <-> Senior <-> Junior',
    'The workspace sets the operating mode based on who is absent and what the sprint needs.'
  ],
  [
    'Evidence',
    'PRs, CI, digests',
    'Every action returns with links, proof, status, and next owner.'
  ]
] as const;

const loop = [
  [
    '01 Context',
    'Read the workspace',
    'Slack request, ticket history, docs, owner load, and recent PRs.'
  ],
  ['02 Decide', 'Select the next action', 'Priority rationale and risk appear before work starts.'],
  [
    '03 Delegate',
    'Assign the owner',
    'Human, Prodigy, reviewer, and escalation owner become explicit.'
  ],
  [
    '04 Execute',
    'Ship the change',
    'Code, tests, review requests, unblockers, and status updates.'
  ],
  [
    '05 Ship',
    'Close the loop',
    'Digest posted to the channel with PR, CI, decisions, and next steps.'
  ]
] as const;

const roles = [
  [
    'PM mode',
    'Can prioritize and delegate',
    'Reads customer signals, backlog health, owner load, and sprint goals. Produces rank, rationale, owners, and digest.'
  ],
  [
    'Senior Engineer',
    'Can implement and review',
    'Takes high-impact bugs, opens PRs, reviews juniors, and attaches evidence before requesting merge.'
  ],
  [
    'Junior Engineer',
    'Can execute scoped tickets',
    'Works in bounded tasks, posts status, raises blockers, and hands off when complexity exceeds permission level.'
  ]
] as const;

function Card({ item }: { item: readonly [string, string, string] }) {
  return (
    <article className="launch-card p-6">
      <p className="mono-label">{item[0]}</p>
      <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.055em] text-[color:var(--cream)]">
        {item[1]}
      </h3>
      <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{item[2]}</p>
    </article>
  );
}

export function ProductMarketing() {
  return (
    <>
      <section className="site-container-narrow py-28 text-center md:py-36">
        <span className="eyebrow">Product command system</span>
        <h1 className="mx-auto mt-8 max-w-4xl text-[clamp(4rem,9vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.08em] text-[color:var(--cream)]">
          An AI employee that turns team context into shipped work.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-[color:var(--muted-strong)]">
          Prodigy operates across chat, planning, code, reviews, and digests so product and
          engineering teams share one accountable execution layer.
        </p>

        <div className="mt-12 rounded-[1.6rem] border border-[color:var(--line)] bg-[#101820] p-5">
          <div className="grid gap-4 md:grid-cols-3">
            {heroCards.map((item) => (
              <Card key={item[0]} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-container launch-section px-8 py-24 md:px-12">
        <h2 className="mx-auto max-w-3xl text-center text-[clamp(2.7rem,5vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.07em] text-[color:var(--cream)]">
          The execution loop, with artifacts at every step.
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {loop.map((item) => (
            <Card key={item[0]} item={item} />
          ))}
        </div>
      </section>

      <section id="use-cases" className="site-container-narrow py-28">
        <h2 className="max-w-4xl text-[clamp(2.9rem,5vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.07em] text-[color:var(--cream)]">
          Role switching is not a persona. It is permissioned operating behavior.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {roles.map((item) => (
            <Card key={item[0]} item={item} />
          ))}
        </div>
      </section>

      <section
        id="security"
        className="site-container launch-section my-12 px-8 py-24 text-center md:px-12"
      >
        <h2 className="mx-auto max-w-4xl text-[clamp(3rem,5vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.075em] text-[color:var(--cream)]">
          Control the work Prodigy can own.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
          Approval gates, audit trail, role-specific permissions, and human handoff make Prodigy
          feel accountable enough for real engineering teams.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-8 py-4 text-sm font-extrabold text-[#101820]"
          >
            <span aria-hidden>→</span>
            Book Demo
          </Link>
          <Link
            href={earlyAccessFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[color:var(--line)] px-8 py-4 text-sm font-extrabold text-[color:var(--cream)]"
          >
            Request Early Access
          </Link>
        </div>
      </section>
    </>
  );
}
