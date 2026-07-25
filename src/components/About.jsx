import { motion } from "framer-motion";


function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              About
            </p>

            <h2 className="section-title">Engineering Mindset</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-zinc-600">
                I'm <span className="font-medium text-zinc-900">Anurag Dangi</span>,
                a Software Engineer and Electronics Engineering graduate from
                IET DAVV, Indore. I enjoy building secure, scalable, and
                production-ready web applications with a strong focus on backend
                development, clean architecture, and intuitive user experiences.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                My approach combines strong problem-solving with practical
                software engineering. From designing REST APIs and authentication
                systems to developing AI-powered applications, I aim to write
                maintainable code that delivers real business value rather than
                simply implementing features.
              </p>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;