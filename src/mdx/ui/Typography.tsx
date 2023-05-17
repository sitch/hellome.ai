import { type DetailedHTMLProps, type HTMLAttributes } from "react"

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export function Text({ children, ...props }: TextProps) {
  return (
    <>
      <p {...props}>{children}</p>
    </>
  )
}

export type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <>
      <p
        // className="mt-4 text-base leading-7 text-slate-600"
        {...props}
      >
        {children}
      </p>
    </>
  )
}

export type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>

export function Pre({ children, ...props }: PreProps) {
  return (
    <>
      <pre {...props}>{children}</pre>
    </>
  )
}

export type CodeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export function Code({ children, ...props }: CodeProps) {
  return (
    <>
      <code {...props}>{children}</code>
    </>
  )
}
