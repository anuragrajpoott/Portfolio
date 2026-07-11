import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "Cloudinary"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionTitle title="Technical" highlight="Expertise" />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="border border-slate-800 rounded-3xl p-8 bg-slate-900/30"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-slate-700
                      text-slate-300
                      text-sm
                      hover:border-cyan-500/40
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;