import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Orlando fora dos parques: o que fazer sem gastar ingresso — Tarifly",
  description:
    "O que fazer em Orlando sem entrar em parque temático — day off de descanso, compras e passeios gratuitos ou baratos pra intercalar com os dias de Disney e Universal.",
};

export default function ForaDosParques() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Parques
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Orlando fora dos parques
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Um roteiro só de parque cansa. Vale reservar pelo menos um dia sem
        ingresso.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Disney Springs e CityWalk
          </h2>
          <p className="mt-2">
            São os distritos de lazer da Disney e da Universal — entrada
            gratuita, cheios de loja, restaurante e atração pontual paga (tipo
            boliche ou cinema). Dá pra passar uma tarde inteira sem gastar com
            ingresso de parque.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Um dia de descanso na hospedagem
          </h2>
          <p className="mt-2">
            Se está numa casa de temporada com piscina (veja{" "}
            <Link
              href="/destinos/orlando/casa-de-temporada-ou-hotel"
              className="text-brand hover:underline"
            >
              casa de temporada ou hotel
            </Link>
            ), um dia sem sair de casa recupera energia pro resto da viagem —
            principalmente com criança pequena, onde "ver tudo" todo santo
            dia cobra caro no fim.
          </p>
        </section>

        <BuscarCTA compact title="Enquanto planeja os dias livres, compare sua passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Outlets e compras
          </h2>
          <p className="mt-2">
            Um dia de outlet costuma render tanto quanto um dia de parque em
            satisfação, principalmente pra quem vai comprar mala cheia. Veja
            mais no guia específico de outlets.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Lagos e natureza fora do circuito turístico
          </h2>
          <p className="mt-2">
            A região de Orlando tem parques estaduais e lagos com trilha e
            observação de vida selvagem — opção gratuita ou de baixo custo
            pra quem quer um contraste com o ritmo agitado dos parques
            temáticos.
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
