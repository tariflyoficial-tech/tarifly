export default function BuscarCTA({
  title = "Já pode comparar preços",
  subtitle = "Passagem e hospedagem pra Orlando, sem sair do site.",
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <a
        href="/#busca"
        className="not-prose my-8 flex items-center justify-between gap-4 rounded-xl border border-brand/20 bg-brand/5 px-5 py-4 no-underline transition-colors hover:bg-brand/10"
      >
        <span className="text-sm font-medium text-brand">{title}</span>
        <span className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white">
          Buscar
        </span>
      </a>
    );
  }

  return (
    <div className="not-prose my-10 rounded-2xl bg-brand px-6 py-8 text-center text-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-white/80">{subtitle}</p>
      <a
        href="/#busca"
        className="mt-4 inline-block rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
      >
        Buscar agora
      </a>
    </div>
  );
}
