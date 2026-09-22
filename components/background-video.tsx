"use client";

import { useEffect, useRef } from "react";

// Setting `muted` as a JSX prop causes a hydration mismatch warning on
// <video> — browsers don't reliably reflect the muted attribute to the
// element's muted property before React hydrates. Set it imperatively
// instead.
export function BackgroundVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true;
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      loop
      playsInline
    />
  );
}
