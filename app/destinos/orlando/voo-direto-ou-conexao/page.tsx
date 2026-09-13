import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Voo direto ou com conexão pra Orlando: vale a pena a diferença? — Tarifly",
  description:
    "Quando vale a pena economizar num voo com conexão pra Orlando e quando o voo direto compensa o preço mais alto — o que considerar antes de decidir.",
};

export default function VooDiretoOuConexao() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Passagem aérea
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Voo direto ou com conexão pra Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        A resposta depende de quanto sua paciência vale em dinheiro.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Poucos voos diretos, muitas opções com conexão
          </h2>
          <p className="mt-2">
            Voos diretos do Brasil pra Orlando (aeroporto MCO) partem de um
            número limitado de cidades de origem. Pra quem sai de outras
            cidades brasileiras, a conexão é praticamente inevitável —
            geralmente por Miami, Atlanta, ou algum hub das companhias
            americanas.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quando o voo direto compensa o preço mais alto
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Viagem com crianças pequenas ou bebês</li>
            <li>Grupo grande, onde perder uma conexão complica todo mundo</li>
            <li>Viagem curta, onde cada hora a mais de voo pesa proporcionalmente mais</li>
            <li>Você já viajou com conexão apertada antes e prefere não arriscar de novo</li>
          </ul>
        </section>

        <BuscarCTA compact title="Compare voos diretos e com conexão lado a lado" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quando a conexão vale a economia
          </h2>
          <p className="mt-2">
            Se a diferença de preço for grande e a conexão tiver um tempo de
            espera confortável (nem curta demais pra correr risco de perder o
            próximo voo, nem longa demais a ponto de virar meio dia parado no
            aeroporto), costuma valer a pena. Uma conexão de 1h30 a 2h30
            costuma ser o intervalo mais equilibrado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Um detalhe que pesa: imigração nos EUA
          </h2>
          <p className="mt-2">
            Se a conexão for dentro dos EUA, você passa pela imigração
            americana já na primeira cidade (não em Orlando), o que pode
            levar tempo. Vale calcular essa fila dentro do tempo de conexão,
            especialmente em horários de pico nos aeroportos maiores.
          </p>
        </section>
      </div>

      <BuscarCTA />

      <p className="mt-8 text-sm text-gray-400">
        Veja também:{" "}
        <Link
          href="/destinos/orlando/quando-comprar-passagem"
          className="text-brand hover:underline"
        >
          quando comprar passagem pra Orlando
        </Link>
        .
      </p>
    </article>
  );
}
