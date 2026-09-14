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
  ButtonAnchor,
  ButtonLink,
  Card,
  Eyebrow,
  FeaturePhoto,
  PageHero,
  Section,
} from "@/components/ui";
import { serviceLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Business CCTV Biometrics & AV Cape Town | Alt AV",
  },
  description:
    "Corporate CCTV (LPR, AI, facial recognition), biometrics, Time & Attendance and boardroom AV for Cape Town businesses. Fully insured.",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "Business CCTV Biometrics & AV Cape Town | Alt AV",
    description:
      "Staff management and security tech that helps Cape Town businesses keep more money in the bank — CCTV, biometrics and corporate AV.",
    url: `${site.url}/business`,
  },
};

const focusAreas = [
  {
    icon: IconCamera,
    title: "CCTV & intelligent video",
    body: "AHD to UHD IP systems with colour at night, AI analytics, license plate recognition (LPR) and facial recognition where appropriate and lawful.",
    href: "/services/cctv",
    image: {
      src: "/images/cctv-1.jpg",
      alt: "Outdoor CCTV camera protecting a commercial building exterior",
      width: 800,
      height: 600,
    },
  },
  {
    icon: IconFingerprint,
    title: "Biometrics & Time & Attendance",
    body: "Finger, face and palm access with Time & Attendance so you can manage staff hours accurately and reduce payroll leakage.",
    href: "/services/biometrics",
    image: {
      src: "/images/security-handover-1.jpg",
      alt: "Access control keypad and CCTV monitoring wall at a commercial site",
      width: 1024,
      height: 1024,
    },
  },
  {
    icon: IconMonitor,
    title: "Corporate AV & boardrooms",
    body: "Video conferencing, presentation systems and professional AV for boardrooms and meeting spaces that need to work every time.",
    href: "/services/av",
    image: {
      src: "/images/cover-hero.jpg",
      alt: "Room AV setup with display and speakers",
      width: 851,
      height: 315,
    },
  },
];

const whyPoints = [
  "Technology that supports staff management ROI — keep more money in the bank",
  "Finance or cash deal options to suit your budget",
  "Fully insured installations with after-sales support you can reach",
  "Product warranties typically 2–7 years and a 6-month workmanship guarantee",
  "Independent advice after years of working with proven Cape Town suppliers",
  "Based in Paarden Eiland — serving corporate and commercial clients citywide",
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Business & commercial"
        title="CCTV, biometrics and AV for Cape Town businesses"
        description="Alt AV helps corporate and commercial clients protect assets, manage people and equip meeting spaces — with surveillance, access control and boardroom AV designed to deliver real operational return."
        image={{
          src: "/images/security-handover-1.jpg",
          alt: "Professional security system handover with CCTV monitors and biometric access keypad",
          width: 1024,
          height: 1024,
          priority: true,
        }}
      />

      <Section>
        <Eyebrow>What we deliver</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Built for commercial sites
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          From warehouses and offices to retail and industrial premises, we design
          systems that fit how your teams actually work — not one-size-fits-all
          kits.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Link key={area.href} href={area.href} className="group block">
                <Card hover className="h-full overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={area.image.src}
                      alt={area.image.alt}
                      width={area.image.width}
                      height={area.image.height}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {area.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Learn more
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
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Why businesses choose Alt AV</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Staff management that protects the bottom line
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Effective CCTV and biometrics are not just about security — they help
              you manage attendance, accountability and risk so more of what you earn
              stays in the bank.
            </p>
          </div>
          <FeaturePhoto
            src="/images/cctv-1.jpg"
            alt="Close-up of an outdoor CCTV camera on a commercial exterior wall"
            width={800}
            height={600}
            caption="Surveillance sized for how your site actually operates"
          />
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {whyPoints.map((item) => (
            <li key={item}>
              <Card className="flex h-full items-start gap-3 p-4">
                <IconCheck className="mt-0.5 shrink-0 text-brand-600" />
                <span className="text-slate-700">{item}</span>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow>Next step</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Talk to us about your site
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Call, email or use the contact form for a practical recommendation.
          Explore our core services or get in touch directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Contact us</ButtonLink>
          <ButtonAnchor href={site.phoneHref} variant="secondary">
            Call {site.phone}
          </ButtonAnchor>
          <ButtonAnchor href={site.emailHref} variant="outline">
            Email us
          </ButtonAnchor>
        </div>
        <ul className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brand-700">
          {serviceLinks.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                {s.label} →
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Contact →
            </Link>
          </li>
        </ul>
      </Section>

      <CtaBand
        title="Ready for a business site survey?"
        body="Finance or cash deals available. Fully insured. After-sales support included."
      />
    </>
  );
}
