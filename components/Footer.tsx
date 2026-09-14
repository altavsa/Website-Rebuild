import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { ButtonAnchor, ButtonLink } from "@/components/ui";
import { navLinks, serviceLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
            <p className="text-lg font-bold text-white">{site.shortName}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            CCTV, biometrics and corporate AV specialists serving Cape Town from
            Paarden Eiland since {site.since}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <ButtonAnchor href={site.phoneHref} variant="primary" className="px-3 py-2">
              Call
            </ButtonAnchor>
            <ButtonAnchor
              href={site.emailHref}
              variant="onDarkOutline"
              className="px-3 py-2 border-slate-600"
            >
              Email
            </ButtonAnchor>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-slate-400">
            <p className="text-slate-300">{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>
              {site.address.city}, {site.address.postal}
            </p>
            <p className="pt-1">
              <a
                href={site.phoneHref}
                className="font-medium text-white hover:text-brand-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                {site.phone}
              </a>
            </p>
            <p>
              <a
                href={site.emailHref}
                className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                {site.email}
              </a>
            </p>
            <p className="pt-1 text-slate-300">Hours: {site.hours}</p>
            <p className="text-xs leading-relaxed text-slate-500">
              Visits by appointment only — please call or email to arrange.
            </p>
          </address>
          <div className="mt-4">
            <ButtonLink href="/contact" variant="onDarkOutline" className="px-3 py-2 border-slate-600">
              Contact form
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/80 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name} — {site.tagline}
      </div>
    </footer>
  );
}
