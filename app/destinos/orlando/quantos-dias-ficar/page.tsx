import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Quantos dias ficar em Orlando pra não correr — Tarifly",
  description:
    "Quantos dias reservar pra cada parque de Orlando e um roteiro de referência pra quem tem uma semana, pra não sair correndo de atração em atração.",
};

export default function QuantosDias() {
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
        Quantos dias ficar em Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        O erro mais comum é subestimar o tamanho dos parques da Disney — e
        acabar correndo no último dia.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quantos dias por parque, na prática
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Magic Kingdom</strong> — 1 dia inteiro dá pra ver o
              essencial, mas quem gosta de show noturno e não quer correr
              costuma preferir 1,5 dia.
            </li>
            <li>
              <strong>EPCOT</strong> — 1 dia, mas ele é grande e tem muita
              caminhada; quem curte gastronomia dos pavilhões de países
              costuma achar meio-dia a mais valioso.
            </li>
            <li>
              <strong>Hollywood Studios</strong> — 1 dia é suficiente pra
              maioria, é o menor dos quatro parques da Disney.
            </li>
            <li>
              <strong>Animal Kingdom</strong> — 1 dia, de preferência
              começando cedo (as atrações principais enchem rápido).
            </li>
            <li>
              <strong>Universal (Islands of Adventure + Epic Universe)</strong>{" "}
              — pelo menos 2 dias, um pra cada parque, mais um terceiro se
              quiser incluir o Volcano Bay (parque aquático).
            </li>
          </ul>
        </section>

        <BuscarCTA compact title="Já sabe o número de dias? Veja as datas mais baratas pra voar" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Roteiro de referência: 7 dias
          </h2>
          <p className="mt-2">
            Uma semana é o ponto de equilíbrio mais comum entre "ver o
            essencial" e "não voltar exausto":
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>1 dia de chegada, sem parque (ajuste de fuso, check-in)</li>
            <li>4 dias de parques Disney (um por parque)</li>
            <li>2 dias de Universal</li>
            <li>
              Dias extras (se tiver): outlet, um dia de descanso na piscina,
              ou repetir o parque favorito
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Se você só tem 4 ou 5 dias
          </h2>
          <p className="mt-2">
            Dá pra fazer, mas escolha: ou foca só na Disney (3-4 dias, um
            parque por dia), ou divide entre Disney e Universal sem tentar
            ver tudo. Tentar encaixar os 6 parques principais em 5 dias
            costuma resultar em dias corridos e menos aproveitamento por
            atração.
          </p>
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
