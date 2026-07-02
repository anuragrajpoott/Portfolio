import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-medium tracking-wider uppercase mb-6"
        >
          Full Stack Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
        >
          Hi, I'm <br />
          <span className="gradient-text">
            Anurag Dangi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          I build modern, scalable, and high-performance web applications
          using React, Node.js, Express.js, MongoDB, and modern cloud
          technologies.
        </motion.p>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map(
            (tech) => (
              <span
                key={tech}
                className="glass px-4 py-2 rounded-full text-sm text-slate-300"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="
              px-8 py-4 rounded-xl
              bg-linear-to-r from-blue-600 to-purple-600
              hover:scale-105
              transition-all duration-300
              font-semibold
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              glass
              px-8 py-4
              rounded-xl
              hover:scale-105
              transition-all duration-300
              font-semibold
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all"
          >
            <FaLinkedin size={30} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;