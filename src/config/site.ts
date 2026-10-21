// =====================================================================
// CONFIGURAÇÃO DA PÁGINA — edite aqui. Nunca invente dados.
// Campos vazios ("") ficam sinalizados na página como "A DEFINIR".
// =====================================================================

/** Link real do checkout Wiapy do Plano Essencial (R$ 9,90). */
export const WIAPY_CHECKOUT_ESSENCIAL = "";
/** Link real do checkout Wiapy do Plano Completo (R$ 14,99). */
export const WIAPY_CHECKOUT_COMPLETO = "";

/** ID real do Pixel da Meta (somente números). Vazio = pixel desativado. */
export const META_PIXEL_ID = "";

export const BRAND = "Samara Criar Art's";

/** E-mail ou canal de suporte real (ex.: e-mail, link de WhatsApp). */
export const SUPPORT_CONTACT = "";

/** Como os arquivos são entregues após a compra (texto real). */
export const DELIVERY_INFO = "";

/** Formato dos arquivos. */
export const FILE_FORMAT = "PDF";

/** Conteúdo real do Plano Essencial (um item por linha). */
export const ESSENCIAL_ITEMS: string[] = [];

/** Moldes adicionais do Plano Completo, por tema. */
export const COMPLETO_EXTRA: { tema: string; itens: string[] }[] = [];

/** Imagens reais da galeria (importe de src/assets e adicione aqui). */
export const GALLERY_IMAGES: { src: string; alt: string }[] = [];

/** Textos reais das políticas. Vazio = aviso "a definir". */
export const POLICIES = {
  privacidade: "",
  termos: "",
  reembolso: "",
};

export type PlanId = "essencial" | "completo";

export const PLANS = {
  essencial: {
    id: "essencial" as PlanId,
    name: "Plano Essencial",
    price: 9.9,
    priceLabel: "R$ 9,90",
    description: "Uma seleção de moldes de EVA para quem quer começar.",
    cta: "QUERO O KIT ESSENCIAL",
    checkout: WIAPY_CHECKOUT_ESSENCIAL,
  },
  completo: {
    id: "completo" as PlanId,
    name: "Plano Completo",
    price: 14.99,
    priceLabel: "R$ 14,99",
    description: "Mais variedade de moldes para ampliar suas possibilidades de criação.",
    cta: "QUERO O KIT COMPLETO",
    checkout: WIAPY_CHECKOUT_COMPLETO,
  },
};

/** Retorna o link só se for uma URL https válida; senão null (botão desativado). */
export function validCheckout(url: string): string | null {
  try {
    const u = new URL(url.trim());
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}
