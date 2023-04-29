import { useCallback, useEffect, useRef, useState } from "react"

import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasProps,
  ReactSketchCanvasRef,
} from "react-sketch-canvas"
import { Trash, Undo, Upload } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

export type Scribble = string

function EmptyBanner() {
  return (
    <div>
      <div className="pointer-events-none absolute grid h-full w-full place-items-center p-3 text-xl">
        <span className="opacity-40">Draw something here.</span>
      </div>
    </div>
  )
}

type Props = ReactSketchCanvasProps & {
  startingPaths?: CanvasPath[]
  onScribble?: (scribble: string | null) => void
  setTouched?: (exists: boolean) => void
}

export function SketchCanvas({
  startingPaths = [],
  onScribble = () => {},
  className,
  ...props
}: Props) {
  //============================================================================
  // Hooks
  //============================================================================

  const canvasRef = useRef<ReactSketchCanvasRef>(null)
  const [touched, setTouched] = useState<boolean>(false)

  //============================================================================
  // Callbacks
  //============================================================================

  const onChange = useCallback(async () => {
    const paths = await canvasRef.current!.exportPaths()
    localStorage.setItem("paths", JSON.stringify(paths, null, 2))

    if (!paths.length) {
      return
    }

    setTouched(true)

    const data = await canvasRef.current!.exportImage("png")
    onScribble(data)
  }, [onScribble, setTouched])

  const loadStartingPaths = useCallback(async () => {
    await canvasRef.current!.loadPaths(startingPaths)
    setTouched(true)
    onChange()
  }, [onChange, setTouched, startingPaths])

  //============================================================================
  // Handlers
  //============================================================================

  const handleUpload = () => {
    setTouched(false)
    canvasRef.current!.resetCanvas()
  }

  const handleUndo = () => {
    canvasRef.current!.undo()
  }

  const handleReset = () => {
    setTouched(false)
    canvasRef.current!.resetCanvas()
  }

  //============================================================================
  // Effects
  //============================================================================

  useEffect(() => {
    // Hack to work around Firefox bug in react-sketch-canvas
    // https://github.com/vinothpandian/react-sketch-canvas/issues/54
    document
      .querySelector("#react-sketch-canvas__stroke-group-0")
      ?.removeAttribute("mask")

    loadStartingPaths()
  }, [loadStartingPaths])

  //============================================================================
  // Main
  //============================================================================

  return (
    <div className="relative">
      {touched || <EmptyBanner />}

      <ReactSketchCanvas
        ref={canvasRef}
        className={cn(
          "aspect-square w-full",
          "overflow-hidden rounded",
          "border border-primary",
          "cursor-dark-pen dark:cursor-light-pen",
          // className,
        )}
        // svgStyle={{
        //   borderRadius: "var(--radius)"
        //  }}
        strokeWidth={4}
        strokeColor="red"
        onChange={onChange}
        withTimestamp={true}
        {...props}
      />

      {/* Controls */}
      <div className="my-2 flex justify-between text-left animate-in fade-in duration-500">
        <Button
          icon={Upload}
          size="sm"
          variant="secondary"
          disabled={!touched}
          onClick={handleUpload}
        >
          Upload
        </Button>

        <div>
          <Button
            icon={Undo}
            size="sm"
            variant="control"
            disabled={!touched}
            onClick={handleUndo}
          >
            Undo
          </Button>
          <Button
            icon={Trash}
            size="sm"
            variant="control"
            disabled={!touched}
            onClick={handleReset}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  )
}
