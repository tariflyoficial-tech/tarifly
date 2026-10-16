import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";
import ArticleJsonLd from "../../../components/ArticleJsonLd";
import PostMeta from "../../../components/PostMeta";

export const metadata: Metadata = {
  title: "Supermercado em Orlando: Publix, Walmart, Target e o que comprar — Tarifly",
  description:
    "Onde fazer as compras do dia a dia em Orlando: diferenças entre Publix, Walmart e Target, o que comprar na chegada, como economizar nas refeições e o que levar do Brasil.",
};

export default function SupermercadoEmOrlando() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <ArticleJsonLd metadata={metadata} path="/destinos/orlando/supermercado-em-orlando" />
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
        Supermercado em Orlando: onde comprar e o que levar pra casa
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Comer todas as refeições fora pesa no orçamento. Saber onde fazer as
        compras do dia a dia é uma das formas mais simples de economizar.
      </p>
      <PostMeta slug="supermercado-em-orlando" />

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            As três redes que você vai ver em todo lugar
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Publix</strong> — rede de supermercados muito comum na
              Flórida, conhecida pelo bom atendimento e pela seção de padaria
              e de comida pronta. Costuma ser um pouco mais cara que o
              Walmart, mas é a mais agradável pra fazer compras.
            </li>
            <li>
              <strong>Walmart</strong> — hipermercado enorme, com mercado,
              farmácia, roupas e itens de casa no mesmo lugar. Em geral é a
              opção de preço mais baixo pra água, snacks e itens básicos.
            </li>
            <li>
              <strong>Target</strong> — loja de departamentos com seção de
              mercado menor, mas boa pra roupa, itens de casa, brinquedos e
              produtos de higiene. Muita gente passa lá mais pelo que não é
              comida.
            </li>
          </ul>
          <p className="mt-3">
            Redes de farmácia como Walgreens e CVS também estão por toda
            parte e servem pra remédio sem receita, itens de higiene e
            lanche de última hora, mas costumam ser mais caras que o
            mercado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Compras do primeiro dia
          </h2>
          <p className="mt-2">
            Se a hospedagem tem cozinha ou geladeira (veja{" "}
            <Link
              href="/destinos/orlando/casa-de-temporada-ou-hotel"
              className="text-brand hover:underline"
            >
              casa de temporada ou hotel
            </Link>
            ), vale passar no mercado logo depois do check-in:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Água em garrafões ou caixas, que sai bem mais barata que a vendida nos parques</li>
            <li>Café da manhã: pão, frutas, cereal, leite, iogurte</li>
            <li>Lanches pros dias de parque: barrinhas, frutas, biscoitos</li>
            <li>Protetor solar e repelente, que custam menos no mercado do que em loja de parque ou de hotel</li>
            <li>Itens de higiene que você esqueceu de trazer</li>
          </ul>
        </section>

        <BuscarCTA compact title="Ainda sem passagem? Veja o preço pra sua data" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Como isso ajuda a economizar
          </h2>
          <p className="mt-2">
            Comida pronta nos parques e perto deles custa bem mais que
            comida de mercado. Tomar o café da manhã em casa, levar água e
            lanche nos dias de parque (confira no site de cada parque o que é
            permitido) e jantar fora só alguns dias já reduz bastante o
            gasto da viagem. Veja mais dicas em{" "}
            <Link
              href="/destinos/orlando/como-economizar"
              className="text-brand hover:underline"
            >
              como economizar sem abrir mão dos parques
            </Link>{" "}
            e o peso das refeições no orçamento em{" "}
            <Link
              href="/destinos/orlando/quanto-custa-uma-viagem"
              className="text-brand hover:underline"
            >
              quanto custa uma viagem
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Como chegar e como comprar
          </h2>
          <p className="mt-2">
            Os mercados ficam espalhados pela cidade, e sem carro a
            logística complica. Se você ainda não decidiu como se locomover,
            veja{" "}
            <Link
              href="/destinos/orlando/alugar-carro"
              className="text-brand hover:underline"
            >
              alugar carro em Orlando
            </Link>
            . Muitas redes também oferecem retirada no mercado ou entrega
            pelo aplicativo, o que ajuda quando se está com criança ou com o
            dia de parque ocupado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O que levar do Brasil em vez de comprar lá
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Remédios de uso contínuo.</strong> Leve a quantidade
              suficiente pra viagem, com a receita médica. Medicamento
              controlado tem regras específicas de entrada, então confira
              antes.
            </li>
            <li>
              <strong>Itens específicos de bebê ou de criança</strong> que a
              família já usa e de que não abre mão.
            </li>
            <li>
              <strong>Adaptador de tomada</strong>, que na loja de lá costuma
              custar mais caro.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            E o que trazer de volta
          </h2>
          <p className="mt-2">
            Tudo o que você comprar pra levar ao Brasil entra na cota de
            isenção da Receita Federal. As regras, o valor da cota e os
            cuidados com nota fiscal estão no guia de{" "}
            <Link
              href="/destinos/orlando/outlets-em-orlando"
              className="text-brand hover:underline"
            >
              outlets em Orlando
            </Link>
            . Se você vai viajar com criança, veja também{" "}
            <Link
              href="/destinos/orlando/orlando-com-criancas"
              className="text-brand hover:underline"
            >
              Orlando com crianças
            </Link>
            .
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Gastando menos no dia a dia? Veja o preço da passagem"
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
