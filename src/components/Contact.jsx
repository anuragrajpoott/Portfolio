import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import resumePdf from "../assets/Anurag_Dangi_SDE_Resume.pdf";

const SOCIALS = [
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
];

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm lg:p-12"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Contact
            </p>

            <h2 className="section-title">
              Let's build something meaningful.
            </h2>

            <p className="section-subtitle">
              I'm currently seeking Software Engineer and Full Stack Developer
              opportunities. If you're building impactful products and think I'd
              be a good fit, I'd love to connect.
            </p>

            <div className="mt-10 flex items-center gap-4">
              {SOCIALS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="rounded-full border border-zinc-200 p-3 text-zinc-600 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:text-zinc-950"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;