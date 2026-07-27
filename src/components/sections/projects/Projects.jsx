import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="section-header">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Projects
          </p>

          <h2 className="section-title">
            Selected Work
          </h2>

          <p className="section-subtitle">
            A collection of full-stack applications showcasing my experience
            building scalable, production-ready software with modern web
            technologies.
          </p>
        </div>

        <FeaturedProjects />

        <OtherProjects />
      </div>
    </section>
  );
}

export default Projects;