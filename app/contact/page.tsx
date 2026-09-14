import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPhone } from "@/components/Icons";
import { ButtonAnchor, Card, Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Alt AV | CCTV Biometrics & AV Quotes Cape Town",
  description:
    "Contact Alt AV in Paarden Eiland. Call +27 60 494 7296 or email lawrence@alt-av.co.za. Mon–Fri 9am–6pm. Visits by appointment.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Alt AV | CCTV Biometrics & AV Quotes Cape Town",
    description:
      "Get in touch for CCTV, biometrics and corporate AV quotes in Cape Town.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        description={`Tell us about your site or project. We respond during business hours (${site.hours}). Visits are by appointment only.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Message</Eyebrow>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Required fields are marked. For urgent matters, please call.
            </p>
            <Card className="mt-6">
              <ContactForm />
            </Card>
          </div>

          <div>
            <Eyebrow>Details</Eyebrow>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Contact details</h2>
            <Card className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </h3>
                <address className="mt-2 not-italic leading-relaxed text-slate-700">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.postal}
                </address>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </h3>
                <p className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    <IconPhone />
                    {site.phone}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </h3>
                <p className="mt-2">
                  <a
                    href={site.emailHref}
                    className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    <IconMail />
                    {site.email}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Hours
                </h3>
                <p className="mt-2 text-slate-700">{site.hours}</p>
                <p className="mt-1 text-sm text-slate-500">
                  Visits by appointment only.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <ButtonAnchor href={site.phoneHref} variant="primary">
                  Call
                </ButtonAnchor>
                <ButtonAnchor href={site.emailHref} variant="secondary">
                  Email
                </ButtonAnchor>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
