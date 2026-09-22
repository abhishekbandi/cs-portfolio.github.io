import type { NextConfig } from "next";

// GitHub Pages project pages (https://<org-or-user>.github.io/<repo>/) need
// every route/asset prefixed with `/<repo>`; a root/org page needs no prefix
// at all. Rather than hardcode a repo name here, set it at build time:
//
//   BASE_PATH=/your-repo-name npm run build
//
// Leave BASE_PATH unset for a root-domain deploy. components/image.tsx and
// components/background-video.tsx read NEXT_PUBLIC_BASE_PATH to prefix
// local asset URLs the same way.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),
};

export default nextConfig;
