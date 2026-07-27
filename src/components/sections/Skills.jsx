import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Wrench,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: [
      "React.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MVC Architecture",
    ],
  },
  {
    title: "Database & Tools",
    icon: Wrench,
    skills: [
      "MongoDB",
      "Git",
      "GitHub",
      "Cloudinary",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="section-header">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Skills
          </p>

          <h2 className="section-title">
            Technologies I work with.
          </h2>

          <p className="section-subtitle">
            My primary tools and technologies for building scalable, modern web
            applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SKILL_GROUPS.map(({ title, icon: Icon, skills }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-3">
                <Icon
                  size={20}
                  className="text-zinc-700"
                />

                <h3 className="text-lg font-semibold">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:bg-zinc-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;