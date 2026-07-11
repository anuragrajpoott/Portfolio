import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t border-zinc-200 pt-20"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Let's build something meaningful.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              I'm currently looking for Software Engineer and Full Stack
              Developer opportunities. If you think I'd be a good fit for your
              team, I'd love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:anuragrajpoot2468@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <Mail size={16} />
                Get in Touch
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
              >
                Resume
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 transition hover:text-zinc-950"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/anuragrajpoott"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 transition hover:text-zinc-950"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;