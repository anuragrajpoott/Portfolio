import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const archiveProjects = [
  {
    year: "2025",
    title: "Expense Tracker",
    tech: "React, Node.js, MongoDB",
    github: "#",
    live: "#",
  },
  {
    year: "2025",
    title: "Chat Application",
    tech: "React, Socket.io, Express",
    github: "#",
    live: "#",
  },
  {
    year: "2025",
    title: "Task Manager",
    tech: "MERN Stack",
    github: "#",
    live: "#",
  },
  {
    year: "2024",
    title: "Weather App",
    tech: "React, OpenWeather API",
    github: "#",
    live: "#",
  },
  {
    year: "2024",
    title: "Blog Platform",
    tech: "React, Node.js",
    github: "#",
    live: "#",
  },
  {
    year: "2024",
    title: "Portfolio Website",
    tech: "React, Tailwind CSS",
    github: "#",
    live: "#",
  },
];

function ProjectArchive() {
  return (
    <section className="pb-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Project"
            highlight="Archive"
          />

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Additional projects exploring different
            technologies, architectures, and product ideas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/20">
          {/* Header */}
          <div
            className="
              hidden md:grid
              grid-cols-[100px_1.5fr_1.5fr_120px]
              px-8 py-5
              border-b border-slate-800
              text-sm
              text-slate-500
            "
          >
            <span>Year</span>
            <span>Project</span>
            <span>Tech Stack</span>
            <span>Links</span>
          </div>

          {/* Rows */}
          {archiveProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
              }}
              className="
                md:grid
                md:grid-cols-[100px_1.5fr_1.5fr_120px]
                px-8 py-6
                border-b border-slate-800/60
                hover:bg-slate-900/40
                transition-all
              "
            >
              <div className="text-cyan-400 text-sm mb-2 md:mb-0">
                {project.year}
              </div>

              <div className="font-medium text-white mb-2 md:mb-0">
                {project.title}
              </div>

              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                {project.tech}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-slate-400
                    hover:text-white
                    transition-colors
                  "
                >
                  <FaGithub size={18} />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-slate-400
                      hover:text-cyan-400
                      transition-colors
                    "
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectArchive;