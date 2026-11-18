import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppDownloadActions } from "@/components/app-download";
import type { PortfolioApp } from "@/data/apps";

export function AppDetailPage({ app }: { app: PortfolioApp }) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
        <Link
          to="/apps"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
        >
          <ArrowLeft className="size-4" strokeWidth={1.5} />
          All apps
        </Link>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <img
            src={app.icon}
            alt={app.iconAlt}
            width={120}
            height={120}
            className="size-[120px] shrink-0 rounded-3xl object-cover"
          />
          <div className="min-w-0">
            <p className="eyebrow">{app.kicker} · Android</p>
            <h1 className="mt-4 font-serif text-display leading-none text-fg">{app.name}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {app.summary}
            </p>
            <p className="mt-4 text-sm text-muted">
              Version {app.versionName} ({app.versionCode})
            </p>
            <div className="mt-8">
              <AppDownloadActions app={app} autoStart />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
