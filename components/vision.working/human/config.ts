import { type FaceAnalysis } from "@/components/vision.working/human/analysis"
import {
  castManifoldVectors,
  type ManifoldCoordinates,
} from "@/components/vision.working/human/manifolds"

export const DEFAULT_COORDINATES: ManifoldCoordinates = {
  axis: {
    x: [-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45],
    y: [-0.3, -0.15, 0, 0.15, 0.3],
    z: [0],
  },
  tolerance: {
    x: 0.1,
    y: 0.1,
    z: 0.5,
  },
  confidence: {
    min: {
      face: 0.7,
    },
  },
}

export const defaultFaceAnalysis: FaceAnalysis = {
  coordinates: DEFAULT_COORDINATES,
  vectors: castManifoldVectors(DEFAULT_COORDINATES),
}
