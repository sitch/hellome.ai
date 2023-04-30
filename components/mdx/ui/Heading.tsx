import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import Link from "next/link"

type HeadingLinkProps = {
  id: string
  children: ReactNode
}
const HeadingLink = ({ id, children }: HeadingLinkProps) => {
  const href = `#${id}`

  // TODO: Restore <Link />
  return (
    <a
      className="no-underline"
      href={href}
      aria-label={String(children)}
      // href={{ hash: id }}
      // scroll={true}
      // prefetch={false}
      // shallow={true}
    >
      {children}
    </a>
  )
}

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export type H1Props = HeadingProps
export function H1({ id, children, ...props }: H1Props) {
  const component = (
    <h1
      className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
      {...props}
      id={id}
    >
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
