import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/Legal";
import { POLICIES } from "@/config/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Política de privacidade | Samara Criar Art's" },
    { name: "description", content: "Política de privacidade da Samara Criar Art's." },
    { property: "og:title", content: "Política de privacidade | Samara Criar Art's" },
    { property: "og:description", content: "Como tratamos seus dados." },
  ] }),
  component: () => <Legal title="Política de privacidade" text={POLICIES.privacidade} />,
});
