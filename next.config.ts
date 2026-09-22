import type { NextConfig } from "next";

// Static export for GitHub Pages. For a project site (username.github.io/<repo>)
// set NEXT_PUBLIC_BASE_PATH=/<repo> at build time; leave unset for a user site
// (repo named <username>.github.io) or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // Dev only: allow opening the dev server from this host (e.g. an IDE/WSL
  // preview). Without it, hydration is blocked and clicks do nothing.
  allowedDevOrigins: ["172.19.192.1"],
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
