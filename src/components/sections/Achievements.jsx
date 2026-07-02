import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCode,
  FaBasketballBall,
  FaUsers,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaCode,
    title: "500+",
    description: "LeetCode Problems Solved",
  },
  {
    icon: FaTrophy,
    title: "SIH Finalist",
    description: "Smart India Hackathon",
  },
  {
    icon: FaBasketballBall,
    title: "State Captain",
    description: "Basketball Team",
  },
  {
    icon: FaUsers,
    title: "Event Head",
    description: "Pratyaksh Drama Society",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          My <span className="gradient-text">Achievements</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  glass
                  rounded-2xl
                  p-8
                  hover:-translate-y-2
                  hover:border-cyan-500/30
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={32}
                  className="text-cyan-400"
                />

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;