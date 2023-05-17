"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import {
  ReactSketchCanvas,
  type CanvasPath,
  type ReactSketchCanvasProps,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas"
import { Plus, Trash, Undo } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { type AddFileCallback } from "@/components/filepond/form.types"
import { getDataURIFileSize } from "@/components/filepond/utils"
import { EmptyBanner } from "@/components/sketch/EmptyBanner"
import {
  SketchPalette,
  type SketchPaletteStyleProps,
} from "@/components/sketch/SketchPalette"

const INITIAL_STYLE = {
  strokeWidth: 3,
  strokeColor: "blue",
}

export type Scribble = string

type Props = ReactSketchCanvasProps & {
  startingPaths?: CanvasPath[]
  onScribble?: (scribble: string | null) => void
  onUpload?: AddFileCallback
  setTouched?: (exists: boolean) => void
}

export function SketchCanvas({
  startingPaths = [],
  onScribble = () => {},
  onUpload,
  className,
  ...props
}: Props) {
  //============================================================================
  // Hooks
  //============================================================================

  const canvasRef = useRef<ReactSketchCanvasRef>(null)
  const [touched, setTouched] = useState<boolean>(false)
  const [styles, setStyles] = useState<SketchPaletteStyleProps>(INITIAL_STYLE)

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
    if (startingPaths.length > 0) {
      await canvasRef.current!.loadPaths(startingPaths)
      setTouched(true)
      onChange()
    }
  }, [onChange, setTouched, startingPaths])

  //============================================================================
  // Handlers
  //============================================================================

  const handleUndo = () => {
    canvasRef.current!.undo()
  }

  const handleReset = () => {
    setTouched(false)
    canvasRef.current!.resetCanvas()
  }

  const handleStyle = (styles: SketchPaletteStyleProps) => {
    setStyles(styles)
  }

  const handleUpload = async () => {
    if (!onUpload) {
      return
    }

    const filename = `scribble_${Date.now()}.png`
    const dataURI = await canvasRef.current!.exportImage("png")
    const filesize = getDataURIFileSize(dataURI)

    const options = {
      type: "input" as const,
      file: {
        type: "image/png",
        name: filename,
        size: filesize,
      },
      metadata: {},
    }

    onUpload(dataURI, options)
    handleReset()
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
          className,
        )}
        onChange={onChange}
        withTimestamp={true}
        {...props}
        {...styles}
      />

      <SketchPalette
        // orientation="horizontal"
        // orientation="vertical"
        onChange={handleStyle}
      />

      {/* Controls */}
      <div className="my-2 flex justify-between text-left animate-in fade-in duration-500">
        <Button
          icon={Plus}
          size="sm"
          type="button"
          variant="secondary"
          disabled={!touched}
          onClick={handleUpload}
        >
          Add
        </Button>

        <div>
          <Button
            icon={Undo}
            size="sm"
            type="button"
            variant="control"
            disabled={!touched}
            onClick={handleUndo}
          >
            Undo
          </Button>
          <Button
            icon={Trash}
            size="sm"
            type="button"
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
