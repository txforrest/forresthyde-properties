import { site } from "@/lib/site";

/**
 * Lead form.
 *
 * Default: mailto fallback via JavaScript-free POST to Formspree placeholder.
 * Replace `site.formspreePlaceholder` in src/lib/site.ts with your Formspree
 * form endpoint (e.g. https://formspree.io/f/xxxxxxxx) before going live,
 * or change the action to a server route / other form provider.
 *
 * Without a real Formspree ID, users can still reach Forrest via the Call CTA
 * or the mailto link below the form.
 */
export function ContactForm() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
              Get in touch
            </p>
            <h2
              id="contact-heading"
              className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl"
            >
              Request a consultation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell me a bit about your timeline — buying, selling, or both —
              and I&apos;ll follow up promptly. Prefer to talk now? Call{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="font-semibold text-burgundy underline-offset-2 hover:underline"
              >
                {site.phone}
              </a>
              .
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy">Phone</dt>
                <dd>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-muted hover:text-burgundy"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-muted hover:text-burgundy break-all"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Based in</dt>
                <dd className="text-muted">{site.basedIn}</dd>
              </div>
            </dl>
          </div>

          <form
            action={site.formspreePlaceholder}
            method="POST"
            className="rounded-2xl border border-navy/10 bg-cream p-6 sm:p-8"
          >
            {/* Formspree helpers — ignored by mailto-style providers */}
            <input
              type="hidden"
              name="_subject"
              value="New consultation request — forresthyde.properties"
            />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-navy"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-navy"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-navy"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
                  placeholder="Buying, selling, timeline, neighborhoods of interest…"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-burgundy px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            >
              Send message
            </button>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              Form endpoint is a Formspree placeholder (
              <code className="rounded bg-white px-1 py-0.5 text-[0.7rem]">
                YOUR_FORM_ID
              </code>
              ). Replace it in{" "}
              <code className="rounded bg-white px-1 py-0.5 text-[0.7rem]">
                src/lib/site.ts
              </code>{" "}
              before production, or email{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Consultation request")}`}
                className="font-medium text-burgundy underline-offset-2 hover:underline"
              >
                {site.email}
              </a>{" "}
              directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
