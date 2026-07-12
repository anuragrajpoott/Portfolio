import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="section-padding"
    >
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              About
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-zinc-600">
                I'm Anurag Dangi, a software developer pursuing
                Electronics Engineering at IET DAVV, Indore.
                My primary focus is building modern full-stack
                applications and AI-powered products that solve
                real-world problems.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                I've solved 500+ DSA problems, worked as a
                Full Stack SDE Intern at Ideal Minds, and
                reached the finals of Smart India Hackathon.
                I enjoy transforming ideas into polished,
                production-ready software with a strong focus
                on user experience and clean engineering.
              </p>

              <div className="mt-12 border-t border-zinc-200 pt-8">
                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-2xl font-semibold">
                      500+
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      DSA Problems
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold">
                      SIH
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Finalist
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold">
                      10+
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Projects Built
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;