// All portfolio content lives here.

export const profile = {
  name: "Alex Xiao Cai",
  handle: "alex",
  role: "Full-Stack Software Engineer",
  location: "Round Rock, Texas",
  tagline:
    "Django and Next.js systems, microservices, and production deployments on Azure and AWS.",
  about: [
    "Full-stack engineer with a background in both software and mechanical engineering. I specialize in Django and Next.js systems and microservices architecture, and I have deployed production workloads on Azure and AWS.",
    "My work has cut latency, deployment time, and operational overhead. I am currently looking for onsite, hybrid, or remote roles in the Austin, TX area.",
  ],
  email: "alexxiaocai@gmail.com",
  github: "https://github.com/alexiao94",
  linkedin: "https://www.linkedin.com/in/axiaocai/",
  resume: "resume.pdf", // put the PDF at /public/resume.pdf
};

export const skills: { label: string; items: string }[] = [
  { label: "Languages", items: "Python, Java, C++, C, C#, Go, JS, TS" },
  { label: "Frontend", items: "React, Next.js, Tailwind, Daisy UI" },
  { label: "Backend", items: "Django, Spring Boot, FastAPI, ASP.NET, Node.js" },
  { label: "Databases", items: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch" },
  {
    label: "DevOps / Cloud",
    items: "Docker, Kubernetes, GitHub Actions, Azure, AWS, MinIO",
  },
  { label: "ML / AI", items: "PyTorch, Ollama" },
  {
    label: "Practices",
    items: "REST APIs, CI/CD, Agile/Scrum, Git, Linux, TDD",
  },
  { label: "Spoken", items: "English, Spanish (Bilingual)" },
];

export type Job = {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: "Advanta Seeds",
    title: "Software Developer",
    period: "Jun 2024 — Aug 2025",
    location: "Remote",
    highlights: [
      "Built responsive web apps with Next.js and Daisy UI, improving user interaction by 30% through A/B testing and close work with UX/UI teams.",
      "Designed token-based authentication with third-party integrations, securing all API endpoints; validated through manual penetration testing and access log review.",
      "Cut data latency by 40% on Django REST API endpoints through query optimization and caching, verified with Postman benchmarks and Azure monitoring.",
      "Maintained CI/CD pipelines on GitHub Actions and Azure for a 5-person team shipping 10+ deployments per week, fixing stale-deployment issues from Azure slot limits and cutting deployment time by 50%.",
    ],
  },
  {
    company: "University of Oregon",
    title: "Graduate Teaching Assistant",
    period: "Sep 2021 — Jun 2024",
    location: "Eugene, OR",
    highlights: [
      "Taught Web Development I & II, Computer Networks, and Database Systems with live coding demos and one-on-one mentoring, raising class participation by 60%.",
      "Wrote a Jest-based testing script that cut grading time by 80% and administrative overhead by 60%.",
    ],
  },
  {
    company: "Advanta Seeds",
    title: "Global Software Developer Intern",
    period: "Jun 2023 — Sep 2023",
    location: "College Station, TX",
    highlights: [
      "Reduced system migration time by 50% through modular code refactoring, delivering ahead of schedule.",
      "Led an SQL database refactor that reduced data redundancy by 40%, verified with integrity checks and query benchmarks.",
    ],
  },
  {
    company: "DePeuter Packaging Solutions",
    title: "Mechanical Engineer",
    period: "Apr 2019 — Jan 2020",
    location: "Houston, TX",
    highlights: [
      "Raised throughput by 40% through PLC and robot programming, and built HMIs that visualized machine states and production workflows.",
      "Designed end-of-arm tools and structural components in AutoCAD, SolidWorks, and Fusion 360, cutting production costs by at least 20%.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  // "YYYY-MM". Omit both and the project is listed last, with no date shown.
  start?: string;
  end?: string; // "YYYY-MM" or "present"; omit for a single-month project
  description: string;
  tech: string[];
  // Modal-only detail. `description` stays the short card summary.
  overview?: string;
  highlights?: { title: string; body: string }[];
  video?: string; // e.g. "videos/eto.mp4" (file in /public/videos)
  poster?: string; // e.g. "videos/eto.jpg"
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Protos",
    subtitle: "Multi-Cloud Monitoring Dashboard",
    start: "2026-06",
    end: "2026-07",
    description:
      "Dashboard that polls GitHub, Azure and AWS resources, plus AI repo docs and collaborative notes.",
    overview:
      "Protos is a monitoring dashboard for GitHub, Azure and AWS resources. It is split into Java/Spring Boot services connected by Kafka, a Next.js frontend, a small Node collaborative-editing server, and a Windows Electron desktop client. It runs on a single Azure VM via Docker Compose and is beta-gated. Several parts are unfinished (see the roadmap highlight).",
    highlights: [
      {
        title: "Kafka event pipeline",
        body: "Connector services (GitHub, Azure, AWS) poll their platform APIs on a schedule and publish a ResourceEvent to the resources.updated topic, keyed by connector ID. The aggregator and notifier each consume that topic in their own consumer group, so the aggregator stores resources and pushes a STOMP/WebSocket update while the notifier separately tracks alerts. Adding a platform means adding a producer, not changing the consumers.",
      },
      {
        title: "Gateway auth and tenant isolation",
        body: "A reactive Spring Cloud Gateway validates HS256 JWTs and re-checks against the database that the user is still enabled, so admin disable or delete takes effect before the token expires. It strips any client-supplied X-User-Id and sets it from the verified token. Downstream services scope queries by that header, and connector tables use per-user unique keys (migration V8).",
      },
      {
        title: "Encrypted cloud credentials",
        body: "Azure client secrets, AWS keys and GitHub tokens are encrypted before storage with AES-GCM (random 12-byte IV per value) through a JPA AttributeConverter. Encryption is transparent to the rest of the code, and old plaintext rows are still readable until they are next saved.",
      },
      {
        title: "AI documentation generator",
        body: "Fetches a repo through the GitHub API (or a mounted local volume), splits the files into batches by a character budget (default 40,000, editable in an app_config table), and calls Claude Haiku 4.5 on each batch. For multi-batch repos it then runs a synthesis prompt over the batch notes. It runs as an async job with progress polling, stores the Markdown in MinIO with commit and file hashes in Postgres, and is limited per user (default 5/hour, from app_config).",
      },
      {
        title: "Real-time collaborative notes",
        body: "Notes are Tiptap editors synced as Yjs CRDT documents through a Hocuspocus server, which verifies the JWT on connect and persists document state as a BYTEA column in Postgres. Live cursors are wired up on the client.",
      },
      {
        title: "Electron desktop client",
        body: "The desktop app runs with contextIsolation on and nodeIntegration off, exposing a narrow IPC bridge. It signs in with GitHub through a system-browser OAuth flow using a loopback redirect on 127.0.0.1 (RFC 8252). It can clone repos and run docker compose up, down and logs for local projects.",
      },
      {
        title: "Gateway controls and CI/CD",
        body: "The gateway has an in-memory sliding-window rate limiter (20 requests per 60 s per IP) on login, register, refresh and connector-verify endpoints. It also has per-platform maintenance switches, a beta-access gate and an admin API. GitHub Actions runs the Java tests, builds and pushes images to Azure Container Registry, then deploys over SSH with Docker Compose. Base images are mirrored through ACR because the VM can't reach Docker Hub.",
      },
      {
        title: "Test coverage",
        body: "There are 139 @Test methods across six Java services: gateway 56, docs-generator 49, github connector 12, azure connector 10, notifier 8, aws connector 4. They cover auth, JWT, rate limiting, OAuth exchange, repo scanning and controller behavior. I found no tests for the aggregator, downloader, hocuspocus, frontend or Electron.",
      },
      {
        title: "Roadmap (not built yet)",
        body: "macOS and Linux desktop builds show 'Coming soon'. A workspace_members table exists but no code uses it, so notes are owner-only and not shared. Azure polling covers only App Service/Functions and Container Apps (not VMs), and AWS covers ECS, Lambda and RDS. Kafka runs as a single broker with replication factor 1, and the Electron build has no code signing configured.",
      },
    ],
    tech: [
      "Java 21",
      "Spring Boot 3.3",
      "Spring Cloud Gateway",
      "Apache Kafka",
      "PostgreSQL",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Yjs / Hocuspocus",
      "Electron",
      "Docker Compose",
      "GitHub Actions",
    ],
    repo: "https://github.com/alexiao94/protos",
  },
  {
    name: "pokemon-fly",
    subtitle: "Connectome-Driven Pokémon Player",
    start: "2026-09",
    description:
      "A Drosophila connectome simulation that plays Pokémon Red, with a live 3D brain dashboard.",
    overview:
      "A simulated fruit fly plays Pokémon Red. A rate-based network built from real Drosophila connectome data (Janelia male-CNS and MANC via neuPrint, with the BANC connectome merged in by a script) is driven by the game's screen, audio and collisions, and its motor-neuron activity is decoded into Game Boy buttons. A FastAPI backend runs PyBoy headless and streams state over a WebSocket to a Next.js dashboard with a 3D brain view.",
    highlights: [
      {
        title: "Connectome-driven brain",
        body: "The brain is a sparse SciPy matrix of cached synapse weights, row-normalized per neuron and stepped as leaky rate units (decay 0.15, activation cap 8, 3 substeps per decision). The local cache built by the fetch scripts holds 39,991 neurons and 1,734,875 edges from two specimens, measured from the file, which is gitignored. The wiring is not trained or randomly initialized; only the KC→MBON synapses change.",
      },
      {
        title: "Sensory inputs per population",
        body: "Each sensory group is driven only at its own neurons: a Hassenstein–Reichardt motion correlator on a 58×58 grid feeds T4/T5 by direction subtype, and looming, optic-flow and contrast signals feed LPLC, PFN and ER neurons. Game Boy audio (DC-blocked PCM from PyBoy's APU) drives Johnston's organ, wall collisions drive a mechanosensory bristle type (SNta13), and 'position changed' drives leg proprioceptors. Hearing and touch are single broadcast scalars, and one input (player facing → EPG neurons) is read straight from game memory, which facing.py flags as a deliberate exception.",
      },
      {
        title: "Motor neuron readout",
        body: "Seven channels map to buttons: left/right/forward come from the VNC leg motor pool split by soma side (plus DNa01/DNa02/DNb08/DNb05), action/b/start from dedicated terminal motor neurons (DLMn c-f, MNad09, MNad11), and back from forward drive multiplied by DNp09 activity. decode() z-scores each channel against its own running baseline, subtracts a per-group common mode, adds a 0.75 hysteresis bonus (withheld right after a collision) and samples a softmax at temperature 0.35. The neuron-to-button mapping is a documented interpretation, and motor.py's comments record that many of these signals are highly cross-correlated, hence the post-processing.",
      },
      {
        title: "Dopamine-gated plasticity",
        body: "The only mutable synapses are KC→MBON (64,949 in the local cache), held in a separate matrix. Each decision, learn() takes dopamine as mean PAM minus mean PPL1 activity and updates each synapse's magnitude by learning rate × dopamine × KC eligibility trace × MBON activity, clamped to 0.15–2× its original weight with sign preserved. PAM/PPL1 are driven by reward.py and battle events read from game RAM, passed through a tanh so a new tile and a badge give different-sized pulses.",
      },
      {
        title: "Exploit-resistant reward design",
        body: "reward.py pays new-tile, new-map, scene/text novelty, exit-distance and story-route progress as permanent records, so revisiting or oscillating earns nothing, and the post-blackout recovery bonus is armed only by a detected blackout and hard-capped. Punishments cover stale screens, menu dwelling (occupancy over a 40-tick window) and wall collisions. Code comments document live-caught deadlocks in these gates and their fixes.",
      },
      {
        title: "Concurrent real-time loops",
        body: "One shared Session runs four asyncio tasks: the decision loop at TARGET_TPS, an emulator loop deadline-paced to 59.7275 fps in 4-frame batches on worker threads, a 12 Hz screen+audio stream, and a 4 Hz 'think' loop that keeps the network evolving between decisions. Two locks guard the emulator and brain. State autosaves every 120 s by default (emulator state, plasticity, normalizer, reward memory) and flushes again in the shutdown hook.",
      },
      {
        title: "Synced audio, video, brain",
        body: "The WebSocket carries status, frame, brain_pulse and av_pulse messages; screen PNG and PCM audio are captured under one lock and bundled, and identical PNGs are skipped. The frontend schedules Web Audio with a 0.15 s lookahead and delays the rest of each decision's data by the same amount so gamepad, screen and reward panels agree. The static neuron layout is fetched once from /api/brain_layout and only activations are sent per tick.",
      },
      {
        title: "Auth, admin, deployment",
        body: "Start/Stop and every /api/admin route require an X-Admin-Token compared with secrets.compare_digest, and fail closed if ADMIN_TOKEN is unset; resets that touch files the live loop rewrites require the session to be stopped. Docker Compose runs the FastAPI container plus an nginx container serving the Next.js static export and proxying /api and /ws (3600 s WebSocket timeout); the ROM and connectome data are mounted from the host, not baked in. The frontend keeps the admin token in localStorage, a convenience only, since enforcement is server-side.",
      },
    
    ],
    tech: [
      "Python 3.12",
      "FastAPI",
      "NumPy",
      "SciPy",
      "neuprint-python",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Jotai",
      "Docker Compose",
    ],
    video: "videos/fly-pokemon.mp4",
    repo: "https://github.com/alexiao94/pokemon-fly",
  },
  {
    name: "ETO",
    subtitle: "Social & Business Review Platform",
    start: "2026-05",
    end: "2026-06",
    description:
      "Nine Spring Boot microservices behind a reactive gateway, with Next.js and Expo clients.",
    tech: ["Java", "Spring Boot", "Spring Cloud Gateway", "WebFlux", "Next.js", "React Native", "PostgreSQL", "Redis", "WebSockets", "Docker", "Kubernetes"],
    overview:
      "ETO is a social and local-business discovery platform. The backend is nine services (gateway, auth, user, post, business, report, notification, chat, reward), each with its own PostgreSQL database, behind a reactive Spring Cloud Gateway. It ships with a Next.js 15 web app and an Expo mobile app, and runs on Docker Compose.",
    highlights: [
      {
        title: "Gateway and security",
        body: "The gateway does stateless JWT validation, Redis-backed token revocation for logout, IP-based rate limiting on login and register, and centralized CORS. It also proxies WebSocket upgrades for chat and notifications.",
      },
      {
        title: "Real-time chat",
        body: "The chat service is fully reactive (WebFlux and R2DBC). It uses Redis pub/sub so messages reach users on any replica, and messages are AES-256-GCM encrypted at rest. It also has read receipts and online presence.",
      },
      {
        title: "Live notifications",
        body: "Other services create notifications through a fire-and-forget internal API. The notification service persists them and pushes them to connected clients over WebSockets.",
      },
      {
        title: "Privacy-aware social graph",
        body: "Public and private accounts, follow requests with approve and deny, and privacy rules enforced across service boundaries.",
      },
      {
        title: "Business discovery",
        body: "Full-text search, bounding-box plus Haversine geospatial queries, and a business ownership-claim workflow. It also splits ratings between local and visitor reviewers and breaks them down by ethnicity.",
      },
      {
        title: "Rewards economy",
        body: "An append-only ledger for users and businesses. Coins are escrowed when a campaign is created, expire after a year, and are refunded on rejection.",
      },
      {
        title: "Content moderation",
        body: "Users report content, and admins review it with a full audit trail. Hidden content is excluded from feeds, and re-reporting is supported.",
      },
      {
        title: "Media and observability",
        body: "Direct-to-storage uploads through presigned MinIO URLs, Sentry error tracking across services, and Redis caching for cross-service lookups.",
      },
      {
        title: "Engineering practices",
        body: "ULID identifiers, database-per-service, a Maven multi-module build, and unit and controller tests for the core services.",
      },
    ],
    video: "videos/eto.mp4",
    poster: "videos/eto.png",
  },
  {
    name: "Tut",
    subtitle: "Real-Time Interview Coach",
    start: "2026-01",
    description:
      "ASP.NET Core WebSocket server and React client sharing a versioned protocol.",
    overview:
      "Tut is a prototype real-time interview coach. The idea is that a live channel between a coding client and a coaching backend sends timed hints (nudges, prompts, full hints) while a candidate solves a problem. This repo is the foundation: the transport, the protocol, and the deployment. The hint logic is still a stub.",
    highlights: [
      {
        title: "Versioned message protocol",
        body: "Every message shares one envelope with a version, type, session ID, timestamp and sequence number. A type switch on the server routes messages, and the version and sequence fields leave room for protocol evolution and ordering. The contracts live in a separate Tut.Core library so several clients can share them.",
      },
      {
        title: "Raw WebSocket handling",
        body: "The server uses ASP.NET Core's WebSocket middleware directly, with no SignalR. It handles the handshake, framing, close frames, and malformed JSON without dropping the connection.",
      },
      {
        title: "Same-origin WebSocket through a reverse proxy",
        body: "The client derives ws:// or wss:// from the page location. nginx upgrades /ws/control to the backend and serves the SPA with a history fallback, so dev and Docker use the same code path.",
      },
      {
        title: "Typed client state",
        body: "The React client models the envelope and hint payload in TypeScript and keeps the socket in refs. It shows connection status, a capped log and a hint feed.",
      },
      {
        title: "Reproducible builds",
        body: "Multi-stage Dockerfiles (.NET SDK to ASP.NET runtime, Node to nginx) and a Compose file bring up the whole stack with one command.",
      },
      {
        title: "Roadmap (not built yet)",
        body: "The hint engine, a WPF desktop client, and the Monaco editor integration.",
      },
    ],
    tech: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "WebSockets",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "nginx",
      "Docker",
      "Docker Compose",
      "WPF",
    ],
    video: "videos/tut.mp4",
    poster: "videos/tut.png",
  },
  {
    name: "TradeX",
    subtitle: "Automated Trading Machine",
    description:
      "Transformer model predicting SPY 15-minute direction from technical indicators.",
    overview:
      "Real-time ML pipeline predicting short-term stock price movement, with a Transformer classifier for SPY 15-minute direction and a feature pipeline (RSI, MACD, volatility bands) over 500k+ time-series points.",
    tech: ["Python", "PyTorch", "Django", "SQL", "Docker"],
  },
  {
    name: "MarketX",
    subtitle: "Trades and Collector Marketplace",
    description:
      "Collectibles marketplace; Elasticsearch search cut response time by 40%.",
    overview:
      "Full-stack marketplace for listing, searching, and trading collectibles, with a normalized schema for listings, transactions, and bidding. Elasticsearch search cut response time by 40% versus SQL queries.",
    tech: ["Java", "Spring Boot", "React", "Elasticsearch", "SQL", "Docker"],
  },
  {
    name: "Handsoff",
    subtitle: "Cleaning and Home Maintenance Marketplace",
    start: "2025-07",
    end: "2025-08",
    poster: "videos/handsoff.jpg",
    description:
      "Team-built marketplace connecting homeowners with cleaning and maintenance providers.",
    overview:
      "HandsOff is a service marketplace built by a Dallas Software Developers Cohort team (213 commits). Clients book a cleaning or home-maintenance job, get matched to a provider of that type, pay through Stripe Checkout, and follow the order from scheduled to completed. Providers manage their assigned jobs from a calendar portal. It is a Django REST backend and a React + TypeScript frontend, with Supabase handling sign-in, and it runs as a working prototype on Docker Compose.",
    highlights: [
      {
        title: "What I built",
        body: "The landing page, the service catalogue (cards, carousel and review components), the date and time picker (past slots filtered out, AM/PM), the cart context that carries a chosen service into booking, the navbar and route shell, and the first version of the provider schedule calendar. On the backend I added the Profile model and its link to Supabase users. Teammates built the order model, authentication class, Stripe and email flows.",
      },
      {
        title: "Supabase JWT authentication",
        body: "Sign-in is Supabase Auth. A custom DRF authentication class verifies the Supabase JWT (HS256), rejects expired or invalid tokens, mirrors the user into an unmanaged model on Supabase's auth.users table plus a Django user, and attaches the caller's Profile to the request. It relinks a profile to a new Supabase ID when the same email signs in again.",
      },
      {
        title: "Validated order model",
        body: "An order's end time is computed from its job's fixed duration, and full_clean() runs on every save, so a job that does not belong to its service type is rejected. Order numbers are random 6-character codes, retried up to five times on collision. The catalogue (3 cleaning and 12 maintenance jobs, each with price, duration and description) lives in one constants module and is served by a public /api/services/ endpoint.",
      },
      {
        title: "Roles and scoped access",
        body: "Profiles are clients or providers, and providers must have a type (cleaning or maintenance), enforced in both the model and the serializer. Order queries are scoped by role: a provider sees only orders assigned to them, a client only their own. New orders are assigned to a random provider of the matching type.",
      },
      {
        title: "Order lifecycle and emails",
        body: "Orders move scheduled, on the way, in progress, completed. The API stores lowercase, dashed statuses and maps them to display labels, and providers update status from their portal with a PATCH. Confirmation and status-change emails go out over SMTP, with the client's address looked up through Supabase's admin API. Email failures are swallowed so they never break the request.",
      },
      {
        title: "Stripe Checkout flow",
        body: "Payments use Stripe Checkout through drf-stripe-subscription. The booking is saved in sessionStorage, the browser is redirected to Stripe, and the success page creates the order through the API.",
      },
      {
        title: "Provider portal",
        body: "Providers get a portal with a full-schedule calendar, an hourly view, announcements and order history, plus a customer portal for clients to track their bookings.",
      },
      {
        title: "API docs and deployment",
        body: "The API is documented with drf-spectacular (Swagger UI at /docs). Docker Compose runs the Django API (migrations, then uvicorn on ASGI) and the React frontend, against a hosted Supabase Postgres database.",
      },
      {
        title: "Roadmap (not built yet)",
        body: "There are no automated tests (the test files are empty stubs) and no CI. Checkout uses one hard-coded Stripe price ID and creates the order in the browser after the redirect, not from a Stripe webhook, so the charge is not tied to the job price. Providers are assigned at random with no availability check, service reviews are sample data, and the settings are dev-only (DEBUG on, all hosts allowed).",
      },
    ],
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Docker Compose",
    ],
    repo: "https://github.com/alexiao94/DSDCohortJuly2025",
  },
];

export const education = [
  {
    school: "University of Oregon",
    degree: "M.S. Computer Science",
    period: "Sep 2021 — Jun 2024",
    location: "Eugene, OR",
    gpa: "3.68",
  },
  {
    school: "Texas A&M University",
    degree: "B.S. Manufacturing and Mechanical Engineering",
    period: "Sep 2015 — Dec 2018",
    location: "College Station, TX",
    gpa: "3.53",
  },
];
