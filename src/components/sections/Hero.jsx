import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="section-padding flex min-h-screen items-center pt-32"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-sm font-medium text-zinc-500">
            Software Engineer • IET DAVV '26
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Building modern web products with clean code and real-world impact.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            I'm Anurag Dangi, a software developer focused on full-stack
            applications, AI-powered products, and scalable user experiences.
            Currently building projects while preparing for software engineering
            roles.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-600">
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Express</span>
            <span>•</span>
            <span>MongoDB</span>
            <span>•</span>
            <span>OpenAI</span>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
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
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
            >
              Resume
              <FileText size={16} />
            </a>
          </div>

          <div className="mt-16 grid gap-6 border-t border-zinc-200 pt-8 md:grid-cols-4">
            <div>
              <p className="text-2xl font-semibold">500+</p>
              <p className="mt-1 text-sm text-zinc-600">
                DSA Problems Solved
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">SIH</p>
              <p className="mt-1 text-sm text-zinc-600">
                Finalist
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">1</p>
              <p className="mt-1 text-sm text-zinc-600">
                SDE Internship
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">10+</p>
              <p className="mt-1 text-sm text-zinc-600">
                Projects Built
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/anuragrajpoott"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-zinc-950"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/anuragrajpoott"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-zinc-950"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;