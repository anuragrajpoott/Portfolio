import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased">
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