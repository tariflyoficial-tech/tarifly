import Image from "next/image";
import Link from "next/link";
import { getPost, maisLidasSlugs, type Post } from "../lib/posts";

// Três artigos com capa no fim da leitura, pra a pessoa seguir pra outro sem
// voltar ao índice. O artigo atual nunca aparece na lista.
export default function MaisLidas({ slug }: { slug: string }) {
  const lista = maisLidasSlugs
    .filter((s) => s !== slug)
    .map((s) => getPost("orlando", s))
    .filter((p): p is Post => Boolean(p))
    .slice(0, 3);

  if (lista.length === 0) return null;

  return (
    <section className="not-prose mt-14 border-t border-gray-100 pt-6">
      <h2 className="text-2xl text-gray-900">Mais lidas</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-3">
        {lista.map((p) => (
          <li key={p.slug}>
            <Link href={`/destinos/${p.destino}/${p.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                {p.imagem && (
                  <Image
                    src={p.imagem}
                    alt={p.imagemAlt ?? p.titulo}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                {p.categoria.split("·").pop()?.trim()}
              </p>
              <h3 className="mt-1 text-base leading-snug text-gray-900 group-hover:text-accent">
                {p.titulo}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
