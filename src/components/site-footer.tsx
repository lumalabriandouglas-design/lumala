import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-12">
        <div>
          <p className="font-serif text-xl tracking-tight">{SITE.fullName}</p>
          <p className="mt-2 text-sm text-muted">
            {SITE.city} · {SITE.role}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link to="/" className="inline-flex min-h-11 items-center hover:text-fg">
            Work
          </Link>
          <Link to="/about" className="inline-flex min-h-11 items-center hover:text-fg">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
