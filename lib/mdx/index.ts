import glob from 'glob'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import { castArray } from 'lodash'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import {
  Article,
  ArticleSource,
  Author,
  AuthorSource,
  castArticle,
  castAuthor,
} from './types'
import { serializeOptions } from './config'

export type Section = 'blog/articles' | 'blog/authors' | 'policies'
export type Slug = string
export type FrontMatter = matter.GrayMatterFile<string>['data'] & {
  slug: Slug
}

export interface MDXPageProps<T = {}> {
  // content: MDXRemoteProps
  // excerpt?: matter.GrayMatterFile<string>['excerpt']
  source: MDXRemoteSerializeResult
  data: T
}

const root = process.cwd()

export function sectionDir(section: Section) {
  return `${root}/data/${section}`
}

export function listEntries(section: Section) {
  const ext = '.mdx'
  const files = glob.globSync(`${sectionDir(section)}/*${ext}`)
  return files.map((file) => path.basename(file, ext))
}

export type Data = Record<string, any>

interface ProcessResult<T = Data> {
  // content: string
  // excerpt: string | undefined
  source: MDXRemoteSerializeResult
  data: T
}

export async function processMDXPage<T>(
  section: Section,
  slug: Slug | Slug[]
): Promise<ProcessResult<T>> {
  const slugs = castArray(slug)
  const dirs = slugs.slice(0, -1)
  const basename = slugs.slice(-1)[0]
  const filename = path.join(sectionDir(section), ...dirs, `${basename}.mdx`)

  // Read
  const file = fs.readFileSync(filename, 'utf8')

  // Parse
  const { content, data, excerpt } = matter(file)

  // Serialize
  const source = await serialize(content, serializeOptions)

  return {
    // content,
    // excerpt,
    source,
    data: data as T,
  }
}

export async function processMDXAuthors(section: Section): Promise<Author[]> {
  const handles = listEntries(section)
  const promises = handles.map(async (handle) => {
    const { data } = await processMDXPage<AuthorSource>(section, handle)
    return castAuthor(data)
  })

  return await Promise.all(promises)
}

export async function processMDXArticles(section: Section): Promise<Article[]> {
  const titles = listEntries(section)
  const promises = titles.map(async (handle) => {
    const { data } = await processMDXPage<ArticleSource>(section, handle)
    return castArticle(data)
  })

  return await Promise.all(promises)
}
