export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`leading-none ${className}`}>
      <span className="block font-[family-name:var(--font-script)] text-[1.35em] tracking-wide text-inherit">
        love, Babe
      </span>
      <span className="mt-0.5 block text-[0.55em] font-semibold uppercase tracking-[0.28em] text-inherit">
        + Bean
      </span>
    </div>
  );
}

export function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-10 w-10 text-[7px]",
    md: "h-14 w-14 text-[9px]",
    lg: "h-20 w-20 text-xs",
  };

  return (
    <div className={`gradient-border shrink-0 ${sizes[size]}`}>
      <div className="flex h-full w-full items-center justify-center rounded-full bg-blue text-white">
        <Logo className="scale-[0.85] text-center" />
      </div>
    </div>
  );
}
