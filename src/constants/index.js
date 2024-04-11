import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  java,
  python,
  nodejs,
  mongodb,
  git,
  csharp,
  c,
  sql,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "/",
    title: "Go to App",
  },
];

const services = [
  {
    title: "Collaborative Debugging",
    icon: web,
  },
  {
    title: "Real-Time Collaboration",
    icon: mobile,
  },
  {
    title: "Code Review Tools",
    icon: backend,
  },
  {
    title: "Multi-Language Support",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C Sharp",
    icon: csharp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [
  {
    title: "Planning and Research",
    company_name: "Collaborative Code Editor",
    icon: web,
    iconBg: "#383E56",
    date: "October 2023",
    points: [
      "Define project objectives",
      "Conduct market research.",
      "Assess technical feasibility.",
      "Define project scope and timeline.",
    ],
  },
  {
    title: "Prototyping and Design",
    company_name: "Collaborative Code Editor",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "December 2023",
    points: [
      "Develop conceptual design",
      "Create interactive prototypes.",
      "Finalize UI/UX design.",
      "Define technical architecture.",
    ],
  },
  {
    title: "Development and Implementation",
    company_name: "Collaborative Code Editor",
    icon: backend,
    iconBg: "#383E56",
    date: "January 2024",
    points: [
      "Implement back-end functionality",
      "Build front-end interface.",
      "Conduct testing and QA.",
      "Optimize performance.",
    ],
  },
  {
    title: "Launch and Post-Launch Activities",
    company_name: "Collaborative Code Editor",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Official launch",
      "User onboarding and support.",
      "Marketing and growth strategies.",
      "Community building and engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Coding together is a joy with this app. Intuitive interface and live editing capabilities make group projects a breeze.",
    name: "Neha P.",
    designation: "Tech Enthusiast",
    company: "NextGen Software Solutions",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "Revolutionized my freelancing work. Real-time collaboration simplifies client communication and issue resolution.",
    name: "Vikram R.",
    designation: "Project Manager",
    company: "Tech Innovations Ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "This collaborative code editor has transformed how my team works. Real-time collaboration makes distance irrelevant.",
    name: "Ananya G.",
    designation: "Startup Founder",
    company: "Digital Solutions Inc",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

export { services, technologies, experiences, testimonials };
