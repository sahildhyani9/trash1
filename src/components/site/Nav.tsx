import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/tanpura/logo.png";

const links = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/residency", label: "Residency" },
  { to: "/community", label: "Baithaks" },
  { to: "/resources", label: "Resources" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Tanpura House home"
        >
          <img src={logo} alt="Tanpura House" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-foreground/80 transition-colors hover:text-indigo-deep [&.active]:font-medium [&.active]:text-indigo-deep"
              activeOptions={{ exact: false }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full bg-indigo-deep px-5 py-2.5 text-sm font-medium text-ivory shadow-sm transition hover:bg-indigo-deep/90"
          >
            Book a Trial Class
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-indigo-deep lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-base text-foreground/90 [&.active]:font-medium [&.active]:text-indigo-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
