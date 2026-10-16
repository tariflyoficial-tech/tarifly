import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// Varre app/destinos em busca de page.tsx, assim todo guia novo entra no
// sitemap sozinho, sem precisar lembrar de atualizar uma lista.
function rotasDeDestinos(dir: string, rota: string): string[] {
  const rotas: string[] = [];
  if (existsSync(join(dir, "page.tsx"))) rotas.push(rota);
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      rotas.push(...rotasDeDestinos(join(dir, entry.name), `${rota}/${entry.name}`));
    }
  }
  return rotas;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const destinos = rotasDeDestinos(join(process.cwd(), "app", "destinos"), "/destinos");

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...destinos.map((rota) => ({
      url: `${SITE_URL}${rota}`,
      changeFrequency: "monthly" as const,
      priority: rota.split("/").length <= 3 ? 0.9 : 0.7,
    })),
  ];
}
