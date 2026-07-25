function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container-custom flex flex-col items-center justify-between gap-4 py-8 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Anurag Dangi. All rights reserved.
        </p>

        <p>
          Designed & Built with React, Tailwind CSS, and ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;