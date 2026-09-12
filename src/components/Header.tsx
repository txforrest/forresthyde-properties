import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cream-dark/80 bg-white/95 backdrop-blur-md no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
          aria-label={`${site.name} — ${site.brokerage} home`}
        >
          <Image
            src="/logo-316.png"
            alt="316 Realty Group logo"
            width={160}
            height={56}
            className="h-10 w-auto sm:h-12"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base font-semibold text-navy">
              {site.name}
            </span>
            <span className="text-xs text-muted">{site.brokerage}</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-navy md:flex"
          aria-label="Primary"
        >
          <a href="#services" className="hover:text-burgundy transition-colors">
            Services
          </a>
          <a href="#areas" className="hover:text-burgundy transition-colors">
            Areas
          </a>
          <a href="#contact" className="hover:text-burgundy transition-colors">
            Contact
          </a>
          <Link href="/iabs" className="hover:text-burgundy transition-colors">
            IABS
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center rounded-md bg-burgundy px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy sm:px-4"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
