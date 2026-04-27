export function Badge({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "green" | "copper";
}) {
  const toneClass =
    tone === "green"
      ? "border-bottle/70 bg-bottle/20 text-[#BFD6C9]"
      : tone === "copper"
        ? "border-copper/70 bg-copper/20 text-[#F2C0A8]"
        : "border-gold/70 bg-gold/15 text-[#F4D695]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${toneClass}`}
    >
      {children}
    </span>
  );
}