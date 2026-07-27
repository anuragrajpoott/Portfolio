import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container-custom flex flex-col items-center justify-between gap-6 py-8 text-center text-sm text-zinc-500 md:flex-row md:text-left">
        <div>
          <p>
            ©{" "}
            <time dateTime={String(new Date().getFullYear())}>
              {new Date().getFullYear()}
            </time>{" "}
            Anurag Dangi. All rights reserved.
          </p>

          <p className="mt-1">
            Designed & Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
        >
          Back to Top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;