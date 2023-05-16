import { useEffect, useState } from "react"

import { type ReactSketchCanvasProps } from "react-sketch-canvas"
import { GithubPicker, SketchPicker } from "@hello-pangea/color-picker"

type ReactSketchCanvasPropItems =
  | "strokeWidth"
  | "strokeColor"
  | "canvasColor"
  | "eraserWidth"

export type SketchPaletteStyleProps = Pick<
  ReactSketchCanvasProps,
  ReactSketchCanvasPropItems
>

// export type SketchPaletteItemProps = {
//   color: string
//   onChange?: (props: SketchPaletteStyleProps) => void
// }

// export type SketchPaletteOrientation = "vertical" | "horizontal"

const colors = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
  "#BED3F3",
  "#D4C4FB",
]

export type SketchPaletteProps = {
  // orientation?: SketchPaletteOrientation
  onChange?: (props: SketchPaletteStyleProps) => void
}

export const SketchPalette = ({
  // orientation,
  onChange,
}: SketchPaletteProps) => {
  const [ready, setReady] = useState(false)

  // Fixes issue with hydration of `<SketchPicker />` component.
  useEffect(() => {
    if (!ready) {
      setReady(true)
    }
  }, [ready])

  if (!ready) {
    return null
  }

  return (
    <>
      <div className="mx-4 flex justify-between p-2">
        <div>
          <GithubPicker
            triangle="hide"
            colors={colors}
            onChange={(color) =>
              onChange?.({
                strokeColor: color.hex,
              })
            }
          />
        </div>
        <div>
          <SketchPicker
            presetColors={colors}
            onChange={(color) =>
              onChange?.({
                strokeColor: color.hex,
              })
            }
          />
        </div>
      </div>
    </>
  )
}
