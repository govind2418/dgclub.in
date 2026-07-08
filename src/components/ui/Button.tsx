import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl2 font-heading font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light/60";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-gold text-base shadow-soft hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.98]",
  secondary:
    "border border-gold/30 bg-surface/50 text-cream backdrop-blur-md hover:border-gold/60 hover:shadow-gold-glow active:scale-[0.98]",
  ghost: "text-cream/80 hover:text-gold-light",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const isExternal = props.external ?? props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
