import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCamera, IconCheck } from "@/components/Icons";
import { Card, Eyebrow, FeaturePhoto, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CCTV Systems Cape Town | Alt AV IP & AI Specialists",
  description:
    "AHD to UHD IP CCTV, colour at night, AI analytics, LPR and facial recognition for Cape Town businesses. Design, install and support.",
  alternates: { canonical: "/services/cctv" },
  openGraph: {
    title: "CCTV Systems Cape Town | Alt AV IP & AI Specialists",
    description:
      "Professional CCTV design and installation: IP cameras, night colour, AI, LPR and facial recognition.",
    url: `${site.url}/services/cctv`,
  },
};

const features = [
  "AHD through to UHD IP camera systems",
  "Colour at night for clearer after-hours footage",
  "AI and video analytics to reduce false alerts",
  "License plate recognition (LPR) integration",
  "Facial recognition where appropriate and lawful",
  "Remote viewing, recording and after-sales support",
];

export default function CctvPage() {
  return (
    <>
      <PageHero
        eyebrow="Surveillance"
        icon={<IconCamera className="h-8 w-8" />}
        title="CCTV systems for Cape Town businesses"
        description="From analogue AHD upgrades to modern UHD IP networks, Alt AV designs and installs surveillance that actually helps you manage risk and staff — with clear images day and night."
        image={{
          src: "/images/cctv-1.jpg",
          alt: "Outdoor CCTV security camera mounted on an exterior wall",
          width: 800,
          height: 600,
          priority: true,
        }}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Capabilities
            </h2>
            <ul className="mt-8 grid gap-3">
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
              We size systems for your site, integrate with access control where
              needed, and stand behind the work with product warranties and our
              6-month workmanship guarantee.
            </p>
          </div>
          <FeaturePhoto
            src="/images/security-handover-1.jpg"
            alt="CCTV monitoring wall and security handover at a commercial site"
            width={1024}
            height={1024}
            caption="From outdoor cameras to control-room monitoring"
          />
        </div>
      </Section>

      <CtaBand
        title="Need a CCTV survey?"
        body="Call or email for a practical recommendation — finance or cash deals available."
      />
    </>
  );
}
