function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">
              Anurag Dangi
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Software Development Engineer • Full Stack Developer
            </p>
          </div>

          <p className="text-sm text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} Anurag Dangi. Crafted with
            attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;