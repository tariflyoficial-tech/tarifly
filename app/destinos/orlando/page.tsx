import type { Metadata } from "next";
import Link from "next/link";
import BuscarCTA from "../../components/BuscarCTA";

const artigosRelacionados = [
  { slug: "melhor-epoca-para-viajar", titulo: "Melhor época pra viajar pra Orlando" },
  { slug: "quanto-custa-uma-viagem", titulo: "Quanto custa uma viagem pra Orlando" },
  { slug: "quantos-dias-ficar", titulo: "Quantos dias ficar em Orlando" },
  { slug: "erros-comuns", titulo: "Erros comuns de quem vai pela primeira vez" },
  { slug: "como-economizar", titulo: "Como economizar sem abrir mão dos parques" },
  { slug: "quando-comprar-passagem", titulo: "Quando comprar passagem pra Orlando" },
  { slug: "voo-direto-ou-conexao", titulo: "Voo direto ou com conexão" },
  { slug: "onde-ficar-em-orlando", titulo: "Onde ficar em Orlando (guia de bairros)" },
  { slug: "casa-de-temporada-ou-hotel", titulo: "Casa de temporada ou hotel" },
  { slug: "disney-ou-universal", titulo: "Disney ou Universal: qual escolher" },
];

export const metadata: Metadata = {
  title: "Orlando: quando comprar passagem, onde ficar e como economizar — Tarifly",
  description:
    "Guia prático pra quem vai pra Orlando: melhor época pra comprar passagem, bairros pra se hospedar, visto americano e como comparar preços sem perder tempo.",
};

export default function GuiaOrlando() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <Link href="/" className="text-sm font-medium text-brand hover:underline">
        ← Voltar para o Tarifly
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        Guia de destino
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Orlando: o que saber antes de comprar sua passagem
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Sem enrolação: visto, época certa de comprar, onde ficar e como
        comparar preços de verdade.
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Visto: o primeiro passo, antes de olhar preço de passagem
          </h2>
          <p className="mt-2">
            Brasil não está no programa de isenção de visto dos EUA — ou seja,
            não dá pra entrar só com passaporte, mesmo que a viagem seja curta
            e só a turismo. É preciso o visto de turista (B1/B2), que costuma
            durar anos depois de aprovado (então geralmente é um processo que
            você faz uma vez só). Vale resolver isso antes de comprar
            qualquer coisa — passagem e hospedagem só valem a pena reservar
            depois que o visto está encaminhado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Quando comprar a passagem
          </h2>
          <p className="mt-2">
            Pra Orlando, os preços costumam ficar mais em conta fora de julho
            (férias escolares) e do período entre Natal e Ano Novo — os dois
            picos de alta temporada mais fortes pra quem sai do Brasil.
            Comprar com 2 a 4 meses de antecedência costuma dar o melhor
            equilíbrio entre preço e disponibilidade de datas.
          </p>
          <p className="mt-2">
            Como o preço muda de um dia pro outro, o ideal é comparar direto
            no momento da compra, não confiar num valor "médio" que você viu
            em algum lugar.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Onde ficar: os bairros mais procurados
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Lake Buena Vista / perto da Disney</strong> — mais caro,
              mas você economiza tempo de deslocamento se o foco da viagem são
              os parques.
            </li>
            <li>
              <strong>International Drive (I-Drive)</strong> — bom
              custo-benefício, cheio de restaurante e loja, a uns 15-20 min
              dos parques de carro.
            </li>
            <li>
              <strong>Kissimmee</strong> — geralmente a opção mais barata,
              muita casa/condomínio de temporada, indicado pra quem viaja em
              grupo ou família grande.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            <Link
              href="/destinos/orlando/onde-ficar-em-orlando"
              className="text-brand hover:underline"
            >
              Ver o guia completo de bairros →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Carro é quase obrigatório
          </h2>
          <p className="mt-2">
            Orlando não tem transporte público que cubra bem os parques e
            bairros turísticos. Se o hotel não tiver transporte próprio
            incluso, alugar um carro costuma sair mais em conta do que depender
            de aplicativo o tempo todo, principalmente em grupo.
          </p>
        </section>

        <BuscarCTA compact title="Já viu o essencial? Compare o preço da sua passagem" />

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Continue planejando
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {artigosRelacionados.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/destinos/orlando/${a.slug}`}
                  className="text-brand hover:underline"
                >
                  {a.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <BuscarCTA />
    </div>
  );
}
