import { Result } from "@vladmandic/human"
import { inRange } from "lodash"

import { FaceAnalysis } from "@/components/vision/human/analysis"

export type DialogType =
  | "FaceDirection"
  | "Occlusion"
  | "FaceMissing"
  | "MultipleFaces"
  | "FaceProximity"
  | "FaceCentering"

export type Dialog = {
  type: DialogType
  text: string
}

export const constraints = {
  height: { min: 500 },
  width: { min: 500 },
  x: { min: 500, max: 5000 },
  y: { min: 500, max: 5000 },
}

// - move closer | face.width < X
// - move head {direction}
// - move head {direction}
//
export function getDialogs(result: Result, analysis: FaceAnalysis): Dialog[] {
  const results: Dialog[] = []

  if (result.face.length === 0) {
    results.push({
      type: "FaceMissing",
      text: "No face found, Please move your face into screen",
    })
  }

  if (result.face.length > 1) {
    results.push({
      type: "MultipleFaces",
      text: "Multiple faces found, please just have one face in view",
    })
  }

  if (result.hand.length > 0) {
    results.push({
      type: "Occlusion",
      text: "Please move your hand off the screen",
    })
  }

  const [x, y, width, height] = result.face[0].box

  if (
    !inRange(x, constraints.x.min, constraints.x.max) ||
    inRange(x, constraints.y.min, constraints.y.max)
  ) {
    results.push({
      type: "FaceCentering",
      text: "Please move your face into the center of the screen",
    })
  }

  if (height < constraints.height.min || width < constraints.width.min) {
    results.push({
      type: "FaceProximity",
      text: "Please move your face into screen",
    })
  }

  return results
}

export function progress(analysis: FaceAnalysis): number {
  return 100
}
