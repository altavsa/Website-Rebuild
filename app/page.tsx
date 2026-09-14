import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import {
  IconCamera,
  IconCheck,
  IconFingerprint,
  IconMonitor,
} from "@/components/Icons";
import { serviceLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Alt AV | CCTV Biometrics & AV Specialists Cape Town" },
  description:
    "Cape Town CCTV, biometrics and corporate AV specialists. Staff management tech that helps keep more money in the bank. Paarden Eiland.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alt AV | CCTV Biometrics & AV Specialists Cape Town",
    description:
      "CCTV, biometrics and AV specialists helping Cape Town businesses manage staff and protect assets.",
    url: site.url,
  },
};

const icons = [IconCamera, IconFingerprint, IconMonitor] as const;

const stats = [
  { label: "Years in business", value: String(new Date().getFullYear() - site.since) },
  { label: "Projects completed", value: site.projects },
  { label: "Review rating", value: "5-star" },
  { label: "Workmanship cover", value: "6 months" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            Cape Town · Paarden Eiland
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            CCTV, biometrics and AV specialists in Cape Town
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100">
            Helping businesses use technology to keep more money in the bank
            through effective staff management — with reliable surveillance,
            access control and corporate audio visual systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-50"
            >
              Contact us
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-md border border-brand-300 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Call {site.phone}
            </a>
            <Link
              href="/services"
              className="rounded-md border border-brand-300 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What we do
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Our core offering is CCTV, biometrics and audio visual installations.
          Through trusted partners we can also support IT infrastructure,
          printing, telecoms and Wi‑Fi solutions.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((service, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {service.label}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-700">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Alt AV in numbers
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            After completing over {site.projects} projects since {site.since},
            we are proud of our 5-star Google and Facebook reviews. Fully
            insured. Finance or cash deals available.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center"
              >
                <dt className="text-sm text-slate-500">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-brand-800">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Brands we trust
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          We recommend a preferred set of suppliers after years of learning
          which partners deliver outstanding service, competitive pricing and
          reliable products. We remain independent and can supply and support
          most product ranges — the partners we trust have earned that
          recommendation time and again.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Proven, reliable hardware for surveillance and access",
            "Competitive pricing without cutting corners on quality",
            "Independent advice — not locked to a single vendor",
            "After-sales support you can actually reach",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-700">
              <IconCheck className="mt-0.5 shrink-0 text-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
