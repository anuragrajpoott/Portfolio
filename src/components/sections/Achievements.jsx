import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
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
    description: "DSA Problems Solved",
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

const highlights = [
  "Problem Solving",
  "Hackathons",
  "Leadership",
  "Sports",
];

function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Beyond"
            highlight="Coding"
          />
        </div>

        {/* TOP STRIP */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {highlights.map((item) => (
            <span
              key={item}
              className="
                px-5 py-2
                rounded-full
                border border-slate-800
                bg-slate-900/40
                text-slate-300
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* ACHIEVEMENTS */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  flex gap-5
                  border border-slate-800
                  rounded-3xl
                  p-6
                  bg-slate-900/30
                  hover:border-cyan-500/30
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    h-14 w-14
                    rounded-2xl
                    border border-cyan-500/20
                    bg-slate-900
                    flex items-center justify-center
                    text-cyan-400
                    shrink-0
                  "
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;