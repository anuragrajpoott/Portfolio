import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="container-custom flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="font-bold text-xl md:text-2xl tracking-wide"
        >
          <span className="gradient-text">Anurag</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative
                text-slate-300
                hover:text-white
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="
              px-5
              py-2.5
              rounded-xl
              bg-linear-to-r
              from-cyan-500
              via-blue-500
              to-purple-500
              text-white
              font-medium
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-slate-300
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="
                px-5
                py-2.5
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                via-blue-500
                to-purple-500
                text-white
                font-medium
              "
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;