export type MDXType = 'author' | 'article' | 'policy'
export type Section = 'blog/articles' | 'blog/authors' | 'policies'

export interface AuthorSource {
  handle: string
  startDate: string
  photo: string
  name: string
  title: string
}

export interface ArticleSource {
  slug: string
  publishedAt: string
  photo: string
  authorHandle: string
  authorName: string
  authorTitle?: string | undefined
  title: string
  summary: string
}

export interface PolicySource {
  slug: string
  publishedAt: string
  updatedAt: string
  title: string
  description: string
}

export type Author = AuthorSource & {
  url: string
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
  url: string
  author: Author
  category: string
}

export type Policy = PolicySource & {
  // types
}

export const castAuthor = (author: AuthorSource): Author => {
  return {
    ...author,
    url: `/blog/authors/${author.handle}`,

    articles: [],
  }
}

export const castArticle = (article: ArticleSource): Article => {
  return {
    ...article,
    url: `/blog/articles/${article.slug}`,
    category: 'AI & Technology',
    author: {
      url: `/blog/authors/${article.authorHandle}`,
      handle: article.authorHandle,
      name: article.authorName,
      title: article.authorTitle ?? '',
      photo: '',
      startDate: '',
    },
  }
}
