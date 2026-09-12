import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cream"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(139,30,45,0.12), transparent), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(44,62,80,0.1), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-burgundy">
            {site.brokerage} · Georgetown, TX
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-[3.25rem]"
          >
            Your Texas realtor for Williamson County and beyond
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m {site.name} — a licensed Texas real estate agent based in{" "}
            {site.basedIn}. I help buyers and sellers across Texas, with a
            specialty in {site.specialty} communities like Georgetown, Round
            Rock, Cedar Park, Leander, and surrounding areas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center rounded-md bg-burgundy px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            >
              Call {site.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-navy bg-white px-6 py-3.5 text-base font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Request a consultation
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            TREC License #{site.license} · Sponsored by {site.broker.name},{" "}
            {site.brokerage}
          </p>
        </div>

        <aside className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-navy">
            Ready when you are
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-burgundy" />
              Clear guidance for first-time and move-up buyers
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-burgundy" />
              Seller strategy focused on preparation, pricing, and presentation
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-burgundy" />
              Local knowledge of Georgetown and Williamson County
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-burgundy" />
              Straightforward communication from first call to closing
            </li>
          </ul>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Consultation request — Forrest Hyde")}`}
            className="mt-6 inline-flex text-sm font-semibold text-burgundy underline-offset-4 hover:underline"
          >
            Or email {site.email} →
          </a>
        </aside>
      </div>
    </section>
  );
}
