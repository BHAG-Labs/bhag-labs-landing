const SectionLabel = ({ children, variant = "dark" }: { children: string; variant?: "dark" | "light" }) => (
  <span
    className={`section-label inline-block mb-6 ${
      variant === "light" ? "text-ochre" : "text-terracotta"
    }`}
  >
    {children}
  </span>
);

export default SectionLabel;
