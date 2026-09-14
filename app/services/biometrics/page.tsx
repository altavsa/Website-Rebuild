import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCheck, IconFingerprint } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Biometrics & Access Control Systems | Alt AV Cape Town",
  description:
    "Finger, face and palm biometrics with Time & Attendance and payroll codes. Secure access control for Cape Town workplaces.",
  alternates: { canonical: "/services/biometrics" },
  openGraph: {
    title: "Biometrics & Access Control Systems | Alt AV Cape Town",
    description:
      "Biometric access and Time & Attendance solutions that help manage staff accurately.",
    url: `${site.url}/services/biometrics`,
  },
};

const features = [
  "Fingerprint, face and palm biometric readers",
  "Access control for doors, turnstiles and zones",
  "Time & Attendance software for staff management",
  "Payroll-friendly codes and reporting exports",
  "Integration with CCTV where visibility helps",
  "Training and ongoing support for your team",
];

export default function BiometricsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <IconFingerprint className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Biometrics and access control
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Replace shared PINs and buddy-clocking with reliable biometric
            identity — then feed accurate Time & Attendance data into how you
            manage people and payroll.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          What you get
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
          Effective staff management is how technology helps keep more money in
          the bank. We design systems that fit your site layout and reporting
          needs — not one-size-fits-all kits.
        </p>
      </section>

      <CtaBand
        title="Plan your access & attendance system"
        body="Tell us about doors, headcount and payroll requirements — we’ll propose a clear path."
      />
    </>
  );
}
