import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

// Brokerage chrome is chosen by route structure (not usePathname) so that
// host rewrites, such as invest.forresthyde.properties → /investments,
// can never hydrate with the wrong header and footer.
export default function BrokerageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
