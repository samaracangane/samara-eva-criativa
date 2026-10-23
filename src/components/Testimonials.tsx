const testimonials = [
  { src: "/depoimentos/depoimento-patricia.jpg", alt: "Depoimento de cliente sobre o kit de moldes de EVA" },
  { src: "/depoimentos/depoimento-juliana.jpg", alt: "Depoimento de cliente sobre os moldes em PDF para imprimir" },
  { src: "/depoimentos/depoimento-fernanda.jpg", alt: "Depoimento de cliente sobre os moldes de EVA" },
];

export function Testimonials() {
  const cards = [...testimonials, ...testimonials];
  return (
    <section id="depoimentos" className="overflow-hidden bg-secondary/30 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold text-primary sm:text-3xl">Depoimentos de quem já comprou</h2>
        <p className="mt-2 text-center text-muted-foreground">Veja o que as clientes contam sobre seus kits de moldes.</p>
        <div className="testimonials-mask mt-10 overflow-hidden">
          <div className="testimonials-track flex w-max items-stretch gap-4 py-2">
            {cards.map((item, i) => (
              <figure key={i} aria-hidden={i >= testimonials.length} className="w-[min(78vw,360px)] shrink-0 sm:w-[360px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={770}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-2xl object-contain shadow-soft"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .testimonials-mask { mask-image: linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent); }
        .testimonials-track { animation: testimonials-scroll 42s linear infinite; }
        .testimonials-mask:hover .testimonials-track { animation-play-state: paused; }
        @keyframes testimonials-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .testimonials-track { animation: none; } }
      `}</style>
    </section>
  );
}
