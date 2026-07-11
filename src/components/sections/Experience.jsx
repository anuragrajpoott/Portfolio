import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { FaBriefcase } from "react-icons/fa";

const experience = {
  role: "Full Stack SDE Intern",
  company: "Ideal Minds",
  duration: "June 2025 – July 2025",
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
  ],
  points: [
    "Developed REST APIs for the Steepi Fitness application.",
    "Built reusable React components to improve maintainability and development speed.",
    "Worked across the MERN stack delivering production-ready features.",
    "Collaborated on feature implementation and debugging to improve application reliability.",
  ],
};

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle title="Work" highlight="Experience" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start"
        >
          {/* LEFT */}
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-slate-900/60 text-cyan-400">
              <FaBriefcase size={20} />
            </div>

            <p className="text-cyan-400 font-medium mt-6">
              {experience.duration}
            </p>

            <h3 className="text-3xl font-bold text-white mt-2">
              {experience.role}
            </h3>

            <p className="text-lg text-slate-400 mt-3">
              {experience.company}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {experience.tech.map((tech) => (
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
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-lg text-slate-300 leading-8 mb-8">
              Contributed to a real-world fitness platform,
              building backend APIs and reusable frontend
              components while working across the MERN stack.
            </p>

            <div className="space-y-6">
              {experience.points.map((point) => (
                <div
                  key={point}
                  className="flex gap-4"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />

                  <p className="text-slate-300 leading-7">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;