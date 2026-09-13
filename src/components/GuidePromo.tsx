import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Home-page band pointing at the relocation guide lead magnet.
 */
export function GuidePromo() {
  return (
    <section
      id="guide"
      className="scroll-mt-24 bg-navy py-16 text-white sm:py-20"
      aria-labelledby="guide-promo-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Free download · {site.guide.pages} pages
            </p>
            <h2
              id="guide-promo-heading"
              className="mt-2 font-serif text-3xl font-semibold sm:text-4xl"
            >
              The Honest Georgetown Relocation Guide
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/85">
              What your tax bill will actually be, which neighborhoods carry a
              hidden second tax, why a Georgetown address does not mean
              Georgetown schools, and how long the drive really takes. Every
              number sourced from the county tax roll, the school district and
              the city budget.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "The four taxing entities on your bill",
                "MUD and PID exposure by neighborhood",
                "Georgetown addresses outside Georgetown ISD",
                "Measured commutes to Austin, Dell and Samsung",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-white/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <p className="font-serif text-xl font-semibold">
              Built to talk you out of the wrong house
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              No drip campaign. Give me a name and an email and the download
              starts on the next screen.
            </p>
            <Link
              href={site.guide.path}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-base font-semibold text-navy shadow-sm transition hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get the free guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
