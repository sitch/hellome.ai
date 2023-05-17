import type { FaceResult, Result } from "@vladmandic/human"

import {
  distanceMetric,
  withinConfidenceBounds,
  withinToleranceBounds,
} from "@/components/vision.working/human/metrics"

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

export type ManifoldVector = {
  label: string
  index: Point2D
  origin: Point2D
  tolerance: ManifoldCoordinates["tolerance"]
  candidate?: {
    result: Result
    face: FaceResult
    score: number
  }
}

export function castManifoldVectors({
  axis,
  tolerance,
}: ManifoldCoordinates): ManifoldVector[] {
  return axis.x.flatMap((x, xIndex) => {
    return axis.y.flatMap((y, yIndex) => {
      return axis.z.flatMap((z, zIndex) => {
        const vector: ManifoldVector = {
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
  vectors: ManifoldVector[],
  face: UsableFaceResult,
): ManifoldVector | undefined {
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
