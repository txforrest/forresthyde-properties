import { site } from "@/lib/site";

export function TrustStrip() {
  return (
    <section
      className="border-y border-navy/10 bg-navy text-white"
      aria-label="Credentials"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-4 text-center text-sm font-medium tracking-wide sm:flex-row sm:gap-0 sm:px-6 sm:text-base">
        <span>TREC #{site.license}</span>
        <span className="hidden px-4 text-white/40 sm:inline" aria-hidden="true">
          ·
        </span>
        <span>{site.brokerage}</span>
        <span className="hidden px-4 text-white/40 sm:inline" aria-hidden="true">
          ·
        </span>
        <span>Serving Texas</span>
      </div>
    </section>
  );
}
