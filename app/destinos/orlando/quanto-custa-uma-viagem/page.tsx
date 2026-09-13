import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Quanto custa uma viagem pra Orlando: onde vai seu dinheiro — Tarifly",
  description:
    "As categorias de gasto que realmente pesam numa viagem pra Orlando — passagem, hospedagem, ingresso, carro e alimentação — e onde dá pra cortar sem perder a viagem.",
};

export default function QuantoCusta() {
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
        Quanto custa uma viagem pra Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Não existe um número mágico — existe onde o seu dinheiro vai, e
        quanto de cada categoria você está disposto a gastar.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            As cinco categorias que definem o orçamento
          </h2>
          <p className="mt-2">
            Toda viagem pra Orlando se divide nesses blocos de gasto — a
            proporção entre eles é que muda de família pra família:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Passagem aérea</strong> — costuma ser o maior gasto
              único da viagem, principalmente saindo do Brasil. Varia muito
              com antecedência de compra e época do ano.
            </li>
            <li>
              <strong>Hospedagem</strong> — pode ir de um quarto de motel
              simples até uma casa de temporada com piscina pra 10 pessoas.
              O bairro escolhido pesa tanto quanto a categoria do imóvel.
            </li>
            <li>
              <strong>Ingressos dos parques</strong> — o preço por dia cai
              quanto mais dias você compra de uma vez, mas ainda assim é um
              gasto fixo por pessoa que não tem muito como negociar.
            </li>
            <li>
              <strong>Carro alugado</strong> — praticamente obrigatório (veja
              o guia de aluguel de carro), e o seguro do carro costuma custar
              tanto quanto o aluguel em si.
            </li>
            <li>
              <strong>Alimentação e compras</strong> — a categoria mais
              elástica: dá pra economizar cozinhando na casa de temporada, ou
              gastar muito comendo dentro dos parques e fazendo outlet.
            </li>
          </ul>
        </section>

        <BuscarCTA compact title="Antes de fechar o orçamento, veja o preço real da passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Por que não adianta um valor fixo de "quanto custa"
          </h2>
          <p className="mt-2">
            Uma família de 4 pessoas dividindo uma casa de temporada gasta,
            per capita, muito menos em hospedagem do que um casal num hotel
            perto da Disney. Quem compra passagem com 4 meses de antecedência
            paga bem menos que quem compra em cima da hora. O câmbio do dólar
            no dia da compra também muda a conta inteira, sem você fazer
            nada de diferente.
          </p>
          <p className="mt-2">
            Por isso, em vez de um número fechado, o mais útil é montar sua
            própria conta: número de pessoas, quantos dias, quantos dias de
            parque, e categoria de hospedagem — e comparar preço real de cada
            item, não uma média genérica de blog.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O que pesa mais do que parece
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Seguro viagem (item fácil de esquecer no orçamento inicial)
            </li>
            <li>Taxas de resort/estacionamento cobradas por alguns hotéis</li>
            <li>Gratificação (gorjeta) em restaurantes — praxe nos EUA</li>
            <li>Bagagem extra na volta, se comprar muito em outlet</li>
          </ul>
        </section>
      </div>

      <BuscarCTA
        title="Comece pela conta que você já pode fechar"
        subtitle="Compare o preço real da passagem e da hospedagem agora."
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
