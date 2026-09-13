import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Erros comuns de quem viaja pra Orlando pela primeira vez — Tarifly",
  description:
    "Os erros mais frequentes de quem vai pela primeira vez a Orlando — e como evitar cada um antes de fechar passagem, hotel ou ingresso.",
};

export default function ErrosComuns() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Planejamento
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Erros comuns de quem vai a Orlando pela primeira vez
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Nenhum é grave sozinho, mas juntos custam tempo e dinheiro que dava
        pra evitar.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            1. Não resolver o visto antes de olhar preço
          </h2>
          <p className="mt-2">
            Brasil não tem isenção de visto pros EUA — sem o visto de turista
            aprovado, nada mais importa. Comece por aí antes de gastar tempo
            comparando passagem e hotel.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            2. Tentar ver os 6 parques principais em poucos dias
          </h2>
          <p className="mt-2">
            É o erro mais comum. O resultado costuma ser dias exaustivos e
            pouco aproveitamento de cada atração. Veja o guia de{" "}
            <Link
              href="/destinos/orlando/quantos-dias-ficar"
              className="text-brand hover:underline"
            >
              quantos dias ficar em Orlando
            </Link>{" "}
            antes de fechar o roteiro.
          </p>
        </section>

        <BuscarCTA compact title="Evite pagar mais por comprar em cima da hora" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            3. Esquecer que precisa de carro
          </h2>
          <p className="mt-2">
            Orlando não tem transporte público que cubra bem os bairros
            turísticos. Quem não aluga carro fica dependendo de aplicativo o
            tempo todo, o que em grupo grande costuma sair mais caro que o
            aluguel.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            4. Não levar casaco achando que "nos EUA é sempre calor"
          </h2>
          <p className="mt-2">
            Dezembro e janeiro têm noites frias em Orlando, especialmente
            perto de lagos e nos parques aquáticos ao entardecer. Um casaco
            leve resolve.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            5. Ignorar a gorjeta nos EUA
          </h2>
          <p className="mt-2">
            Gratificação em restaurante nos EUA não é opcional na prática —
            é esperada. Deixar de fora do orçamento é um erro comum de quem
            vem de países onde isso não é praxe.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            6. Comprar passagem sem comparar
          </h2>
          <p className="mt-2">
            O preço muda de um dia pro outro, e às vezes de uma hora pra
            outra. Fechar a primeira oferta que aparece, sem comparar, é
            deixar dinheiro na mesa — principalmente numa viagem com várias
            pessoas, onde a diferença multiplica.
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Comece pelo que já dá pra resolver agora"
        subtitle="Compare o preço da passagem antes de qualquer outra decisão."
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
