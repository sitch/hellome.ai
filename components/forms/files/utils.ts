import imageInfo from "base64image-dimensions"
import { FilePondProps } from "react-filepond"

export const fileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

export const imageValidateSizeMeasure: Required<
  FilePondProps["imageValidateSizeMeasure"]
> = async (file: File): Promise<{ width: number; height: number }> => {
  console.log({ file })

  const base64Image = await fileToBase64(file)

  const dimensions = imageInfo(base64Image)

  console.log({ base64Image })
  console.log({ dimensions })

  debugger

  return dimensions
}
