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
  Section,
  Slug,
} from './types'
import { serializeOptions } from './config'

export type MDXPageProps<T = {}> = {
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

type ProcessResult<T = Data> = {
  file: string
  content: string
  excerpt: string | undefined
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
    file,
    content,
    excerpt,
    source,
    data: data as T,
  }
}

export async function listAuthorSources(): Promise<AuthorSource[]> {
  const section = 'blog/authors'
  const handles = listEntries(section)
  const promises = handles.map(async (handle) => {
    const { data } = await processMDXPage<AuthorSource>(section, handle)
    return data
  })
  return await Promise.all(promises)
}

export async function listArticleSources(): Promise<ArticleSource[]> {
  const section = 'blog/articles'
  const handles = listEntries(section)
  const promises = handles.map(async (handle) => {
    const { data } = await processMDXPage<ArticleSource>(section, handle)
    return data
  })
  return await Promise.all(promises)
}

export async function processMDXAuthors(section: Section): Promise<Author[]> {
  const authorSources = await listAuthorSources()
  const articleSources = await listArticleSources()

  return authorSources.map((data) => {
    const articles = articleSources.filter(
      ({ authorHandle }) => authorHandle === data.handle
    )
    return castAuthor(data, articles)
  })
}

export async function processMDXArticles(section: Section): Promise<Article[]> {
  const authorSources = await listAuthorSources()
  const articleSources = await listArticleSources()

  return articleSources.map((data) => {
    const authors = authorSources.filter(
      ({ handle }) => handle === data.authorHandle
    )

    return castArticle(data, authors)
  })
}
