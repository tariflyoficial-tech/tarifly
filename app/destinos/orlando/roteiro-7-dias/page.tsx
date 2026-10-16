import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";
import ArticleJsonLd from "../../../components/ArticleJsonLd";
import PostMeta from "../../../components/PostMeta";

export const metadata: Metadata = {
  title: "Roteiro de 7 dias em Orlando: Disney, Universal e dia livre — Tarifly",
  description:
    "Roteiro de 7 dias em Orlando, dia a dia: quais parques da Disney e da Universal encaixar, onde colocar o dia livre e como adaptar pra 5 ou 10 dias.",
};

const dias = [
  {
    titulo: "Dia 1 — Chegada, sem parque",
    texto:
      "Retire o carro, faça o check-in e passe no mercado pra comprar água, lanches e o básico do café da manhã. Se sobrar energia, Disney Springs ou CityWalk à noite são gratuitos e bons pra um primeiro passeio leve. Durma cedo: o dia 2 começa cedo.",
  },
  {
    titulo: "Dia 2 — Magic Kingdom",
    texto:
      "O parque mais clássico da Disney. Chegue na abertura, faça primeiro as atrações mais disputadas e deixe as de fila curta pro fim da tarde. Quem curte os fogos costuma ficar até o encerramento, então este é um dia longo.",
  },
  {
    titulo: "Dia 3 — Universal Islands of Adventure",
    texto:
      "Montanhas-russas mais radicais e o mundo de Harry Potter. Vale chegar cedo e ir direto às atrações principais antes de a fila crescer. Alternar um dia de Disney com um de Universal evita a sensação de repetir o mesmo tipo de dia.",
  },
  {
    titulo: "Dia 4 — Dia livre",
    texto:
      "Metade da viagem é um bom ponto pra descansar. Escolha entre piscina na hospedagem, um dia de outlet ou Disney Springs com calma. Quem pula esse dia costuma sentir o cansaço acumulado nos dias seguintes.",
  },
  {
    titulo: "Dia 5 — EPCOT",
    texto:
      "Parque grande, com muita caminhada, e que rende bem pra quem gosta de comer e passear pelos pavilhões de países. Use calçado confortável e reserve a tarde pra parte gastronômica.",
  },
  {
    titulo: "Dia 6 — Universal Epic Universe",
    texto:
      "O parque mais novo da Universal pede um dia inteiro. Como é grande e concentra muita gente, vale chegar na abertura e ir às atrações principais primeiro.",
  },
  {
    titulo: "Dia 7 — Hollywood Studios ou Animal Kingdom",
    texto:
      "Escolha pelo perfil do grupo: Hollywood Studios é o menor dos parques da Disney e tem muita atração temática; Animal Kingdom combina bem com quem gosta de bicho e de natureza, e é melhor começando cedo.",
  },
  {
    titulo: "Dia 8 — Volta",
    texto:
      "Use a manhã pra compras de última hora, devolver o carro e chegar com folga ao aeroporto. Se o voo for de madrugada, dá pra aproveitar o dia com tranquilidade sem parque.",
  },
];

