import { type FilePondProps } from "react-filepond"
import imageInfo from "base64image-dimensions"
import { findIndex, type ListIterateeCustom } from "lodash"

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

export const maybeReplaceByAndDispatch = <T extends { status: number }>(
  arr: T[],
  val: T,
  predicate: ListIterateeCustom<T, boolean>,
  fn: (arr: T[]) => void,
) => {
  const index = findIndex(arr, predicate)
  if (index >= 0) {
    const prev = arr[index]

    if (prev.status !== val.status) {
      // const next = [...slice(arr, 0, index), val, ...slice(arr, index + 1)]

      arr[index] = val
      fn(arr)
    }
  }
}

export const getDataURIFileSize = (dataURI: string): number => {
  const base64str = dataURI.split("base64,")[1] //remove the image type metadata.
  const imageFile = Buffer.from(base64str, "base64")
  const filesize = imageFile.length
  return filesize
}
