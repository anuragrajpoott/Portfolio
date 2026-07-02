import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`
                grid lg:grid-cols-2 gap-12 items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}
              <div className="group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    rounded-3xl
                    border border-white/10
                    shadow-2xl
                    group-hover:scale-[1.02]
                    transition-all duration-500
                  "
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-cyan-400 font-medium mb-3">
                  Featured Project
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mb-5">
                  {project.title}
                </h3>

                <div className="glass rounded-2xl p-6 mb-6">
                  <p className="text-slate-300 leading-8">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4 py-2
                        rounded-full
                        glass
                        text-sm
                        text-slate-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      glass
                      px-6 py-3
                      rounded-xl
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-6 py-3
                      rounded-xl
                      bg-linear-to-r
                      from-blue-600
                      to-purple-600
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