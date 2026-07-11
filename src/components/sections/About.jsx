import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import {
  FaGraduationCap,
  FaTrophy,
  FaBook,
  FaSchool,
} from "react-icons/fa";

const education = [
  {
    year: "2022 - 2026",
    title: "BE Electronics",
    institute: "IET DAVV, Indore",
    detail: "CGPA: 7.5",
    icon: <FaGraduationCap />,
  },
  {
    year: "2021",
    title: "JEE Main",
    institute: "National Level Examination",
    detail: "91 Percentile",
    icon: <FaTrophy />,
  },
  {
    year: "2021",
    title: "Class XII",
    institute: "Deepak Memorial Academy, Sagar",
    detail: "85%",
    icon: <FaBook />,
  },
  {
    year: "2019",
    title: "Class X",
    institute: "Deepak Memorial Academy, Sagar",
    detail: "95%",
    icon: <FaSchool />,
  },
];

const stats = [
  {
    value: "500+",
    label: "DSA Problems",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "SIH",
    label: "Finalist",
  },
  {
    value: "500+",
    label: "GitHub Contributions",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "C++",
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle title="My" highlight="Journey" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-linear-to-b from-cyan-400 via-blue-500 to-purple-500" />

              <div className="space-y-12">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="relative flex gap-5"
                  >
                    <div
                      className="
                        relative z-10
                        h-12 w-12
                        rounded-full
                        border border-cyan-500/30
                        bg-slate-900
                        flex items-center justify-center
                        text-cyan-400
                        shadow-[0_0_25px_rgba(34,211,238,0.2)]
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-cyan-400">
                        {item.year}
                      </p>

                      <h3 className="text-xl font-bold text-white mt-1">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 mt-1">
                        {item.institute}
                      </p>

                      <p className="text-sm text-slate-500 mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-xl">
              <p className="text-lg text-slate-300 leading-9">
                I'm a Full Stack Developer focused on building scalable
                web applications with React, Node.js, Express, and
                MongoDB.
              </p>

              <p className="text-lg text-slate-300 leading-9 mt-6">
                Over the years, I've strengthened my problem-solving
                skills through 500+ DSA challenges, built real-world
                projects, contributed consistently on GitHub, and gained
                industry exposure through my SDE internship experience.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-12">
                {stats.map((item) => (
                  <div key={item.label}>
                    <h3 className="text-5xl font-bold gradient-text">
                      {item.value}
                    </h3>

                    <p className="text-slate-400 mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* TECH STACK */}
              <div className="mt-12">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4 py-2
                        rounded-full
                        border border-slate-800
                        bg-slate-900/40
                        text-sm text-slate-300
                        hover:border-cyan-500/40
                        hover:text-white
                        transition-all duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;