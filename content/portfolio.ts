export const profile = {
  name: "Zahir",
  role: "AI Engineer",
  location: "United States",
  bio: "I build agentic-workflows that get stuff done. Also have experience building backends, and looking to  start fullstack too.",
  email: "zjchoudhry@gmail.com",
  resumeUrl: "#",
  social: [
    { label: "GitHub", href: "https://github.com/biggestZ" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zahir-choudhry" },
    { label: "X", href: "https://x.com" },
  ],
};

export const skills = [
  "Python",
  "PostgreSQL",
  "REST APIs",
  "Docker",
  "LangChain/LangGraph",
  "System Design",
  "AI Coding Tools [Claude, Codex, etc]",
  "TypeScript",
  "Java",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS"
  
];

export const experience = [
  {
    company: "Gentoro.ai",
    role: "AI Engineer Intern",
    period: "July 2025 – Present",
    location: "San Francisco Bay Area, CA",
    bullets: [
      "Pioneered development of MCP agents to demonstrate enterprise value while creating simple solutions for customer deployment.",
      "Engineered an intelligent Recruitment Agent that worked end-to-end to automate candidate qualification checking and interview scheduling, reducing interview time by 80%",
      "Leveraged Webhooks and React frontend capablities to trigger the agentic workflow.",
    ],
  },
  {
    company: "Occidental College",
    role: "Computer Science SSAP Teaching Assistant",
    period: "Jan 2023 – May 2025",
    location: "Los Angeles, CA",
    bullets: [
      "Provide personalized academic support and guidance to undergraduate students enrolled in Computer Science courses.",
      "Assist students in understanding complex concepts, debugging code, and completing assignments in languages such as Python, Java, and C++.",
      "Conduct interactive tutoring sessions to reinforce fundamental principles in data structures, algorithms, and software engineering.",
      "Collaborate with faculty to develop supplemental materials and workshops to enhance student learning outcomes.",
      "Foster a supportive and inclusive learning environment, empowering students of diverse backgrounds to excel in their coursework."
    ],
  },
  {
    company: "Onto Innovations",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    location: "Milpitas, CA",
    bullets: [
      "Built internal software tools that streamlined data processing and analysis for engineers.",
      "Designed and implemented a data visualization framework integrating legacy datasets with new inputs, enabling faster comparison and trend detection.",
      "Gained hands-on experience in data engineering, backend development, and UI/UX design using Python, PANDAS, Tkinter primarily.",
      "Presented solutions to senior engineers and executives, demonstrating both technical expertise and the ability to communicate insights effectively."
    ],
  },
];

export const education = [
  {
    school: "Occidental College",
    degree: "B.A. Computer Science - Math Minor",
    period: "2021 – 2025",
    location: "Los Angeles, CA",
    details: "Cum Laude, Computer Science Tutor & Mentor.",
  },
  {
    school: "Chinese University of Hong Kon",
    degree: "Study Abroad",
    period: " August 2023 – December 2023",
    location: "Shatin, New Territories, HK",
    details: "Did a study abroad to get a chance to learn from a top 25 CS Institution in the world.",
  },
];

export const projects = [
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
    stack: ["Python", "LangGraph", "Typescript, Docker"],
    href: "#",
    featured: true,
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
