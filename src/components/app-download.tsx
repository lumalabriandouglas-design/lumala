import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Download } from "lucide-react";
import { type PortfolioApp, isAndroidUserAgent } from "@/data/apps";

export function AppDownloadActions({
  app,
  autoStart = false,
}: {
  app: PortfolioApp;
  autoStart?: boolean;
}) {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(isAndroidUserAgent(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!autoStart) return;
    const id = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = app.apkPath;
      link.download = app.apkFileName;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, 500);
    return () => window.clearTimeout(id);
  }, [autoStart, app.apkPath, app.apkFileName]);

  const showPlay = isAndroid && app.playEnabled && app.playUrl;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        {showPlay ? (
          <a
            href={app.playUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-95"
          >
            Get it on Google Play
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </a>
        ) : null}
        <a
          href={app.apkPath}
          download={app.apkFileName}
          className={
            showPlay
              ? "inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm text-muted shadow-card transition-colors duration-150 hover:text-fg hover:shadow-card-hover"
              : "inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-95"
          }
        >
          Download APK
          <Download className="size-4" strokeWidth={1.5} />
        </a>
        {app.webUrl ? (
          <a
            href={app.webUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm text-muted shadow-card transition-colors duration-150 hover:text-fg hover:shadow-card-hover"
          >
            Open on the web
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </a>
        ) : null}
      </div>
      {showPlay ? (
        <a
          href={app.playUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          Already installed? Update on Play Store
        </a>
      ) : null}
      {isAndroid && !app.playEnabled ? (
        <p className="text-sm text-faint">Google Play coming soon.</p>
      ) : null}
    </div>
  );
}

export function AppCard({ app }: { app: PortfolioApp }) {
  return (
    <article className="flex flex-col rounded-xl bg-surface p-5 shadow-card sm:p-8">
      <Link
        to={app.slug === "kwaya" ? "/apps/kwaya" : "/apps/hymnsync"}
        className="group flex items-start gap-4"
      >
        <img
          src={app.icon}
          alt={app.iconAlt}
          width={72}
          height={72}
          className="size-[72px] shrink-0 rounded-2xl object-cover"
        />
        <div className="min-w-0">
          <p className="eyebrow">{app.kicker}</p>
          <h3 className="mt-2 font-serif text-section text-fg group-hover:text-accent">
            {app.name}
          </h3>
          <p className="mt-2 text-sm text-muted">
            Version {app.versionName} ({app.versionCode})
          </p>
        </div>
      </Link>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{app.summary}</p>
      <div className="mt-6">
        <AppDownloadActions app={app} />
      </div>
    </article>
  );
}
