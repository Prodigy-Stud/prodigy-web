'use client';

import React, { useEffect, useState } from 'react';

function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function RobotLoaderInitializer({ children }: { children: React.ReactNode }) {
  const mounted = useHasMounted();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) {
      setShowContent(true);
      return;
    }

    const video = document.getElementById('robot-loader-video') as HTMLVideoElement | null;

    if (!video) {
      setShowContent(true);
      return;
    }

    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      setShowContent(true);
    };

    const timeout = window.setTimeout(() => finish(), 45000);

    const onEnded = () => {
      window.clearTimeout(timeout);
      finish();
    };

    const onError = () => {
      window.clearTimeout(timeout);
      finish();
    };

    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);

    return () => {
      window.clearTimeout(timeout);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [mounted]);

  return (
    <div
      className={
        showContent ? 'robot-loader-content robot-loader-content--show' : 'robot-loader-content'
      }
    >
      {children}
    </div>
  );
}
