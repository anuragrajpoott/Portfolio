import { motion } from "framer-motion";

function SectionTitle({ title, highlight }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-14"
    >
      {title}{" "}
      <span className="gradient-text">
        {highlight}
      </span>
    </motion.h2>
  );
}

export default SectionTitle;