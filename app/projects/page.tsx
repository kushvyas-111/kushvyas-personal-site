import Section from "../components/Section";
import { PROJECTS } from "../data";

export const metadata = { title: "Projects — Kush Vyas" };

export default function ProjectsPage() {
  return (
    <Section label="Projects">
      <ul className="flex flex-col divide-y divide-blue-100">
        {PROJECTS.map((p) => (
          <li key={p.title} className="py-5 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <h3 className="text-base font-medium">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 hover:text-blue-700"
                  >
                    {p.title}
                  </a>
                ) : (
                  <span className="text-black">{p.title}</span>
                )}
              </h3>
              <span className="shrink-0 text-xs text-blue-700">
                {p.tags.join(" · ")}
              </span>
            </div>
            <p className="mt-1 text-[15px] leading-7 text-black/80">{p.blurb}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
