import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { WORK } from "@/data/work";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [{ title: `About — ${SITE.name}` }],
  }),
});

const PRACTICE = [
  {
    title: "Ateliers",
    copy: "Maison sites and marketplaces. A quiet public floor, a working studio, photography that belongs to the house.",
  },
  {
    title: "Desks",
    copy: "Estimates, invoices, stock, and the paper a shop already keeps — priced and stored in the currency on the street.",
  },
  {
    title: "Culture",
    copy: "Tools a congregation or a community can hold. Luganda beside English. Audio that does not wait on a store.",
  },
] as const;

function About() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <p className="eyebrow enter enter-1">{SITE.city}</p>
        <h1 className="enter enter-2 mt-6 max-w-4xl font-serif text-display leading-none text-fg">
          A floor between the atelier and the desk.
        </h1>
        <p className="enter enter-3 mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {SITE.fullName} designs and builds digital houses from Kampala. The
          brief is usually the same: a maker, a shop, or a congregation already
          has a floor. The site should feel like that floor — not like a
          template from somewhere else.
        </p>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-7xl">
          <img
            src="/work/kampala.jpg"
            alt="Kampala at dusk from a rooftop"
            className="aspect-hero w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Practice</p>
            <h2 className="mt-3 font-serif text-title text-fg">
              What the season holds.
            </h2>
          </div>
          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            {PRACTICE.map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="font-serif text-section text-fg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow">This season</p>
          <h2 className="mt-3 font-serif text-title text-fg">
            {WORK.length} houses on the floor.
          </h2>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {WORK.map((project) => (
              <li key={project.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="flex min-h-14 items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-serif text-xl text-fg sm:text-2xl">
                    {project.title}
                  </span>
                  <span className="eyebrow shrink-0">{project.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow">Write</p>
          <h2 className="mt-3 max-w-xl font-serif text-title text-fg">
            Available for ateliers, desks, and houses.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            If you run a house in Kampala — or need one built — start with the
            selected work.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-95"
          >
            Selected work
          </Link>
        </div>
      </section>
    </main>
  );
}
