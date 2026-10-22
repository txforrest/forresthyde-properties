# Hyde Enterprises investment integration

## Implemented

- `/investments` has independent branding, navigation, role disclosures, and footer.
- The brokerage footer links to this experience with an explanation of the relationship.
- The existing Google Forms property-inquiry endpoint is preserved. No test inquiry was submitted.
- Middleware serves this experience at the root of `invest.forresthyde.properties` when that domain is connected to this Vercel project. Brokerage routes on the investment host return to the main domain.
- Main-site contact, guide, and IABS routes are retained.

## Original homepage content captured October 21, 2026

Source: https://www.hydeenterprisesllc.com/

Heading: Hyde Enterprises LLC

We buy & sell real estate, using creative financing strategies

Sell your home in as little as one day and move out whenever you want, whether tomorrow or in a few months. We work on your timeframe. Don’t pay commissions, closing costs, or service charges. Sell your home as-is, in any condition.

Embedded form:
https://docs.google.com/forms/d/e/1FAIpQLSfhZNcMIeOqiRq3P_zfXxtbl9XJrL7u58hNtHtihCAsuDqHMA/viewform?embedded=true

Fields observed: email; name; property address; phone number and best time to call; questions or comments.

This is a text/form-reference capture, not a Google Sites export or a backup of form responses. The original site and form have not been altered.

## Domain cutover — completed October 22, 2026

1. Done: `invest.forresthyde.properties` added to Vercel project `forresthyde-properties` (domain DNS is Vercel-managed; the existing wildcard ALIAS covers it, so no new record was needed; apex, www and mail untouched).
2. Done: Let's Encrypt certificate issued; HTTPS root, `/investments` → `/` (308), brokerage paths → main domain (307), assets, anchors and embedded form verified on the live hostname.
3. Done: SiteShell (client `usePathname`) replaced by an `(brokerage)` route group layout. The old approach hydrated the rewritten host with brokerage chrome and React error #418; the route-group layout removes that failure mode.
4. Done: canonical/Open Graph URL, investment logo link and brokerage footer link now use `https://invest.forresthyde.properties/`. Main-domain (and www) `/investments` 308-redirects to the subdomain; preview hostnames still render `/investments` directly.

## Still open

1. Obtain sponsoring-broker review of branding and role/disclosure wording. Website disclosures do not substitute for transaction-specific written disclosures.
2. Only then replace the original Google Sites homepage with the umbrella hub. Map any existing URLs before changing them; Google Sites redirect capabilities must be checked separately.

The umbrella hub is a future task. Do not describe every linked business as a subsidiary without confirming ownership and structure.
