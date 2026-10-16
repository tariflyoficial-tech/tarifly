import Link from "next/link";
import SearchWidget from "./components/SearchWidget";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 px-2 py-3 sm:px-4 backdrop-blur">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-brand">
              tarifly
            </span>
            <span className="hidden text-xs text-gray-500 sm:inline">
              viagem no seu ritmo
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 text-[13px] font-medium text-gray-800 sm:gap-x-2 sm:text-sm">
            <a
              href="#busca"
              className="rounded-full px-1.5 py-1.5 transition-colors hover:bg-brand/5 sm:px-3 hover:text-brand"
            >
              Passagens
            </a>
            <a
              href="#busca"
              className="rounded-full px-1.5 py-1.5 transition-colors hover:bg-brand/5 sm:px-3 hover:text-brand"
            >
              Hospedagem
            </a>
            <a
              href="#como-funciona"
              className="rounded-full px-1.5 py-1.5 transition-colors hover:bg-brand/5 sm:px-3 hover:text-brand"
            >
              Como funciona
            </a>
            <Link
              href="/destinos"
              className="rounded-full bg-accent px-3 py-1.5 sm:px-4 font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
            >
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center bg-gradient-to-b from-brand to-brand-dark px-4 pb-16 pt-12 text-white sm:pt-20">
        <h1 className="max-w-2xl text-center text-3xl font-bold leading-tight sm:text-4xl">
          Você já resolve tudo online. Viagem também.
        </h1>
        <p className="mt-3 max-w-xl text-center text-base text-white/80 sm:text-lg">
          Compare voos e hotéis de centenas de companhias e agências em
          segundos, e reserve direto com quem vende.
        </p>

        <div id="busca" className="mt-8 w-full scroll-mt-32 flex justify-center">
          <SearchWidget />
        </div>
      </main>

      <section
        id="como-funciona"
        className="mx-auto grid max-w-4xl scroll-mt-32 grid-cols-1 gap-8 px-6 py-14 text-center sm:grid-cols-3"
      >
        <Feature
          title="Compare em segundos"
          description="Buscamos preços em centenas de companhias aéreas e agências de uma vez só."
        />
        <Feature
          title="Sem intermediário"
          description="Você reserva direto no site da companhia ou agência — sem taxa extra nossa."
        />
        <Feature
          title="No seu ritmo"
          description="Sem ligação, sem atendimento obrigatório. Você busca, compara e decide."
        />
      </section>

      <footer className="border-t border-gray-100 px-6 py-6 text-center text-xs text-gray-400">
        <p>
          Tarifly é um comparador de viagens. Alguns links são de afiliados e
          podemos ganhar comissão — o preço final é sempre definido pelo
          vendedor, sem custo extra para você.
        </p>
        <Link
          href="/politica-de-privacidade"
          className="mt-2 inline-block underline hover:text-brand"
        >
          Política de Privacidade
        </Link>
      </footer>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm text-gray-500">{description}</p>
    </div>
  );
}
