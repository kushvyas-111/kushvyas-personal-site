// ──────────────────────────────────────────────────────────────────────────────
// Edit everything about your site here. All pages read from this file.
// ──────────────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Kush Vyas",
  headline: "MSBA Candidate @ Boston University",
  subhead:
    "Research-driven business analyst · SQL · Python · Power BI · Finance & supply chain",
  location: "Boston, MA",
  about:
    "Curious mind, strategic thinker, data translator. I’m pursuing my M.S. in Business Analytics at Boston University’s Questrom School of Business, where I work at the intersection of data and decision-making. With experience in CRM strategy, market research, and published work in consumer analytics, I help uncover the patterns that drive smarter business moves — whether that means building dashboards or framing insights for stakeholders. I care about impact, not just output.",
  email: "kushvyas@bu.edu",
  github: "https://github.com/kushvyas-111",
  linkedin: "https://www.linkedin.com/in/kush-vyas-090396279",
  // Place your photo at: public/profile.jpg  (or change the path below)
  photo: "/profile.jpg",
};

export const SKILLS = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Machine Learning",
  "Excel",
  "Web Scraping",
  "CRM Tools",
];

export const EXPERIENCE: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}[] = [
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

export const PROJECTS: {
  title: string;
  blurb: string;
  href?: string;
  tags: string[];
}[] = [
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
    blurb:
      "A small React app that challenges the user to guess a number — a quick interactive build.",
    href: "https://github.com/kushvyas-111/Number-Guessing-Game",
    tags: ["React", "JavaScript"],
  },
];

export const PUBLICATIONS: { title: string; venue?: string; year?: string }[] = [
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

export const EDUCATION: {
  degree: string;
  school: string;
  detail: string;
  period: string;
}[] = [
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

// Navigation order across the site.
export const NAV = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];
