import { useEffect, useRef } from "react"

import { FaceResult, Human, Tensor } from "@vladmandic/human"

export type FaceClipProps = {
  human: Human | undefined
  name: string
  face?: FaceResult | null | undefined
  imageData: ImageData | null | undefined
  // canvas?: HTMLCanvasElement
  onError: <T>(
    error: unknown,
    face?: FaceResult | null | undefined,
  ) => Promise<T | void>
}

export default function FaceClip({
  name,
  human,
  face,
  imageData,
  onError,
}: FaceClipProps) {
  // if (face || imageData) {
  //   console.log({ name, face, imageData })
  // }

  // const [imageSrc, setImageSrc ] = useState<string>(null)

  // const [_x, _y, width, height] = face?.box ?? [0, 0, 100, 100]

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    async function renderCanvas() {
      if (human && face?.tensor && canvasRef.current) {
        // const canvas = document.createElement('canvas')
        // const url = URL.createObjectURL(imageData)
        // const ctx = canvasRef?.current?.getContext('2d')

        // try {

        if (face.tensor.isDisposed) {
          // console.info('tensor disposed', name, face)
          return
        }

        // const data = face.tensor.dataToGPU()

        await human.tf.browser.toPixels(face.tensor, canvasRef.current)

        face.tensor.dispose()

        // const [_x, _y, width, height] = face.box
        // const bytes = await human.tf.browser.toPixels(face.tensor)
        // canvasRef.current.width = width
        // canvasRef.current.height = height
        // const ctx = canvasRef.current.getContext('2d')
        // const imageData = new ImageData(bytes, width, height)
        // ctx!.putImageData(imageData, 0, 0)

        // } catch (error) {
        // onError(error, face)
        // }
      }
    }
    renderCanvas()
  }, [human, face, imageData, onError])

  return (
    <div>
      {name}
      {/* {JSON.stringify(face.tensor)} */}
      <canvas
        ref={canvasRef}

        //  {...(imageData ? {

        //   height: `${imageData.height}px`,
        //   width: `${imageData.width}px`
        //  } : {})}
        // id={name}
      />
    </div>
  )
}

// export function FaceClipCanvas({
//   name,
//   human,
//   face,
//   imageData,
//   onError,
// }: FaceClipProps) {
//   const [_x, _y, width, height] = face?.box ?? [0, 0, 100, 100]

//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const ctx = canvasRef?.current?.getContext('2d')

//     if (imageData) {
//       console.log({ imageData })

//       // URL.createObjectURL(imageData)

//       try {
//         ctx?.putImageData(imageData, 0, 0)
//       } catch (error) {
//         onError(error, face)
//       }
//     }
//   }, [face, imageData, onError])

//   return (
//     <div>
//       {name}
//       {/* {JSON.stringify(face.tensor)} */}
//       <canvas
//         height={height}
//         width={width}
//         // id={name}
//         ref={canvasRef}
//       />
//     </div>
//   )
// }
