import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CONTACTS = [
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

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">

           <div className="section-header">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Contact
          </p>

          <h2 className="section-title">
            Let's Connect.
          </h2>

        </div>


        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-12"
        >
          <div className="section-header mb-0">
            <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600">
              Available for Full-Time Opportunities
            </span>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Contact
            </p>

            <h2 className="section-title">
              Let's build something together.
            </h2>

            <p className="section-subtitle">
              I'm actively looking for Software Development opportunities. If
              you'd like to discuss a role, collaborate on a project, or simply
              connect, I'd love to hear from you.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:anuragrajpoot2468@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              <Mail size={18} />
              Send Email
            </a>

            {CONTACTS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
              >
                <Icon size={18} />
                {name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;