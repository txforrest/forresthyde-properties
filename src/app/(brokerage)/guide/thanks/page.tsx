import type { Metadata } from "next";
import Link from "next/link";
import { AutoDownload } from "@/components/AutoDownload";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your guide is downloading",
  description:
    "Download The Honest Georgetown Relocation Guide — tax math, MUD and PID exposure, school boundaries and real commute times for Georgetown, TX.",
  robots: { index: false, follow: true },
};

const nextSteps = [
  {
    title: "Start on page 7",
    body: "MUD and PID districts are the biggest single swing in your carrying cost. If you read one section first, read that one.",
  },
  {
    title: "Check the school assignment yourself",
    body: "Page 10 explains why a Georgetown mailing address tells you nothing about district assignment. Verify per address, every time.",
  },
  {
    title: "Send me an address",
    body: "I will pull the tax roll and confirm the school assignment for any Georgetown property, whether or not you are working with me.",
  },
];

export default function GuideThanksPage() {
  return (
    <>
      <AutoDownload
        href={site.guide.file}
        fileName={site.guide.downloadName}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
            You&apos;re all set
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Your guide is downloading
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-charcoal">
            {site.guide.title} — all {site.guide.pages} pages, sources linked.
            If the download did not start automatically, use the button below.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.guide.file}
              download={site.guide.downloadName}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            >
              Download the PDF
            </a>
            <a
              href={site.guide.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline"
            >
              Open it in a new tab
            </a>
          </div>

          <div className="mt-12 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Where to start
            </h2>
            <ul className="mt-5 space-y-5">
              {nextSteps.map((step) => (
                <li key={step.title}>
                  <p className="font-semibold text-navy">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-navy/10 pt-6">
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
                Email {site.email}
              </a>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted">
            <Link
              href="/"
              className="font-semibold text-burgundy underline-offset-2 hover:underline"
            >
              ← Back to home
            </Link>
          </p>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            {site.name}, Realtor® · {site.brokerage} · TREC License #
            {site.license}. This guide is general information, not tax, legal or
            financial advice, and reading it does not create an agency
            relationship. If you are already represented by another broker, this
            is not a solicitation of that representation.
          </p>
        </div>
      </section>
    </>
  );
}
