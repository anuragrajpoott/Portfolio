import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";
import resumePdf from "../assets/Anurag_Dangi_SDE_Resume.pdf";

const NAV_LINKS = [
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
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-white/95"
      }`}
    >
      <div className="container-custom flex h-18 items-center justify-between">
        <a
          href="#home"
          aria-label="Go to home"
          className="flex items-center"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Anurag Dangi Logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 transition-colors hover:bg-zinc-100 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="container-custom flex flex-col py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {link.name}
              </a>
            ))}

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 rounded-full border border-zinc-200 px-4 py-3 text-center text-sm font-medium transition-all hover:border-zinc-300 hover:bg-zinc-50"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;