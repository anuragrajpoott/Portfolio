import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const stats = [
  "500+ DSA Problems",
  "SIH Finalist",
  "SDE Intern",
  "10+ Projects",
];

function Hero() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 uppercase tracking-[0.2em] font-medium mb-5">
              Full Stack Software Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Anurag
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="glass px-4 py-2 rounded-full text-sm">
                MERN Stack Developer
              </span>

              <span className="glass px-4 py-2 rounded-full text-sm">
                Problem Solver
              </span>

              <span className="glass px-4 py-2 rounded-full text-sm">
                Software Engineer
              </span>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mt-8 max-w-xl">
              Software Developer passionate about building scalable
              full-stack applications using React.js, Node.js,
              Express.js, and MongoDB. Solved 500+ DSA problems and
              enjoy turning ideas into production-ready products.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="
                  px-7 py-3
                  rounded-xl
                  bg-linear-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  glass
                  px-7 py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://github.com/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/in/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="https://leetcode.com/u/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition"
              >
                <SiLeetcode size={28} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mt-10">
              {stats.map((item) => (
                <div
                  key={item}
                  className="
                    glass
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  blur-3xl
                  bg-linear-to-r
                  from-cyan-500/30
                  via-blue-500/30
                  to-purple-500/30
                  rounded-full
                "
              />

              {/* Image Container */}
              <div
                className="
                  relative
                  w-72
                  h-72
                  md:w-96
                  md:h-96
                  rounded-full
                  p-1
                  bg-linear-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    rounded-full
                    bg-slate-900
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaLaptopCode
                    className="text-slate-500"
                    size={110}
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="
                  hidden md:flex
                  items-center gap-2
                  absolute
                  -left-8
                  top-16
                  glass
                  px-4 py-3
                  rounded-xl
                "
              >
                <FaCode />
                <span className="text-sm">React Developer</span>
              </div>

              <div
                className="
                  hidden md:flex
                  items-center gap-2
                  absolute
                  -right-8
                  bottom-16
                  glass
                  px-4 py-3
                  rounded-xl
                "
              >
                <SiLeetcode />
                <span className="text-sm">500+ Problems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;