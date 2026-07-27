import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Trophy,
} from "lucide-react";

const ACHIEVEMENTS = [
  "Solved 500+ LeetCode problems",
  "Smart India Hackathon (SIH) Finalist",
  "Head of Events, Pratyaksh Drama Society",
  "State Basketball Team Captain",
];

const QUICK_FACTS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, India",
  },
  {
    icon: Briefcase,
    label: "Specialization",
    value: "MERN • Backend • DSA",
  },
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="section-header">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            About
          </p>

          <h2 className="section-title">
            Education, background & achievements.
          </h2>

          <p className="section-subtitle">
            A quick overview of my academic journey, technical interests, and
            accomplishments.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-lg leading-8 text-zinc-600">
              I'm{" "}
              <span className="font-semibold text-zinc-950">
                Anurag Dangi
              </span>
              , a Software Developer pursuing a Bachelor's degree in Electronics
              Engineering at IET DAVV, Indore. I enjoy building scalable,
              secure, and production-ready full-stack applications using the
              MERN stack, with a strong interest in backend engineering, clean
              architecture, and writing maintainable code.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Alongside development, I regularly practice Data Structures &
              Algorithms to strengthen my problem-solving skills and continuously
              improve as a software engineer.
            </p>

            <div className="mt-8 grid gap-5 border-t border-zinc-200 pt-5 sm:grid-cols-3">
              {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Icon size={16} />
                    <span className="text-sm">{label}</span>
                  </div>

                  <p className="mt-2 font-medium text-zinc-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6"
          >
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap size={18} />
                <h3 className="font-semibold">Education</h3>
              </div>

              <p className="font-medium text-zinc-900">
                Institute of Engineering & Technology, DAVV
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                Bachelor of Engineering (Electronics)
              </p>

              <p className="mt-1 text-sm text-zinc-600">
                2022 – 2026
              </p>

              <p className="mt-1 text-sm font-medium text-zinc-900">
                CGPA: 7.5
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <Trophy size={18} />
                <h3 className="font-semibold">Achievements</h3>
              </div>

              <ul className="space-y-4">
                {ACHIEVEMENTS.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-sm text-zinc-600"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;