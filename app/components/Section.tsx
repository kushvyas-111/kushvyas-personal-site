export default function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-2">
      <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-blue-700">
        {label}
      </h2>
      {children}
    </section>
  );
}
