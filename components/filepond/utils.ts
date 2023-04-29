import { FilePondProps } from "react-filepond"
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
