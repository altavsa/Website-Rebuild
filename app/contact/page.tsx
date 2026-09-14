import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPhone } from "@/components/Icons";
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Tell us about your site or project. We respond during business hours
            ({site.hours}). Visits are by appointment only.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fields marked as required must be completed. For urgent matters,
              please call.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Contact details
            </h2>
            <div className="mt-6 space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </h3>
                <address className="mt-2 not-italic text-slate-700">
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
                    className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
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
                    className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
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
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={site.phoneHref}
                  className="rounded-md bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
                >
                  Call
                </a>
                <a
                  href={site.emailHref}
                  className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
