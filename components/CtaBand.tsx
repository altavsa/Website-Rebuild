import { ButtonAnchor, ButtonLink } from "@/components/ui";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to secure or upgrade your workspace?",
  body = "Talk to Alt AV about CCTV, biometrics or corporate AV — finance or cash deals available.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-grid opacity-60"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-2 text-brand-100">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonAnchor href={site.phoneHref} variant="onDark">
            Call {site.phone}
          </ButtonAnchor>
          <ButtonAnchor href={site.emailHref} variant="onDarkOutline">
            Email us
          </ButtonAnchor>
          <ButtonLink href="/contact" variant="onDarkOutline">
            Contact form
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
