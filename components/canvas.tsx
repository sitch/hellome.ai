import { useCallback, useEffect, useRef } from 'react'
import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasRef,
} from 'react-sketch-canvas'
import { Undo as UndoIcon, Trash as TrashIcon } from 'lucide-react'

type Props = {
  startingPaths: CanvasPath[]
  onScribble: (scribble: string | null) => void
  scribbleExists: boolean
  setScribbleExists: (exists: boolean) => void
}

export default function Canvas({
  startingPaths,
  onScribble,
  scribbleExists,
  setScribbleExists,
}: Props) {
  const canvasRef = useRef<ReactSketchCanvasRef>(null)

  const onChange = useCallback(async () => {
    const paths = await canvasRef.current!.exportPaths()
    localStorage.setItem('paths', JSON.stringify(paths, null, 2))

    if (!paths.length) return

    setScribbleExists(true)

    const data = await canvasRef.current!.exportImage('png')
    onScribble(data)
  }, [onScribble, setScribbleExists])

  const loadStartingPaths = useCallback(async () => {
    await canvasRef.current!.loadPaths(startingPaths)
    setScribbleExists(true)
    onChange()
  }, [onChange, setScribbleExists, startingPaths])

  useEffect(() => {
    // Hack to work around Firefox bug in react-sketch-canvas
    // https://github.com/vinothpandian/react-sketch-canvas/issues/54
    document
      .querySelector('#react-sketch-canvas__stroke-group-0')
      ?.removeAttribute('mask')

    loadStartingPaths()
  }, [loadStartingPaths])

  const undo = () => {
    canvasRef.current!.undo()
  }

  const reset = () => {
    setScribbleExists(false)
    canvasRef.current!.resetCanvas()
  }

  return (
    <div className="relative">
      {scribbleExists || (
        <div>
          <div className="pointer-events-none absolute grid h-full w-full place-items-center p-3 text-xl">
            <span className="opacity-40">Draw something here.</span>
          </div>
        </div>
      )}

      <ReactSketchCanvas
        ref={canvasRef}
        className="aspect-square w-full cursor-crosshair border-none"
        strokeWidth={4}
        strokeColor="black"
        onChange={onChange}
        withTimestamp={true}
      />

      {scribbleExists && (
        <div className="text-left animate-in fade-in duration-700">
          <button className="lil-button" onClick={undo}>
            <UndoIcon className="icon" />
            Undo
          </button>
          <button className="lil-button" onClick={reset}>
            <TrashIcon className="icon" />
            Clear
          </button>
        </div>
      )}
    </div>
  )
}
