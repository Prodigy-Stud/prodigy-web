'use client';

import React from 'react';

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  return (
    <div
      className={`group transition-transform duration-200 ease-out hover:-translate-y-0.5 ${className}`}
    >
      <div className="h-full rounded-2xl ring-1 ring-transparent transition-[box-shadow,ring-color] duration-200 group-hover:ring-[rgba(13,148,136,0.2)]">
        {children}
      </div>
    </div>
  );
}
