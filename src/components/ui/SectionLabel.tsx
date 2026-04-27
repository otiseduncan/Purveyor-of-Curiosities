export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bronze/70 bg-espresso/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
      <span>✦</span>
      {children}
    </div>
  );
}