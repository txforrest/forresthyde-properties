"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "error";

/**
 * Guide download gate — posts to Formspree over AJAX, then sends the visitor
 * to the thank-you page where the PDF download starts.
 *
 * Progressive enhancement: the <form> keeps a real `action`/`method` plus a
 * `_next` field, so a submit without JavaScript still reaches Formspree and
 * still redirects to the same thank-you page.
 */
export function GuideForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);

      router.push(site.guide.thanksPath);
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form
      id="get-the-guide"
      action={site.formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="scroll-mt-24 rounded-2xl border border-navy/10 bg-cream p-6 shadow-sm sm:p-8"
    >
      <input
        type="hidden"
        name="_subject"
        value="Guide download — The Honest Georgetown Relocation Guide"
      />
      <input type="hidden" name="_next" value={`${site.url}${site.guide.thanksPath}`} />
      <input type="hidden" name="lead_source" value="Georgetown relocation guide" />
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <h2 className="font-serif text-2xl font-semibold text-navy">
        Get the guide
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Tell me where to send it and the download starts on the next screen. No
        drip campaign — I follow up once, and only if you want me to.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="guide-name"
            className="block text-sm font-semibold text-navy"
          >
            First name
          </label>
          <input
            id="guide-name"
            name="name"
            type="text"
            required
            autoComplete="given-name"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
          />
        </div>

        <div>
          <label
            htmlFor="guide-email"
            className="block text-sm font-semibold text-navy"
          >
            Email
          </label>
          <input
            id="guide-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
          />
        </div>

        <div>
          <label
            htmlFor="guide-timeline"
            className="block text-sm font-semibold text-navy"
          >
            Timeline <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id="guide-timeline"
            name="timeline"
            defaultValue=""
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20"
          >
            <option value="">Just researching</option>
            <option value="0-3 months">Moving in 0–3 months</option>
            <option value="3-6 months">Moving in 3–6 months</option>
            <option value="6-12 months">Moving in 6–12 months</option>
            <option value="12+ months">More than a year out</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-burgundy px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send me the guide"}
      </button>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-md border border-burgundy/30 bg-white p-3 text-sm leading-relaxed text-charcoal"
        >
          That did not go through. You can{" "}
          <a
            href={site.guide.file}
            download={site.guide.downloadName}
            className="font-semibold text-burgundy underline underline-offset-2"
          >
            download the guide directly
          </a>{" "}
          or email me at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-burgundy underline underline-offset-2"
          >
            {site.email}
          </a>
          .
        </p>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted">
        I use your email to send the guide and answer questions about a specific
        address. I do not sell or share it.
      </p>
    </form>
  );
}
