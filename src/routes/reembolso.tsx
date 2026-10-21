import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/Legal";
import { POLICIES } from "@/config/site";

export const Route = createFileRoute("/reembolso")({
  head: () => ({ meta: [
    { title: "Política de reembolso | Samara Criar Art's" },
    { name: "description", content: "Política de reembolso dos kits digitais de moldes de EVA." },
    { property: "og:title", content: "Política de reembolso | Samara Criar Art's" },
    { property: "og:description", content: "Condições de reembolso." },
  ] }),
  component: () => <Legal title="Política de reembolso" text={POLICIES.reembolso} />,
});
