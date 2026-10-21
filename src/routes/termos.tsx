import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/Legal";
import { POLICIES } from "@/config/site";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [
    { title: "Termos de compra | Samara Criar Art's" },
    { name: "description", content: "Termos de compra dos moldes digitais de EVA." },
    { property: "og:title", content: "Termos de compra | Samara Criar Art's" },
    { property: "og:description", content: "Condições de compra dos kits digitais." },
  ] }),
  component: () => <Legal title="Termos de compra" text={POLICIES.termos} />,
});
