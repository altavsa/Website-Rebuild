import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to secure or upgrade your workspace?",
  body = "Talk to Alt AV about CCTV, biometrics or corporate AV — finance or cash deals available.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-brand-100">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-50"
          >
            Call {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="rounded-md border border-brand-400 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Email us
          </a>
          <Link
            href="/contact"
            className="rounded-md border border-brand-400 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Contact form
          </Link>
        </div>
      </div>
    </section>
  );
}
