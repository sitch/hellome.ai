import type { Result } from "@vladmandic/human"
import { indexOf } from "lodash"

import {
  ManifoldCoordinates,
  ManifoldVector,
  UsableFaceResult,
  findNearestManifoldVector,
} from "./manifolds"
import { scoreFaceResult } from "./metrics"
import { isUsable } from "./validations"

export type FaceAnalysis = {
  coordinates: ManifoldCoordinates
  vectors: ManifoldVector[]
}

export type FaceAnalysisResult = {
  disposeResults: Result[]
  analysis: FaceAnalysis
}

export function runFaceAnalysis(
  result: Result,
  prevAnalysis: FaceAnalysis,
): FaceAnalysisResult {
  if (!isUsable(prevAnalysis.coordinates, result)) {
    return {
      disposeResults: [result],
      analysis: prevAnalysis,
    }
  }

  // const {coordinates, vectors}= prevAnalysis

  const face = result.face[0] as UsableFaceResult

  const prevVector = findNearestManifoldVector(
    prevAnalysis.coordinates,
    prevAnalysis.vectors,
    face,
  )
  const index = indexOf(prevAnalysis.vectors, prevVector)

  const nextVectors = prevAnalysis.vectors
  if (prevVector && index) {
    const score = scoreFaceResult(face, prevVector)

    if (score > (prevVector.candidate?.score ?? Number.NEGATIVE_INFINITY)) {
      const nextVector = {
        ...prevVector,
        candidate: {
          result,
          face,
          score,
        },
      }

      nextVectors[index] = nextVector
    }

    return {
      disposeResults: prevVector.candidate?.result
        ? [prevVector.candidate.result]
        : [],
      analysis: {
        ...prevAnalysis,
        vectors: nextVectors,
      },
    }
  }

  return {
    disposeResults: [result],
    analysis: prevAnalysis,
  }
}
