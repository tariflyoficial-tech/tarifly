import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Como economizar em Orlando sem abrir mão dos parques — Tarifly",
  description:
    "Onde dá pra cortar custo numa viagem pra Orlando sem abrir mão da Disney e da Universal — hospedagem, alimentação, compras e passagem.",
};

export default function ComoEconomizar() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Orçamento
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Como economizar em Orlando sem abrir mão dos parques
      </h1>
      <p className="mt-3 text-base text-gray-500">
        O ingresso do parque não tem muito desconto real — mas quase tudo ao
        redor dele tem.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Onde a economia realmente aparece
          </h2>
          <p className="mt-2">
            O ingresso dos parques tem pouca margem de negociação — o
            desconto real vem de comprar mais dias de uma vez, não de
            promoção. As categorias abaixo é que fazem diferença de verdade
            no orçamento final.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Hospedagem: divida em grupo
          </h2>
          <p className="mt-2">
            Uma casa de temporada com cozinha, dividida entre 2 ou 3
            famílias, costuma sair bem mais barata por pessoa do que quartos
            de hotel separados — e ainda permite cozinhar em vez de comer
            fora todo dia.
          </p>
        </section>

        <BuscarCTA compact title="Compare hospedagem em grupo e economize por pessoa" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Alimentação: o maior vazamento de orçamento
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              Café da manhã e ao menos uma refeição por dia feitos na
              hospedagem (supermercado americano costuma ser bem mais barato
              que restaurante turístico).
            </li>
            <li>
              Levar squeeze/garrafa reutilizável — os parques costumam ter
              bebedouro grátis, e água engarrafada dentro do parque custa
              caro.
            </li>
            <li>
              Refeições dentro do parque nos horários de menor pico (fora do
              almoço/janta cheios) costumam ter fila menor e às vezes preço
              melhor em opções de contador.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Compras: outlet fora do circuito principal
          </h2>
          <p className="mt-2">
            Os outlets mais conhecidos de Orlando enchem de turista e por
            isso têm preço um pouco mais salgado em alguns itens. Vale
            comparar com lojas fora do eixo turístico principal antes de
            fechar compra grande.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Passagem: o maior gasto, e o mais fácil de comparar
          </h2>
          <p className="mt-2">
            Como a passagem costuma ser o item mais caro da viagem, é onde a
            comparação de preço rende mais economia em termos absolutos.
            Comprar com antecedência e comparar direto no momento da compra
            (em vez de confiar num valor médio) é o que realmente muda a
            conta.
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Comece pela passagem — é onde a economia pesa mais"
        subtitle="Compare preços reais antes de fechar qualquer coisa."
      />

      <p className="mt-8 text-sm text-gray-400">
        Veja também:{" "}
        <Link href="/destinos/orlando" className="text-brand hover:underline">
          guia completo de Orlando
        </Link>
        .
      </p>
    </article>
  );
}
