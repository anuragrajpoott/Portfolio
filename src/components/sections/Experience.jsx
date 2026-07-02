import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack SDE Intern",
    company: "Ideal Minds",
    duration: "June 2025 – July 2025",
    points: [
      "Developed REST APIs for the Steepi Fitness Application.",
      "Built reusable React components to improve maintainability and development speed.",
      "Worked across the MERN stack delivering production-ready features.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative border-l border-blue-500/40 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 pb-12"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -left-2.25
                  top-2
                  h-4
                  w-4
                  rounded-full
                  bg-blue-500
                "
              />

              <div className="glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 mt-1">
                  {exp.company}
                </p>

                <p className="text-slate-400 mt-2 text-sm">
                  {exp.duration}
                </p>

                <ul className="mt-5 space-y-3 text-slate-300">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3"
                    >
                      <span className="text-blue-400">
                        ▹
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;