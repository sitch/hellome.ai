import { SerializeOptions } from "next-mdx-remote/dist/types"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeCodeTitles from "rehype-code-titles"
import rehypePrism from "rehype-prism"
import rehypeSlug from "rehype-slug"
import rehypeToc from "rehype-toc"

export const serializeOptions: SerializeOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeCodeTitles,
      rehypePrism,
      rehypeSlug,
      // rehypeToc,
    ],
  },
}
