import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import {
  IconCamera,
  IconCheck,
  IconFingerprint,
  IconMonitor,
} from "@/components/Icons";
import {
  ButtonLink,
  Card,
  Eyebrow,
  Section,
} from "@/components/ui";
import { audienceLinks, serviceLinks, site } from "@/lib/site";

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

const serviceThumbs = [
  {
    src: "/images/cctv-1.jpg",
    alt: "Outdoor CCTV security camera mounted on a building exterior",
    width: 800,
    height: 600,
  },
  {
    src: "/images/security-handover-1.jpg",
    alt: "Security system handover with CCTV monitors and access keypad",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/cover-hero.jpg",
    alt: "Living room with flat-screen TV and speakers — AV installation",
    width: 851,
    height: 315,
  },
] as const;

const stats = [
  { label: "Years in business", value: String(new Date().getFullYear() - site.since) },
  { label: "Projects completed", value: site.projects },
  { label: "Review rating", value: "5-star" },
  { label: "Workmanship cover", value: "6 months" },
];

const photoStrip = [
  {
    src: "/images/site-install-1.jpg",
    alt: "Cape Town property during early security install planning",
    width: 1920,
    height: 1059,
  },
  {
    src: "/images/cctv-1.jpg",
    alt: "Close-up of an outdoor CCTV camera on an exterior wall",
    width: 800,
    height: 600,
  },
  {
    src: "/images/security-handover-1.jpg",
    alt: "Professional security handover with monitor wall and biometric keypad",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/smart-switch-1.jpg",
    alt: "Smart wall switch installed in a living room",
    width: 800,
    height: 600,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-900 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-hero-grid" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 bg-hero-noise opacity-40 mix-blend-soft-light"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-8 top-24 h-40 w-40 rounded-full bg-brand-500/20 blur-2xl sm:h-56 sm:w-56"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rotate-12 rounded-3xl border border-white/5"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Cape Town · Paarden Eiland
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              CCTV, biometrics and AV specialists in Cape Town
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
              Helping businesses use technology to keep more money in the bank
              through effective staff management — with reliable surveillance,
              access control and corporate audio visual systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="onDark">
                Contact us
              </ButtonLink>
              <ButtonLink href="/services" variant="onDarkOutline">
                View services
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-brand-200/90">
              Fully insured · Since {site.since} · Paarden Eiland
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <Image
                src="/images/site-install-1.jpg"
                alt="Cape Town site during security and AV install planning"
                width={1920}
                height={1059}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-brand-200/80 lg:text-left">
              Real Cape Town installs — from site planning to handover
            </p>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          For business or for home
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Whether you need commercial staff management and security tech or
          residential CCTV and home entertainment, start with the path that fits
          you.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {audienceLinks.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <Card hover className="h-full overflow-hidden p-0">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={
                      item.href === "/business"
                        ? "/images/security-handover-1.jpg"
                        : "/images/smart-switch-1.jpg"
                    }
                    alt={
                      item.href === "/business"
                        ? "Commercial security monitors and access control handover"
                        : "Smart home wall switch in a residential living space"
                    }
                    width={item.href === "/business" ? 1024 : 800}
                    height={item.href === "/business" ? 1024 : 600}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Explore
                    <span
                      aria-hidden="true"
                      className="transition group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What we do
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Our core offering is CCTV, biometrics and audio visual installations.
          Through trusted partners we can also support IT infrastructure,
          printing, telecoms and Wi‑Fi solutions.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((service, i) => {
            const Icon = icons[i];
            const thumb = serviceThumbs[i];
            return (
              <Link key={service.href} href={service.href} className="group block">
                <Card hover className="h-full overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      width={thumb.width}
                      height={thumb.height}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Learn more
                      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>On site</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          From Cape Town sites to finished systems
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          A glimpse of the work — site planning, outdoor CCTV, security handovers
          and smart home installs.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photoStrip.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Track record</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Alt AV in numbers
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          After completing over {site.projects} projects since {site.since}, we
          are proud of our 5-star Google and Facebook reviews. Fully insured.
          Finance or cash deals available.
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-card"
            >
              <dt className="text-sm text-slate-500">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-brand-800">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="muted">
        <Eyebrow>Partners</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Brands we trust
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          We recommend a preferred set of suppliers after years of learning which
          partners deliver outstanding service, competitive pricing and reliable
          products. We remain independent and can supply and support most product
          ranges — the partners we trust have earned that recommendation time and
          again.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Proven, reliable hardware for surveillance and access",
            "Competitive pricing without cutting corners on quality",
            "Independent advice — not locked to a single vendor",
            "After-sales support you can actually reach",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
            >
              <IconCheck className="mt-0.5 shrink-0 text-brand-600" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
