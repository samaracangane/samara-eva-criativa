import { createFileRoute } from "@tanstack/react-router";
import { FileText, FolderOpen, Layers, ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Header, Footer, BuyButton, Pending, ConsentBanner } from "@/components/site";
import {
  PLANS, ESSENCIAL_ITEMS, COMPLETO_EXTRA, GALLERY_IMAGES, FILE_FORMAT, DELIVERY_INFO, SUPPORT_CONTACT,
} from "@/config/site";

const TITLE = "Moldes de EVA em PDF para imprimir | Samara Criar Art's";
const DESC = "Kits digitais de moldes de EVA em PDF para imprimir. Escolha entre o Plano Essencial (R$ 9,90) e o Plano Completo (R$ 14,99).";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: TITLE }, { name: "description", content: DESC },
    { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
  ] }),
  component: Index,
});

function Section({ id, title, sub, children, className = "" }: { id?: string; title: string; sub?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-16 px-4 py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold text-primary sm:text-3xl">{title}</h2>
        {sub && <p className="mt-2 text-center text-muted-foreground">{sub}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = GALLERY_IMAGES.length
    ? GALLERY_IMAGES
    : Array.from({ length: 6 }, (_, i) => ({ src: "", alt: `Espaço reservado ${i + 1}` }));
  const loop = [...items, ...items];
  return (
    <div className="no-scrollbar overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <ul className="marquee flex w-max">
        {loop.map((img, i) => (
          <li key={i} aria-hidden={i >= items.length} className="w-56 shrink-0 pr-4 sm:w-64">
            {img.src ? (
              <img src={img.src} alt={img.alt} width={256} height={320} loading="lazy" decoding="async"
                className="aspect-[4/5] w-full rounded-2xl bg-muted object-cover shadow-soft" />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-accent p-4 text-center text-sm text-accent-foreground">
                <FileText className="mb-2" aria-hidden />
                ESPAÇO RESERVADO<br />Substituir por imagem real do molde
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="space-y-2">{items.map((t) => <li key={t} className="flex gap-2"><span className="text-primary">✓</span>{t}</li>)}</ul>;
}

function Index() {
  const faqs: [string, React.ReactNode][] = [
    ["O produto é físico ou digital?", "É um produto 100% digital. Nada é enviado pelo correio."],
    ["Como receberei os arquivos?", DELIVERY_INFO || <Pending>forma de entrega configurada na Wiapy</Pending>],
    ["Como posso abrir e imprimir os PDFs?", `Os arquivos estão em formato ${FILE_FORMAT}. Você pode abri-los com um leitor de PDF gratuito no celular ou computador e imprimir em uma impressora comum ou em uma gráfica.`],
    ["Qual a diferença entre os planos?", COMPLETO_EXTRA.length ? "O Completo inclui todo o conteúdo do Essencial mais moldes adicionais, listados na seção de planos." : <Pending>conteúdo de cada kit</Pending>],
    ["Como entro em contato para obter suporte?", SUPPORT_CONTACT || <Pending>contato de suporte</Pending>],
  ];
  const defined = ESSENCIAL_ITEMS.length > 0 || COMPLETO_EXTRA.length > 0;

  return (
    <>
      <Header />
      <main>
        <section className="bg-hero px-4 pb-14 pt-10 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                Moldes de EVA para transformar suas ideias em <span className="text-primary">lindas criações!</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">Conheça nossos kits digitais e escolha a coleção ideal para seus projetos de artesanato.</p>
              <a href="#planos" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-primary px-10 font-display text-lg font-semibold text-primary-foreground shadow-soft hover:brightness-110 focus-visible:ring-4 focus-visible:ring-ring/40">
                ESCOLHER MEU KIT
              </a>
            </div>
            <figure>
              <img src={hero} alt="Ilustração de folhas de moldes impressas e peças de EVA recortadas" width={1024} height={800}
                fetchPriority="high" className="aspect-[32/25] w-full rounded-3xl object-cover shadow-soft" />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">Imagem ilustrativa — não representa o conteúdo exato dos kits.</figcaption>
            </figure>
          </div>
        </section>

        <Section title="VEJA A VARIEDADE DE MOLDES PARA SUAS CRIAÇÕES" sub="Inspire-se e escolha o kit ideal para você">
          <Gallery />
        </Section>

        <section className="px-4 pb-16">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
            {[
              [FileText, `Arquivos digitais em ${FILE_FORMAT} para imprimir.`],
              [FolderOpen, "Opção prática para organizar seus projetos de artesanato."],
              [Layers, "Duas opções de kit para escolher conforme sua necessidade."],
            ].map(([Icon, t], i) => {
              const I = Icon as typeof FileText;
              return (
                <div key={i} className="rounded-2xl bg-card p-6 text-center shadow-soft">
                  <span className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-sun text-sun-foreground"><I aria-hidden /></span>
                  <p className="font-semibold">{t as string}</p>
                </div>
              );
            })}
          </div>
        </section>

        <Section id="como-funciona" title="Como funciona" className="bg-secondary/40">
          <ol className="grid gap-4 sm:grid-cols-3">
            {["Escolha seu kit.", "Finalize o pagamento no checkout Wiapy.", "Acesse os arquivos conforme as instruções de entrega configuradas para o produto."].map((t, i) => (
              <li key={i} className="rounded-2xl bg-card p-6 shadow-soft">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">{i + 1}</span>
                <p className="mt-3 font-semibold">{t}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="planos" title="Escolha seu plano">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-3xl border bg-card p-6 shadow-soft">
              <h3 className="text-xl font-semibold">{PLANS.essencial.name}</h3>
              <p className="mt-1 text-muted-foreground">{PLANS.essencial.description}</p>
              <p className="my-5 font-display text-4xl font-semibold text-primary">{PLANS.essencial.priceLabel}</p>
              <div className="mb-6 flex-1">{ESSENCIAL_ITEMS.length ? <List items={ESSENCIAL_ITEMS} /> : <Pending>lista de moldes do Essencial</Pending>}</div>
              <BuyButton plan="essencial" />
            </article>
            <article className="relative flex flex-col rounded-3xl border-2 border-primary bg-card p-6 shadow-soft">
              <span className="absolute -top-3 left-6 rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-foreground">RECOMENDADO</span>
              <h3 className="text-xl font-semibold">{PLANS.completo.name}</h3>
              <p className="mt-1 text-muted-foreground">{PLANS.completo.description}</p>
              <p className="my-5 font-display text-4xl font-semibold text-primary">{PLANS.completo.priceLabel}</p>
              <div className="mb-6 flex-1 space-y-4">
                <p className="font-semibold">Tudo do Plano Essencial, mais:</p>
                {COMPLETO_EXTRA.length ? COMPLETO_EXTRA.map((g) => (
                  <div key={g.tema}><p className="mb-1 font-semibold text-secondary-foreground">{g.tema}</p><List items={g.itens} /></div>
                )) : <Pending>moldes adicionais do Completo</Pending>}
              </div>
              <BuyButton plan="completo" />
            </article>
          </div>
        </Section>

        <Section title="Comparação dos planos" className="bg-secondary/40">
          <div className="mx-auto max-w-3xl rounded-2xl bg-card p-6 shadow-soft">
            {defined ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div><p className="mb-2 font-semibold">Essencial · {PLANS.essencial.priceLabel}</p><List items={ESSENCIAL_ITEMS} /></div>
                <div><p className="mb-2 font-semibold">Completo · {PLANS.completo.priceLabel}</p><List items={["Todo o conteúdo do Essencial", ...COMPLETO_EXTRA.map((g) => g.tema)]} /></div>
              </div>
            ) : <p className="text-center"><Pending>a comparação aparece quando o conteúdo de cada kit for definido</Pending></p>}
          </div>
        </Section>

        <Section title="Transparência">
          <dl className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              ["Produto", "Digital — você recebe arquivos, não itens físicos."],
              ["Formato", `Arquivos em ${FILE_FORMAT}.`],
              ["Para abrir e imprimir", "Um leitor de PDF (gratuito) e uma impressora ou gráfica."],
              ["Entrega", DELIVERY_INFO || null],
              ["Suporte", SUPPORT_CONTACT || null],
              ["Pagamento", "Processado com segurança no checkout externo da Wiapy."],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border bg-card p-5">
                <dt className="font-semibold text-primary">{k}</dt>
                <dd className="mt-1">{v ?? <Pending>{String(k).toLowerCase()}</Pending>}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="duvidas" title="Perguntas frequentes" className="bg-secondary/40">
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl bg-card p-5 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}<ChevronDown className="shrink-0 transition group-open:rotate-180" aria-hidden />
                </summary>
                <div className="mt-3 text-muted-foreground">{a}</div>
              </details>
            ))}
          </div>
        </Section>

        <Section title="Escolha seu kit de moldes de EVA">
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {(["essencial", "completo"] as const).map((id) => (
              <div key={id} className="rounded-2xl bg-hero p-6 text-center shadow-soft">
                <p className="font-semibold">{PLANS[id].name}</p>
                <p className="my-3 font-display text-3xl font-semibold text-primary">{PLANS[id].priceLabel}</p>
                <BuyButton plan={id} />
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <ConsentBanner />
    </>
  );
}
