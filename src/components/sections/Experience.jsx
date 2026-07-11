import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
    >
      <div className="container-custom">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Professional experience building production-ready
            applications and contributing across the full stack.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t border-b border-zinc-200 py-12"
        >
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
              <p className="text-sm text-zinc-500">
                June 2025 — July 2025
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Full Stack SDE Intern
              </h3>

              <p className="mt-1 text-zinc-600">
                Ideal Minds
              </p>
            </div>

            <div>
              <p className="leading-7 text-zinc-600">
                Contributed to the development of a real-world
                fitness platform by building backend APIs,
                reusable frontend components, and production
                features across the MERN stack.
              </p>

              <ul className="mt-8 space-y-4 text-zinc-600">
                <li>
                  Developed REST APIs supporting core platform
                  functionality.
                </li>

                <li>
                  Built reusable React components to improve
                  maintainability and development efficiency.
                </li>

                <li>
                  Delivered full-stack features using React,
                  Node.js, Express, and MongoDB.
                </li>

                <li>
                  Collaborated on debugging, testing, and
                  feature implementation to improve product
                  reliability.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;