import { type FilePondProps } from "react-filepond"
import imageInfo from "base64image-dimensions"

export const fileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

type Dimensions = {
  width: number
  height: number
}

type ValidateSize = NonNullable<FilePondProps["imageValidateSizeMeasure"]>

export const imageValidateSizeMeasure: ValidateSize = async (
  file,
): Promise<Dimensions> => {
  console.log({ file })

  const base64Image = await fileToBase64(file as unknown as File)

  const dimensions = imageInfo(base64Image) as Dimensions

  console.log({ base64Image })
  console.log({ dimensions })

  // debugger

  return dimensions
}

type ImageDimensions = {
  height: number
  width: number
}

export const getImageSize = (file: File): Promise<ImageDimensions> =>
  new Promise((resolve, reject) => {
    const image = document.createElement("img")
    image.src = URL.createObjectURL(file)
    image.onerror = (err) => {
      clearInterval(intervalId)
      reject(err)
    }
    const intervalId = setInterval(() => {
      if (image.naturalWidth && image.naturalHeight) {
        clearInterval(intervalId)
        URL.revokeObjectURL(image.src)
        resolve({
          width: image.naturalWidth,
          height: image.naturalHeight,
        })
      }
    }, 1)
  })
