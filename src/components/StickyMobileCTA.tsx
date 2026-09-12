import { site } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md no-print sm:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex w-full items-center justify-center rounded-md bg-burgundy px-4 py-3.5 text-base font-semibold text-white shadow-sm transition active:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
      >
        Call {site.phone}
      </a>
    </div>
  );
}
