export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
            How I help
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Buyers and sellers, supported end to end
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Whether you&apos;re purchasing your next home or preparing to sell,
            you get practical advice, timely updates, and advocacy focused on
            your goals — not pressure.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-navy/10 bg-cream p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-navy">
              For buyers
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal">
              <li className="flex gap-3">
                <span className="font-semibold text-burgundy">01</span>
                Clarify budget, neighborhoods, and must-haves before touring
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-burgundy">02</span>
                Search actively across Georgetown, Williamson County, and
                statewide as needed
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-burgundy">03</span>
                Evaluate properties, negotiate offers, and coordinate inspections
                through closing
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-navy/10 bg-cream p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-navy">
              For sellers
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal">
              <li className="flex gap-3">
                <span className="font-semibold text-burgundy">01</span>
                Review pricing strategy based on comparable sales and your
                timeline
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-burgundy">02</span>
                Prepare the home for market with clear, prioritized
                recommendations
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-burgundy">03</span>
                Market thoughtfully, manage showings, and negotiate toward a
                clean closing
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
