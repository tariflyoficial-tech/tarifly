import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";
import VistoCTA from "../../../components/VistoCTA";
import ArticleJsonLd from "../../../components/ArticleJsonLd";
import PostMeta from "../../../components/PostMeta";

export const metadata: Metadata = {
  title: "Orlando com crianças: documentos, parques, ritmo e hospedagem — Tarifly",
  description:
    "O que saber antes de ir pra Orlando com crianças: documentos e autorização de viagem, altura mínima nas atrações, ritmo dos dias, cadeirinha no carro e onde ficar.",
};

export default function OrlandoComCriancas() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <ArticleJsonLd metadata={metadata} path="/destinos/orlando/orlando-com-criancas" />
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Família
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Orlando com crianças: o que saber antes de ir
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Com criança, o que muda não é o destino, é o planejamento: documentos,
        ritmo e alguns detalhes que evitam dor de cabeça.
      </p>
      <PostMeta slug="orlando-com-criancas" />

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Documentos: cada criança precisa dos seus
          </h2>
          <p className="mt-2">
            Criança também precisa de <strong>passaporte e de visto
            americano próprios</strong>, e o prazo de emissão vale a mesma
            regra de sempre: resolva isso antes de comprar passagem (o guia
            principal de{" "}
            <Link
              href="/destinos/orlando"
              className="text-brand hover:underline"
            >
              Orlando
            </Link>{" "}
            explica o visto).
          </p>
          <p className="mt-2">
            Se a criança viajar sem um dos pais, ou sem nenhum deles, o Brasil
            exige uma <strong>autorização de viagem</strong> do responsável que
            não vai junto. As regras e o formato dessa autorização mudam, então
            confira o que vale hoje no site da Polícia Federal antes de viajar.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Altura mínima nas atrações
          </h2>
          <p className="mt-2">
            Muitas atrações têm altura mínima, e as mais radicais costumam
            pedir mais que as de família. A medida varia de atração pra
            atração, então vale checar a lista no site ou no aplicativo do
            parque antes de montar o dia, pra ninguém chegar na fila e ser
            barrado. Na dúvida, a Disney tem muito mais opção pra criança
            pequena, como você vê em{" "}
            <Link
              href="/destinos/orlando/disney-ou-universal"
              className="text-brand hover:underline"
            >
              Disney ou Universal
            </Link>
            .
          </p>
          <p className="mt-2">
            Se um dos adultos vai numa atração e a criança é pequena demais,
            os parques costumam ter um esquema pra revezar sem pegar a fila
            duas vezes (na Disney chama Rider Switch, na Universal, Child
            Swap). Pergunte como funciona no dia.
          </p>
        </section>

        <VistoCTA compact />

        <BuscarCTA compact title="Planejando com a família? Veja o preço da passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O ritmo é o que decide a viagem
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Um parque por dia, nunca dois.</strong> Criança pequena
              cansa antes do adulto, e o calor em Orlando pesa.
            </li>
            <li>
              <strong>Chegue na abertura e saia no meio da tarde.</strong>{" "}
              Volte pro hotel pra descansar na piscina e, se tiver energia,
              retorne à noite.
            </li>
            <li>
              <strong>Reserve um dia livre no meio da viagem.</strong> Veja
              como encaixar no{" "}
              <Link
                href="/destinos/orlando/roteiro-7-dias"
                className="text-brand hover:underline"
              >
                roteiro de 7 dias
              </Link>{" "}
              e opções em{" "}
              <Link
                href="/destinos/orlando/fora-dos-parques"
                className="text-brand hover:underline"
              >
                Orlando fora dos parques
              </Link>
              .
            </li>
            <li>
              <strong>Não tente ver tudo.</strong> Escolha as atrações que a
              criança mais quer e deixe o resto de lado sem culpa.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O que levar pra cada dia de parque
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Protetor solar, boné e roupa leve (e uma troca de roupa)</li>
            <li>Garrafa d'água reutilizável e lanches pra não depender só da fila de comida</li>
            <li>Tênis confortável pra todo mundo: a caminhada é longa</li>
            <li>Carregador portátil pro celular, que vira mapa e fila virtual</li>
            <li>
              Carrinho de bebê, se a criança é pequena: confira nas regras do
              parque o que é permitido e se vale levar ou alugar lá
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Hospedagem e carro com criança
          </h2>
          <p className="mt-2">
            Cozinha, piscina e mais espaço costumam pesar a favor da casa de
            temporada quando a família é maior (veja{" "}
            <Link
              href="/destinos/orlando/casa-de-temporada-ou-hotel"
              className="text-brand hover:underline"
            >
              casa de temporada ou hotel
            </Link>{" "}
            e{" "}
            <Link
              href="/destinos/orlando/onde-ficar-em-orlando"
              className="text-brand hover:underline"
            >
              onde ficar
            </Link>
            ).
          </p>
          <p className="mt-2">
            No carro, criança pequena precisa de cadeirinha adequada à idade e
            ao peso. As locadoras costumam alugar, mas confirme na hora da
            reserva — o guia de{" "}
            <Link
              href="/destinos/orlando/alugar-carro"
              className="text-brand hover:underline"
            >
              alugar carro em Orlando
            </Link>{" "}
            tem os outros pontos pra checar.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Ingressos e custos
          </h2>
          <p className="mt-2">
            A idade em que a criança passa a pagar ingresso e o valor do
            ingresso infantil variam por parque e mudam com o tempo, então
            confira a regra atual na hora de comprar. Pra montar o orçamento
            completo, veja{" "}
            <Link
              href="/destinos/orlando/quanto-custa-uma-viagem"
              className="text-brand hover:underline"
            >
              quanto custa uma viagem
            </Link>
            , e pra não pagar mais caro à toa, o guia de{" "}
            <Link
              href="/destinos/orlando/ingressos-dos-parques"
              className="text-brand hover:underline"
            >
              ingressos dos parques
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Seguro viagem pra criança não é opcional
          </h2>
          <p className="mt-2">
            Atendimento médico nos EUA é caro, e criança adoece com mais
            facilidade em viagem longa. Vale incluir todo mundo no{" "}
            <Link
              href="/destinos/orlando/seguro-viagem"
              className="text-brand hover:underline"
            >
              seguro viagem
            </Link>
            .
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Viagem em família: veja o preço real da passagem"
        subtitle="Compare sem sair do site."
      />

      <VistoCTA />

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
