import { useTranslation } from "next-i18next"

import { type Author } from "@/lib/mdx/types"

import { AuthorCard } from "@/mdx/blog/authors/AuthorCard"

export type AuthorsPageProps = {
  authors: Author[]
}

export const AuthorsPage = ({ authors }: AuthorsPageProps) => {
  const { t } = useTranslation("authors")

  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 sm:text-center lg:max-w-xl">
        <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
          {t("AuthorsListTitle")}
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          {t("AuthorsListDescription")}
        </p>
      </div>
      <div className="mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4">
        {authors.map((author) => (
          <AuthorCard key={author.handle} author={author} />
        ))}
      </div>
    </div>
  )
}
