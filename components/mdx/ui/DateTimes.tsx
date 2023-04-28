import { DetailedHTMLProps, TimeHTMLAttributes } from "react"

import { format } from "date-fns"

export type TimeProps = DetailedHTMLProps<
  TimeHTMLAttributes<HTMLTimeElement>,
  HTMLTimeElement
>

export function Time({ children, ...props }: TimeProps) {
  return <time {...props}>{children}</time>
}

const formats = {
  // February 8th, 2022
  long: "MMMM do, yyyy",

  // Feb. 8, 2022
  med: "MMM. d, yyyy",

  // 08 Feb 2022
  readable: "dd MMM yyyy",
}

export type DateTimeFormat = keyof typeof formats

export type PublishTimeProps = TimeProps & {
  format?: DateTimeFormat
}

export function PublishTime({
  format: dateFormat,
  dateTime,
  ...props
}: PublishTimeProps) {
  if (!dateTime) {
    // return null
    throw new Error("<PublishTime> missing dateTime")
  }
  const date = new Date(dateTime)
  const title = format(date, formats[dateFormat ?? "long"])

  return (
    <time {...props} itemProp="datePublished" dateTime={dateTime} title={title}>
      {title}
    </time>
  )
}
