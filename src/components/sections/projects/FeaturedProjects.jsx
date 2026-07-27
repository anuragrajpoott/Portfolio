import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { featuredProjects } from "../../../constants/projects";

function FeaturedProjects() {
  return (
    <div>
      <h3 className="mb-8 text-2xl font-semibold">
        Featured Projects
      </h3>

      <div className="space-y-12">
        {featuredProjects.map((project, index) => {
          const imageFirst = index % 2 === 0;

          const image = (
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          );

          const content = (
            <div className="flex flex-col justify-center">
              <span className="mb-3 inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                Featured Project
              </span>

              <h4 className="text-3xl font-semibold tracking-tight">
                {project.title}
              </h4>

              <p className="mt-4 leading-7 text-zinc-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          );

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="grid items-center gap-8 lg:grid-cols-2">
                {imageFirst ? (
                  <>
                    {image}
                    {content}
                  </>
                ) : (
                  <>
                    {content}
                    {image}
                  </>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;