import Image from "next/image";
import { formatarData, getPost } from "../lib/posts";

// Data de publicação (e de atualização, quando houver) e foto de capa do
// artigo, lidas de lib/posts.ts.
export default function PostMeta({ slug }: { slug: string }) {
  const post = getPost("orlando", slug);
  if (!post) return null;

  return (
    <>
      <p className="mt-4 text-xs uppercase tracking-wide text-gray-400">
        Publicado em <time dateTime={post.data}>{formatarData(post.data)}</time>
        {post.atualizado && (
          <>
            {" "}
            · Atualizado em{" "}
            <time dateTime={post.atualizado}>
              {formatarData(post.atualizado)}
            </time>
          </>
        )}
      </p>
      {post.imagem && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl lg:-mx-16">
          <Image
            src={post.imagem}
            alt={post.imagemAlt ?? post.titulo}
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </>
  );
}
