import { Result } from "@vladmandic/human"

import { ManifoldCoordinates } from "@/components/vision.working/human/manifolds"

export function validateResult(
  coordinates: ManifoldCoordinates,
  result: Result,
): boolean {
  if (result.face.length === 0) {
    // console.warn(`Found no faces`, result)
    return false
  }
  if (result.face.length > 1) {
    console.warn(`Found multiple faces: ${result.face.length}`, result)
    return false
  }
  return true
}

export function isUsable(
  coordinates: ManifoldCoordinates,
  result: Result,
): boolean {
  if (result.face.length === 0) {
    // console.warn(`Found no faces`, result)
    return false
  }
  if (result.face.length > 1) {
    console.warn(`Found multiple faces: ${result.face.length}`, result)
    return false
  }
  if (!result.face[0].rotation) {
    console.warn(`Found no face.rotation`, result)
    return false
  }
  return true
}
