function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container-custom flex flex-col justify-between gap-4 py-8 text-sm text-zinc-500 md:flex-row md:items-center">
        <p>
          Anurag Dangi · Software Engineer
        </p>

        <p>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;