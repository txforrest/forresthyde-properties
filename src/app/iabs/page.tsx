import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Information About Brokerage Services (IABS)",
  description:
    "TREC Information About Brokerage Services notice for Forrest Hyde (License #701231) and sponsoring broker Tim Goss (License #621929), 316 Realty Group.",
  robots: { index: true, follow: true },
};

function FieldRow({
  label,
  value,
  license,
  phone,
  email,
}: {
  label: string;
  value: string;
  license?: string;
  phone?: string;
  email?: string;
}) {
  return (
    <div className="grid gap-2 border-b border-black/15 py-3 sm:grid-cols-[1.2fr_0.5fr_0.7fr_1fr] sm:items-end sm:gap-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-black/60">
          {label}
        </p>
        <p className="mt-0.5 border-b border-dotted border-black/40 pb-0.5 text-sm font-medium text-black">
          {value || "\u00a0"}
        </p>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-black/60">
          License No.
        </p>
        <p className="mt-0.5 border-b border-dotted border-black/40 pb-0.5 text-sm font-medium text-black">
          {license || "—"}
        </p>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-black/60">
          Phone
        </p>
        <p className="mt-0.5 border-b border-dotted border-black/40 pb-0.5 text-sm font-medium text-black">
          {phone || "—"}
        </p>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-black/60">
          Email
        </p>
        <p className="mt-0.5 break-all border-b border-dotted border-black/40 pb-0.5 text-sm font-medium text-black">
          {email || "—"}
        </p>
      </div>
    </div>
  );
}

