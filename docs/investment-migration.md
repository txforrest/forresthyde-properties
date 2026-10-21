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

## Domain cutover still required

1. Add `invest.forresthyde.properties` to the existing Vercel project that deploys this repository.
2. At the DNS provider, add exactly the record Vercel supplies for that hostname. Do not change apex, www, or mail records.
3. Verify HTTPS, root investment page, brokerage links, and embedded form on the new hostname.
4. Change investment canonical/Open Graph URL and brokerage footer link to the subdomain after it is verified live. Redirect the main-domain `/investments` route only after that verification.
5. Obtain sponsoring-broker review of branding and role/disclosure wording. Website disclosures do not substitute for transaction-specific written disclosures.
6. Only then replace the original Google Sites homepage with the umbrella hub. Map any existing URLs before changing them; Google Sites redirect capabilities must be checked separately.

The umbrella hub is a future task. Do not describe every linked business as a subsidiary without confirming ownership and structure.
