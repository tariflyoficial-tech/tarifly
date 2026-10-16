import { formatarData, getPost } from "../lib/posts";

// Data de publicação (e de atualização, quando houver) lida de lib/posts.ts.
export default function PostDate({ slug }: { slug: string }) {
  const post = getPost("orlando", slug);
  if (!post) return null;

  return (
    <p className="mt-3 text-xs text-gray-400">
      Publicado em <time dateTime={post.data}>{formatarData(post.data)}</time>
      {post.atualizado && (
        <>
          {" "}
          · Atualizado em{" "}
          <time dateTime={post.atualizado}>{formatarData(post.atualizado)}</time>
        </>
      )}
    </p>
  );
}
