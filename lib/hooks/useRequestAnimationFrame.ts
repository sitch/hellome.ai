import { useLayoutEffect, useState } from 'react'
import { now } from 'lodash'
import { calculateAvgResponseMs, calculateFPS } from '@/lib/human/utils'

export type UseRequestAnimationFrameOptions = {
  fps?: {
    max?: number
  }
}

export type UseRequestAnimationFrameCallback = (
  time: DOMHighResTimeStamp
) => Promise<void>

// Based on: https://blog.jakuba.net/request-animation-frame-and-use-effect-vs-use-layout-effect/
export default function useRequestAnimationFrame(
  callback: UseRequestAnimationFrameCallback,
  options?: UseRequestAnimationFrameOptions
) {
  const [counter, setCounter] = useState<number>(0)
  const [timestamp, setTimestamp] = useState<number>(() => now())
  const [avgResponseMs, setAvgResponseMs] = useState<number>(0)
  const [fps, setFps] = useState<number>(0)

  useLayoutEffect(() => {
    const interval = options?.fps?.max ? 1000 / options.fps.max : undefined

    let timerId: number

    const loop: FrameRequestCallback = async (time) => {
      const timing = {
        prev: timestamp,
        // next: time,
        next: now(),
        elapsed: time - timestamp,
      }

      // only perform animation if elapsed time interval is more then animation step
      if (!interval || timing.elapsed > interval) {
        await callback(timing.next)
      }

      setCounter((x) => x + 1)
      setTimestamp(timing.next)

      setFps(calculateFPS(timing))
      setAvgResponseMs(calculateAvgResponseMs(timing, counter))

      timerId = requestAnimationFrame(loop)
    }

    timerId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(timerId)
  }, [callback, counter, timestamp, options?.fps?.max])

  return {
    counter,
    fps,
    avgResponseMs,
  }
}
