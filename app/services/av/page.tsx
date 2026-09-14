import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCheck, IconMonitor } from "@/components/Icons";
import { Card, Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate AV & Boardroom Systems | Alt AV Cape Town",
  description:
    "Boardroom AV, video conferencing and presentation systems for Cape Town offices. Design, install and support by Alt AV.",
  alternates: { canonical: "/services/av" },
  openGraph: {
    title: "Corporate AV & Boardroom Systems | Alt AV Cape Town",
    description:
      "Professional corporate audio visual installations for meetings and presentations.",
    url: `${site.url}/services/av`,
  },
};

const features = [
  "Boardroom display and audio design",
  "Video conferencing that works the first time",
  "Presentation systems for training and client pitches",
  "Cable management and clean, professional finishes",
  "Integration with existing IT where required",
  "Handover training so your team can run the room",
];

export default function AvPage() {
  return (
    <>
      <PageHero
        eyebrow="Audio visual"
        icon={<IconMonitor className="h-8 w-8" />}
        title="Corporate audio visual"
        description="Meeting rooms should feel effortless. Alt AV installs boardroom, conferencing and presentation systems so your team can focus on the conversation — not the remote."
      />

      <Section>
        <Eyebrow>Installs</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Typical installs
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <li key={item}>
              <Card className="flex items-start gap-3 p-4">
                <IconCheck className="mt-0.5 shrink-0 text-brand-600" />
                <span className="text-slate-700">{item}</span>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-slate-600">
          We specify equipment that matches room size and usage, install neatly,
          and support you after handover — with finance or cash deal options.
        </p>
      </Section>

      <CtaBand
        title="Upgrade your meeting spaces"
        body="Share room dimensions and how you meet today — we’ll recommend a practical AV setup."
      />
    </>
  );
}
