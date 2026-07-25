import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";


import lmsImage from "../assets/projects/lms.jpeg";
import aiNewsImage from "../assets/projects/ai-news.jpeg";
import csvImporterImage from "../assets/projects/csv-importer.jpeg";

import authImage from "../assets/projects/auth.jpeg";
import fileUploadImage from "../assets/projects/file-upload.jpeg";
import blogImage from "../assets/projects/blog.jpeg";
import todoImage from "../assets/projects/todo.jpeg";

import ecommerceImage from "../assets/projects/ecommerce.jpeg";
import coursesImage from "../assets/projects/top-courses.jpeg";
import testimonialsImage from "../assets/projects/testimonials.jpeg";

import dictionaryImage from "../assets/projects/dictionary.png";
import currencyImage from "../assets/projects/currency.png";
import ticTacToeImage from "../assets/projects/tic-tac-toe.png";

const projects = [
  // ============================================================================
  // Featured Projects
  // ============================================================================

  {
    category: "Featured",
    title: "Learning Management System",
    image: lmsImage,
    description:
      "A production-ready learning platform featuring secure authentication, role-based access, payments, and complete course management for students and instructors.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],
    github: "https://github.com/yourusername/lms",
    live: "https://lms-demo.vercel.app",
    featured: true,
  },

  {
    category: "Featured",
    title: "AI News Credibility Analyzer",
    image: aiNewsImage,
    description:
      "An AI-powered platform that analyses news articles, extracts factual claims, and evaluates credibility using modern LLM APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI"],
    github: "https://github.com/yourusername/news-ai",
    live: "https://news-ai.vercel.app",
    featured: true,
  },

  {
    category: "Featured",
    title: "GrowEasy AI CSV Importer",
    image: csvImporterImage,
    description:
      "AI-assisted CSV import solution with intelligent mapping, validation, error detection, and automated business workflows.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI"],
    github: "https://github.com/yourusername/csv-importer",
    live: "https://csv-importer.vercel.app",
    featured: true,
  },

  // ============================================================================
  // Full Stack Applications
  // ============================================================================

  {
    category: "Full Stack",
    title: "Authentication System",
    image: authImage,
    description:
      "Secure authentication system featuring JWT, email verification, password reset, and role-based authorization.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/auth-system",
    live: "https://auth-demo.vercel.app",
  },

  {
    category: "Full Stack",
    title: "File Upload Service",
    image: fileUploadImage,
    description:
      "Complete file management platform with uploads, validation, cloud storage, and secure APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/file-upload",
    live: "https://file-upload.vercel.app",
  },

  {
    category: "Full Stack",
    title: "Blog Platform",
    image: blogImage,
    description:
      "Full-stack blogging application with authentication, CRUD functionality, and responsive design.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/blog-platform",
    live: "https://blog-platform.vercel.app",
  },

  {
    category: "Full Stack",
    title: "Todo Application",
    image: todoImage,
    description:
      "Task management application supporting authentication and complete CRUD operations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/todo-app",
    live: "https://todo-app.vercel.app",
  },

  // ============================================================================
  // React Applications
  // ============================================================================

  {
    category: "React",
    title: "Ecommerce Store",
    image: ecommerceImage,
    description:
      "Responsive shopping experience featuring product browsing, cart management, and modern UI.",
    tech: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce.vercel.app",
  },

  {
    category: "React",
    title: "Top Courses",
    image: coursesImage,
    description:
      "Course discovery platform built with reusable React components and responsive layouts.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/yourusername/top-courses",
    live: "https://top-courses.vercel.app",
  },

  {
    category: "React",
    title: "Testimonials",
    image: testimonialsImage,
    description:
      "Interactive testimonial showcase demonstrating reusable components and responsive UI design.",
    tech: ["React", "CSS"],
    github: "https://github.com/yourusername/testimonials",
    live: "https://testimonials.vercel.app",
  },

  // ============================================================================
  // JavaScript Projects
  // ============================================================================

  {
    category: "JavaScript",
    title: "Dictionary",
    image: dictionaryImage,
    description:
      "Dictionary application that fetches meanings, pronunciations, and examples using public APIs.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/dictionary",
    live: "https://dictionary.vercel.app",
  },

  {
    category: "JavaScript",
    title: "Currency Converter",
    image: currencyImage,
    description:
      "Real-time currency converter powered by exchange-rate APIs with a clean responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/currency-converter",
    live: "https://currency.vercel.app",
  },

  {
    category: "JavaScript",
    title: "Tic Tac Toe",
    image: ticTacToeImage,
    description:
      "Classic Tic Tac Toe game demonstrating JavaScript fundamentals and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/tic-tac-toe",
    live: "https://tic-tac-toe.vercel.app",
  },
];

function Projects() {
  const categories = [
    { title: "Featured Projects", key: "Featured" },
    { title: "Full-Stack Applications", key: "Full Stack" },
    { title: "React Applications", key: "React" },
    { title: "JavaScript Projects", key: "JavaScript" },
  ];

  let projectNumber = 1;

  const renderProjects = (items) =>
    items.map((project) => (
      <motion.article
        key={project.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="group grid gap-10 border-b border-zinc-200 py-12 last:border-none lg:grid-cols-[420px_1fr]"
      >
        {/* Project Image */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Project Content */}
        <div className="flex flex-col">
          <span className="mb-3 text-sm font-medium text-zinc-400">
            {String(projectNumber++).padStart(2, "0")}
          </span>

          <h3 className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition hover:opacity-70"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </motion.article>
    ));

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className=" mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Portfolio
          </p>

          <h2 className="section-title">Selected Work</h2>

          <p className="section-subtitle">
            A collection of projects focused on full-stack development,
            AI-powered applications, scalable backend systems, and responsive
            frontend experiences.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map(({ title, key }) => {
            const categoryProjects = projects.filter(
              (project) => project.category === key
            );

            return (
              <section key={key}>
                <h3 className="mb-8 text-2xl font-semibold tracking-tight">
                  {title}
                </h3>

                <div className="divide-y divide-zinc-200 border-y border-zinc-200">
                  {renderProjects(categoryProjects)}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;