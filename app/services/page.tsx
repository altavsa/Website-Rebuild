import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import {
  IconCamera,
  IconFingerprint,
  IconMonitor,
} from "@/components/Icons";
import { Card, Eyebrow, PageHero, Section } from "@/components/ui";
import { serviceLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alt AV Services | CCTV, Access Control & AV Cape Town",
  description:
    "Surveillance, access control and staff management plus corporate AV. Partner solutions for IT, print, telecoms and Wi‑Fi in Cape Town.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Alt AV Services | CCTV, Access Control & AV Cape Town",
    description:
      "Explore Alt AV services: CCTV, biometrics and corporate audio visual for Cape Town businesses.",
    url: `${site.url}/services`,
  },
};

const icons = [IconCamera, IconFingerprint, IconMonitor] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Services"
        description="Surveillance, access control and staff management systems — plus corporate AV for boardrooms and meeting spaces. Through long-standing partners we also assist with IT infrastructure, printing, telecoms and Wi‑Fi."
      />

      <Section>
        <Eyebrow>Core</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Core offerings
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {serviceLinks.map((service, i) => {
            const Icon = icons[i];
            return (
              <article key={service.href}>
                <Card hover className="flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {service.label}
                  </h3>
                  <p className="mt-2 flex-1 text-slate-600">{service.summary}</p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    View {service.label} details
                    <span aria-hidden="true">→</span>
                  </Link>
                </Card>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Partners</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Partner solutions
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Need more than cameras and access? We coordinate trusted partners so
          you have one accountable team for related IT, print, telecom and
          wireless needs alongside your security and AV project.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
