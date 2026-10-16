import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatarData, posts, type Post } from "../lib/posts";

export const metadata: Metadata = {
  title: "Blog de viagem: guias práticos pra planejar sua viagem — Tarifly",
  description:
    "Artigos práticos pra planejar sua viagem: quando comprar passagem, onde ficar, quanto custa e o que saber antes de ir.",
};

const maisRecentes = [...posts].sort((a, b) => b.data.localeCompare(a.data));

// Blocos de cor que ocupam o lugar da foto enquanto o artigo não tem capa.
const blocos = ["#c9a98a", "#8a6b4f", "#b4572f", "#6f7a55"];

function Capa({
  post,
  indice,
  className,
  priority = false,
}: {
  post: Post;
  indice: number;
  className: string;
  priority?: boolean;
}) {
  if (post.imagem) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={post.imagem}
          alt={post.imagemAlt ?? post.titulo}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-end p-5 ${className}`}
      style={{ background: blocos[indice % blocos.length] }}
    >
      <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-white/80">
        {post.categoria.split("·").pop()?.trim()}
      </span>
    </div>
  );
}

function Meta({ post }: { post: Post }) {
  return (
    <p className="text-xs uppercase tracking-wide text-gray-400">
      <span className="font-semibold text-accent">
        {post.categoria.split("·").pop()?.trim()}
      </span>{" "}
      · <time dateTime={post.data}>{formatarData(post.data)}</time>
    </p>
  );
}

export default function Blog() {
  const [destaque] = maisRecentes;
  const destaques = maisRecentes.filter((p) => p.destaque && p !== destaque);
  const resto = maisRecentes.filter(
    (p) => p !== destaque && !p.destaque,
  );

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Blog do Tarifly
      </p>
      <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.02] text-gray-900 sm:text-6xl">
        Guias de viagem, sem enrolação.
      </h1>
      <p className="mt-5 max-w-xl text-base text-gray-500">
        Poucos destinos, bem trabalhados: quando comprar, onde ficar e o que
        saber antes de ir.
      </p>

      <Link
        href={`/destinos/${destaque.destino}/${destaque.slug}`}
        className="group mt-12 grid gap-6 sm:grid-cols-2 sm:items-center sm:gap-10"
      >
        <Capa
          post={destaque}
          indice={0}
          priority
          className="aspect-[4/3] rounded-2xl"
        />
        <div>
          <Meta post={destaque} />
          <h2 className="mt-3 text-3xl leading-tight text-gray-900 group-hover:text-accent sm:text-4xl">
            {destaque.titulo}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            {destaque.descricao}
          </p>
          <span className="mt-5 inline-block text-sm font-medium text-brand underline underline-offset-4 group-hover:text-accent">
            Ler artigo
          </span>
        </div>
      </Link>

      <div className="mt-16 border-t border-gray-100 pt-6">
        <h2 className="text-2xl text-gray-900">Destaques</h2>
        <p className="mt-1 text-sm text-gray-500">
          Por onde começar o planejamento da sua viagem.
        </p>
      </div>

      <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {destaques.map((p, i) => (
          <li key={`${p.destino}/${p.slug}`}>
            <Link
              href={`/destinos/${p.destino}/${p.slug}`}
              className="group block"
            >
              <Capa post={p} indice={i + 2} className="aspect-[16/10] rounded-xl" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                {p.categoria.split("·").pop()?.trim()}
              </p>
              <h3 className="mt-1 text-lg leading-snug text-gray-900 group-hover:text-accent">
                {p.titulo}
              </h3>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-16 flex items-baseline justify-between border-t border-gray-100 pt-6">
        <h2 className="text-2xl text-gray-900">Mais artigos</h2>
        <Link
          href="/destinos/orlando"
          className="text-sm font-medium text-brand underline underline-offset-4 hover:text-accent"
        >
          Guia completo de Orlando
        </Link>
      </div>

      <ul className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {resto.map((p, i) => (
          <li key={`${p.destino}/${p.slug}`}>
            <Link
              href={`/destinos/${p.destino}/${p.slug}`}
              className="group block"
            >
              <Capa post={p} indice={i + 1} className="aspect-[4/3] rounded-xl" />
              <div className="mt-4">
                <Meta post={p} />
                <h3 className="mt-2 text-xl leading-snug text-gray-900 group-hover:text-accent">
                  {p.titulo}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {p.descricao}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
