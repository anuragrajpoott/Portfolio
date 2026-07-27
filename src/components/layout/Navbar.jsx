import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );

      let current = "";

      sections.forEach((section) => {
        if (
          section &&
          window.scrollY >= section.offsetTop - 120
        ) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="container-custom flex h-18 items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-semibold tracking-tight"
        >
          AR
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-lg font-medium transition-colors ${
                activeSection === link.href
                  ? "text-zinc-950"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-zinc-900 transition-all duration-300 ${
                  activeSection === link.href
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 transition-colors hover:bg-zinc-100 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-zinc-200 bg-white md:hidden"
          >
            <div className="container-custom flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "text-zinc-950"
                      : "text-zinc-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;