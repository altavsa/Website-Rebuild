import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconCheck, IconFingerprint } from "@/components/Icons";
import { Card, Eyebrow, FeaturePhoto, PageHero, Section } from "@/components/ui";
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
      <PageHero
        eyebrow="Access control"
        icon={<IconFingerprint className="h-8 w-8" />}
        title="Biometrics and access control"
        description="Replace shared PINs and buddy-clocking with reliable biometric identity — then feed accurate Time & Attendance data into how you manage people and payroll."
        image={{
          src: "/images/security-handover-1.jpg",
          alt: "Access and biometric keypad beside a CCTV monitoring wall",
          width: 1024,
          height: 1024,
          priority: true,
        }}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Features</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              What you get
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
              Effective staff management is how technology helps keep more money in
              the bank. We design systems that fit your site layout and reporting
              needs — not one-size-fits-all kits.
            </p>
          </div>
          <FeaturePhoto
            src="/images/security-hub-1.jpg"
            alt="Smart security hub used with access and alarm systems"
            width={628}
            height={628}
            caption="Reliable access hardware with clear after-sales support"
          />
        </div>
      </Section>

      <CtaBand
        title="Plan your access & attendance system"
        body="Tell us about doors, headcount and payroll requirements — we’ll propose a clear path."
      />
    </>
  );
}
