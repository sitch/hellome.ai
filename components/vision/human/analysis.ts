import type { FaceResult, Human, Result } from "@vladmandic/human"
import { indexOf, isEqual } from "lodash"

import {
  ManifoldCoordinates,
  ManifoldVector,
  ManifoldVectorCandidate,
  UsableFaceResult,
  findNearestManifoldVector,
} from "./manifolds"
import { scoreFaceResult } from "./metrics"
import { isUsable } from "./validations"

export type FaceAnalysis = {
  coordinates: ManifoldCoordinates
  vectors: ManifoldVector<Result, FaceResult>[]
}

export type FaceAnalysisResult = {
  disposeResults: Result[]
  analysis: FaceAnalysis
}

export async function runFaceAnalysis(
  human: Human | undefined,
  result: Result,
  prevAnalysis: FaceAnalysis,
): Promise<FaceAnalysisResult> {
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
  // let imageData: ImageData

  const index = indexOf(prevAnalysis.vectors, prevVector)

  const nextVectors = prevAnalysis.vectors

  if (prevVector && index) {
    const score = scoreFaceResult(face, prevVector)

    if (score > (prevVector.candidate?.score ?? Number.NEGATIVE_INFINITY)) {
      // if (!face.tensor?.isDisposed) {
      //   const [_x, _y, width, height] = face.box
      //   const bytes = await human!.tf.browser.toPixels(face.tensor)

      //   // console.log({height, width, bytes, face})

      //   imageData = new ImageData(bytes, width, height)
      // }

      // dispose
      human!.tf.dispose(face.tensor)

      result.face.forEach((faceResult) => {
        if (!isEqual(face, faceResult)) {
          faceResult.tensor?.dispose()
        }
      })

      const candidate: ManifoldVectorCandidate<Result, FaceResult> = {
        // imageData,
        result,
        face,
        score,
      }

      const nextVector = {
        ...prevVector,
        candidate,
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
