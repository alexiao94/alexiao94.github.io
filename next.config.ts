import type { NextConfig } from "next";

// Static export for GitHub Pages. For a project site (username.github.io/<repo>)
// set NEXT_PUBLIC_BASE_PATH=/<repo> at build time; leave unset for a user site
// (repo named <username>.github.io) or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
