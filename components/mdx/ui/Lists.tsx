import {
  type DetailedHTMLProps,
  type LiHTMLAttributes,
  type OlHTMLAttributes,
} from "react"

export type OrderedListProps = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>

export function OrderedList({ children, ...props }: OrderedListProps) {
  return <ol {...props}>{children}</ol>
}

export type ListItemProps = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>

export function ListItem({ children, ...props }: ListItemProps) {
  return <li {...props}>{children}</li>
}
