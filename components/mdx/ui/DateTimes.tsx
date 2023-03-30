import * as dateFns from 'date-fns'
import { DetailedHTMLProps, TimeHTMLAttributes } from 'react'

export type TimeProps = DetailedHTMLProps<
  TimeHTMLAttributes<HTMLTimeElement>,
  HTMLTimeElement
>

export function Time({ children, ...props }: TimeProps) {
  return <time {...props}>{children}</time>
}

const formats = {
  // February 8th, 2022
  long: 'MMMM do, yyyy',

  // Feb. 8, 2022
  med: 'MMM. d, yyyy',

  // 08 Feb 2022
  readable: 'dd MMM yyyy',
}

export type PublishTimeProps = TimeProps & {
  format?: keyof typeof formats
}

export function PublishTime({
  format: format,
  dateTime,
  ...props
}: PublishTimeProps) {
  if (!dateTime) {
    return null
  }
  const date = new Date(dateTime)

  // February 8th, 2022
  const title = dateFns.format(date, formats[format ?? 'long'])

  // Feb. 8, 2022
  // const label = format(date, 'MMM. d, yyyy')

  return (
    <time {...props} itemProp="datePublished" dateTime={dateTime} title={title}>
      {title}
    </time>
  )
}
