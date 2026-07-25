import { motion } from "framer-motion";

const EXPERIENCE = {
  period: "June 2025 — July 2025",
  role: "Software Engineer Intern",
  company: "Ideal Minds",
  description:
    "Contributed to the development of a production-ready fitness platform by building scalable backend APIs, reusable frontend components, and full-stack features across the MERN stack.",
  highlights: [
    "Developed REST APIs powering core platform functionality.",
    "Built reusable React components to improve consistency and maintainability.",
    "Implemented end-to-end features using React, Node.js, Express, and MongoDB.",
    "Collaborated on debugging, testing, and feature delivery to enhance product reliability.",
  ],
};

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Experience
          </p>

          <h2 className="section-title">Professional Experience</h2>

          <p className="section-subtitle">
            Building scalable applications, reusable systems, and production-ready
            features across the full stack.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-zinc-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg lg:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
              <p className="text-sm font-medium text-zinc-500">
                {EXPERIENCE.period}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {EXPERIENCE.role}
              </h3>

              <p className="mt-2 text-zinc-600">{EXPERIENCE.company}</p>
            </div>

            <div>
              <p className="leading-8 text-zinc-600">
                {EXPERIENCE.description}
              </p>

              <ul className="mt-8 space-y-4">
                {EXPERIENCE.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-zinc-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    <span>{highlight}</span>
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