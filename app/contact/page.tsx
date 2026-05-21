import Section from "../components/Section";
import { PROFILE } from "../data";

export const metadata = { title: "Contact — Kush Vyas" };

export default function ContactPage() {
  const items = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "GitHub", value: "github.com/kushvyas-111", href: PROFILE.github },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/kush-vyas-090396279",
      href: PROFILE.linkedin,
    },
  ];

  return (
    <Section label="Contact">
      <p className="text-[15px] leading-7 text-black/90">
        I’m open to internships, research, and collaborations. The fastest way to
        reach me is email — or connect on any of these:
      </p>
      <ul className="mt-6 flex flex-col divide-y divide-blue-100 border-y border-blue-100">
        {items.map((i) => (
          <li key={i.label} className="flex items-baseline justify-between py-3">
            <span className="text-xs uppercase tracking-[0.16em] text-black/50">
              {i.label}
            </span>
            <a
              href={i.href}
              target={i.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-[15px] text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600"
            >
              {i.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
