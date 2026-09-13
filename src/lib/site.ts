export const site = {
  name: "Forrest Hyde",
  title: "Forrest Hyde | Georgetown & Williamson County Realtor®",
  description:
    "Forrest Hyde, Texas Realtor® with 316 Realty Group. Serving all of Texas with a specialty in Williamson County and Georgetown, TX. TREC license #701231. Call 512-826-4568.",
  url: "https://www.forresthyde.properties",
  brokerage: "316 Realty Group",
  license: "701231",
  phone: "512-826-4568",
  phoneTel: "+15128264568",
  email: "ForrestHydeRealtor@gmail.com",
  market: "Texas",
  specialty: "Williamson County",
  basedIn: "Georgetown, TX",
  broker: {
    name: "Tim Goss",
    license: "621929",
    phone: "832-567-5853",
    phoneTel: "+18325675853",
    brokerage: "316 Realty Group",
  },
  trec: {
    consumerProtection:
      "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf",
    iabsBlank:
      "https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-2.pdf",
    iabsPage: "/iabs",
  },
  formspreeEndpoint: "https://formspree.io/f/xaeyzgyp",
  guide: {
    path: "/guide",
    thanksPath: "/guide/thanks",
    title: "The Honest Georgetown Relocation Guide",
    subtitle:
      "What your tax bill will actually be, which neighborhoods carry a hidden second tax, why a Georgetown address does not mean Georgetown schools, and how long the drive really takes.",
    file: "/the-honest-georgetown-relocation-guide.pdf",
    downloadName: "The-Honest-Georgetown-Relocation-Guide.pdf",
    pages: 17,
  },
} as const;
