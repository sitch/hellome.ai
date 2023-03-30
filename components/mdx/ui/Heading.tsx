import Link from 'next/link'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface HeadingLinkProps {
  id: string
  children: ReactNode
}
const HeadingLink = ({ id, children }: HeadingLinkProps) => {
  const href = `#${id}`
  return (
    <Link
      href={href}
      className="no-underline"
      scroll={true}
      prefetch={false}
      shallow={true}
    >
      {children}
    </Link>
  )
}

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export type H1Props = HeadingProps
export function H1({ id, children, ...props }: H1Props) {
  const component = (
    <h1 {...props} id={id}>
      {children}
    </h1>
  )
  return id ? <HeadingLink id={id}>{component}</HeadingLink> : component
}

export type H2Props = HeadingProps
export function H2({ id, children, ...props }: H2Props) {
  const component = (
    <h2 {...props} id={id}>
      {children}
    </h2>
  )
  return id ? <HeadingLink id={id}>{component}</HeadingLink> : component
}

export type H3Props = HeadingProps
export function H3({ id, children, ...props }: H3Props) {
  return (
    <h3 {...props} id={id}>
      {children}
    </h3>
  )
}
