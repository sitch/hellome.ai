import type { FaceResult, Result } from "@vladmandic/human"

import {
  distanceMetric,
  withinConfidenceBounds,
  withinToleranceBounds,
} from "@/components/vision/human/metrics"

export type UsableFaceResult = FaceResult & {
  rotation: NonNullable<FaceResult["rotation"]>
}

export type Point2D<T = number> = {
  x: T // pitch
  y: T // yaw
  z: T // roll
}

export type ManifoldCoordinates = {
  axis: Point2D<number[]>
  tolerance: Point2D
  confidence: {
    min: {
      face: number
    }
  }
}

export type ManifoldVector<T, V> = {
  label: string
  index: Point2D
  origin: Point2D
  tolerance: ManifoldCoordinates["tolerance"]
  candidate?: ManifoldVectorCandidate<T, V>
}

export type ManifoldVectorCandidate<T, V> = {
  imageData?: ImageData | undefined | null
  result: T
  face: V
  score: number
}

export function castManifoldVectors<T, V>({
  axis,
  tolerance,
}: ManifoldCoordinates): ManifoldVector<T, V>[] {
  return axis.x.flatMap((x, xIndex) => {
    return axis.y.flatMap((y, yIndex) => {
      return axis.z.flatMap((z, zIndex) => {
        const vector: ManifoldVector<T, V> = {
          label: `x:${x * 100}° y:${y * 100}° z:${z * 100}°`,
          index: { x: xIndex, y: yIndex, z: zIndex },
          origin: { x, y, z },
          tolerance,
        }
        return [vector]
      })
    })
  })
}

export function findNearestManifoldVector(
  coordinates: ManifoldCoordinates,
  vectors: ManifoldVector<Result, FaceResult>[],
  face: UsableFaceResult,
): ManifoldVector<Result, FaceResult> | undefined {
  if (vectors.length === 0 || !withinConfidenceBounds(face, coordinates)) {
    return undefined
  }

  const toleratedVectors = vectors.filter((vector) =>
    withinToleranceBounds(face, vector),
  )

  if (toleratedVectors.length === 0) {
    return undefined
  }

  return toleratedVectors.reduce((prev, current) => {
    return distanceMetric(face, prev) < distanceMetric(face, current)
      ? current
      : prev
  })
}
