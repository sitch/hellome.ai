import { LinkProps } from 'next/link'
import { site } from '@/data/siteConfig'
import { Locale, Query, Route, StaticRoute } from 'nextjs-routes'

export type Slug = string
export type Handle = string

export type LocaleCode = Locale

// export type MDXType = 'article' | 'author' | 'policy'
export type Section =
  | 'blog/articles'
  | 'blog/authors'
  | 'company'
  | 'customer'
  | 'policies'

export type AuthorSource = {
  handle: string
  startDate: string
  photo: string
  name: string
  title?: string
  gender: string
  about: string
  location: string
  color?: string
}

export type Author = AuthorSource & {
  route: Exclude<LinkProps['href'], Query | StaticRoute<'blog/authors'>>
  articles?: Article[]
  social?: {
    facebook?: {
      id: string
      url: string
    }
    twitter?: {
      id: string
      handle: string
      url: string
    }
    instagram?: {
      id: string
      handle: string
      url: string
    }
  }
  // category: string
  locale?: LocaleCode
  locales?: LocaleCode[]
  // section?: BlogSection
  // tags?: BlogTag[]
  modifiedAt?: string
  // expirationAt?: string
  // authors?: Author[]
  firstName: string
  lastName: string
  url: string
}

export const castAuthor = (
  author: AuthorSource,
  articles?: ArticleSource[]
): Author => {
  const name = author.name.trim()
  const nameParts = author.name.trim().split(/\s+/)

  return {
    ...author,
    name,
    firstName: nameParts.slice(0).join(''),
    lastName: nameParts.length >= 2 ? nameParts.slice(-1).join('') : '',
    url: `/blog/authors/${author.handle}`,
    route: {
      pathname: '/blog/authors/[handle]',
      query: { handle: author.handle },
    },
    ...(articles
      ? { articles: articles.map((article) => castArticle(article)) }
      : {}),
  }
}

export type BlogTag = string
export type BlogSection = keyof typeof site.sections

export type ArticleSource = {
  slug: string
  publishedAt: string
  photo: string
  authorHandle: string
  title: string
  summary: string
  draft?: boolean
}

export type Article = ArticleSource & {
  route: Exclude<LinkProps['href'], Query | StaticRoute<'blog/articles'>>
  category: string
  locale?: LocaleCode
  locales?: LocaleCode[]
  section?: BlogSection
  tags?: BlogTag[]
  modifiedAt?: string
  expirationAt?: string
  author?: Author
  authors?: Author[]
  url: string
}

export const castArticle = (
  article: ArticleSource,
  authors?: AuthorSource[]
): Article => {
  return {
    ...article,
    draft: article.draft ?? false,
    url: `/blog/articles/${article.slug}`,
    route: {
      pathname: '/blog/articles/[slug]',
      query: { slug: article.slug },
    },
    category: 'AI & Technology',
    ...(authors
      ? { author: authors.map((author) => castAuthor(author))[0] }
      : {}),
    ...(authors
      ? { authors: authors.map((author) => castAuthor(author)) }
      : {}),
  }
}

export type PolicySource = {
  slug: string
  publishedAt: string
  updatedAt: string
  title: string
  description: string
}

export type Policy = PolicySource & {
  // types
}
