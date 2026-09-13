import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../../components/BuscarCTA";

export const metadata: Metadata = {
  title: "Disney ou Universal: qual escolher se só der pra ir num — Tarifly",
  description:
    "Se sua viagem pra Orlando só tem tempo pra um parque, veja as diferenças entre Disney e Universal pra escolher de acordo com o perfil do grupo.",
};

export default function DisneyOuUniversal() {
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
        Disney ou Universal: qual escolher
      </h1>
      <p className="mt-3 text-base text-gray-500">
        São experiências bem diferentes — a escolha certa depende de quem
        está na viagem.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Disney: fantasia, família e personagens
          </h2>
          <p className="mt-2">
            Os quatro parques da Disney são voltados pra imersão e fantasia —
            castelos, personagens, shows e um cuidado extremo com
            ambientação. É a escolha mais forte pra famílias com crianças
            pequenas, e ainda funciona bem pra adultos que gostam da parte
            nostálgica e dos passeios mais tranquilos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Universal: adrenalina e cultura pop
          </h2>
          <p className="mt-2">
            A Universal aposta em montanhas-russas mais radicais e franquias
            de cinema/game (Harry Potter, Jurassic Park, Super Mario). Tende
            a agradar mais adolescentes, adultos e fãs de filme — as
            atrações em geral têm restrição de altura mais alta que as da
            Disney.
          </p>
        </section>

        <BuscarCTA compact title="Decidiu? Veja o preço da passagem pra sua data" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Perguntas rápidas pra decidir
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Tem criança pequena (abaixo de 1,20m)?</strong> Disney
              tem muito mais opção de atração pra essa altura.
            </li>
            <li>
              <strong>O grupo curte montanha-russa radical?</strong> Universal
              entrega mais nessa categoria.
            </li>
            <li>
              <strong>É fã de Harry Potter?</strong> Só a Universal tem o
              mundo temático completo.
            </li>
            <li>
              <strong>Quer a experiência "clássica de Orlando"?</strong> A
              Disney ainda é a mais icônica pra quem vai pela primeira vez.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Se der pra encaixar os dois
          </h2>
          <p className="mt-2">
            Se o roteiro permitir (veja{" "}
            <Link
              href="/destinos/orlando/quantos-dias-ficar"
              className="text-brand hover:underline"
            >
              quantos dias ficar em Orlando
            </Link>
            ), não precisa escolher — mas se o tempo for curto, é melhor
            aproveitar bem um parque do que correr entre os dois.
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
