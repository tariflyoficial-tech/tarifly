import { Fraunces } from "next/font/google";
import Link from "next/link";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export default function BlogLayout({ children }: LayoutProps<"/destinos">) {
  return (
    <div className={`${display.variable} blog-theme flex flex-1 flex-col`}>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight text-brand"
        >
          tarifly
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-gray-700">
          <Link href="/destinos" className="hover:text-accent">
            Blog
          </Link>
          <Link
            href="/#busca"
            className="rounded-full border border-brand/40 px-4 py-1.5 transition-colors hover:border-accent hover:text-accent"
          >
            Buscar passagens
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-xs text-gray-400">
        <p className="mx-auto max-w-xl">
          Tarifly é um comparador de viagens. Alguns links são de afiliados e
          podemos ganhar comissão — o preço final é sempre definido pelo
          vendedor, sem custo extra para você.
        </p>
        <Link
          href="/politica-de-privacidade"
          className="mt-2 inline-block underline hover:text-accent"
        >
          Política de Privacidade
        </Link>
      </footer>
    </div>
  );
}
