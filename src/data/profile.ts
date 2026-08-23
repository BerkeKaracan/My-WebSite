const EMAIL = "berkekaracan1113@gmail.com";

export const profile = {
  name: "Berke Karacan",
  role: "Full Stack Developer",
  location: "Istanbul, Turkey",
  locationUrl:
    "https://www.google.com/maps/search/?api=1&query=Istanbul%2C+Turkey",
  email: EMAIL,
  emailUrl: `mailto:${EMAIL}`,
  github: "github.com/BerkeKaracan",
  githubUrl: "https://github.com/BerkeKaracan",
  cvUrl: "/Berke_Karacan_CV.pdf",
  photo: null as string | null,
  summary:
    "I build full-stack web applications with a focus on clean architecture, reliable data flows, and interfaces that stay maintainable as products grow. My stack centers on Next.js and TypeScript on the frontend, paired with Python, FastAPI, and PostgreSQL on the backend.",
};

export const coreTechs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Docker",
];

export const tools = ["Git / GitHub", "Cursor"];

export const processSkills = [
  "Software Architecture",
  "SDLC",
  "CI/CD",
  "JIRA",
  "Version Control",
  "Scalability",
  "Problem Solving",
  "Sentry",
];

export const education = {
  degree: "Web Design & Coding",
  school: "Istanbul University",
  period: "2025 — 2027",
};

export const languages = [
  { name: "English", level: "Intermediate" },
  { name: "Turkish", level: "Native" },
];

export const certifications = [
  {
    title: "Software Development Tools",
    issuer: "BTK Academy",
    year: "2026",
    href: "/Software_Development_Tools_Certificate.pdf",
  },
];
