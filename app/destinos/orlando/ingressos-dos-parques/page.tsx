import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Ingressos dos parques em Orlando: quando comprar — Tarifly",
  description:
    "Comprar o ingresso dos parques de Orlando antes de viajar ou na chegada, e se vale a pena arriscar revenda ou promoção de terceiros.",
};

export default function IngressosDosParques() {
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
        Ingressos dos parques: quando comprar
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Comprar com antecedência quase sempre compensa — a dúvida real é
        outra.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Compre direto no site oficial, com antecedência
          </h2>
          <p className="mt-2">
            Diferente de passagem aérea, o ingresso dos parques não fica mais
            barato esperando — pelo contrário, alguns parques aumentam o
            preço de tempos em tempos. A regra prática é: assim que souber as
            datas exatas dos dias de parque, compre direto no site oficial da
            Disney ou da Universal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quanto mais dias, menor o preço por dia
          </h2>
          <p className="mt-2">
            Os dois parques usam uma tabela onde o preço por dia de ingresso
            cai conforme você compra mais dias de uma vez. Vale sempre somar
            o número exato de dias de parque do roteiro (veja{" "}
            <Link
              href="/destinos/orlando/quantos-dias-ficar"
              className="text-brand hover:underline"
            >
              quantos dias ficar em Orlando
            </Link>
            ) antes de comprar, em vez de ir adicionando um dia de cada vez.
          </p>
        </section>

        <BuscarCTA compact title="Já sabe as datas de parque? Veja o preço da passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Revenda e "promoção" de terceiros: cuidado
          </h2>
          <p className="mt-2">
            Ingresso de parque nos EUA é nominal e vinculado a documento —
            comprar de revendedor não oficial é risco real de golpe ou
            ingresso inválido na catraca. A única fonte confiável é o site
            oficial de cada parque (ou parceiros oficiais claramente
            identificados neles).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Vale a pena o acesso rápido às filas?
          </h2>
          <p className="mt-2">
            Ambos os parques vendem um upgrade pra pular parte da fila das
            atrações mais concorridas. Costuma valer mais a pena em dias de
            parque cheio (feriados, alta temporada) do que em dias de baixa
            demanda — é uma decisão de custo-benefício pontual, não uma regra
            fixa.
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
