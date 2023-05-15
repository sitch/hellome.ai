type FrontCover = {
  title: string
  author: string
  subTitle?: string
  publicationDate?: string
}

type PageBody = {
  text: string
  pageNumber: string
}

type BackCover = {
  closeMessage: string
}

export type Page = FrontCover | PageBody | BackCover
