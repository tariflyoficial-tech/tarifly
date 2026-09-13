import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Onde ficar em Orlando: guia completo de bairros — Tarifly",
  description:
    "Lake Buena Vista, International Drive ou Kissimmee? Guia detalhado dos bairros de Orlando pra escolher onde ficar de acordo com seu roteiro e orçamento.",
};

export default function OndeFicarEmOrlando() {
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
        Onde ficar em Orlando
      </h1>
      <p className="mt-3 text-base text-gray-500">
        O bairro certo depende mais do seu roteiro do que do seu orçamento.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Lake Buena Vista e arredores da Disney
          </h2>
          <p className="mt-2">
            É a opção mais cara, mas resolve um problema real: deslocamento.
            Se o roteiro é praticamente só parques da Disney, ficar perto
            reduz tempo de trânsito e permite voltar ao hotel no meio do dia
            pra descansar — algo que faz diferença com crianças pequenas.
          </p>
          <p className="mt-2">
            <strong>Ideal pra:</strong> quem vai focar quase só na Disney e
            não se importa de pagar mais por conveniência.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            International Drive (I-Drive)
          </h2>
          <p className="mt-2">
            Fica entre a Disney e a Universal, com fácil acesso às duas — a
            uns 15-20 minutos de carro de cada uma. É onde fica boa parte dos
            restaurantes, atrações menores e outlets, o que ajuda a preencher
            os dias sem parque.
          </p>
          <p className="mt-2">
            <strong>Ideal pra:</strong> quem vai dividir o roteiro entre
            Disney e Universal, e quer ficar num ponto central.
          </p>
        </section>

        <BuscarCTA compact title="Ache sua hospedagem em qualquer um desses bairros" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Kissimmee</h2>
          <p className="mt-2">
            Fica ao sul da Disney e concentra a maior oferta de casas de
            temporada com piscina particular — geralmente a opção mais
            barata por pessoa quando o grupo é grande. O trade-off é um
            trajeto um pouco mais longo até os parques.
          </p>
          <p className="mt-2">
            <strong>Ideal pra:</strong> famílias grandes ou grupos dividindo
            uma casa, priorizando espaço e custo sobre proximidade.
          </p>
          <p className="mt-2">
            Veja também o comparativo entre{" "}
            <Link
              href="/destinos/orlando/casa-de-temporada-ou-hotel"
              className="text-brand hover:underline"
            >
              casa de temporada e hotel
            </Link>{" "}
            antes de decidir o tipo de hospedagem.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Resumo pra decidir rápido
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Foco 100% Disney, orçamento flexível → Lake Buena Vista</li>
            <li>Disney + Universal, quer ponto central → International Drive</li>
            <li>Grupo grande, prioriza espaço e economia → Kissimmee</li>
          </ul>
        </section>
      </div>

      <BuscarCTA
        title="Compare hospedagem nesses bairros agora"
        subtitle="Veja preços reais antes de decidir onde ficar."
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
