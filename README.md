# Transcend Functional Health Landing Page

Intake landing page for **Transcend Functional Health** (Greenwood Village, CO) focused on BrainsWay Deep TMS and Spravato® for treatment-resistant depression.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- GoHighLevel embeds (`go.4tms.com`) for booking calendar + inquiry form

## Brand

Colors and typography follow [transcendfunctionalhealth.com](https://www.transcendfunctionalhealth.com/) and the logo: deep green (`#183F39`), gold (`#C99D59`), cream (`#FDF3E4`), logo teal accent, Marcellus + Montserrat.

## CTAs

- Primary: Book your Free Consultation → `#book` (calendar embed)
- Primary: Find out if you Qualify → `#qualify` (form embed)
- Phone: click-to-call

## Before launch

- Replace `PHONE_NUMBER` / `PHONE_HREF` in `src/lib/constants.ts` with the Twilio tracking number (clinic main line is used as a placeholder).
- Confirm accepted insurance plans and self-pay / TMS coverage copy. The page currently makes no plan-specific claims.

## Develop

```bash
npm install
npm run dev
```
