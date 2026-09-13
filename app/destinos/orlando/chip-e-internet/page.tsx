import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Chip ou eSIM pra Orlando: qual escolher — Tarifly",
  description:
    "eSIM, chip físico americano ou Wi-Fi portátil: as opções de internet pra usar em Orlando e qual costuma ser mais prática pra cada tipo de viagem.",
};

export default function ChipEInternet() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/destinos/orlando"
        className="text-sm font-medium text-brand hover:underline"
      >
        ← Guia completo de Orlando
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Orlando · Logística
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Chip ou eSIM pra Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Você vai precisar de internet o tempo todo — pra mapa, tradutor,
        aplicativo do parque e Uber.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            eSIM: a opção mais prática hoje
          </h2>
          <p className="mt-2">
            Se o celular é relativamente recente (a maioria dos modelos dos
            últimos anos suporta), o eSIM é a opção mais simples: você
            compra e ativa o plano antes mesmo de embarcar, sem precisar
            trocar chip físico nem ficar sem o número brasileiro durante a
            viagem (fica com os dois ativos ao mesmo tempo).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Chip físico americano
          </h2>
          <p className="mt-2">
            Costuma ter planos de dados mais baratos por GB, mas exige achar
            um ponto de venda físico nos EUA e trocar o chip do aparelho —
            o que significa perder acesso ao número brasileiro (WhatsApp
            continua funcionando pela internet, ligação e SMS não).
          </p>
        </section>

        <BuscarCTA compact title="Enquanto resolve a internet, compare sua passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Wi-Fi portátil (pocket wi-fi)
          </h2>
          <p className="mt-2">
            Faz sentido pra grupos que preferem compartilhar uma única
            internet entre vários aparelhos (e não trocar chip de cada
            celular), mas significa carregar mais um equipamento e depender
            da bateria dele.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Qual escolher
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Viagem individual ou casal, celular recente:</strong> eSIM
            </li>
            <li>
              <strong>Quer o menor custo por GB e não se importa em trocar chip:</strong>{" "}
              chip físico
            </li>
            <li>
              <strong>Grupo grande dividindo internet:</strong> Wi-Fi portátil
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
