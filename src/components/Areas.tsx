import { site } from "@/lib/site";

const areas = [
  "Georgetown",
  "Round Rock",
  "Cedar Park",
  "Leander",
  "Hutto",
  "Taylor",
  "Liberty Hill",
  "Greater Austin metro",
];

export function Areas() {
  return (
    <section
      id="areas"
      className="scroll-mt-24 bg-cream py-16 sm:py-20"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
              Area expertise
            </p>
            <h2
              id="areas-heading"
              className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl"
            >
              Rooted in Georgetown. Licensed across Texas.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              I live and work in {site.basedIn}, and I specialize in helping
              clients navigate {site.specialty} — from established Georgetown
              neighborhoods to growing communities across the county. I&apos;m
              also licensed to assist with residential real estate anywhere in
              Texas when your search or sale takes you farther afield.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Every market is different. I&apos;ll walk you through current
              inventory, neighborhood fit, and transaction timing based on your
              situation — without inflated claims or recycled statistics.
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-navy">
              Communities I often work in
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <li
                  key={area}
                  className="rounded-lg bg-cream px-3 py-2.5 text-sm font-medium text-charcoal"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              Looking elsewhere in Texas? Call or send a note — I&apos;m happy
              to discuss how I can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
