"use client";

import { useEffect } from "react";

declare global { interface Window { adsbygoogle?: unknown[]; } }

export function AdSlot({ slot }: { slot?: string }) {
  // Do not render ad slots until approval and compliant consent handling are implemented.
  const client = process.env.NEXT_PUBLIC_ADSENSE_APPROVED === "true" ? process.env.NEXT_PUBLIC_ADSENSE_CLIENT : undefined;
  useEffect(() => {
    if (!client || !slot) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, [client, slot]);
  if (!client || !slot) return null;
  return <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />;
}
