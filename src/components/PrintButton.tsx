"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md border border-navy/20 bg-white px-3 py-2 text-sm font-semibold text-navy hover:bg-cream-dark"
    >
      Print this notice
    </button>
  );
}
