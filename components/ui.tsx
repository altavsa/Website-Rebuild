import Image from "next/image";
import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "onDark" | "onDarkOutline";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-sm",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  outline:
    "border border-brand-300 text-brand-800 hover:bg-brand-50",
  ghost:
    "text-brand-700 hover:bg-brand-50",
  onDark:
    "bg-white text-brand-800 hover:bg-brand-50 shadow-sm",
  onDarkOutline:
    "border border-white/40 text-white hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props} />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant; children: ReactNode }) {
  return (
    <a
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  icon,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div
        className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${
          image ? "grid items-center gap-10 lg:grid-cols-2" : ""
        }`}
      >
        <div>
          {icon ? (
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 shadow-card">
              {icon}
            </div>
          ) : null}
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl ${
              eyebrow || icon ? "mt-3" : ""
            }`}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority={image.priority}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "white";
  id?: string;
}) {
  const toneClass =
    tone === "white"
      ? "bg-white border-y border-slate-200"
      : tone === "muted"
        ? "bg-slate-50"
        : "";

  return (
    <section id={id} className={`${toneClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-wider text-brand-600 ${className}`}
    >
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-card ${
        hover
          ? "transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Feature photo with optional caption — Experience First layout helper */
export function FeaturePhoto({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
      {caption ? (
        <figcaption className="border-t border-slate-100 px-4 py-3 text-sm text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
