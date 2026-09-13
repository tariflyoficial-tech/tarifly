import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Tarifly",
  description: "Como o Tarifly trata seus dados pessoais.",
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <Link href="/" className="text-sm font-medium text-brand hover:underline">
        ← Voltar para o Tarifly
      </Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        Última atualização: setembro de 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="font-semibold text-gray-900">1. O que é o Tarifly</h2>
          <p className="mt-2">
            O Tarifly é um site comparador de passagens aéreas e hospedagem.
            Buscamos preços em diferentes companhias aéreas e agências e
            direcionamos você para o site do vendedor para concluir a compra.
            Não processamos pagamentos nem armazenamos dados de reserva.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900">
            2. Quais dados coletamos
          </h2>
          <p className="mt-2">
            Ao usar o formulário de busca, os campos preenchidos (origem,
            destino, datas, número de passageiros) são usados apenas para
            montar sua busca e não ficam armazenados em nossos servidores.
          </p>
          <p className="mt-2">
            Como a maioria dos sites, coletamos automaticamente dados de
            navegação (como endereço IP, tipo de navegador e páginas
            visitadas) para fins de segurança e melhoria do site.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900">
            3. Links de afiliado
          </h2>
          <p className="mt-2">
            Os resultados de busca contêm links de afiliado. Ao clicar,
            podemos receber uma comissão do vendedor (companhia aérea,
            agência ou plataforma de hospedagem) — isso não altera o preço
            que você paga. Assim que você clica em um resultado, sai do
            Tarifly e a política de privacidade do site de destino passa a
            valer.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900">
            4. Seus direitos (LGPD)
          </h2>
          <p className="mt-2">
            Nos termos da Lei Geral de Proteção de Dados (Lei nº
            13.709/2018), você pode solicitar a qualquer momento a
            confirmação, o acesso, a correção ou a eliminação de dados
            pessoais que tenhamos sobre você, entrando em contato pelo
            e-mail abaixo.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900">5. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política podem ser enviadas para{" "}
            <a
              href="mailto:contato@tarifly.com.br"
              className="text-brand hover:underline"
            >
              contato@tarifly.com.br
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
