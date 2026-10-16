import type { Metadata } from "next";
import Link from "next/link";
import { formatarData, posts } from "../lib/posts";

export const metadata: Metadata = {
  title: "Blog de viagem: guias práticos pra planejar sua viagem — Tarifly",
  description:
    "Artigos práticos pra planejar sua viagem: quando comprar passagem, onde ficar, quanto custa e o que saber antes de ir.",
};

const maisRecentes = [...posts].sort((a, b) => b.data.localeCompare(a.data));

export default function Blog() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <Link href="/" className="text-sm font-medium text-brand hover:underline">
        ← Voltar para o Tarifly
      </Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        Blog do Tarifly
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Poucos destinos, bem trabalhados — sem enrolação genérica.
      </p>

      <Link
        href="/destinos/orlando"
        className="mt-6 block rounded-xl border border-gray-100 p-5 transition-colors hover:border-brand"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Destino em destaque
        </p>
        <h2 className="mt-1 font-semibold text-gray-900">
          Orlando: guia completo
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Visto, época certa de comprar passagem e onde ficar, com todos os
          artigos sobre a cidade.
        </p>
      </Link>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-gray-400">
        Artigos mais recentes
      </h2>
      <ul className="mt-4 divide-y divide-gray-100">
        {maisRecentes.map((p) => (
          <li key={`${p.destino}/${p.slug}`} className="py-5">
            <p className="text-xs text-gray-400">
              <span className="font-semibold uppercase tracking-wide text-accent">
                {p.categoria}
              </span>{" "}
              · <time dateTime={p.data}>{formatarData(p.data)}</time>
            </p>
            <h3 className="mt-1 font-semibold text-gray-900">
              <Link
                href={`/destinos/${p.destino}/${p.slug}`}
                className="hover:text-brand"
              >
                {p.titulo}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{p.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
