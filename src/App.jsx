
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectArchive from "./components/sections/projectArchieve";

function App() {
  return (
    <>
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="
          fixed
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          fixed
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]
        "
      />

      {/* Main Content */}
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="projects">
            <Projects />
            <ProjectArchive/>
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;

