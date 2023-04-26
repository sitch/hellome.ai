import { ReactNode } from "react"

import * as Heading from "@/components/mdx/ui/Heading"
import * as Lists from "@/components/mdx/ui/Lists"
import * as Media from "@/components/mdx/ui/Media"
import * as Typography from "@/components/mdx/ui/Typography"

export type HeroProps = {
  title: string
  description?: string | undefined
  // subtitle?: ReactNode | (() => ReactNode)

  // heroData?: {
  //   title: string
  //   subtitle?: () => ReactNode
  //   helperElement?: () => string
  // }
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <>
      <Heading.H1>{title}</Heading.H1>

      {description ? (
        <Typography.Paragraph className="lead">
          {description}
        </Typography.Paragraph>
      ) : null}

      {/* {data?.title ? <h1>{data.title}</h1> : null}
      {data?.subtitle ? <h2>{data.subtitle()}</h2> : null}
      {data?.helperElement && (
        <>
          <br />
          {data?.helperElement?.()}
        </>
      )} */}
    </>
  )
}
