import { FaceResult, Human } from "@vladmandic/human"
import clsx from "clsx"

import type { FaceAnalysis } from "../analysis"
import { ManifoldVector } from "../manifolds"
import FaceClip from "./FaceClip"

const MIN_GRID_COLUMNS = 1
const MAX_GRID_COLUMNS = 12

export type FaceManifoldProps = {
  human: Human
  analysis: FaceAnalysis
  onError: <T>(
    error: unknown,
    { face, vector }: { face?: FaceResult; vector?: ManifoldVector }
  ) => Promise<T | void>
}

export function FaceManifold({ human, analysis, onError }: FaceManifoldProps) {
  const columns = analysis.coordinates.axis.x.length

  if (columns < MIN_GRID_COLUMNS) {
    console.error(
      `Too few columns. Desired: ${columns}, Maximum: ${MIN_GRID_COLUMNS}`
    )
  }
  if (columns > MAX_GRID_COLUMNS) {
    console.error(
      `Too many columns. Desired: ${columns}, Maximum: ${MAX_GRID_COLUMNS}`
    )
  }

  // console.info('columns', { columns })
  // console.info('analysis', { analysis })

  return (
    <div
      className={clsx({
        grid: true,
        "gap-4": true,
        // 'w-3/5': true,
        "grid-cols-7": true,
        // 'grid-cols-7': columns === 7,
        // [`grid-cols-${columns}`]: true,
      })}
    >
      {analysis.vectors.map((vector) => {
        return (
          <FaceClip
            key={vector.label}
            name={vector.label}
            human={human}
            face={vector.candidate?.face}
            onError={async (error, face) => onError(error, { face, vector })}
          />
        )
      })}
    </div>
  )
}
