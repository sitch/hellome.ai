import { type ReactNode } from "react"

import * as Heading from "@/mdx/ui/Heading"
import * as Typography from "@/mdx/ui/Typography"

export type HeroProps = {
  title: string
  description?: string | undefined
  subtitle?: () => ReactNode
}

export default function Hero({ title, description, subtitle }: HeroProps) {
  return (
    <>
      <div className="border-b-2 bg-white py-8 dark:bg-gray-900 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
          <Heading.H1>{title}</Heading.H1>

          {description ? (
            <Typography.Paragraph className="lead">
              {description}
            </Typography.Paragraph>
          ) : null}

          {subtitle ? <h2>{subtitle()}</h2> : null}
        </div>
      </div>
    </>
  )
}
