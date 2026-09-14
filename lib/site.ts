export const site = {
  name: "Alt AV (Pty) Ltd",
  shortName: "Alt AV",
  tagline: "CCTV, Biometrics & AV Specialists",
  description:
    "Alt AV are audio visual, CCTV and biometrics specialists delivering complete, reliable solutions for corporate and commercial customers in Cape Town.",
  url: "https://www.alt-av.co.za",
  phone: "+27 60 494 7296",
  phoneHref: "tel:+27604947296",
  email: "lawrence@alt-av.co.za",
  emailHref: "mailto:lawrence@alt-av.co.za",
  hours: "Mon–Fri 9:00am–6:00pm",
  address: {
    line1: "Unit 16, Inospace Metalheads",
    line2: "8 Section Street, Paarden Eiland",
    city: "Cape Town",
    postal: "7405",
    country: "ZA",
  },
  addressFull:
    "Unit 16, Inospace Metalheads, 8 Section Street, Paarden Eiland, Cape Town, 7405",
  since: 2014,
  projects: "1000+",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/business", label: "Business" },
  { href: "/residential", label: "Residential" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const audienceLinks = [
  {
    href: "/business",
    label: "For business",
    summary:
      "CCTV, biometrics, Time & Attendance and corporate AV for Cape Town commercial sites.",
  },
  {
    href: "/residential",
    label: "For home",
    summary:
      "Home CCTV, entertainment and AV solutions for Cape Town and Paarden Eiland homes.",
  },
] as const;

export const serviceLinks = [
  {
    href: "/services/cctv",
    label: "CCTV",
    summary:
      "AHD to UHD IP cameras, colour at night, AI analytics, LPR and facial recognition.",
  },
  {
    href: "/services/biometrics",
    label: "Biometrics",
    summary:
      "Finger, face and palm scanners with Time & Attendance for staff management.",
  },
  {
    href: "/services/av",
    label: "Corporate AV",
    summary:
      "Boardrooms, video conferencing and presentation systems for professional spaces.",
  },
] as const;
