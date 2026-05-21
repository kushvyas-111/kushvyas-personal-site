import Link from "next/link";

// ──────────────────────────────────────────────────────────────────────────────
// Edit the data below to personalize your site.
// ──────────────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Kush Vyas",
  headline: "MSBA Candidate @ Boston University",
  subhead: "Research-driven business analyst · SQL · Python · Power BI · Finance & supply chain",
  location: "Boston, MA",
  about:
    "Curious mind, strategic thinker, data translator. I’m pursuing my M.S. in Business Analytics at Boston University’s Questrom School of Business, where I work at the intersection of data and decision-making. With experience in CRM strategy, market research, and published work in consumer analytics, I help uncover the patterns that drive smarter business moves — whether that means building dashboards or framing insights for stakeholders. I care about impact, not just output.",
  email: "kushvyas@bu.edu",
  github: "https://github.com/kushvyas-111",
  linkedin: "https://www.linkedin.com/in/kush-vyas-090396279",
};

const SKILLS = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Machine Learning",
  "Excel",
  "Web Scraping",
  "CRM Tools",
];

const EXPERIENCE: { role: string; org: string; period: string; bullets: string[] }[] = [
  {
    role: "Brand Management Intern",
    org: "Microsoft · GroupMe",
    period: "Jan 2025 — May 2025",
    bullets: [
      "Managed creators, driving a 45% boost in campaign engagement and 35,000+ app downloads.",
      "Handled event finances, ROI calculations, and modeled a payment algorithm for the program.",
      "Promoted the app across 15+ university platforms, lifting new sign-ups 30% in two months.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Octos Global · Remote (USA)",
    period: "Jun 2024 — Aug 2024",
    bullets: [
      "Directed financial and competitor analysis across four verticals, surfacing six service gaps and three opportunities.",
      "Built three real-time dashboards and two ML models that improved personalized engagement by 27%.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Kunj Services · Ahmedabad, India",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      "Ran financial forecasting and market research to identify five profitable growth opportunities.",
      "Built churn and pricing models that improved subscription renewal rates by 18%.",
      "Created Power BI dashboards that cut reporting time by 25%.",
    ],
  },
  {
    role: "Founder & President",
    org: "Data Decoders · Pune, India",
    period: "Jul 2024 — Jun 2025",
    bullets: [
      "Founded a 200+ student analytics community, running five workshops and mentorship programs.",
      "Built partnerships with nine startups for hands-on projects, boosting placement success by 30%.",
    ],
  },
];

const PROJECTS: { title: string; blurb: string; href?: string; tags: string[] }[] = [
  {
    title: "Global Semiconductor Supply Chains — Trade Flows, Risks & Resilience",
    blurb:
      "Mapped global trade flows, regional dependencies, and supply-chain vulnerabilities across economies, identifying key chokepoints and market–finance linkages shaping resilience.",
    href: "https://github.com/kushvyas-111/Global-Semiconductor-Supply-Chains---Trade-Flows-Risks-and-Resilience",
    tags: ["Python", "Jupyter", "Supply Chain"],
  },
  {
    title: "Beyond the Pitch — Quantifying Success in Modern Football",
    blurb:
      "Uncovers the key drivers of football club success by analyzing how financial power, squad structure, and on-field discipline shape season-level performance, integrating multiple global datasets.",
    href: "https://github.com/kushvyas-111/Beyond-the-Pitch---Quantifying-Success-in-Modern-Football",
    tags: ["Python", "Jupyter", "Sports Analytics"],
  },
  {
    title: "Adaptive Trilemma Valuation Model (ATVM)",
    blurb:
      "A valuation model exploring trade-offs across growth, risk, and return, with scenario analysis to support investment decisions.",
    href: "https://github.com/kushvyas-111/Adaptive-Trilemma-Valuation-Model-ATVM-",
    tags: ["Python", "Jupyter", "Finance"],
  },
  {
    title: "Boston Airbnb Analysis",
    blurb:
      "Exploratory analysis of Boston Airbnb listings — pricing patterns, neighborhood premiums, and host behavior.",
    href: "https://github.com/kushvyas-111/Boston_Airbnb_Analyis",
    tags: ["Python", "Jupyter", "EDA"],
  },
  {
    title: "Number Guessing Game",
    blurb: "A small React app that challenges the user to guess a number — a quick interactive build.",
    href: "https://github.com/kushvyas-111/Number-Guessing-Game",
    tags: ["React", "JavaScript"],
  },
];

const PUBLICATIONS: { title: string; venue?: string; year?: string }[] = [
  {
    title:
      "The Age of Screens: Smartphone Usage, Social Media Influence, and Consumer Spending Patterns",
  },
  {
    title:
      "Revolutionizing Data Warehousing: How AI and Robotics Are Transforming the Future of Data Management?",
  },
  {
    title: "Profit Powerhouse: Driving ROI Through Cutting-Edge Business Analytics",
    venue: "International Journal of Scientific Research in Multidisciplinary Studies",
    year: "2023",
  },
];

const EDUCATION: { degree: string; school: string; detail: string; period: string }[] = [
  {
    degree: "M.S. in Business Analytics",
    school: "Boston University, Questrom School of Business",
    detail: "Boston, MA · GPA 3.50",
    period: "Expected May 2027",
  },
  {
    degree: "B.B.A. in Business Analytics",
    school: "MIT World Peace University",
    detail: "Pune, India · GPA 8.50",
    period: "Aug 2025",
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
          Open to internships & collaborations
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {PROFILE.name}
        </h1>
        <p className="text-ink/80">{PROFILE.headline} · {PROFILE.location}</p>
        <p className="text-sm text-muted">{PROFILE.subhead}</p>
        <nav className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="#about" className="text-muted hover:text-ink">About</Link>
          <Link href="#experience" className="text-muted hover:text-ink">Experience</Link>
          <Link href="#projects" className="text-muted hover:text-ink">Projects</Link>
          <Link href="#publications" className="text-muted hover:text-ink">Publications</Link>
          <Link href="#education" className="text-muted hover:text-ink">Education</Link>
          <Link href="#contact" className="text-muted hover:text-ink">Contact</Link>
        </nav>
      </header>

      {/* About */}
      <Section id="about" label="About">
        <p className="text-[15px] leading-7 text-ink/90">{PROFILE.about}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink/70"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
        <ol className="flex flex-col gap-8">
          {EXPERIENCE.map((e) => (
            <li key={e.role + e.org} className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr] md:gap-6">
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

      {/* Projects */}
      <Section id="projects" label="Projects">
        <ul className="flex flex-col divide-y divide-line">
          {PROJECTS.map((p) => (
            <li key={p.title} className="group py-5 first:pt-0 last:pb-0">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
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

      {/* Publications */}
      <Section id="publications" label="Publications">
        <ol className="flex flex-col gap-5">
          {PUBLICATIONS.map((pub) => (
            <li key={pub.title} className="grid grid-cols-[20px_1fr] gap-3">
              <span className="text-sm text-muted">↳</span>
              <div>
                <div className="text-[15px] font-medium leading-6 text-ink/90">
                  {pub.title}
                </div>
                {(pub.venue || pub.year) && (
                  <div className="mt-0.5 text-xs text-muted">
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

      {/* Education */}
      <Section id="education" label="Education">
        <ol className="flex flex-col gap-6">
          {EDUCATION.map((ed) => (
            <li key={ed.degree} className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr] md:gap-6">
              <div className="text-xs text-muted">{ed.period}</div>
              <div>
                <div className="text-base font-medium">{ed.degree}</div>
                <div className="text-sm text-muted">{ed.school}</div>
                <div className="text-sm text-muted">{ed.detail}</div>
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