export default function IabsPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-6 flex flex-col gap-3 no-print sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-burgundy underline-offset-2 hover:underline"
          >
            ← Back to home
          </Link>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <a
              href={site.trec.iabsBlank}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-navy px-3 py-2 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              Official blank IABS PDF
            </a>
          </div>
        </div>

        <article className="print-friendly rounded-xl border border-navy/10 bg-white p-6 shadow-sm sm:p-10">
          <header className="border-b-2 border-black pb-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/70">
              Texas Real Estate Commission
            </p>
            <h1 className="mt-2 font-serif text-2xl font-bold uppercase tracking-wide text-black sm:text-3xl">
              Information About Brokerage Services
            </h1>
            <p className="mt-2 text-sm text-black/80">
              Form IABS 1-2 style notice · Completed for {site.brokerage}
            </p>
          </header>

          <p className="mt-6 text-sm leading-relaxed text-black">
            Texas law requires all real estate license holders to give the
            following information about brokerage services to prospective
            buyers, tenants, sellers and landlords.
          </p>

          <section className="mt-8">
            <h2 className="border-b border-black pb-1 text-sm font-bold uppercase tracking-wide text-black">
              Types of Real Estate License Holders
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black">
              <li>
                A <strong>BROKER</strong> is responsible for all brokerage
                activities, including acts performed by sales agents sponsored
                by the broker.
              </li>
              <li>
                A <strong>SALES AGENT</strong> must be sponsored by a broker and
                works with clients on behalf of the broker.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="border-b border-black pb-1 text-sm font-bold uppercase tracking-wide text-black">
              A Broker&apos;s Minimum Duties Required by Law
            </h2>
            <p className="mt-2 text-sm italic text-black/80">
              (A client is the person or party that the broker represents.)
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black">
              <li>
                Put the interests of the client above all others, including the
                broker&apos;s own interests;
              </li>
              <li>
                Inform the client of any material information about the property
                or transaction received by the broker;
              </li>
              <li>
                Answer the client&apos;s questions and present any offer to or
                counter-offer from the client; and
              </li>
              <li>
                Treat all parties to a real estate transaction honestly and
                fairly.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="border-b border-black pb-1 text-sm font-bold uppercase tracking-wide text-black">
              A License Holder Can Represent a Party in a Real Estate
              Transaction
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-black">
              <div>
                <h3 className="font-bold">
                  AS AGENT FOR OWNER (SELLER/LANDLORD):
                </h3>
                <p className="mt-1">
                  The broker becomes the property owner&apos;s agent through an
                  agreement with the owner, usually in a written listing to sell
                  or property management agreement. An owner&apos;s agent must
                  perform the broker&apos;s minimum duties above and must inform
                  the owner of any material information about the property or
                  transaction known by the agent, including information
                  disclosed to the agent or subagent by the buyer or
                  buyer&apos;s agent.
                </p>
              </div>

              <div>
                <h3 className="font-bold">AS AGENT FOR BUYER/TENANT:</h3>
                <p className="mt-1">
                  The broker becomes the buyer/tenant&apos;s agent by agreeing
                  to represent the buyer, usually through a written
                  representation agreement. A buyer&apos;s agent must perform
                  the broker&apos;s minimum duties above and must inform the
                  buyer of any material information about the property or
                  transaction known by the agent, including information
                  disclosed to the agent by the seller or seller&apos;s agent.
                </p>
              </div>

              <div>
                <h3 className="font-bold">
                  AS AGENT FOR BOTH — INTERMEDIARY:
                </h3>
                <p className="mt-1">
                  To act as an intermediary between the parties the broker must
                  first obtain the written agreement of each party to the
                  transaction. The written agreement must state who will pay the
                  broker and, in conspicuous bold or underlined print, set forth
                  the broker&apos;s obligations as an intermediary. A broker who
                  acts as an intermediary:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Must treat all parties to the transaction impartially and
                    fairly;
                  </li>
                  <li>
                    May, with the parties&apos; written consent, appoint a
                    different license holder associated with the broker to each
                    party (owner and buyer) to communicate with, provide
                    opinions and advice to, and carry out the instructions of
                    each party to the transaction.
                  </li>
                  <li>
                    Must not, unless specifically authorized in writing to do so
                    by the party, disclose:
                    <ul className="mt-1 list-disc pl-5">
                      <li>
                        that the owner will accept a price less than the written
                        asking price;
                      </li>
                      <li>
                        that the buyer/tenant will pay a price greater than the
                        price submitted in a written offer; and
                      </li>
                      <li>
                        any confidential information or any other information
                        that a party specifically instructs the broker in
                        writing not to disclose, unless required to do so by
                        law.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">AS SUBAGENT:</h3>
                <p className="mt-1">
                  A license holder acts as a subagent when aiding a buyer in a
                  transaction without an agreement to represent the buyer. A
                  subagent can assist the buyer but does not represent the buyer
                  and must place the interests of the owner first.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="border-b border-black pb-1 text-sm font-bold uppercase tracking-wide text-black">
              To Avoid Disputes, All Agreements Between You and a Broker Should
              Be in Writing and Clearly Establish
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black">
              <li>
                The broker&apos;s duties and responsibilities to you, and your
                obligations under the representation agreement.
              </li>
              <li>
                Who will pay the broker for services provided to you, when
                payment will be made and how the payment will be calculated.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="border-b border-black pb-1 text-sm font-bold uppercase tracking-wide text-black">
              License Holder Contact Information
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-black">
              This notice is being provided for information purposes. It does
              not create an obligation for you to use the broker&apos;s
              services. Please acknowledge receipt of this notice below and
              retain a copy for your records.
            </p>

            <div className="mt-4">
              <FieldRow
                label="Licensed Broker / Broker Firm Name or Primary Assumed Business Name"
                value={site.brokerage}
                license={site.broker.license}
                phone={site.broker.phone}
                email="—"
              />
              <FieldRow
                label="Designated Broker of Firm"
                value={site.broker.name}
                license={site.broker.license}
                phone={site.broker.phone}
                email="—"
              />
              <FieldRow
                label="Licensed Supervisor of Sales Agent/Associate"
                value={site.broker.name}
                license={site.broker.license}
                phone={site.broker.phone}
                email="—"
              />
              <FieldRow
                label="Sales Agent/Associate's Name"
                value={site.name}
                license={site.license}
                phone={site.phone}
                email={site.email}
              />
            </div>
          </section>

          <section className="mt-10 grid gap-6 border-t border-black/20 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-black/60">
                Buyer/Tenant/Seller/Landlord acknowledgment
              </p>
              <div className="mt-8 border-b border-black" />
              <p className="mt-1 text-xs text-black/60">Signature / Date</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-black/60">
                License holder acknowledgment
              </p>
              <div className="mt-8 border-b border-black" />
              <p className="mt-1 text-xs text-black/60">
                {site.name} · License #{site.license}
              </p>
            </div>
          </section>

          <footer className="mt-10 border-t border-black/15 pt-4 text-xs leading-relaxed text-black/70">
            <p>
              This HTML version follows the structure of TREC form{" "}
              <strong>IABS 1-2</strong> for readability and printing. For the
              official blank PDF, see:{" "}
              <a
                href={site.trec.iabsBlank}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                TREC Information About Brokerage Services (IABS 1-2) PDF
              </a>
              .
            </p>
            <p className="mt-2">
              Sponsoring broker: {site.broker.name}, License #
              {site.broker.license}, {site.brokerage}. Sales agent: {site.name},
              License #{site.license}.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
