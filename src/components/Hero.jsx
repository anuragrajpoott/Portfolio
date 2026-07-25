import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profilePic from "../assets/profile.jpeg";
import resumePdf from "../assets/Anurag_Dangi_SDE_Resume.pdf";

const TECH_STACK = ["React", "Node.js", "Express", "MongoDB", "OpenAI"];

const STATS = [
  { value: "500+", label: "DSA Problems Solved" },
  { value: "10+", label: "Projects Built" },
  { value: "SIH", label: "Finalist" },
  { value: "1", label: "SDE Internship" },
];

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/anuragrajpoott",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anuragrajpoott",
    icon: FaLinkedin,
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="section-padding flex min-h-screen items-center pt-20"
    >
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600">
              ● Open to Opportunities
            </span>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Software Developer · IET DAVV '26 Graduate
            </p>

            <h1 className="mt-5 max-w-6xl text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl lg:text-4xl">
              Building secure and scalable web applications.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              I'm <span className="font-medium text-zinc-900">Anurag</span>,
              a full-stack software engineer focused on backend systems, modern
              web applications, and AI-powered products with clean architecture
              and real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                >
                  {tech}
                </span>
              ))}
            </div>


            <div className="mt-12 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-zinc-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              {SOCIALS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="rounded-full border border-zinc-200 p-3 text-zinc-500 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:text-zinc-950"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-zinc-100 blur-2xl" />

              <img
                src={profilePic}
                alt="Anurag Dangi"
                loading="eager"
                className="relative h-72 w-72 rounded-full border border-zinc-200 object-cover shadow-xl md:h-80 md:w-80 lg:h-96 lg:w-96"
              />

              <div className="absolute bottom-6 right-0 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-md backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-zinc-700">
                    Available for Hiring
                  </span>
                </div>
              </div>

              <div className="absolute left-0 top-8 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-md backdrop-blur-sm">
                <p className="text-xs text-zinc-500">Specialization</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  Backend • Full Stack • AI
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;