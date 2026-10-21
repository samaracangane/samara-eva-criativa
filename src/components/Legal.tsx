import { Header, Footer, Pending } from "./site";

export function Legal({ title, text }: { title: string; text: string }) {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[60vh] max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-primary">{title}</h1>
        <div className="mt-6 whitespace-pre-line leading-relaxed">
          {text || <Pending>texto real da {title.toLowerCase()} antes de publicar</Pending>}
        </div>
      </main>
      <Footer />
    </>
  );
}
