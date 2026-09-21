// All portfolio content lives here. Replace the placeholders (TODO) with your own.

export const profile = {
  name: "Alex Cai", // TODO: confirm full name
  handle: "alex",
  role: "Software Engineer", // TODO
  location: "Your City, Country", // TODO
  tagline: "I build reliable web and mobile products, end to end.", // TODO
  about: [
    "TODO: two or three sentences on who you are, what you build, and what you care about.",
    "TODO: what you are looking for or currently exploring.",
  ],
  email: "alexxiaocai@gmail.com",
  github: "https://github.com/your-username", // TODO
  linkedin: "https://linkedin.com/in/your-username", // TODO
  resume: "resume.pdf", // TODO: drop your PDF in /public/resume.pdf
};

export type Job = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: "Company Name", // TODO
    title: "Software Engineer",
    period: "2024 — Present",
    highlights: [
      "TODO: impact-focused bullet with a metric (e.g. cut load time by 40%).",
      "TODO: what you owned or led.",
    ],
  },
  {
    company: "Previous Company", // TODO
    title: "Junior Developer",
    period: "2022 — 2024",
    highlights: ["TODO: highlight one.", "TODO: highlight two."],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Project One", // TODO
    description: "TODO: one or two lines on what it does and why it matters.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
    repo: "#",
  },
  {
    name: "Project Two",
    description: "TODO: one or two lines on what it does and why it matters.",
    tech: ["React Native", "Node.js"],
    repo: "#",
  },
  {
    name: "Project Three",
    description: "TODO: one or two lines on what it does and why it matters.",
    tech: ["Rust", "CLI"],
    repo: "#",
  },
];
