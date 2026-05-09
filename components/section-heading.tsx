import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  id
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-[45rem] font-display text-[2.1rem] font-medium leading-[1.06] tracking-[-0.025em] text-[color:var(--ink)] md:text-5xl lg:text-[3.25rem]"
      >
        {title}
      </h2>
    </div>
  );
}
