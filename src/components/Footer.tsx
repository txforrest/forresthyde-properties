import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white no-print">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 inline-flex rounded-md bg-white p-2">
              <Image
                src="/logo-316.png"
                alt="316 Realty Group logo"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="font-serif text-lg font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-white/80">{site.brokerage}</p>
            <p className="mt-1 text-sm text-white/70">
              TREC License #{site.license}
            </p>
            <p className="mt-3 text-sm text-white/70">
              Based in {site.basedIn}. Serving all of Texas, with a focus on{" "}
              {site.specialty}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white underline-offset-2 hover:underline break-all"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  Request a consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Brokerage disclosure
            </h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              {site.name} is a licensed real estate sales agent with{" "}
              {site.brokerage}. Sponsoring broker: {site.broker.name}, TREC
              License #{site.broker.license}. Phone: {site.broker.phone}.
            </p>
          </div>
        </div>

        {/* TREC-required links — text-sm (≥12pt), readily noticeable */}
        <div className="mt-10 rounded-lg border border-white/20 bg-white/5 p-4 sm:p-5">
          <p className="mb-3 text-sm font-semibold text-white">
            Texas Real Estate Commission notices
          </p>
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <li>
              <a
                href={site.trec.consumerProtection}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
              >
                TREC Consumer Protection Notice
              </a>
            </li>
            <li>
              <Link
                href={site.trec.iabsPage}
                className="text-sm font-medium text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
              >
                TREC Information About Brokerage Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.brokerage}. All
            rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true">🏠</span>
            We support equal housing opportunity. All real estate advertising
            complies with fair housing laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
