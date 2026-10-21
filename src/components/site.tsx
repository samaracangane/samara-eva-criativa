import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRAND, SUPPORT_CONTACT, PLANS, validCheckout, type PlanId } from "@/config/site";
import { trackCheckout, pixelEnabled, getConsent, setConsent, loadPixel } from "@/lib/pixel";

export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md border border-dashed border-warning-foreground/40 bg-warning px-2 py-1 text-sm font-semibold text-warning-foreground">
      ⚠ A DEFINIR: {children}
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-display text-lg font-semibold text-primary">{BRAND}</Link>
        <nav className="flex gap-3 text-sm font-semibold sm:gap-6">
          <a href="/#como-funciona" className="hover:text-primary">Como funciona</a>
          <a href="/#planos" className="hover:text-primary">Planos</a>
          <a href="/#duvidas" className="hover:text-primary">Dúvidas</a>
        </nav>
      </div>
    </header>
  );
}

export function BuyButton({ plan, label }: { plan: PlanId; label?: string }) {
  const p = PLANS[plan];
  const url = validCheckout(p.checkout);
  const cls =
    "flex min-h-14 w-full items-center justify-center rounded-full px-6 text-center font-display text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40";
  if (!url)
    return (
      <div>
        <button disabled aria-disabled className={`${cls} cursor-not-allowed bg-muted text-muted-foreground`}>
          {label ?? p.cta}
        </button>
        {import.meta.env.DEV && (
          <p className="mt-2 text-center text-xs text-warning-foreground">
            Link de checkout Wiapy do {p.name} ainda não configurado.
          </p>
        )}
      </div>
    );
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-plan={plan}
      onClick={() => trackCheckout(p.name, p.price)}
      className={`${cls} bg-primary text-primary-foreground shadow-soft hover:brightness-110`}
    >
      {label ?? p.cta}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50 py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-primary">{BRAND}</p>
          <p className="mt-1">Suporte: {SUPPORT_CONTACT || <Pending>contato de suporte</Pending>}</p>
        </div>
        <nav className="flex flex-col gap-2 sm:items-end">
          <Link to="/privacidade" className="hover:underline">Política de privacidade</Link>
          <Link to="/termos" className="hover:underline">Termos de compra</Link>
          <Link to="/reembolso" className="hover:underline">Política de reembolso</Link>
          <CookieSettingsLink />
        </nav>
      </div>
    </footer>
  );
}

function CookieSettingsLink() {
  if (!pixelEnabled()) return null;
  return (
    <button className="text-left hover:underline sm:text-right" onClick={() => window.dispatchEvent(new Event("open-consent"))}>
      Configurações de cookies
    </button>
  );
}

/** Só aparece se o Pixel estiver configurado. */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!pixelEnabled()) return;
    if (!getConsent()) setOpen(true);
    else loadPixel();
    const h = () => setOpen(true);
    window.addEventListener("open-consent", h);
    return () => window.removeEventListener("open-consent", h);
  }, []);
  if (!open) return null;
  const choose = (v: "granted" | "denied") => { setConsent(v); setOpen(false); };
  return (
    <div role="dialog" aria-label="Cookies" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-lg rounded-2xl border bg-card p-4 shadow-soft">
      <p className="text-sm">
        Usamos cookies de publicidade (Meta Pixel) para medir nossos anúncios. Você pode aceitar ou recusar e mudar depois em "Configurações de cookies".
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => choose("denied")} className="flex-1 rounded-full border px-4 py-2 font-semibold">Recusar</button>
        <button onClick={() => choose("granted")} className="flex-1 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground">Aceitar</button>
      </div>
    </div>
  );
}
