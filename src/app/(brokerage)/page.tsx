import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Areas } from "@/components/Areas";
import { GuidePromo } from "@/components/GuidePromo";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/logo-316.png`,
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "AdministrativeArea", name: "Williamson County" },
      { "@type": "City", name: "Georgetown" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Georgetown",
      addressRegion: "TX",
      addressCountry: "US",
    },
    memberOf: {
      "@type": "Organization",
      name: site.brokerage,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "TREC License",
      value: site.license,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <Services />
      <Areas />
      <GuidePromo />
      <ContactForm />
    </>
  );
}
