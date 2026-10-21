import { META_PIXEL_ID } from "@/config/site";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[] };
    _fbq?: unknown;
  }
}

const KEY = "sca_ads_consent";
export const pixelEnabled = () => /^\d+$/.test(META_PIXEL_ID);
export const getConsent = () =>
  typeof window === "undefined" ? null : (localStorage.getItem(KEY) as "granted" | "denied" | null);

export function setConsent(v: "granted" | "denied") {
  localStorage.setItem(KEY, v);
  localStorage.setItem(KEY + "_at", new Date().toISOString());
  if (v === "granted") loadPixel();
  else window.fbq?.("consent", "revoke");
}

let loaded = false;
export function loadPixel() {
  if (!pixelEnabled() || getConsent() !== "granted") return;
  if (loaded) { window.fbq?.("consent", "grant"); return; }
  loaded = true;
  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true; t.src = v;
    b.head.appendChild(t);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  window.fbq!("init", META_PIXEL_ID, {}, { agent: "lovable" });
  window.fbq!("track", "PageView");
  window.fbq!("track", "ViewContent", { content_name: "Moldes de EVA" });
}

/** Clique no botão de compra. Purchase NÃO é disparado aqui (só via Wiapy após confirmação). */
export function trackCheckout(plan: string, value: number) {
  if (pixelEnabled() && getConsent() === "granted") {
    window.fbq?.("track", "InitiateCheckout", { value, currency: "BRL", content_name: plan }, { eventID: crypto.randomUUID() });
  }
  console.info("[clique checkout]", plan);
}
