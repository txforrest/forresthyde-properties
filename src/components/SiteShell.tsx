"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const investment = usePathname().startsWith("/investments");
  if (investment) return <>{children}</>;
  return <><Header /><main className="pb-20 sm:pb-0">{children}</main><Footer /><StickyMobileCTA /></>;
}
