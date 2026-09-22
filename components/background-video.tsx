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

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <video
      ref={videoRef}
      className={className}
      src={`${basePath}${src}`}
      autoPlay
      loop
      playsInline
    />
  );
}
