import Link from 'next/link'
import { Author } from '@/lib/mdx/types'
import { useTranslation } from 'next-i18next'

type AuthorCardProps = {
  author: Author
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  const hasSocial = !!(author.social?.twitter ?? author.social?.facebook)

  return (
    <div>
      <Link href={author.url}>
        <div className="relative mb-4 rounded pb-56 shadow lg:pb-64">
          <img
            className="absolute h-full w-full rounded object-cover"
            src={author.photo}
            alt="Person"
          />
        </div>
      </Link>

      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">{author.name}</p>
        <p className="mb-5 text-xs text-gray-800">{author.title}</p>
        {hasSocial && (
          <div className="flex items-center space-x-3 sm:justify-center">
            <a
              href={author.social?.twitter?.url}
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href={author.social?.facebook?.url}
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export type AuthorsPageProps = {
  authors: Author[]
}

export const AuthorsPage = ({ authors }: AuthorsPageProps) => {
  const { t } = useTranslation('authors')

  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 sm:text-center lg:max-w-xl">
        <p className="mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
          {t('AuthorsListTitle')}
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          {t('AuthorsListDescription')}
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
