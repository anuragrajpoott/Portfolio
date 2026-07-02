function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-custom py-8 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Anurag Dangi. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;