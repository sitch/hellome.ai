import { FaceResult, Result } from "@vladmandic/human"

import {
  castManifoldVectors,
  findNearestManifoldVector,
} from "@/components/vision/human/manifolds"

import { DEFAULT_COORDINATES, DEFAULT_USABLE_FACE_RESULT } from "./fixtures"

describe("Given: DEFAULT_COORDINATES", () => {
  const coordinates = DEFAULT_COORDINATES

  describe(".castManifoldVectors/1", () => {
    it("matches snapshot", () => {
      const vectors = castManifoldVectors<Result, FaceResult>(coordinates)
      expect(vectors).toMatchSnapshot()
    })
  })

  describe(".findNearestManifoldVector/3", () => {
    const face = DEFAULT_USABLE_FACE_RESULT
    const vectors = castManifoldVectors<Result, FaceResult>(coordinates)

    it("DEFAULT_USABLE_FACE_RESULT matches vectors[0]", () => {
      const result = findNearestManifoldVector(coordinates, vectors, face)
      expect(result).toEqual(vectors[0])
    })

    it("handles empty vectors", () => {
      const result = findNearestManifoldVector(coordinates, [], face)
      expect(result).toEqual(undefined)
    })
  })
})
