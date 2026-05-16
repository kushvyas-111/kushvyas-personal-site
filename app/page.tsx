import Link from "next/link";

// ──────────────────────────────────────────────────────────────────────────────
// Edit the data below to personalize your site.
// ──────────────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Kush Vyas",
  headline: "MSBA @ Boston University",
  about:
    "Hi, I’m Kush — a graduate student at Boston University focused on business analytics, data, and building useful things on the side. I like turning messy data into clear decisions and shipping projects end-to-end.",
  location: "Boston, MA",
  email: "kushvyas@bu.edu",
  github: "https://github.com/kushvyas-111",
  linkedin: "https://www.linkedin.com/in/kushvyas/", // TODO: update with your actual LinkedIn URL
};

const PROJECTS: { title: string; blurb: string; href?: string; tags: string[] }[] = [
  {
    title: "Burnit — Food Match",
    blurb:
      "A food-matching app that pairs users with restaurants based on cravings and dietary fit. Built with Next.js + Vercel.",
    href: "https://github.com/kushvyas-111/burnit-foodmatch",
    tags: ["Next.js", "TypeScript", "Vercel"],
  },
  {
    title: "Adaptive Trilemma Valuation Model (ATVM)",
    blurb:
      "A valuation model exploring trade-offs across growth, risk, and return. Includes scenario analysis and clean visualizations.",
    href: "https://github.com/kushvyas-111/Adaptive-Trilemma-Valuation-Model-ATVM-",
    tags: ["Python", "Finance", "Modeling"],
  },
  {
    title: "Boston Airbnb Analysis",
    blurb:
      "Exploratory analysis of Boston Airbnb listings — pricing patterns, neighborhood premiums, and host behavior.",
    href: "https://github.com/kushvyas-111/Boston_Airbnb_Analyis",
    tags: ["Python", "Pandas", "EDA"],
  },
];

const EXPERIENCE: { role: string; org: string; period: string; bullets: string[] }[] = [
  {
    role: "MSBA Candidate",
    org: "Boston University — Questrom School of Business",
    period: "2025 — Present",
    bullets: [
      "Coursework across analytics, machine learning, and business strategy.",
      "TODO: replace with a project, club, or research highlight.",
    ],
  },
  {
    role: "Previous Role",
    org: "Company / Organization",
    period: "20XX — 20XX",
    bullets: [
      "TODO: one-line description of what you did and the impact.",
      "TODO: a second bullet with a metric if you have one.",
    ],
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// UI
// ──────────────────────────────────────────────────────────────────────────────

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-20">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">{label}</h2>
        <a href={`#${id}`} className="text-xs text-muted hover:text-ink">
          #
        </a>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Available for internships & collaborations
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {PROFILE.name}
        </h1>
        <p className="text-muted">{PROFILE.headline} · {PROFILE.location}</p>
        <nav className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="#about" className="text-muted hover:text-ink">About</Link>
          <Link href="#projects" className="text-muted hover:text-ink">Projects</Link>
          <Link href="#experience" className="text-muted hover:text-ink">Experience</Link>
          <Link href="#contact" className="text-muted hover:text-ink">Contact</Link>
        </nav>
      </header>

      {/* About */}
      <Section id="about" label="About">
        <p className="text-[15px] leading-7 text-ink/90">{PROFILE.about}</p>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects">
        <ul className="flex flex-col divide-y divide-line">
          {PROJECTS.map((p) => (
            <li key={p.title} className="group py-5 first:pt-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-medium">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-4 hover:decoration-ink"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <span className="shrink-0 text-xs text-muted">
                  {p.tags.join(" · ")}
                </span>
              </div>
              <p className="mt-1 text-[15px] leading-7 text-ink/80">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
        <ol className="flex flex-col gap-8">
          {EXPERIENCE.map((e) => (
            <li key={e.role + e.org} className="grid grid-cols-[100px_1fr] gap-6">
              <div className="text-xs text-muted">{e.period}</div>
              <div>
                <div className="text-base font-medium">{e.role}</div>
                <div className="text-sm text-muted">{e.org}</div>
                <ul className="mt-2 list-disc pl-5 text-[15px] leading-7 text-ink/80 marker:text-muted">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <p className="text-[15px] leading-7 text-ink/90">
          The fastest way to reach me is{" "}
          <a
            href={`mailto:${PROFILE.email}`}
            className="underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            email
          </a>
          . You can also find me on{" "}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            LinkedIn
          </a>
          .
        </p>
      </Section>

      <footer className="border-t border-line pt-8 text-xs text-muted">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js, deployed
        on Vercel.
      </footer>
    </main>
  );
}
