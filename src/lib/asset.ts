// Files in /public are not auto-prefixed with basePath when used in raw
// <video>/<img> tags, so prefix them here (needed for GitHub Pages project sites).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}/${path.replace(/^\//, "")}`;
}
