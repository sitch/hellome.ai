import Link from "next/link"

import { type Author } from "@/lib/mdx/types"

import { FacebookIcon, TwitterIcon } from "@/components/landing/icons"

import * as Media from "@/mdx/ui/Media"

type AuthorCardProps = {
  author: Author
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  const hasSocial = !!(author.social?.twitter ?? author.social?.facebook)

  return (
    <div>
      <Link href={author.route} as={author.url}>
        <div className="relative mb-4 rounded pb-56 shadow lg:pb-64">
          <Media.Img
            className="absolute h-full w-full rounded object-cover"
            src={author.photo}
            alt={author.name}
            height={256}
            width={256}
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
              className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
            >
              <TwitterIcon className="h-5" />
            </a>
            <a
              href={author.social?.facebook?.url}
              className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
            >
              <FacebookIcon className="h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
