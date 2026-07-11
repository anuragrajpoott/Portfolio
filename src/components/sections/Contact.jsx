import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const socialLinks = [
  {
    icon: FaEnvelope,
    href: "mailto:anuragrajpoot2468@gmail.com",
    label: "Email",
  },
  {
    icon: FaLinkedin,
    href: "YOUR_LINKEDIN_URL",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "YOUR_GITHUB_URL",
    label: "GitHub",
  },
];

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionTitle
            title="Open To"
            highlight="Opportunities"
          />

          <p className="text-lg text-slate-400 leading-8 max-w-2xl mx-auto mt-8">
            I'm currently seeking Software Development
            Engineer and Full Stack Developer opportunities
            where I can contribute, learn from experienced
            teams, and build impactful products.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:anuragrajpoot2468@gmail.com"
              className="
                px-8 py-4
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                hover:-translate-y-1
                transition-all
              "
            >
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-8 py-4
                rounded-xl
                border border-slate-800
                bg-slate-900/40
                text-slate-300
                hover:text-white
                hover:border-cyan-500/30
                transition-all
              "
            >
              View Resume
            </a>
          </div>

          <div className="flex justify-center gap-5 mt-12">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="
                    h-12 w-12
                    rounded-xl
                    border border-slate-800
                    bg-slate-900/40
                    flex items-center justify-center
                    text-slate-400
                    hover:text-white
                    hover:border-cyan-500/30
                    transition-all
                  "
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;