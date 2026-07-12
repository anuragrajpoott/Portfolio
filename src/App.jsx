import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Impact from "./components/Impact";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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