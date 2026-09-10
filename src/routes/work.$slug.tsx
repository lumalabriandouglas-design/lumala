import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import {
  adjacentWork,
  CATEGORY_LABEL,
  getWork,
} from "@/data/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getWork(params.slug);
    if (!project) throw notFound();
    return { project, ...adjacentWork(params.slug) };
  },
  component: WorkPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.title} — ${SITE.name}`
          : SITE.name,
      },
    ],
  }),
});

function WorkPage() {
  const { project, prev, next } = Route.useLoaderData();

  return (
    <main>
      <article>
        <header className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
          >
            <ArrowLeft className="size-4" strokeWidth={1.5} />
            Selected work
          </Link>
          <p className="eyebrow mt-8">
            {project.index} · {CATEGORY_LABEL[project.category]} · {project.year}
          </p>
          <h1 className="mt-4 font-serif text-display leading-none text-fg">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.summary}
          </p>
          {project.live ? (
            <div className="mt-8">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-95"
              >
                Open
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            </div>
          ) : null}
        </header>

        <div className="border-y border-line">
          <div className="mx-auto max-w-7xl">
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="aspect-wide w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {project.story.map((para) => (
              <p key={para} className="max-w-xl text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-xl bg-surface p-6 shadow-card sm:p-8">
              <p className="eyebrow">What it does</p>
              <ul className="mt-5 space-y-3">
                {project.features.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-3 text-sm leading-relaxed text-fg first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <nav className="border-t border-line" aria-label="More work">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
          {prev ? (
            <Link
              to="/work/$slug"
              params={{ slug: prev.slug }}
              className="group border-b border-line px-5 py-10 sm:border-b-0 sm:border-r sm:px-8"
            >
              <p className="eyebrow">Previous</p>
              <p className="mt-3 font-serif text-section text-fg group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {next ? (
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group px-5 py-10 text-right sm:px-8"
            >
              <p className="eyebrow">Next</p>
              <p className="mt-3 font-serif text-section text-fg group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : null}
        </div>
      </nav>
    </main>
  );
}
