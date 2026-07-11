import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "StudyNotion",
    description:
      "A full-stack learning management platform with authentication, course management, video content delivery, and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "TruthLens",
    description:
      "AI-powered news credibility analyzer that evaluates articles, extracts claims, and helps users identify potentially misleading content.",
    tech: ["React", "OpenAI", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Selected Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Projects focused on full-stack development, AI-powered experiences,
            and building products that solve real-world problems.
          </p>
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 py-12 lg:grid-cols-[1.5fr_1fr]"
            >
              <div>
                <div className="mb-4 text-sm text-zinc-500">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-950"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-950 transition hover:opacity-70"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;