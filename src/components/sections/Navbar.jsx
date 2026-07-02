import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="container-custom flex items-center justify-between py-4 px-6">
        <a
          href="#home"
          className="text-2xl font-extrabold gradient-text"
        >
          AD
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors duration-300"
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
              glass
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
          className="md:hidden text-3xl"
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
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 rounded-xl glass"
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