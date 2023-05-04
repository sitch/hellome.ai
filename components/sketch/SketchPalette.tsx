import { type ReactSketchCanvasProps } from "react-sketch-canvas"

import { Button } from "@/components/ui/button"

type ReactSketchCanvasPropItems =
  | "strokeWidth"
  | "strokeColor"
  | "canvasColor"
  | "eraserWidth"

export type SketchPaletteStyleProps = Pick<
  ReactSketchCanvasProps,
  ReactSketchCanvasPropItems
>

export type SketchPaletteItemProps = {
  color: string
  onChange?: (props: SketchPaletteStyleProps) => void
}
export const SketchPaletteItem = ({
  color,
  onChange,
}: SketchPaletteItemProps) => {
  // const className = `bg-${color}-100`
  return (
    <Button
      className="h-12 w-12 rounded-full border border-gray-500"
      //     className={
      //       cn(
      // `bg-${color}-100`

      //       )
      //     }

      // className={className}
      style={{
        background: color,
      }}
      variant="outline"
      onClick={() => {
        onChange?.({
          strokeColor: color,
        })
      }}
    >
      {/* {color} */}
    </Button>
  )
}

export type SketchPaletteOrientation = "vertical" | "horizontal"

export type SketchPaletteProps = {
  orientation?: SketchPaletteOrientation
  onChange?: (props: SketchPaletteStyleProps) => void
}

export const SketchPalette = ({
  orientation,
  onChange,
}: SketchPaletteProps) => {
  return (
    <div className="mx-4 flex justify-between p-2">
      <SketchPaletteItem color="red" onChange={onChange} />
      <SketchPaletteItem color="orange" onChange={onChange} />
      <SketchPaletteItem color="yellow" onChange={onChange} />
      <SketchPaletteItem color="blue" onChange={onChange} />
      <SketchPaletteItem color="green" onChange={onChange} />
      <SketchPaletteItem color="purple" onChange={onChange} />
      <SketchPaletteItem color="white" onChange={onChange} />
      <SketchPaletteItem color="black" onChange={onChange} />
    </div>
  )
}
