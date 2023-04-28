import imageInfo from "base64image-dimensions"
import { FilePondProps } from "react-filepond"

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

type ValidateSize = Required<FilePondProps["imageValidateSizeMeasure"]>

export const imageValidateSizeMeasure: ValidateSize = async (
  file: File,
): Promise<Dimensions> => {
  console.log({ file })

  const base64Image = await fileToBase64(file)

  const dimensions = imageInfo(base64Image) as Dimensions

  console.log({ base64Image })
  console.log({ dimensions })

  debugger

  return dimensions
}
