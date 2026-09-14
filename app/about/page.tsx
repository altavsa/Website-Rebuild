import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCheck } from "@/components/Icons";
import { Card, Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Alt AV | Cape Town CCTV Biometrics Since 2014",
  description:
    "Since 2014 Alt AV has completed 1000+ Cape Town projects. Warranties, multi-skilled staff and a 6-month workmanship guarantee.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Alt AV | Cape Town CCTV Biometrics Since 2014",
    description:
      "Learn why Cape Town businesses choose Alt AV for CCTV, biometrics and corporate AV.",
    url: `${site.url}/about`,
  },
};

const reasons = [
  "Solutions-driven approach using the latest proven technology",
  "Complete, reliable installs for corporate and commercial clients",
  "Top-draw after-sales support from multi-skilled staff",
  "Product warranties typically from 2 to 7 years",
  "6-month workmanship guarantee on our installations",
  "Fully insured — finance or cash deal options",
];

const reviews = [
  {
    name: "Steven Scheffler",
    place: "Pinelands",
    quote:
      "Professional from quote to handover. The CCTV system does exactly what we needed and support has been excellent.",
  },
  {
    name: "Craig Lambinon",
    place: "Wynberg",
    quote:
      "Biometrics and time & attendance transformed how we manage staff hours. Clear communication throughout the project.",
  },
  {
    name: "Jamie Bell",
    place: "Tokai",
    quote:
      "Boardroom AV and conferencing set up cleanly and on time. Would recommend Alt AV without hesitation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Alt AV"
        description={`Since early ${site.since}, Alt AV (Pty) Ltd has helped Cape Town businesses protect assets and manage people with CCTV, biometrics / access control and corporate audio visual systems. Based in Paarden Eiland, we have completed ${site.projects} projects and earned consistent 5-star Google and Facebook reviews.`}
      />

      <Section>
        <Eyebrow>Why Alt AV</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Why choose us
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {reasons.map((item) => (
            <li key={item}>
              <Card className="flex h-full items-start gap-3 p-4">
                <IconCheck className="mt-0.5 shrink-0 text-brand-600" />
                <span className="text-slate-700">{item}</span>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <Eyebrow>Reviews</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          What clients say
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name}>
              <Card className="h-full bg-slate-50">
                <p className="leading-relaxed text-slate-700">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-brand-800">
                  {review.name}
                  <span className="font-normal text-slate-500">
                    {" "}
                    — {review.place}
                  </span>
                </footer>
              </Card>
            </blockquote>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let’s talk about your next project"
        body="Whether you need a site survey or a full system design, our team is ready to help."
      />
    </>
  );
}
