import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "JWT",
  "Cloudinary",
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="
                glass
                rounded-2xl
                p-6
                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:shadow-lg
                transition-all
                duration-300
                cursor-default
              "
            >
              <h3 className="font-semibold text-lg text-slate-200">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;