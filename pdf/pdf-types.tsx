type FrontCover = {
    title: string,
    author: string,
    subTitle?: string,
    publicationDate?: Date | string,
}

type PageBody = {
    text: string,
    pageNumber: number
}

type BackCover = {
    closeMessage:string
}

export type Page = FrontCover | PageBody | BackCover;