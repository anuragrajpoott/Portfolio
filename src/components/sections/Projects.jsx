import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <SectionTitle
            title="Featured"
            highlight="Projects"
          />

          <p className="max-w-2xl mx-auto text-slate-400 mt-6">
            A selection of projects focused on full-stack
            development, scalable architecture, and
            real-world problem solving.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`
                grid lg:grid-cols-[1.1fr_0.9fr]
                gap-14
                items-center
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* PROJECT IMAGE */}
              <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-cyan-400 font-medium mb-4">
                  Case Study #{index + 1}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-8 mt-6">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4 py-2
                        rounded-full
                        border border-slate-800
                        bg-slate-900/40
                        text-sm text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-xl
                      border border-slate-800
                      bg-slate-900/40
                      text-slate-300
                      hover:border-cyan-500/30
                      hover:text-white
                      transition-all
                    "
                  >
                    <FaGithub />
                    Source Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-xl
                      bg-linear-to-r
                      from-cyan-500
                      to-blue-600
                      text-white
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;