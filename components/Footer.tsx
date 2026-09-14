import Link from "next/link";
import { navLinks, serviceLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-slate-400">
            CCTV, biometrics and corporate AV specialists serving Cape Town
            from Paarden Eiland since {site.since}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={site.phoneHref}
              className="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-500"
            >
              Call
            </a>
            <a
              href={site.emailHref}
              className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-white hover:border-slate-400"
            >
              Email
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-white hover:border-slate-400"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick links
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
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
          <address className="mt-3 space-y-2 text-sm not-italic text-slate-300">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>
              {site.address.city}, {site.address.postal}
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p>Hours: {site.hours}</p>
            <p className="text-slate-400">Visits by appointment only.</p>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name} — {site.tagline}
      </div>
    </footer>
  );
}
