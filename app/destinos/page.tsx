import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guias de destino — Tarifly",
  description: "Guias práticos pra planejar sua viagem: quando comprar, onde ficar e o que saber antes de ir.",
};

const destinos = [
  {
    slug: "orlando",
    nome: "Orlando",
    resumo: "Visto, época certa de comprar passagem e onde ficar.",
  },
];

export default function Destinos() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <Link href="/" className="text-sm font-medium text-brand hover:underline">
        ← Voltar para o Tarifly
      </Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        Guias de destino
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Poucos destinos, bem trabalhados — sem enrolação genérica.
      </p>

      <div className="mt-8 space-y-4">
        {destinos.map((d) => (
          <Link
            key={d.slug}
            href={`/destinos/${d.slug}`}
            className="block rounded-xl border border-gray-100 p-5 transition-colors hover:border-brand"
          >
            <h2 className="font-semibold text-gray-900">{d.nome}</h2>
            <p className="mt-1 text-sm text-gray-500">{d.resumo}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
