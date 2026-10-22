import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];
  if (host === "invest.forresthyde.properties") {
    const url = request.nextUrl.clone();
    if (url.pathname === "/") {
      url.pathname = "/investments";
      return NextResponse.rewrite(url);
    }
    if (url.pathname === "/investments" || url.pathname === "/investments/") {
      url.pathname = "/";
      return NextResponse.redirect(url, 308);
    }
    // Keep brokerage pages on the brokerage's own domain.
    url.protocol = "https:";
    url.hostname = "forresthyde.properties";
    url.port = "";
    return NextResponse.redirect(url, 307);
  }
  // After cutover, the investment experience's public home is its own hostname.
  // Host-scoped so Vercel preview URLs can still render /investments directly.
  if (
    (host === "forresthyde.properties" || host === "www.forresthyde.properties") &&
    (request.nextUrl.pathname === "/investments" || request.nextUrl.pathname === "/investments/")
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "invest.forresthyde.properties";
    url.port = "";
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
