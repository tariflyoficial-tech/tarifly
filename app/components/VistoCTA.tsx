const ROTA_CONSULAR_URL = "https://rotaconsular.com.br/";

export default function VistoCTA({
  title = "Ainda não tem o visto americano?",
  subtitle = "Solicite seu visto de turista pela Rota Consular.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-xl border border-[#0A3161]/15 bg-white">
      <div className="flex h-1">
        <span className="w-1/3 bg-[#0A3161]" />
        <span className="w-1/3 bg-white" />
        <span className="w-1/3 bg-[#B31942]" />
      </div>
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div>
          <p className="text-sm font-semibold text-[#0A3161]">{title}</p>
          <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>
        </div>
        <a
          href={ROTA_CONSULAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-[#0A3161] px-4 py-2 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-[#B31942]"
        >
          Solicitar visto
        </a>
      </div>
    </div>
  );
}
