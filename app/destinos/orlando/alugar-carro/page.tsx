import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Alugar carro em Orlando: documentos e seguro — Tarifly",
  description:
    "O que levar pra alugar carro em Orlando, se a CNH brasileira basta, e como funciona o seguro do carro alugado — o que considerar antes de fechar.",
};

export default function AlugarCarro() {
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
        Alugar carro em Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Quase obrigatório em Orlando — vale entender documento e seguro antes
        de chegar ao balcão.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Documentos: CNH e Permissão Internacional
          </h2>
          <p className="mt-2">
            A CNH brasileira válida costuma ser aceita nos EUA para estadias
            de turista, mas cada locadora tem sua própria política — algumas
            recomendam fortemente (ou exigem) também a{" "}
            <strong>Permissão Internacional para Dirigir (PID)</strong>,
            documento simples de tirar no Brasil antes da viagem. Como a
            política muda de locadora pra locadora, o mais seguro é confirmar
            diretamente com a empresa escolhida antes de embarcar, e levar
            os dois documentos por precaução.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Cartão de crédito internacional é obrigatório
          </h2>
          <p className="mt-2">
            Locadoras nos EUA praticamente sempre exigem cartão de crédito
            (não débito) em nome do condutor principal, pra bloquear a caução
            de segurança. Sem isso, normalmente não conseguem liberar o
            carro.
          </p>
        </section>

        <BuscarCTA compact title="Já decidiu alugar carro? Veja o preço da passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Seguro do carro: a parte que mais confunde
          </h2>
          <p className="mt-2">
            Existem várias camadas de proteção oferecidas no balcão (dano ao
            veículo, responsabilidade civil, proteção contra roubo) e cada
            locadora empurra pacotes de forma agressiva. Antes de aceitar
            tudo no balcão, vale checar:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Se seu cartão de crédito internacional já inclui alguma
              cobertura de seguro de carro alugado (muitos cartões premium
              incluem)
            </li>
            <li>
              Se o seguro viagem contratado cobre algum tipo de dano a
              veículo alugado
            </li>
            <li>
              Que a responsabilidade civil (cobertura por danos a terceiros)
              costuma ser a mais importante de não ficar sem, dado o custo
              de processos nos EUA
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Pedágio automático
          </h2>
          <p className="mt-2">
            As estradas da Flórida têm pedágio automático por câmera —
            algumas locadoras cobram uma taxa de conveniência por dia de uso
            além do valor do pedágio em si. Vale perguntar como funciona antes
            de sair dirigindo pela primeira vez.
          </p>
        </section>
      </div>

      <BuscarCTA />

      <p className="mt-8 text-sm text-gray-400">
        Veja também:{" "}
        <Link
          href="/destinos/orlando/seguro-viagem"
          className="text-brand hover:underline"
        >
          seguro viagem pra Orlando
        </Link>
        .
      </p>
    </article>
  );
}
