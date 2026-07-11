import { motion } from "framer-motion";

const achievements = [
  {
    value: "500+",
    label: "DSA Problems Solved",
  },
  {
    value: "SIH",
    label: "Smart India Hackathon Finalist",
  },
  {
    value: "State",
    label: "Basketball Team Captain",
  },
  {
    value: "Event",
    label: "Head, Pratyaksh Drama Society",
  },
];

function Impact() {
  return (
    <section
      id="impact"
      className="section-padding"
    >
      <div className="container-custom">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Impact
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            A few highlights that reflect my technical growth,
            leadership experience, and competitive achievements.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="bg-white p-8"
            >
              <p className="text-3xl font-semibold">
                {item.value}
              </p>

              <p className="mt-3 text-zinc-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;