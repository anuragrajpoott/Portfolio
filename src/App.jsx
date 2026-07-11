import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Impact from "./components/sections/Impact";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Impact />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;