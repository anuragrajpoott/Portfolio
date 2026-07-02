import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

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
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            glass
            rounded-3xl
            p-10 md:p-14
            text-center
          "
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto">
            I'm actively seeking Software Engineer and Full Stack
            Developer opportunities. If you have an exciting project,
            opportunity, or just want to connect, feel free to reach out.
          </p>

          <a
            href="mailto:anuragrajpoot2468@gmail.com"
            className="
              inline-block
              mt-8
              px-8 py-4
              rounded-xl
              bg-linear-to-r
              from-blue-600
              to-purple-600
              hover:scale-105
              transition-all
              duration-300
              font-semibold
            "
          >
            Say Hello 👋
          </a>

          <div className="flex justify-center gap-5 mt-10">
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
                    glass
                    p-4
                    rounded-xl
                    text-slate-300
                    hover:text-white
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <Icon size={24} />
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