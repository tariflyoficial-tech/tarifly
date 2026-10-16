import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";
import ArticleJsonLd from "../../../components/ArticleJsonLd";
import PostDate from "../../../components/PostDate";

export const metadata: Metadata = {
  title: "Outlets em Orlando: quais são, quando ir e como não estourar a cota — Tarifly",
  description:
    "Guia dos outlets de Orlando: os dois Premium Outlets, quanto tempo reservar, o imposto que não está na etiqueta e como funciona a cota de isenção da Receita Federal.",
};

export default function OutletsEmOrlando() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <ArticleJsonLd metadata={metadata} path="/destinos/orlando/outlets-em-orlando" />
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Compras
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Outlets em Orlando: o que saber antes de ir
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Pra muita gente, um dia de outlet vale tanto quanto um dia de parque.
        Dá pra aproveitar bem sem estourar o orçamento nem a cota da
        alfândega.
      </p>
      <PostDate slug="outlets-em-orlando" />

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Os dois outlets que a maioria visita
          </h2>
          <p className="mt-2">
            Os dois principais são da rede Premium Outlets, e ficam na mesma
            região, perto da International Drive:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Orlando International Premium Outlets</strong> — no
              extremo norte da International Drive, o mais próximo de quem
              está hospedado na região de I-Drive.
            </li>
            <li>
              <strong>Orlando Vineland Premium Outlets</strong> — na Vineland
              Avenue, perto da Disney e de Lake Buena Vista, então encaixa
              fácil no caminho de quem fica nessa área.
            </li>
          </ul>
          <p className="mt-2">
            Cada um tem lojas bem parecidas de marcas americanas e
            internacionais, com preços reduzidos. Se o tempo for curto, vá no
            que fica mais perto da sua hospedagem (veja{" "}
            <Link
              href="/destinos/orlando/onde-ficar-em-orlando"
              className="text-brand hover:underline"
            >
              onde ficar em Orlando
            </Link>
            ); se der pra ir nos dois, vale separar meio dia pra cada um.
            Horários mudam em feriado e alta temporada, então confira no site
            oficial da Premium Outlets antes de sair.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quanto tempo reservar
          </h2>
          <p className="mt-2">
            Quem vai com lista de compras costuma gastar de meio dia a um dia
            inteiro por outlet. Vá com a lista pronta e uma noção dos preços
            no Brasil: sem isso, é fácil achar que tudo está barato e levar
            coisas que nem compensavam.
          </p>
          <p className="mt-2">
            Se a ideia é um dia livre de parque, veja também as outras opções
            em{" "}
            <Link
              href="/destinos/orlando/fora-dos-parques"
              className="text-brand hover:underline"
            >
              Orlando fora dos parques
            </Link>
            .
          </p>
        </section>

        <BuscarCTA compact title="Vai com mala vazia? Compare o preço da passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quando ir pra pegar menos fila
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Dias de semana, de manhã</strong> — o movimento costuma
              ser bem menor que no fim de semana.
            </li>
            <li>
              <strong>Evite sábado à tarde</strong> — é o horário mais cheio,
              com fila em loja e em provador.
            </li>
            <li>
              <strong>Black Friday e fim de ano</strong> — os descontos são
              fortes, mas o outlet lota. Se a viagem cair nessas datas, chegue
              cedo e vá direto nas lojas que mais interessam.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O preço da etiqueta não é o preço final
          </h2>
          <p className="mt-2">
            Nos EUA, o imposto sobre a venda (sales tax) é somado só no caixa.
            Em Orlando ele fica em torno de 6,5%, então uma compra de US$ 100
            na etiqueta sai por cerca de US$ 106,50. Parece pouco, mas em uma
            mala cheia faz diferença no orçamento — considere isso quando
            somar o gasto (o guia de{" "}
            <Link
              href="/destinos/orlando/quanto-custa-uma-viagem"
              className="text-brand hover:underline"
            >
              quanto custa uma viagem
            </Link>{" "}
            ajuda a montar a conta toda).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            A cota de isenção da Receita Federal
          </h2>
          <p className="mt-2">
            Quem volta ao Brasil de avião pode trazer até{" "}
            <strong>US$ 1.000 por pessoa</strong> em compras sem pagar
            imposto. O que passar disso é tributado em 50% sobre o excedente.
            A cota é individual, não dá pra somar com a de outra pessoa da
            família, e quem passa dela precisa fazer a declaração eletrônica
            de bens do viajante (e-DBV), que pode ser preenchida antes do
            desembarque, no site da Receita ou no aplicativo Viajantes.
          </p>
          <p className="mt-2">
            Essas regras já mudaram antes e algumas fontes antigas ainda
            citam valores diferentes. Antes de viajar, confira o valor atual
            no portal da Receita Federal. Guarde as notas fiscais: se houver
            dúvida sobre o valor de um item, elas resolvem.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Dicas pra comprar melhor
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Pesquise o preço no Brasil antes.</strong> Algumas
              marcas não compensam; outras valem muito a pena. Só dá pra saber
              comparando.
            </li>
            <li>
              <strong>Veja a política de troca.</strong> Em geral, é difícil
              trocar ou devolver depois que você volta pro Brasil. Prove
              tudo na loja.
            </li>
            <li>
              <strong>Eletrônicos pedem cuidado extra.</strong> Garantia
              internacional, voltagem e se o produto funciona no Brasil são
              pontos pra checar antes de levar.
            </li>
            <li>
              <strong>Confira a franquia de bagagem da passagem.</strong> Uma
              mala a mais na volta pode custar tanto quanto o que você
              economizou nas compras.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Como chegar
          </h2>
          <p className="mt-2">
            O jeito mais prático é de carro: os outlets têm estacionamento
            grande e gratuito. Quem está sem carro pode ir de aplicativo, mas
            o custo da corrida de ida e volta pesa na conta. Veja os prós e
            contras em{" "}
            <Link
              href="/destinos/orlando/alugar-carro"
              className="text-brand hover:underline"
            >
              alugar carro em Orlando
            </Link>
            .
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Veja o preço real da passagem pra sua data"
        subtitle="Compare sem sair do site."
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
