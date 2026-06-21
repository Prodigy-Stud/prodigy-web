'use client';

import React, { RefObject, useState } from 'react';

export function RobotLoaderOverlay({
  open,
  src,
  className,
  videoRef
}: {
  open: boolean;
  src: string;
  className?: string;
  videoRef: RefObject<HTMLVideoElement | null>;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      aria-hidden={!open}
      className={
        open
          ? `robot-loader-overlay robot-loader-overlay--open ${className ?? ''}`
          : 'robot-loader-overlay robot-loader-overlay--closed'
      }
    >
      <video
        ref={videoRef}
        id="robot-loader-video"
        className={
          playing
            ? 'robot-loader-overlay__video robot-loader-overlay__video--playing'
            : 'robot-loader-overlay__video'
        }
        src={src}
        muted
        playsInline
        preload="auto"
        controls={false}
        onPlaying={() => setPlaying(true)}
      />
    </div>
  );
}
