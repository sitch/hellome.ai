import { useCallback, useEffect, useRef } from "react"

import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasRef,
} from "react-sketch-canvas"
import { Trash as TrashIcon, Undo as UndoIcon } from "lucide-react"

type Value = string

type Props = {
  name: string
  onChange: (value: Value) => void
  value: Value
}

export function ScribbleInput({ name }: Props) {
  return <>{name}</>
}
