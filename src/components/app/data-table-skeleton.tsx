import { cn } from "@/lib/utils"

import { Skeleton } from "@/components/ui/skeleton"

export const SmallItemSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export type DataTableSkeletonProps = {
  count: number
}

const widths = ["w-3/4", "w-4/5", "w-5/6"]

export const DataTableSkeleton = ({ count = 20 }: DataTableSkeletonProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-full space-y-4">
        {/* Header  */}
        <Skeleton className="h-8 w-5/6" />

        {/* Rows */}
        {Array(count)
          .fill(undefined)
          .map((_, index) => (
            <Skeleton
              key={index}
              className={cn("h-8", widths[index % widths.length])}
            />
          ))}
      </div>
    </div>
  )
}
