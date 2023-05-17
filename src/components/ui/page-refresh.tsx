import { useRouter } from "next/router"

import { usePullToRefresh } from "use-pull-to-refresh"

import Loader from "@/components/app/loader"

const MAXIMUM_PULL_LENGTH = 240
const REFRESH_THRESHOLD = 180

export type PageRefreshProps = {
  onRefresh?: () => void
}

export function PageRefresh({ onRefresh }: PageRefreshProps) {
  const { isReady, reload } = useRouter()

  const { isRefreshing, pullPosition } = usePullToRefresh({
    maximumPullLength: MAXIMUM_PULL_LENGTH,
    refreshThreshold: REFRESH_THRESHOLD,
    isDisabled: !isReady,
    onRefresh: () => {
      if (onRefresh) {
        // you can choose what behavior for `onRefresh`, could be calling an API to load more data, or refresh whole page.
        onRefresh()
      } else {
        reload()
      }
    },
  })

  return (
    <div
      style={{
        top: (isRefreshing ? REFRESH_THRESHOLD : pullPosition) / 3,
        opacity: isRefreshing || pullPosition > 0 ? 1 : 0,
      }}
      className="bg-base-100 fixed inset-x-1/2 z-30 h-8 w-8 -translate-x-1/2 rounded-full p-2 shadow"
    >
      <div
        className={`h-full w-full ${isRefreshing ? "animate-spin" : ""}`}
        style={!isRefreshing ? { transform: `rotate(${pullPosition}deg)` } : {}}
      >
        <Loader className="h-full w-full" />
      </div>
    </div>
  )
}
