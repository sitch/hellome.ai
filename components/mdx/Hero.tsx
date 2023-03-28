import { ReactNode } from 'react'

export type HeroProps = {
  heroData?: {
    title: string
    subtitle?: () => ReactNode
    helperElement?: () => string
  }
}

export default function Hero({ heroData: data }: HeroProps) {
  return (
    <>
      {data?.title ? <h1>{data.title}</h1> : null}
      {data?.subtitle ? <h2>{data.subtitle()}</h2> : null}
      {data?.helperElement && (
        <>
          <br />
          {data?.helperElement?.()}
        </>
      )}
    </>
  )
}
