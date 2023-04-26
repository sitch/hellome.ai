import { FaceLandmark, Human, Point, Result } from "@vladmandic/human"

import { config } from "@/lib/human/config"
import { UsableFaceResult } from "@/components/vision/human/manifolds"

export { DEFAULT_COORDINATES } from "@/components/vision/human/defaults"

// let human: Human | undefined
// import('@vladmandic/human').then((H) => {
//   human = new H.default(config) as Human
// })
// export { human }

export const human = new Human(config)

export const DEFAULT_USABLE_FACE_RESULT: UsableFaceResult = {
  id: 1,
  score: 0.99,
  boxScore: 0.99,
  faceScore: 0.99,
  boxRaw: [0, 0, 0, 0],
  mesh: [],
  meshRaw: [],
  annotations: {} as Record<FaceLandmark, Point[]>,

  // updates here
  box: [100, 100, 200, 200],
  rotation: {
    angle: {
      pitch: -0.45,
      yaw: -0.3,
      roll: 0,
    },
    matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    gaze: {
      bearing: 0,
      strength: 0,
    },
  },
  size: [0, 0],
}

export const DEFAULT_RESULT: Result = {
  face: [DEFAULT_USABLE_FACE_RESULT],
  body: [],
  hand: [],
  gesture: [],
  object: [],
  performance: {},
  timestamp: 0,
  persons: [],
  error: null,
  width: 0,
  height: 0,
}
