import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { otherProjects } from "../../../constants/projects";

function OtherProjects() {
  return (
    <div className="mt-24">
      <h3 className="mb-8 text-2xl font-semibold">
        Other Projects
      </h3>

      {/* Desktop */}

      <div className="hidden overflow-hidden rounded-2xl border border-zinc-200 md:block">
        <table className="w-full text-left">
          <thead className="border-b border-zinc-200 bg-zinc-50">
            <tr>
              <th className="px-6 py-4 font-semibold">
                Project
              </th>

              <th className="px-6 py-4 font-semibold">
                Description
              </th>

              <th className="px-6 py-4 font-semibold">
                Tech Stack
              </th>

              <th className="px-6 py-4 text-center font-semibold">
                Links
              </th>
            </tr>
          </thead>

          <tbody>
            {otherProjects.map((project) => (
              <tr
                key={project.title}
                className="border-b border-zinc-200 transition-colors hover:bg-zinc-50 last:border-none"
              >
                <td className="whitespace-nowrap px-6 py-5 font-medium">
                  {project.title}
                </td>

                <td className="px-6 py-5 text-zinc-600">
                  {project.description}
                </td>

                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="text-zinc-600 transition-colors hover:text-zinc-950"
                    >
                      <FaGithub size={18} />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="text-zinc-600 transition-colors hover:text-zinc-950"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div className="space-y-5 md:hidden">
        {otherProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <h4 className="text-lg font-semibold">
              {project.title}
            </h4>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-5">
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
          </article>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;