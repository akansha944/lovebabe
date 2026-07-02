import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "wordmark" | "mark";
};

export function Logo({ className = "", variant = "wordmark" }: LogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/logo-mark.png"
        alt="Love Babe & Bean"
        width={80}
        height={80}
        className={`h-10 w-10 rounded-xl object-cover ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src="/logo-wordmark.png"
      alt="Love Babe & Bean"
      width={220}
      height={64}
      className={`h-11 w-auto object-contain ${className}`}
      priority
    />
  );
}

export function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { box: "h-12 w-12", px: 48 },
    md: { box: "h-16 w-16", px: 64 },
    lg: { box: "h-24 w-24", px: 96 },
  };

  const { box, px } = sizes[size];

  return (
    <div className={`gradient-border shrink-0 ${box}`}>
      <div className="relative h-full w-full overflow-hidden rounded-full bg-blue">
        <Image
          src="/logo-mark.png"
          alt="Love Babe & Bean"
          width={px}
          height={px}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
