"use client";

import { useEffect } from "react";

/**
 * Kicks off the PDF download once on mount. The visible download button on the
 * page is the fallback if the browser blocks the automatic start.
 */
export function AutoDownload({
  href,
  fileName,
}: {
  href: string;
  fileName: string;
}) {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [href, fileName]);

  return null;
}
