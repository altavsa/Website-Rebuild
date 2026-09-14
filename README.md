# Alt AV Website Rebuild (MVP)

Marketing site for **Alt AV (Pty) Ltd** — CCTV, biometrics / access control and corporate AV in Cape Town (Paarden Eiland).

Stack: **Next.js App Router**, **TypeScript**, **Tailwind CSS**.

## Local development

```bash
cd /workspace/Website-Rebuild
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build check:

```bash
npm run build
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/about` | About / why choose us / reviews |
| `/services` | Services overview |
| `/services/cctv` | CCTV landing |
| `/services/biometrics` | Biometrics & access |
| `/services/av` | Corporate AV |
| `/contact` | Contact form + details |

Contact form posts to `POST /api/contact` (JSON success for MVP; no email backend yet).

## Out of scope

- Deploy (Vercel / hosting)
- GitHub push (handled separately)
- Apex → www 301 redirect (document for later hosting config)

## Canonical

Production URL: https://www.alt-av.co.za
