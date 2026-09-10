import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_LABEL, type Project } from "@/data/work";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  featured = false,
  className,
}: {
  project: Project;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-surface shadow-card",
        "transition-shadow duration-150 ease-out hover:shadow-card-hover",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-raised",
          featured ? "aspect-photo sm:aspect-wide" : "aspect-photo",
        )}
      >
        <img
          src={project.cover}
          alt={project.coverAlt}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
          <span className="eyebrow rounded-md bg-bg/80 px-2 py-1 text-accent">
            {CATEGORY_LABEL[project.category]}
          </span>
          <span className="flex size-11 items-center justify-center rounded-full bg-bg/80 text-fg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", featured && "sm:p-8")}>
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">
            {project.index} / {project.year}
          </p>
          <p className="eyebrow">{project.location}</p>
        </div>
        <h3
          className={cn(
            "mt-3 font-serif tracking-tight text-fg",
            featured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {project.summary}
        </p>
        <p className="mt-5 text-sm text-accent">View the house</p>
      </div>
    </Link>
  );
}
