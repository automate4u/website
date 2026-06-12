type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = inverse ? "text-white" : "text-ink";
  const descriptionColor = inverse ? "text-white/72" : "text-muted";
  const eyebrowColor = inverse ? "text-[#7df0d1]" : "text-[#167f65]";

  return (
    <div className={`max-w-[760px] ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-2 text-xs font-bold uppercase tracking-[0.08em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-[24px] font-extrabold leading-[1.14] tracking-[-0.01em] md:text-[36px] ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 text-base leading-7 ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
