import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profilePic from "../../assets/profile.png";

const SOCIALS = [
  {
    name: "Email",
    href: "mailto:anuragrajpoot2468@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/anuragrajpoott",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anuragrajpoott",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/anuragrajpoott",
    icon: SiLeetcode,
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pt-20"
    >
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              ● Available for Full-Time Software Engineer Roles
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Software Developer • IET DAVV • 2026 Graduate
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-zinc-950 md:text-6xl lg:text-7xl">
              Hi, I'm Anurag.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              I build secure, scalable, and production-ready full-stack web
              applications using the MERN stack while continuously improving my
              problem-solving skills through Data Structures & Algorithms.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {SOCIALS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  aria-label={name}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm"
                >
                  <Icon size={18} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-br from-zinc-100 via-white to-zinc-200 blur-2xl" />

              <img
                src={profilePic}
                alt="Anurag Dangi"
                loading="eager"
                className="h-80 w-80 rounded-4xl border border-zinc-200 object-cover shadow-lg md:h-96 md:w-96"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;