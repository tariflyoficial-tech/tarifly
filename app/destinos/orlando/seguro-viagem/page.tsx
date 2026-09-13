import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Seguro viagem pra Orlando: é obrigatório? O que cobre — Tarifly",
  description:
    "O seguro viagem é exigido pro visto americano? O que ele cobre de verdade em Orlando e por que vale a pena mesmo não sendo obrigatório.",
};

export default function SeguroViagem() {
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
        Seguro viagem pra Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Não é exigido por lei — mas é uma das decisões mais caras de errar se
        você pular essa parte.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Não é exigido pro visto americano
          </h2>
          <p className="mt-2">
            Diferente do visto Schengen (Europa), o visto de turista
            americano (B1/B2) <strong>não exige</strong> comprovação de
            seguro viagem como parte do processo. Ou seja: você consegue
            entrar nos EUA sem seguro. A questão não é obrigatoriedade, é
            risco financeiro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Por que contratar mesmo não sendo obrigatório
          </h2>
          <p className="mt-2">
            Atendimento médico nos EUA é notoriamente caro pra quem não tem
            plano americano — uma emergência simples de pronto-socorro pode
            custar milhares de dólares sem seguro. Pra uma viagem cheia de
            caminhada, sol forte e parque aquático, o risco de um imprevisto
            (torção, insolação, corte que precisa de pontos) não é
            desprezível.
          </p>
        </section>

        <BuscarCTA compact title="Resolvido o seguro? Agora é hora de comparar a passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            O que checar num seguro pros EUA
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Cobertura médica mínima alta</strong> — os EUA têm
              custo de saúde muito acima da média mundial, então o valor de
              cobertura precisa refletir isso
            </li>
            <li>
              Cobertura de cancelamento/interrupção de viagem
            </li>
            <li>
              Se cobre atividades específicas do roteiro (parque aquático,
              esportes)
            </li>
            <li>
              Se algum cartão de crédito que você já tem inclui seguro viagem
              — pode evitar gasto duplicado, mas confira o valor de cobertura
              antes de confiar só nisso
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
