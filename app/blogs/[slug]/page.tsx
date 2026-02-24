import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Button from "@/components/mdx/Button";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.frontmatter.title} | Blog`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="stack-md">
      <div>
        <p className="small">{post.frontmatter.date}</p>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
      </div>

      <div className="prose prose-zinc">
        <MDXRemote source={post.content} components={{ Button }} options={options} />
      </div>
    </article>
  );
}