export default function Roteiro7Dias() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <ArticleJsonLd metadata={metadata} path="/destinos/orlando/roteiro-7-dias" />
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Roteiro
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Roteiro de 7 dias em Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Disney, Universal e um dia livre no meio, sem tentar ver tudo e voltar
        exausto.
      </p>
      <PostMeta slug="roteiro-7-dias" />

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Como este roteiro foi pensado
          </h2>
          <p className="mt-2">
            São 7 dias de aproveitamento, com chegada no dia 1 e volta no dia
            8. Dá pra encaixar <strong>3 parques da Disney e 2 da Universal</strong>,
            mais um dia livre. Não cabem todos os parques sem correr: se você
            ainda não decidiu o que priorizar, veja{" "}
            <Link
              href="/destinos/orlando/disney-ou-universal"
              className="text-brand hover:underline"
            >
              Disney ou Universal
            </Link>{" "}
            e{" "}
            <Link
              href="/destinos/orlando/quantos-dias-ficar"
              className="text-brand hover:underline"
            >
              quantos dias ficar em Orlando
            </Link>
            .
          </p>
          <p className="mt-2">
            A lógica é alternar Disney e Universal e colocar o dia livre no
            meio da viagem, quando o cansaço começa a pesar. Pra preencher o
            dia livre, veja{" "}
            <Link
              href="/destinos/orlando/outlets-em-orlando"
              className="text-brand hover:underline"
            >
              outlets em Orlando
            </Link>{" "}
            e{" "}
            <Link
              href="/destinos/orlando/fora-dos-parques"
              className="text-brand hover:underline"
            >
              Orlando fora dos parques
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Dia a dia
          </h2>
          <div className="mt-3 space-y-5">
            {dias.slice(0, 4).map((d) => (
              <div key={d.titulo}>
                <h3 className="font-semibold text-gray-900">{d.titulo}</h3>
                <p className="mt-1">{d.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <BuscarCTA compact title="Montando o roteiro? Veja o preço da passagem" />

        <section>
          <div className="space-y-5">
            {dias.slice(4).map((d) => (
              <div key={d.titulo}>
                <h3 className="font-semibold text-gray-900">{d.titulo}</h3>
                <p className="mt-1">{d.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Antes de ir: o que fechar com antecedência
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Ingressos.</strong> Defina quais parques e quantos dias
              antes de comprar —{" "}
              <Link
                href="/destinos/orlando/ingressos-dos-parques"
                className="text-brand hover:underline"
              >
                quando comprar os ingressos
              </Link>
              .
            </li>
            <li>
              <strong>Hospedagem.</strong> Com 7 noites, vale comparar casa de
              temporada e hotel (veja{" "}
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
            </li>
            <li>
              <strong>Carro.</strong> O roteiro assume deslocamento próprio
              entre hospedagem e parques — veja{" "}
              <Link
                href="/destinos/orlando/alugar-carro"
                className="text-brand hover:underline"
              >
                alugar carro em Orlando
              </Link>
              .
            </li>
            <li>
              <strong>Passagem.</strong> Compre dentro da janela ideal (
              <Link
                href="/destinos/orlando/quando-comprar-passagem"
                className="text-brand hover:underline"
              >
                quando comprar passagem
              </Link>
              ) e escolha entre voo direto ou com conexão (
              <Link
                href="/destinos/orlando/voo-direto-ou-conexao"
                className="text-brand hover:underline"
              >
                aqui
              </Link>
              ).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Como adaptar pra mais ou menos dias
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>5 dias:</strong> tire o dia livre e o Animal Kingdom
              (ou Hollywood Studios), mantenha Magic Kingdom, uma Universal e
              mais um parque da Disney.
            </li>
            <li>
              <strong>10 dias:</strong> inclua os quatro parques da Disney,
              os dois principais da Universal e dois dias livres, um deles
              pra{" "}
              <Link
                href="/destinos/orlando/outlets-em-orlando"
                className="text-brand hover:underline"
              >
                outlets
              </Link>
              .
            </li>
            <li>
              <strong>Com criança pequena:</strong> reduza pra um parque por
              dia, nunca dois, e deixe a tarde livre pra descanso.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Erros que atrapalham o roteiro
          </h2>
          <p className="mt-2">
            Chegar tarde ao parque, ficar o dia todo sem comer direito e
            lotar a agenda são os mais comuns. Os outros erros de quem vai
            pela primeira vez estão em{" "}
            <Link
              href="/destinos/orlando/erros-comuns"
              className="text-brand hover:underline"
            >
              erros comuns da primeira viagem
            </Link>
            , e pra reduzir o custo do roteiro vale ver{" "}
            <Link
              href="/destinos/orlando/como-economizar"
              className="text-brand hover:underline"
            >
              como economizar sem abrir mão dos parques
            </Link>
            .
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Roteiro pronto? Veja o preço real da passagem"
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
