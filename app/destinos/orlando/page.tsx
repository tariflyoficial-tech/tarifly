import type { Metadata } from "next";
import Link from "next/link";

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
      </div>

      <div className="mt-12 rounded-2xl bg-brand px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Já pode comparar preços</h2>
        <p className="mt-2 text-white/80">
          Passagem e hospedagem pra Orlando, sem sair do site.
        </p>
        <a
          href="/#busca"
          className="mt-4 inline-block rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
        >
          Buscar agora
        </a>
      </div>
    </div>
  );
}
