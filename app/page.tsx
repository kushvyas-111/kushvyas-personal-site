import Section from "./components/Section";
import { PROFILE, SKILLS } from "./data";

export default function AboutPage() {
  return (
    <Section label="About">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        {/* Photo — place your image at public/profile.png */}
        <img
          src={PROFILE.photo}
          alt={PROFILE.name}
          className="w-full max-w-[260px] shrink-0 self-center rounded-2xl border border-blue-100 object-contain shadow-sm ring-4 ring-blue-50 sm:w-60 sm:self-start"
        />
        <div>
          <p className="text-base font-medium text-blue-700">{PROFILE.subhead}</p>
          <p className="mt-3 text-[15px] leading-7 text-black/90">
            {PROFILE.about}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xs uppercase tracking-[0.16em] text-black/50">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-900"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
