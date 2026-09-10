import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SITE } from "@/data/site";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  WORK,
  type Category,
} from "@/data/work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const APPROACH = [
  {
    index: "01",
    title: "The house, not the shopfront",
    copy: "Ateliers need a floor that can stay quiet on the street and busy in the studio. Roles, showrooms, and a private door.",
  },
  {
    index: "02",
    title: "Paper that protects time",
    copy: "Independents get asked how much on WhatsApp. The desk answers in UGX, on letterhead, before the hour is given away.",
  },
  {
    index: "03",
    title: "The language people actually use",
    copy: "Luganda and English in the same hymnal. Shop-floor stock. Kampala, not a template city.",
  },
] as const;

function Home() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const projects =
    filter === "all" ? WORK : WORK.filter((p) => p.category === filter);
  const featured = filter === "all" ? projects[0] : undefined;
  const rest = featured ? projects.slice(1) : projects;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <p className="eyebrow enter enter-1">
          {SITE.city} · {SITE.role}
        </p>
        <h1 className="enter enter-2 mt-6 font-serif text-display leading-none text-fg">
          {SITE.fullName}
        </h1>
        <p className="enter enter-3 mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {SITE.tagline} Selected work from the last season — maisons, desks,
          and a hymnal.
        </p>
        <div className="enter enter-4 mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-95"
          >
            Selected work
            <ArrowDown className="size-4" strokeWidth={1.5} />
          </a>
          <Link
            to="/about"
            className="inline-flex min-h-11 items-center rounded-full px-5 text-sm text-muted shadow-card transition-colors duration-150 hover:text-fg hover:shadow-card-hover"
          >
            About the floor
          </Link>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-7xl">
          <img
            src="/work/kampala.jpg"
            alt="Kampala rooftops at dusk"
            className="aspect-hero w-full object-cover"
          />
        </div>
      </section>

      <section id="work" className="scroll-mt-16 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Index</p>
            <h2 className="mt-3 font-serif text-title text-fg">Selected work</h2>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter work"
          >
            <FilterChip
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterChip>
            {CATEGORIES.map((cat) => (
              <FilterChip
                key={cat}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {CATEGORY_LABEL[cat]}
              </FilterChip>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
          {featured ? (
            <ProjectCard
              project={featured}
              featured
              className="md:col-span-12 lg:col-span-7"
            />
          ) : null}
          {rest.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className={cn(
                featured && i === 0
                  ? "md:col-span-12 lg:col-span-5"
                  : "md:col-span-6",
              )}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow">Approach</p>
          <h2 className="mt-3 max-w-xl font-serif text-title text-fg">
            Built for the floor you already have.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {APPROACH.map((item) => (
              <article key={item.index} className="border-t border-line pt-6">
                <p className="eyebrow">{item.index}</p>
                <h3 className="mt-4 font-serif text-section text-fg">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">The floor</p>
            <h2 className="mt-3 font-serif text-title text-fg">{SITE.fullName}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Designer and builder in Kampala. The work sits between the atelier
              and the desk — showrooms for makers, estimate paper for
              independents, a hymnal a congregation can actually search.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/about"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-95"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full px-4 text-sm transition-[color,background-color,box-shadow] duration-150",
        active
          ? "bg-accent font-medium text-bg"
          : "text-muted shadow-card hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
