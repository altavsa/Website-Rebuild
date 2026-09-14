import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCheck, IconMonitor } from "@/components/Icons";
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <IconMonitor className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Corporate audio visual
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Meeting rooms should feel effortless. Alt AV installs boardroom,
            conferencing and presentation systems so your team can focus on the
            conversation — not the remote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Typical installs
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
          We specify equipment that matches room size and usage, install neatly,
          and support you after handover — with finance or cash deal options.
        </p>
      </section>

      <CtaBand
        title="Upgrade your meeting spaces"
        body="Share room dimensions and how you meet today — we’ll recommend a practical AV setup."
      />
    </>
  );
}
