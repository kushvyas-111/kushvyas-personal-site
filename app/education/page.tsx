import Section from "../components/Section";
import { EDUCATION } from "../data";

export const metadata = { title: "Education — Kush Vyas" };

export default function EducationPage() {
  return (
    <Section label="Education">
      <ol className="flex flex-col gap-6">
        {EDUCATION.map((ed) => (
          <li
            key={ed.degree}
            className="grid grid-cols-1 gap-1 md:grid-cols-[150px_1fr] md:gap-6"
          >
            <div className="text-xs text-blue-700">{ed.period}</div>
            <div>
              <div className="text-base font-medium text-black">{ed.degree}</div>
              <div className="text-sm text-black/60">{ed.school}</div>
              <div className="text-sm text-black/60">{ed.detail}</div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
