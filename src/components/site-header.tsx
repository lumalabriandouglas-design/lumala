import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/" || pathname.startsWith("/work")
                : pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "text-sm transition-colors duration-150",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-fg sm:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-line px-5 py-4 sm:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex min-h-11 items-center text-base text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
