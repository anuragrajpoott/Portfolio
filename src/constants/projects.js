import lmsImage from "../assets/projects/lms.jpeg";
import aiNewsImage from "../assets/projects/ai-news.jpeg";
import csvImporterImage from "../assets/projects/csv-importer.jpeg";

export const featuredProjects = [
  {
    title: "Learning Management System",
    image: lmsImage,
    description:
      "A production-ready EdTech platform featuring JWT authentication, OTP email verification, role-based access, Razorpay payments, and complete course management for students and instructors.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],
    github: "https://github.com/anuragrajpoot/study_notion",
    live: "https://study-notion-ten-mu.vercel.app",
  },
  {
    title: "AI News Credibility Analyzer",
    image: aiNewsImage,
    description:
      "An AI-powered web application that analyzes news articles, extracts factual claims, and evaluates credibility using modern LLM APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenRouter"],
    github: "https://github.com/anuragrajpoot/ai_news_credibility_analyzer",
    live: "https://ai-news-credibility-analyzer.vercel.app",
  },
  {
    title: "GrowEasy AI CSV Importer",
    image: csvImporterImage,
    description:
      "An AI-assisted CSV import solution with intelligent field mapping, validation, error detection, and automated business workflows.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI"],
    github: "https://github.com/anuragrajpoot/groweasy_ai_csv_importer",
    live: "https://groweasy-ai-csv-importer-red.vercel.app",
  },
];

export const otherProjects = [
  {
    title: "Authentication System",
    description:
      "JWT authentication with email verification, password reset and role-based authorization.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuragrajpoot/auth",
    live: "https://auth-weld-psi.vercel.app",
  },
  {
    title: "Blog Platform",
    description:
      "Full-stack blogging application with authentication and complete CRUD functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuragrajpoot/blog",
    live: "https://blog-flame-kappa-20.vercel.app",
  },
  {
    title: "File Upload Service",
    description:
      "Cloud-based file upload platform with validation, storage and secure APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/anuragrajpoot/file_upload",
    live: "https://file-upload.vercel.app",
  },
  {
    title: "Todo Application",
    description:
      "Authentication-based task manager supporting complete CRUD operations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuragrajpoot/todo",
    live: "https://todo-one-sigma-88.vercel.app",
  },
  {
    title: "Ecommerce Store",
    description:
      "Responsive shopping interface with product browsing and cart management.",
    tech: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/anuragrajpoot/ecom",
    live: "https://ecom-six-blond.vercel.app",
  },
  {
    title: "Top Courses",
    description:
      "Course discovery platform built using reusable React components.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/anuragrajpoot/top_courses",
    live: "https://top-courses-zeta-orcin.vercel.app",
  },
  {
    title: "Testimonials",
    description:
      "Interactive testimonial showcase demonstrating reusable UI components.",
    tech: ["React", "CSS"],
    github: "https://github.com/anuragrajpoot/testimonials",
    live: "https://testimonials-one-amber.vercel.app",
  },
  {
    title: "Dictionary",
    description:
      "Dictionary application using public APIs for meanings and pronunciations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "",
  },
  {
    title: "Currency Converter",
    description:
      "Real-time currency converter powered by exchange rate APIs.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game built using JavaScript and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "",
  },
];