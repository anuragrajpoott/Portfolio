import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const EXPERIENCE = {
  company: "Ideal Minds",
  role: "Software Engineer Intern",
  period: "June 2025 – July 2025",
  description:
    "Worked on the Steepi Fitness platform, contributing to backend APIs, reusable frontend components, and end-to-end MERN features while collaborating in an agile development environment.",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
  highlights: [
    "Developed and integrated 15+ RESTful APIs using Node.js and Express.js.",
    "Built 10+ reusable React components to improve maintainability and development speed.",
    "Implemented API integration, feature development, testing, and debugging across the MERN stack.",
    "Collaborated with the development team to deliver production-ready features.",
  ],
};

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="section-header">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Experience
          </p>

          <h2 className="section-title">
            Professional experience.
          </h2>

          <p className="section-subtitle">
            My industry experience building production-ready applications using
            the MERN stack.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600">
                <Calendar size={14} />
                {EXPERIENCE.period}
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                {EXPERIENCE.role}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-zinc-600">
                <Building2 size={18} />
                <span>{EXPERIENCE.company}</span>
              </div>
            </div>

            <div>
              <p className="leading-7 text-zinc-600">
                {EXPERIENCE.description}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-zinc-900">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {EXPERIENCE.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {EXPERIENCE.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-600"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;