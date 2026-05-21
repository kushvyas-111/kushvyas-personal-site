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
              <div className="text-[15px] font-medium leading-6 text-black">
                {pub.title}
              </div>
              {(pub.venue || pub.year) && (
                <div className="mt-1 text-xs text-black/55">
                  {pub.venue}
                  {pub.venue && pub.year ? " · " : ""}
                  {pub.year}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
