import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarifly — viagem no seu ritmo",
  description:
    "Compare voos e hotéis em segundos e reserve direto com quem vende. Sem ligação, sem atendimento obrigatório.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#101828]">
        {children}

        {/* Travelpayouts Drive — precisa ser tag <script> literal (renderizada
            no HTML do servidor) porque a verificação da Travelpayouts lê o
            HTML bruto da página, sem executar JavaScript. */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error atributos exigidos pela Travelpayouts, fora da tipagem padrão de <script> */}
        <script
          nowprocket=""
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
          seraph-accel-crit="1"
          data-no-defer="1"
          data-cmp-ab="2"
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var script = document.createElement("script");
  script.async = 1;
  script.setAttribute("data-cmp-ab", "2");
  script.src = 'https://emrld.ltd/NTczNTk2.js?t=573596';
  document.head.appendChild(script);
})();`,
          }}
        />
      </body>
    </html>
  );
}
