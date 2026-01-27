import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'

const BLOGS_PATH = path.join(process.cwd(), "content/blogs")

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(BLOGS_PATH))

    const params = files
      .filter(file => file.endsWith(".mdx"))
      .map(file => ({
        slug: file.replace(/\.mdx$/, ""),
      }))
  
    console.log('Generated params:', params)  // Check your terminal
    return params
}

function getPost(slug: string) {
    const filePath = path.join(BLOGS_PATH, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, "utf8")
  
    const { data: frontMatter, content } = matter(fileContents)
  
    return {
      frontMatter,
      content,
    }
  }

  
  export default async function Post({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params  // Added: await the params
    const { frontMatter, content } = getPost(slug)
  
    return (
      <article className="prose prose-slate dark:prose-invert mx-auto p-6">
        <h1>{frontMatter.title}</h1>
  
        <MDXRemote source={content} />
      </article>
    )
  }
  
