import Section from "../components/Section";
import { PUBLICATIONS } from "../data";

export const metadata = { title: "Publications — Kush Vyas" };

export default function PublicationsPage() {
  return (
    <Section label="Publications">
      <ol className="flex flex-col gap-6">
        {PUBLICATIONS.map((pub) => (
          <li key={pub.title} className="grid grid-cols-[22px_1fr] gap-3">
            <span className="text-sm text-blue-500">↳</span>
            <div>
              <div className="text-[15px] font-medium leading-6">
                {pub.href ? (
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black underline decoration-blue-200 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="text-black">{pub.title}</span>
                )}
              </div>
              {(pub.venue || pub.year) && (
                <div className="mt-1 text-xs text-black/55">
                  {pub.venue}
                  {pub.venue && pub.year ? " · " : ""}
                  {pub.year}
                  {pub.href && (
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 text-blue-600 hover:underline"
                    >
                      Read on ResearchGate →
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
