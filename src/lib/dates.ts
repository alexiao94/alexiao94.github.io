// Dates are "YYYY-MM" strings (they sort correctly as plain strings).
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function fmt(ym: string): string {
  const [y, m] = ym.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

/** "Jan 2026", "May 2026 — Jun 2026", or "Mar 2026 — Present". */
export function formatPeriod(start?: string, end?: string): string | undefined {
  if (!start) return undefined;
  if (end === "present") return `${fmt(start)} — Present`;
  if (!end || end === start) return fmt(start);
  return `${fmt(start)} — ${fmt(end)}`;
}

/** Sort key: most recent month the work touched. "present" ranks first. */
export function sortKey(start?: string, end?: string): string {
  if (end === "present") return "9999-12";
  return end ?? start ?? "";
}
