import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    value: "500+",
    label: "DSA Problems Solved",
  },
  {
    value: "Finalist",
    label: "Smart India Hackathon 2024",
  },
  {
    value: "Captain",
    label: "State Basketball Team",
  },
  {
    value: "Head of Events",
    label: "Pratyaksh Drama Society",
  },
];

function Impact() {
  return (
    <section id="impact" className="section-padding">
      <div className="container-custom">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Highlights
          </p>

          <h2 className="section-title">Impact Beyond Code</h2>

          <p className="section-subtitle">
            Technical achievements, competitive milestones, and leadership
            experiences that reflect continuous learning, collaboration, and
            problem-solving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.article
              key={achievement.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
            >
              <p className="text-4xl font-semibold tracking-tight text-zinc-950">
                {achievement.value}
              </p>

              <p className="mt-3 leading-7 text-zinc-600">
                {achievement.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;