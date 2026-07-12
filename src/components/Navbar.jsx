import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import resumePdf from "../assets/Anurag_Dangi_SDE_Resume.pdf";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Impact", href: "#impact" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Anurag Dangi Logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-50"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-sm text-zinc-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full border border-zinc-200 px-4 py-3 text-center text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;