import type { Metadata } from "next";
import Link from "next/link";
import { GuideForm } from "@/components/GuideForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Honest Georgetown Relocation Guide (Free Download)",
  description:
    "A free 17-page Georgetown, TX relocation guide: the four taxing entities on your bill, the homestead exemption gap, MUD and PID districts, school-boundary surprises, and real commute times. Every number sourced.",
  alternates: { canonical: `${site.url}${site.guide.path}` },
  openGraph: {
    type: "article",
    url: `${site.url}${site.guide.path}`,
    title: `${site.guide.title} — free download`,
    description: site.guide.subtitle,
  },
};

const contents = [
  {
    page: "3",
    title: "The four taxing entities on a Georgetown bill",
    body: "City, county, school district and the districts nobody mentions — with what each one actually costs you.",
  },
  {
    page: "4",
    title: "The homestead exemption gap",
    body: "The timing quirk that costs new arrivals roughly $1,600 in their first year, and how to plan around it.",
  },
  {
    page: "7",
    title: "MUD and PID districts",
    body: "A $4,140 annual swing on the same house, three miles apart. This is the number brochures leave out.",
  },
  {
    page: "8",
    title: "Which neighborhoods carry a district",
    body: "A neighborhood-by-neighborhood read on MUDs, PIDs and road districts before you tour anything.",
  },
  {
    page: "10",
    title: "Georgetown addresses that are not Georgetown ISD",
    body: "Why the mailing address on the listing tells you nothing about where your kids get assigned.",
  },
  {
    page: "12",
    title: "Real commute times",
    body: "Measured drive ranges to Austin, Dell and Samsung — at the hours you would actually be driving.",
  },
  {
    page: "13",
    title: "Neighborhood snapshots",
    body: "Housing stock, taxing districts, school assignment and drive times, side by side.",
  },
  {
    page: "14",
    title: "Utilities and the forgotten bills",
    body: "What the monthly carrying cost looks like once utilities and dues are on the page.",
  },
  {
    page: "15",
    title: "Your pre-offer checklist",
    body: "The verifications to run on a specific address before you write an offer on it.",
  },
];

export default function GuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: site.guide.title,
    numberOfPages: site.guide.pages,
    url: `${site.url}${site.guide.path}`,
    inLanguage: "en-US",
    about: "Relocating to Georgetown, Texas",
    author: { "@type": "Person", name: site.name },
    publisher: { "@type": "Organization", name: site.brokerage },
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero + form */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
                Free download · {site.guide.pages} pages
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">
                The Honest Georgetown Relocation Guide
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal">
                Most relocation guides are brochures. This one is built to talk
                you out of the wrong house — what your tax bill will actually
                be, which neighborhoods carry a hidden second tax, why a
                Georgetown address does not mean Georgetown schools, and how
                long the drive really takes.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Every number comes from a primary source — the Williamson County
                tax roll, the school district, the city budget — and every source
                is linked so you can check it yourself. Where sources disagree,
                the guide says so instead of picking the prettier number.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Sourced tax math, not estimates",
                  "MUD and PID exposure by neighborhood",
                  "School boundary reality check",
                  "Measured commutes to Austin employers",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#get-the-guide"
                  className="inline-flex items-center justify-center rounded-md bg-burgundy px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                >
                  Get the free guide
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-sm font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline"
                >
                  Or call {site.phone}
                </a>
              </div>

              <p className="mt-6 text-sm text-muted">
                {site.name}, Realtor® · {site.brokerage} · TREC License #
                {site.license}
              </p>
            </div>

            <div className="lg:pt-2">
              <GuideForm />
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
            What&apos;s inside
          </p>
          <h2 className="mt-2 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Nine sections, each one answering a question that costs money to get
            wrong
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item) => (
              <div key={item.title} className="border-t border-navy/10 pt-5">
                <p className="font-mono text-xs font-semibold tracking-wider text-burgundy">
                  PAGE {item.page}
                </p>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why honesty-first */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
                Why it leads with the bad news
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                Fast growth is the reason this guide exists
              </h2>
              <p className="mt-5 leading-relaxed text-charcoal">
                Georgetown has been the fastest-growing city in the country among
                cities over 50,000 people. When a town adds thousands of people a
                year, it builds new subdivisions on the edges — and to pay for
                the water lines, roads and drainage out there, it creates special
                taxing districts.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal">
                Two houses that look identical, priced identically, three miles
                apart, can carry annual tax bills thousands of dollars apart.
                Nobody hands you that comparison at an open house. So it&apos;s
                in here, with the arithmetic shown and the sources linked.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy">
                Questions about a specific address?
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                I will pull the tax roll and confirm the school assignment for
                any Georgetown address — whether or not you are working with me.
                Send me the address and I will send back what it actually costs
                to own.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark"
                >
                  Call {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Tax and school check for a Georgetown address",
                  )}`}
                  className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-cream-dark"
                >
                  Email me the address
                </a>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted">
                This guide is general information, not tax, legal or financial
                advice. Rates, exemptions, boundaries and dues change — verify
                anything material for a specific property against the county tax
                roll, the school district and the HOA.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#get-the-guide"
              className="inline-flex items-center justify-center rounded-md bg-burgundy px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-burgundy-dark"
            >
              Get the free guide
            </a>
            <p className="mt-4 text-sm text-muted">
              Already downloaded it?{" "}
              <Link
                href="/#contact"
                className="font-semibold text-burgundy underline-offset-2 hover:underline"
              >
                Request a consultation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
