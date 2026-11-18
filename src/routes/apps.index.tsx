import { createFileRoute } from "@tanstack/react-router";
import { AppCard } from "@/components/app-download";
import { APPS } from "@/data/apps";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/apps/")({
  component: AppsIndex,
  head: () => ({
    meta: [
      { title: `Apps — ${SITE.name}` },
      {
        name: "description",
        content:
          "Download Anglican Hymn Sync and Kwaya: Anglican Choirs for Android, from Lumala Brian Douglas.",
      },
    ],
  }),
});

function AppsIndex() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <p className="eyebrow enter enter-1">{SITE.city} · Android</p>
        <h1 className="enter enter-2 mt-6 font-serif text-display leading-none text-fg">Apps</h1>
        <p className="enter enter-3 mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Two Android apps from the floor. Download the APK here, or use Google Play when a listing
          is open.
        </p>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          {APPS.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>
    </main>
  );
}
