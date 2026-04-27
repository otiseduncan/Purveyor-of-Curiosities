type ButtonVariant = "primary" | "secondary";

export function Button({
  children,
  variant = "primary",
  href = "#",
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
}) {
  const classes =
    variant === "secondary"
      ? "border border-bronze bg-transparent text-ivory hover:border-gold hover:bg-gold/10"
      : "border border-gold bg-gold text-charcoal hover:bg-[#D8AF5A]";

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${classes}`}
    >
      {children}
      <span className="transition group-hover:translate-x-1">→</span>
    </a>
  );
}