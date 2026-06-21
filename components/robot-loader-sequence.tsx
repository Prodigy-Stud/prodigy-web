'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RobotLoaderOverlay } from '@/components/robot-loader-overlay';

const ROBOT_LOADER_SRC = '/video/robot-loader.mp4';
const ROBOT_LOADER_MAX_DURATION_MS = 45000;
const ROBOT_LOADER_REVEAL_LEAD_SECONDS = 0.95;
const ROBOT_LOADER_OVERLAY_FADE_MS = 560;

export function RobotLoaderSequence({ children }: { children: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'done'>('loading');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (prefersReducedMotion) {
      setPhase('done');
      return;
    }

    const reveal = () => {
      if (revealTimerRef.current !== null) {
        return;
      }

      setPhase('revealing');
      revealTimerRef.current = window.setTimeout(() => {
        setPhase('done');
      }, ROBOT_LOADER_OVERLAY_FADE_MS);
    };

    const onTimeUpdate = () => {
      const video = videoRef.current;

      if (!video || Number.isNaN(video.duration) || !Number.isFinite(video.duration)) {
        return;
      }

      if (video.duration - video.currentTime <= ROBOT_LOADER_REVEAL_LEAD_SECONDS) {
        reveal();
      }
    };

    const onEnded = () => reveal();
    const onError = () => reveal();

    fallbackTimerRef.current = window.setTimeout(() => {
      reveal();
    }, ROBOT_LOADER_MAX_DURATION_MS);

    const video = videoRef.current;
    video?.addEventListener('timeupdate', onTimeUpdate);
    video?.addEventListener('ended', onEnded);
    video?.addEventListener('error', onError);

    const startPlayback = () => {
      if (!video) return;
      video.currentTime = 0;
      void video.play().catch(() => {});
    };

    const onLoadedData = () => startPlayback();

    if (video) {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        startPlayback();
      } else {
        video.addEventListener('loadeddata', onLoadedData, { once: true });
      }
    }

    return () => {
      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current);
      }
      if (revealTimerRef.current !== null) {
        window.clearTimeout(revealTimerRef.current);
      }
      video?.removeEventListener('loadeddata', onLoadedData);
      video?.removeEventListener('timeupdate', onTimeUpdate);
      video?.removeEventListener('ended', onEnded);
      video?.removeEventListener('error', onError);
    };
  }, []);

  return (
    <>
      <RobotLoaderOverlay
        open={phase !== 'done'}
        src={ROBOT_LOADER_SRC}
        className={phase === 'revealing' ? 'robot-loader-overlay--revealing' : ''}
        videoRef={videoRef}
      />
      <div
        className={
          phase !== 'loading'
            ? 'robot-loader-content robot-loader-content--show'
            : 'robot-loader-content'
        }
      >
        {children}
      </div>
    </>
  );
}
