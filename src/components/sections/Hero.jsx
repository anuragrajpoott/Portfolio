import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="section-padding flex min-h-screen items-center pt-20"
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Intro */}
            <p className="mb-4 text-sm font-medium text-zinc-500">
              Software Engineer • IET DAVV '26
            </p>

            {/* Heading */}
            <h1 className="max-w-2xl text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl lg:text-4xl">
              Building modern web products with clean code and real-world
              impact.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
              I'm Anurag Dangi, a software developer focused on full-stack
              applications, AI-powered products, and scalable user experiences.
              Currently building projects while preparing for software
              engineering roles.
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "OpenAI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Work
                <ArrowRight size={16} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-50"
              >
                Resume
                <FileText size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-6 border-t border-zinc-200 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xl font-semibold text-zinc-950">500+</p>
                <p className="mt-1 text-sm text-zinc-600">
                  DSA Problems Solved
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-zinc-950">10+</p>
                <p className="mt-1 text-sm text-zinc-600">Projects Built</p>
              </div>

              <div>
                <p className="text-xl font-semibold text-zinc-950">SIH</p>
                <p className="mt-1 text-sm text-zinc-600">Finalist</p>
              </div>

              <div>
                <p className="text-xl font-semibold text-zinc-950">1</p>
                <p className="mt-1 text-sm text-zinc-600">
                  SDE Internship
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-200 p-3 text-zinc-500 transition hover:text-zinc-950"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-200 p-3 text-zinc-500 transition hover:text-zinc-950"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Section - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Soft Background Circle */}
              <div className="absolute inset-0 scale-110 rounded-full bg-zinc-100" />

              {/* Profile Image */}
              <img
                src="/profile.jpg"
                alt="Anurag Dangi"
                className="relative h-72 w-72 rounded-full border border-zinc-200 object-cover md:h-80 md:w-80 lg:h-[380px] lg:w-[380px]"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-0 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-zinc-700">
                    Open to Work
                  </span>
                </div>
              </div>

              {/* Small Card */}
              <div className="absolute left-0 top-8 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-xs text-zinc-500">Focused On</p>
                <p className="text-sm font-medium text-zinc-900">
                  Full Stack & AI
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