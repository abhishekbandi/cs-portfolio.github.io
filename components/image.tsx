import NextImage, { type ImageProps } from "next/image";

// next/image does NOT auto-prefix `src` with `basePath` the way next/link
// does for `href` — see https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images.
// This repo is deployed under a GitHub Pages project path
// (NEXT_PUBLIC_BASE_PATH, set in next.config.ts), so every local image
// needs that prefix. Use this wrapper instead of next/image directly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Image({ src, ...props }: ImageProps) {
  const prefixedSrc =
    typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;

  return <NextImage src={prefixedSrc} {...props} />;
}
