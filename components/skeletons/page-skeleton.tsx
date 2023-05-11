import { Loader } from "lucide-react"

import { type PageType } from "@/components/app/page"

export type PageSkeletonProps = {
  type?: PageType
}

export const PageSkeleton = ({ type }: PageSkeletonProps) => {
  switch (type) {
    case "index":
    case "show":
    case "edit":
    case "new":
    default:
      return <Loader />
  }
}
