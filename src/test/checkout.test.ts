import { describe, it, expect } from "vitest";
import { validCheckout, PLANS, WIAPY_CHECKOUT_ESSENCIAL, WIAPY_CHECKOUT_COMPLETO } from "@/config/site";

describe("checkout", () => {
  it("empty link disables button", () => expect(validCheckout("")).toBeNull());
  it("non-https rejected", () => expect(validCheckout("http://x.com")).toBeNull());
  it("https accepted", () => expect(validCheckout("https://pay.wiapy.com/a")).toBe("https://pay.wiapy.com/a"));
  it("each plan uses its own link", () => {
    expect(PLANS.essencial.checkout).toBe(WIAPY_CHECKOUT_ESSENCIAL);
    expect(PLANS.completo.checkout).toBe(WIAPY_CHECKOUT_COMPLETO);
    expect(PLANS.essencial.priceLabel).toBe("R$ 9,90");
    expect(PLANS.completo.priceLabel).toBe("R$ 14,99");
  });
});
