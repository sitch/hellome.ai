import { LinkProps } from 'next/link'

export type Slug = string
export type Handle = string

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
  title: string
}

export type ArticleSource = {
  slug: string
  publishedAt: string
  photo: string
  authorHandle: string
  authorName: string
  authorTitle: string | undefined
  title: string
  summary: string
}

export type PolicySource = {
  slug: string
  publishedAt: string
  updatedAt: string
  title: string
  description: string
}

export type Author = AuthorSource & {
  url: LinkProps['href']
  articles?: Article[]
  social?: {
    facebook?: {
      url: string
    }
    twitter?: {
      url: string
    }
    instagram?: {
      url: string
    }
  }
}

export type Article = ArticleSource & {
  url: LinkProps['href']
  author: Author
  category: string
}

export type Policy = PolicySource & {
  // types
}

export const castAuthor = (author: AuthorSource): Author => {
  return {
    ...author,
    url: {
      pathname: '/blog/authors/[handle]',
      query: { handle: author.handle },
    },
    articles: [],
  }
}

export const castArticle = (article: ArticleSource): Article => {
  return {
    ...article,
    url: {
      pathname: '/blog/articles/[slug]',
      query: { slug: article.slug },
    },
    category: 'AI & Technology',
    author: {
      url: {
        pathname: '/blog/authors/[handle]',
        query: { handle: article.authorHandle },
      },
      handle: article.authorHandle,
      name: article.authorName,
      title: article.authorTitle ?? '',
      photo: '',
      startDate: '',
    },
  }
}
