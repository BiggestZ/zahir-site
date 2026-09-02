export const profile = {
  name: "Zahir",
  role: "AI Engineer",
  location: "San Francisco, CA",
  bio: "AI Engineer who owns systems end-to-end — from architecture through production — at early-stage, VC-backed AI startups. I build backend infrastructure, APIs, and AI agents operating at scale.",
  email: "zjchoudhry@gmail.com",
  resumeUrl: "/Zahir-Choudhry-Resume.pdf",
  social: [
    { label: "GitHub", href: "https://github.com/biggestZ" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zahirchoudhry" },
  ],
};

export const skills = [
  "Python",
  "TypeScript",
  "Java",
  "Agentic Workflows (LangGraph, MCP)",
  "RAG / Hybrid Semantic Search",
  "Prompt-Injection Defense",
  "FastAPI",
  "Flask",
  "Next.js",
  "React",
  "PostgreSQL",
  "Pinecone",
  "Docker",
  "AWS (EC2 + CDK) / GCP / Azure",
  "System Design",
  "AI Coding Tools [Claude, Codex, Cursor]",
];

export const experience = [
  {
    company: "Gentoro.ai",
    role: "AI Engineer",
    period: "Sep 2025 – Present",
    location: "Menlo Park, CA",
    bullets: [
      "Built and hardened production integrations with three external systems (Bullhorn ATS, Gmail, Microsoft Graph) behind a swappable provider interface — reverse-engineering undocumented behavior (a silent sender-format quirk, an unstated OAuth scope requirement) that no public docs covered.",
      "Built a hybrid retrieval and prompt-injection-hardened LLM pipeline that cut inference costs ~80% while screening and routing 1,000+ applicants per posting via LLM scoring and reply-intent triage.",
      "Designed a Postgres-backed reliability layer so multi-step agent workflows stayed correct even when individual steps failed.",
      "Led a 4-person engineering team shipping a 3-service, ~20K-line production platform (Next.js frontend, FastAPI backend, PostgreSQL, 310+ unit tests); partnered directly with enterprise customers through weekly demos and technical reviews.",
    ],
  },
  {
    company: "Gentoro.ai",
    role: "AI Engineer Intern",
    period: "Jul 2025 – Sep 2025",
    location: "Menlo Park, CA",
    bullets: [
      "Built the initial prototype of an autonomous recruiting agent (LangGraph, MCP) integrating the Bullhorn ATS, Gmail, and Google Calendar APIs to automate resume ingestion through interview scheduling.",
      "Established the agent architecture, model-routing design, and service boundaries that became the foundation of Gentoro's production recruiting platform.",
    ],
  },
  {
    company: "Onto Innovation",
    role: "Software Engineer Intern",
    period: "May 2024 – Aug 2024",
    location: "San Jose, CA",
    bullets: [
      "Built a data visualization platform that cut optical lens comparison time from 2+ hours to 5 minutes; presented to engineering leadership, driving adoption across multiple teams.",
      "Developed Python automation tools to process inspection data from semiconductor manufacturing systems, reducing manual analysis time and improving workflow efficiency.",
      "Collaborated with hardware and software engineers to identify bottlenecks and design scalable internal tooling.",
    ],
  },
];

export const education = [
  {
    school: "Occidental College",
    degree: "B.A. Computer Science, Cum Laude",
    period: "2021 – 2025",
    location: "Los Angeles, CA",
    details: "Relevant Coursework: Large Language Models, Software Engineering, Automata Theory, AI, Machine Learning.",
  },
  {
    school: "Chinese University of Hong Kong",
    degree: "Study Abroad",
    period: "August 2023 – December 2023",
    location: "Shatin, New Territories, HK",
    details: "Did a study abroad to get a chance to learn from a top 25 CS Institution in the world.",
  },
  {
    school: "California Institute of Technology",
    degree: "Coursework",
    period: "August 2024 - December 2024",
    location: "Pasadena, CA",
    details: "Supplemental coursework alongside Occidental College studies.",
  },
];

export const projects = [
  {
    name: "Chatbot-Security",
    summary:
      "LLM trust & safety testing framework: a FastAPI chatbot with a mock RAG pipeline and an automated adversarial test suite, pairing an intentionally insecure endpoint against a hardened one to validate defenses against untrusted input.",
    details:
      "Built a FastAPI chatbot with a mock RAG pipeline and an automated adversarial test suite, pairing an intentionally insecure endpoint against a hardened one to validate defenses against untrusted input — the kind of trust boundary that matters for an agent talking directly to users. Implemented input-filtering and output-guardrail middleware to block prompt-injection and data-exfiltration attacks without rejecting legitimate conversation.",
    stack: ["Python", "FastAPI", "Prompt-Injection Defense", "RAG"],
    href: "https://github.com/BiggestZ/Chatbot-Security",
    featured: true,
  },
  {
    name: "Candidate Database",
    summary:
      "Full-Stack RAG Chatbot that allows VC Firms to track strong candidates.",
    stack: ["Python", "TypeScript", "PostgreSQL", "Docker", "FastAPI"],
    href: "https://github.com/BiggestZ/Candidate_DB",
    featured: true,
  },
  {
    name: "Agentic Recruitment Workflow",
    summary:
      "Created an agentic workflow to automate the recruitment process, worked on from 0-1.",
    details:
      "Built the initial prototype of an autonomous recruiting agent (LangGraph, MCP) integrating the Bullhorn ATS, Gmail, and Google Calendar APIs to automate resume ingestion through interview scheduling. Established the agent architecture, model-routing design, and service boundaries that became the foundation of Gentoro's production recruiting platform.",
    stack: ["Python", "LangGraph", "Typescript, Docker"],
    href: "#",
    featured: false,
  },
  {
    name: "Developer Portfolio CMS",
    summary:
      "Portfolio and blog platform powered by file-based markdown content. This very website!!!",
    stack: ["Next.js", "MDX", "Tailwind CSS"],
    href: "https://github.com/BiggestZ/zahir-site",
    featured: false,
  },
];
