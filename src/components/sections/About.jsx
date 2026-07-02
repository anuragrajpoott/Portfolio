import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "DSA Problems" },
  { value: "2+", label: "Major Projects" },
  { value: "500+", label: "GitHub Commits" },
  { value: "SIH", label: "Finalist" },
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 leading-8 text-lg">
              I'm a Full Stack Developer from Indore specializing in
              building scalable, secure, and user-focused web
              applications using the MERN stack.

              <br />
              <br />

              Recently graduated from IET DAVV and completed a Full
              Stack Software Development Internship at Ideal Minds.

              <br />
              <br />

              I enjoy transforming ideas into production-ready
              applications with clean architecture, authentication,
              cloud deployment, and exceptional user experiences.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  glass
                  rounded-2xl
                  p-6
                  hover:-translate-y-2
                  hover:border-blue-500/30
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-4xl font-extrabold gradient-text">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-3">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;