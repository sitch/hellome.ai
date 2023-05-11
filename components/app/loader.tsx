import PulseLoader from "react-spinners/PulseLoader"
import { type LoaderSizeMarginProps } from "react-spinners/helpers/props"

export default function Loader(props: LoaderSizeMarginProps) {
  return (
    <PulseLoader
      size={12}
      margin={4}
      className="opacity-40"
      color="#3d369773"
      {...props}
    />
  )
}
