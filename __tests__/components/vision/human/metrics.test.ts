import { FaceResult, Result } from "@vladmandic/human"
import { range } from "lodash"

import { castManifoldVectors } from "@/components/vision/human/manifolds"
import {
  confidenceMetric,
  distanceMetric,
  scoreFaceResult,
  withinConfidenceBounds,
  withinToleranceBounds,
} from "@/components/vision/human/metrics"

import { DEFAULT_COORDINATES, DEFAULT_USABLE_FACE_RESULT } from "./fixtures"

describe("DEFAULT_COORDINATES", () => {
  const face = DEFAULT_USABLE_FACE_RESULT
  const coordinates = DEFAULT_COORDINATES
  const vectors = castManifoldVectors<Result, FaceResult>(coordinates)

  describe(".confidenceMetric/2", () => {
    it.each(range(0, vectors.length))("handles vector[%i]", (index: number) => {
      const vector = vectors[index]
      const result = confidenceMetric(face, vector)
      expect(result).toMatchSnapshot()
    })
  })

  describe(".distanceMetric/2", () => {
    it.each(range(0, vectors.length))("handles vector[%i]", (index: number) => {
      const vector = vectors[index]
      const result = distanceMetric(face, vector)
      expect(result).toMatchSnapshot()
    })
  })

  describe(".withinConfidenceBounds/2", () => {
    it("returns true if within bounds (perfect score)", () => {
      const face = {
        ...DEFAULT_USABLE_FACE_RESULT,
        score: 1.0,
        boxScore: 1.0,
        faceScore: 1.0,
      }
      const result = withinConfidenceBounds(face, coordinates)
      expect(result).toEqual(true)
    })

    it("returns true if within bounds", () => {
      const face = {
        ...DEFAULT_USABLE_FACE_RESULT,
        score: 0.9,
        boxScore: 0.9,
        faceScore: 0.9,
      }
      const result = withinConfidenceBounds(face, coordinates)
      expect(result).toEqual(true)
    })

    it("returns false if outside bounds", () => {
      const face = {
        ...DEFAULT_USABLE_FACE_RESULT,
        score: 0.1,
        boxScore: 0.1,
        faceScore: 0.1,
      }
      const result = withinConfidenceBounds(face, coordinates)
      expect(result).toEqual(false)
    })
  })

  describe(".withinToleranceBounds/2", () => {
    it("returns true if within bounds", () => {
      const vector = vectors[0]
      const result = withinToleranceBounds(face, vector)
      expect(result).toEqual(true)
    })

    it("returns false if outside bounds", () => {
      const vector = vectors[1]
      const result = withinToleranceBounds(face, vector)
      expect(result).toEqual(false)
    })

    it.each(range(0, vectors.length))("handles vector[%i]", (index: number) => {
      const vector = vectors[index]
      const result = withinToleranceBounds(face, vector)
      expect(result).toMatchSnapshot()
    })
  })

  describe(".scoreFaceResult/2", () => {
    it.each(range(0, vectors.length))("handles vector[%i]", (index: number) => {
      const vector = vectors[index]
      const result = scoreFaceResult(face, vector)
      expect(result).toMatchSnapshot()
    })
  })
})
