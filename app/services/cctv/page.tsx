import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCamera, IconCheck } from "@/components/Icons";
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <IconCamera className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            CCTV systems for Cape Town businesses
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            From analogue AHD upgrades to modern UHD IP networks, Alt AV designs
            and installs surveillance that actually helps you manage risk and
            staff — with clear images day and night.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Capabilities
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <IconCheck className="mt-0.5 shrink-0 text-brand-600" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-slate-600">
          We size systems for your site, integrate with access control where
          needed, and stand behind the work with product warranties and our
          6-month workmanship guarantee.
        </p>
      </section>

      <CtaBand
        title="Need a CCTV survey?"
        body="Call or email for a practical recommendation — finance or cash deals available."
      />
    </>
  );
}
