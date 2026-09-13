import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Quando comprar passagem pra Orlando: antecedência ideal — Tarifly",
  description:
    "Com quantos meses de antecedência comprar passagem pra Orlando, como o preço se comporta ao longo do tempo e quando vale a pena esperar ou não.",
};

export default function QuandoComprarPassagem() {
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
        Quando comprar passagem pra Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Não é só "quanto antes, melhor" — tem uma janela específica que
        costuma dar o melhor equilíbrio.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            A janela de 2 a 4 meses
          </h2>
          <p className="mt-2">
            Pra voos internacionais saindo do Brasil, a faixa de{" "}
            <strong>2 a 4 meses antes da viagem</strong> costuma ser onde
            preço e disponibilidade de assento se equilibram melhor. Comprar
            com mais de 6 meses de antecedência raramente traz vantagem real
            — as companhias ainda não liberaram todas as tarifas promocionais
            pra aquele período. Comprar faltando menos de um mês costuma
            custar mais caro, porque sobram só os assentos de tarifa mais
            alta.
          </p>
          <p className="mt-2">
            Se a viagem cai num período de pico (veja o guia de{" "}
            <Link
              href="/destinos/orlando/melhor-epoca-para-viajar"
              className="text-brand hover:underline"
            >
              melhor época pra viajar
            </Link>
            ), vale puxar essa antecedência pra mais perto de 4-5 meses, já
            que a demanda mais alta esgota os assentos mais baratos mais
            rápido.
          </p>
        </section>

        <BuscarCTA compact title="Já sabe a data? Veja o preço de hoje pra ela" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Por que "esperar baixar" costuma dar errado
          </h2>
          <p className="mt-2">
            Preço de passagem não segue uma curva previsível de queda. Ele
            sobe e desce por causa de assentos vendidos, campanha pontual da
            companhia e câmbio do dólar — não existe um "dia certo da semana"
            garantido pra comprar mais barato. Esperar torcendo por uma queda
            é mais aposta do que estratégia.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O que realmente vale a pena fazer
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Definir a data da viagem antes de ficar comparando preço</li>
            <li>
              Comparar diferentes datas próximas (2-3 dias de diferença já
              muda o preço)
            </li>
            <li>
              Considerar aeroportos de conexão diferentes — veja o guia de{" "}
              <Link
                href="/destinos/orlando/voo-direto-ou-conexao"
                className="text-brand hover:underline"
              >
                voo direto ou com conexão
              </Link>
            </li>
            <li>
              Comprar assim que achar um preço bom dentro da janela ideal —
              não existe garantia de que vai ficar mais barato esperando
            </li>
          </ul>
        </section>
      </div>

      <BuscarCTA
        title="Veja o preço real pra sua data agora"
        subtitle="Compare passagens sem sair do site."
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
