import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

import { redirect } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

// generate meta data
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
  };
};
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    console.error(`Post not found for slug: ${params.slug}`);
    redirect("/404");
  }

  return (
    <div className="mx-auto max-w-xl py-20">
      <article className="mx-auto max-w-3xl py-8 prose md:prose-lg lg:prose-xl dark:prose-invert">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {post && post.date
              ? format(parseISO(post.date), "LLLL d, yyyy")
              : ""}
          </time>

          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="prose-free">{post.description}</p>

          {post.coverImage &&
            (post.url ? (
              <Link href={post.url} aria-label={`Link to ${post.title}`}>
                <Image
                  src={post.coverImage}
                  alt={post.title || ""}
                  width={600}
                  height={400}
                  layout="responsive"
                  className="object-cover object-center md:h-36 lg:h-48"
                  priority
                />
              </Link>
            ) : (
              <Image
                alt={post.title || ""}
                src={post.coverImage}
                width={600}
                height={400}
                layout="responsive"
                className="object-cover object-center md:h-36 lg:h-48"
                priority
              />
            ))}
        </div>
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </div>
  );
};

export default PostLayout;
