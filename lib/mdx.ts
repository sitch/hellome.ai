import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkFlexibleCodeTitles from 'remark-flexible-code-titles'
import { castArray } from 'lodash'
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { MDXRemoteProps } from 'next-mdx-remote'

export type Section = 'blog/posts' | 'blog/authors' | 'policies'
export type Slug = string
export type FrontMatter = matter.GrayMatterFile<string>['data'] & {
  slug: Slug
}

// type MDXParsed = matter.GrayMatterFile<string>

export type MDXStaticProps<T = {}> = {
  content: MDXRemoteProps
  // data: matter.GrayMatterFile<string>['data'] & T
  data: T
  language: matter.GrayMatterFile<string>['language']
  matter: matter.GrayMatterFile<string>['matter']
  excerpt?: matter.GrayMatterFile<string>['excerpt']
}

export type MDXPageProps<T = FrontMatter> = {
  content: MDXRemoteProps
  frontMatter: T
}

const serializeOptions: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [
      remarkSlug,
      [
        remarkAutolinkHeadings,
        {
          linkProperties: {
            className: ['anchor'],
          },
        },
      ],
      remarkFlexibleCodeTitles,
    ],
  },
}

const root = process.cwd()

export async function getFiles(section: Section) {
  return fs.readdirSync(path.join(root, 'data', section))
}

export async function listEntries(section: Section) {
  const files = await getFiles(section)

  return files.map((file) => file.replace(/\.mdx$/, ''))
}

export async function getMDX(
  section: Section,
  slug?: Slug[] | Slug | undefined
) {
  const slugs = castArray(slug ?? [])
  const filename = slugs.slice(-1)[0]
  const slugPart = slugs.slice(0, -1)

  const file = fs.readFileSync(
    path.join(root, 'data', section, ...slugPart, `${filename}.mdx`),
    'utf8'
  )

  // Omit `orig` as it's a non-serializable <Buffer 2d>
  const {
    orig: _orig,
    stringify: _stringify,
    data,
    content,
    ...rest
  } = matter(file)
  const mdxSource = await serialize(content, serializeOptions)

  return {
    // file,
    content: mdxSource,
    data,
    ...rest,
  }
}

export async function getFileBySlug(
  section: Section,
  slug?: Slug[] | Slug | undefined
) {
  const slugs = castArray(slug ?? [])
  const filename = slugs.slice(-1)[0]
  const slugPart = slugs.slice(0, -1)

  const source = fs.readFileSync(
    path.join(root, 'data', section, ...slugPart, `${filename}.mdx`),
    'utf8'
  )

  const { language, data, content } = matter(source)
  const mdxSource = await serialize(content, serializeOptions)

  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g) ?? []
  const tweetIDs = tweetMatches?.map(
    (tweet: string) => tweet.match(/[0-9]+/g) ?? []
  )

  return {
    mdxSource,
    tweetIDs,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug ?? null,
      language,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(
  section: Section
): Promise<FrontMatter[]> {
  const files = fs.readdirSync(path.join(root, 'data', section))

  return files.map((postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', section, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    return {
      ...data,
      slug: postSlug.replace('.mdx', ''),
    }
  })
}
