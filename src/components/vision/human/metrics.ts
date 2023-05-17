import { type FaceResult, type Result } from "@vladmandic/human"
import { distance } from "ml-distance"

import type {
  ManifoldCoordinates,
  ManifoldVector,
  UsableFaceResult,
} from "@/components/vision/human/manifolds"

export function confidenceMetric(
  face: UsableFaceResult,
  _vector?: ManifoldVector<Result, FaceResult>,
): number {
  return face.score * face.faceScore * face.boxScore
}

export function distanceMetric(
  face: UsableFaceResult,
  vector: ManifoldVector<Result, FaceResult>,
): number {
  const vector1 = [vector.origin.x, vector.origin.y, vector.origin.z]
  const vector2 = [
    face.rotation.angle.pitch,
    face.rotation.angle.yaw,
    face.rotation.angle.roll,
  ]
  return distance.euclidean(vector1, vector2)
}

export function withinConfidenceBounds(
  face: UsableFaceResult,
  coordinates: ManifoldCoordinates,
): boolean {
  return confidenceMetric(face) >= coordinates.confidence.min.face
}

export function withinToleranceBounds(
  face: UsableFaceResult,
  vector: ManifoldVector<Result, FaceResult>,
): boolean {
  const { origin, tolerance } = vector
  // const [x, y, width, height] = face.box

  if (Math.abs(face.rotation.angle.pitch - origin.x) >= tolerance.x) {
    return false
  }
  if (Math.abs(face.rotation.angle.yaw - origin.y) >= tolerance.y) {
    return false
  }
  if (Math.abs(face.rotation.angle.roll - origin.z) >= tolerance.z) {
    return false
  }
  return true
}

export function scoreFaceResult(
  face: UsableFaceResult,
  vector: ManifoldVector<Result, FaceResult>,
): number {
  // throw new Error('Function not implemented.')

  return face.score
}
