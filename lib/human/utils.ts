import { Result, Tensor } from '@vladmandic/human'

export function disposeTensor(tensor: Tensor | undefined | null) {
  if (!tensor || tensor.isDisposed) {
    return
  }
  tensor.dispose()
}

export function disposeResult(result: Result) {
  result.face.forEach((face) => disposeTensor(face.tensor))
}

export type TimestampMeasure = {
  prev: number
  next: number
}

export function calculateFPS({ prev, next }: TimestampMeasure) {
  return Math.round((1000 * 1000) / (next - prev)) / 1000
}

export function calculateAvgResponseMs(
  { prev, next }: TimestampMeasure,
  counter: number
) {
  return Math.round((1000 * (prev - next)) / counter) / 1000
}
