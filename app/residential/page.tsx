import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { IconCamera, IconCheck, IconMonitor } from "@/components/Icons";
import {
  ButtonAnchor,
  ButtonLink,
  Card,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Home CCTV Security & AV Cape Town | Alt AV",
  },
  description:
    "Residential CCTV, home entertainment and AV for Cape Town homes. Professional installs from Paarden Eiland — contact Alt AV for a practical quote.",
  alternates: { canonical: "/residential" },
  openGraph: {
    title: "Home CCTV Security & AV Cape Town | Alt AV",
    description:
      "Home CCTV, entertainment and AV solutions for Cape Town and Paarden Eiland residents — designed and supported by Alt AV.",
    url: `${site.url}/residential`,
  },
};

const focusAreas = [
  {
    icon: IconCamera,
    title: "Home CCTV & security",
    body: "Clear day-and-night surveillance for driveways, entrances and living spaces — sized for your property, with remote viewing and reliable recording.",
    href: "/services/cctv",
  },
  {
    icon: IconMonitor,
    title: "Home entertainment & AV",
    body: "Media streaming, home cinema and living-room AV set up cleanly so everyday viewing and entertaining just works.",
    href: "/services/av",
  },
];

const lifestylePoints = [
  "Home entertainment systems tailored to how you watch and listen",
  "Home automation vibes — practical control of AV and related tech",
  "Media streaming setups that reduce cable clutter and guesswork",
  "Residential CCTV that respects privacy while protecting your home",
  "Marine entertainment experience available through our broader AV work",
  "Local Cape Town team based in Paarden Eiland — visits by appointment",
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Home & residential"
        title="Home CCTV, entertainment and AV in Cape Town"
        description="Alt AV supports homeowners and residential clients with professional CCTV, home entertainment and audio visual solutions — the same careful design and after-sales approach we bring to commercial work, from our base in Paarden Eiland."
      />

      <Section>
        <Eyebrow>What we offer at home</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Security and entertainment that fit your home
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          We focus on solutions that are reliable, well installed and easy to live
          with — without inventing package tiers or one-size pricing. Tell us about
          your property and we will recommend what makes sense.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Link key={area.href} href={area.href} className="group block">
                <Card hover className="h-full">
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
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Aligned with how we work</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Home entertainment, automation and more
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Alongside residential CCTV, our work covers home entertainment, practical
          home automation, media streaming and related AV — including marine
          entertainment where it fits. Every project is scoped to your space and
          budget in conversation with you.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {lifestylePoints.map((item) => (
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
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Plan your home project with Alt AV
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Call, email or send a message — we will discuss your needs and propose a
          clear next step. No placeholder packages; just a professional quote for
          your home.
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
          <li>
            <Link
              href="/services/cctv"
              className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              CCTV →
            </Link>
          </li>
          <li>
            <Link
              href="/services/av"
              className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Corporate AV / entertainment →
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              All services →
            </Link>
          </li>
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
        title="Ready to secure or upgrade your home?"
        body="Talk to Alt AV about residential CCTV or home AV — based in Paarden Eiland, Cape Town."
      />
    </>
  );
}
