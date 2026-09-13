import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Melhor época pra viajar pra Orlando: clima, multidão e preço — Tarifly",
  description:
    "Quando ir pra Orlando pra fugir da multidão e pagar menos: clima mês a mês, época de férias escolares americanas e os períodos mais caros do ano.",
};

export default function MelhorEpoca() {
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
        Melhor época pra viajar pra Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Clima, multidão nos parques e preço não andam sempre juntos — dá pra
        escolher em qual dos três você quer economizar.
      </p>

      <div className="prose-tarifly mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O clima em Orlando não varia tanto quanto parece
          </h2>
          <p className="mt-2">
            Orlando é quente o ano inteiro pros padrões brasileiros. A
            diferença real entre as estações não é "frio x calor", é{" "}
            <strong>calor seco x calor úmido com chuva de fim de tarde</strong>.
            De junho a setembro chove praticamente todo dia, geralmente uma
            pancada rápida no fim da tarde — não estraga o passeio, mas molha.
            De outubro a abril o clima é mais seco e ameno, incluindo dias
            frios o suficiente pra um casaco leve em dezembro e janeiro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            As duas épocas de multidão máxima
          </h2>
          <p className="mt-2">
            Os parques ficam mais cheios quando as escolas americanas estão
            de férias — não as brasileiras. Os dois picos mais fortes são:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Final de dezembro até Ano Novo</strong> — o pico mais
              intenso do ano, parques lotados o dia inteiro.
            </li>
            <li>
              <strong>Junho e julho</strong> — férias de verão americanas,
              coincide com as férias escolares brasileiras de julho, o que
              deixa esse período especialmente concorrido pra quem sai do
              Brasil.
            </li>
          </ul>
          <p className="mt-2">
            Feriados americanos menores (Ação de Graças, Páscoa/Spring Break)
            também enchem os parques por alguns dias, mas de forma bem mais
            curta que os dois picos acima.
          </p>
        </section>

        <BuscarCTA compact title="Já sabe quando quer ir? Compare as passagens" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quando o preço costuma ser mais baixo
          </h2>
          <p className="mt-2">
            Os meses de menor procura — e geralmente de tarifas mais baixas —
            costumam ser <strong>setembro, outubro, e o começo de dezembro</strong>{" "}
            (antes da correria de fim de ano). É clima ainda quente, chuva
            já diminuindo, e escola americana em andamento — ou seja, parque
            mais vazio.
          </p>
          <p className="mt-2">
            Isso é uma tendência histórica do setor, não uma garantia: preço
            de passagem muda todo dia por causa de disponibilidade de
            assento, câmbio e demanda momentânea. Vale sempre comparar no
            momento em que for comprar, em vez de decidir só pela época do
            ano.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Resumo rápido</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Quer parque mais vazio:</strong> setembro a
              meados de novembro.
            </li>
            <li>
              <strong>Quer fugir da chuva:</strong> outubro a abril.
            </li>
            <li>
              <strong>Vai em julho ou fim de dezembro:</strong> aceite que vai
              ter fila e compre ingresso/passagem com bastante antecedência.
            </li>
          </ul>
        </section>
      </div>

      <BuscarCTA />

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
