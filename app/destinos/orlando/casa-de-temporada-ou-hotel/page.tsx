import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Casa de temporada ou hotel em Orlando: o que escolher — Tarifly",
  description:
    "Prós e contras de ficar numa casa de temporada com piscina ou num hotel tradicional em Orlando, e pra qual perfil de viagem cada opção faz mais sentido.",
};

export default function CasaOuHotel() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Hospedagem
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Casa de temporada ou hotel em Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Não é sobre qual é "melhor" — é sobre qual combina com o tamanho do
        seu grupo e o seu roteiro.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Casa de temporada: quando faz sentido
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              Grupo de 5 pessoas ou mais — o custo por pessoa cai bastante
              comparado a dividir quartos de hotel
            </li>
            <li>
              Cozinha própria — economiza em pelo menos uma refeição por dia
            </li>
            <li>
              Piscina particular — evita fila e disputa por espaço, comum em
              piscina de hotel grande
            </li>
            <li>Espaço pra descompressão no meio do dia sem sair do quarto</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Hotel tradicional: quando faz sentido
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Casal ou família pequena, onde o custo por pessoa de uma casa não compensa</li>
            <li>Serviço de quarto e limpeza diária, sem se preocupar com manutenção</li>
            <li>
              Hotéis dentro do complexo Disney/Universal costumam ter
              transporte próprio e benefícios exclusivos de parque
            </li>
            <li>Estadia curta, onde não vale a pena o trabalho de gerenciar uma casa</li>
          </ul>
        </section>

        <BuscarCTA compact title="Compare hotéis e opções de hospedagem em Orlando" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O que ninguém conta sobre casa de temporada
          </h2>
          <p className="mt-2">
            Taxa de limpeza e taxa de reserva costumam ser cobradas à parte
            do valor da diária — sempre confira o total antes de comparar com
            o preço de um hotel. E fica mais longe da "experiência de parque"
            (sem transporte próprio, sem personagem circulando no café da
            manhã).
          </p>
        </section>
      </div>

      <BuscarCTA
        title="Veja preços reais dos dois formatos"
        subtitle="Compare hotel e hospedagem em grupo antes de decidir."
      />

      <p className="mt-8 text-sm text-gray-400">
        Veja também:{" "}
        <Link
          href="/destinos/orlando/onde-ficar-em-orlando"
          className="text-brand hover:underline"
        >
          onde ficar em Orlando
        </Link>
        .
      </p>
    </article>
  );
}
