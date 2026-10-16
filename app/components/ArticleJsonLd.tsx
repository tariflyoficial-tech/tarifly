import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../lib/site";

// Dados estruturados (schema.org) do artigo, lidos do próprio `metadata` da
// página pra título e descrição nunca divergirem.
export default function ArticleJsonLd({
  metadata,
  path,
}: {
  metadata: Metadata;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  const titulo = String(metadata.title).replace(/ — Tarifly$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: titulo,
        description: metadata.description,
        inLanguage: "pt-BR",
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Tarifly", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guias de destino",
            item: `${SITE_URL}/destinos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Orlando",
            item: `${SITE_URL}/destinos/orlando`,
          },
          { "@type": "ListItem", position: 4, name: titulo, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
