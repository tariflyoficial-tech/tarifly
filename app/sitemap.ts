import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { getPost, posts } from "./lib/posts";
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

  const maisRecente = posts.map((p) => p.atualizado ?? p.data).sort().pop();

  return [
    { url: SITE_URL, lastModified: maisRecente, changeFrequency: "weekly", priority: 1 },
    ...destinos.map((rota) => {
      const [, , destino, slug] = rota.split("/");
      const post = slug ? getPost(destino, slug) : undefined;
      return {
        url: `${SITE_URL}${rota}`,
        // Páginas de artigo usam a data real; índices usam a do post mais novo.
        lastModified: post ? (post.atualizado ?? post.data) : maisRecente,
        changeFrequency: "monthly" as const,
        priority: rota.split("/").length <= 3 ? 0.9 : 0.7,
      };
    }),
  ];
}
