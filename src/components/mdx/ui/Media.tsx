import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ImgHTMLAttributes,
} from "react"
import Image from "next/image"

type ImgProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export const Img = ({
  src,
  alt,
  height,
  width,
  placeholder,
  ref: _ref,
  ...props
}: ImgProps) => {
  return (
    <Image
      {...props}
      src={String(src)}
      alt={String(alt)}
      height={Number(height)}
      width={Number(width)}
      placeholder={
        placeholder === "blur" || placeholder === "empty"
          ? placeholder
          : undefined
      }
    />
  )
}

type ResponsiveImageProps = ImgProps

export const ResponsiveImage = ({
  src,
  alt,
  placeholder,
  ref: _ref,
  width: _width,
  height: _height,
  ...props
}: ResponsiveImageProps) => {
  return (
    <Image
      {...props}
      src={String(src)}
      alt={String(alt)}
      placeholder={
        placeholder === "blur" || placeholder === "empty"
          ? placeholder
          : undefined
      }
      fill={true}
    />
  )
}

type FigureProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  src: string
  alt: string
  caption?: string
}

export const Figure = ({ caption, src, alt, ...props }: FigureProps) => {
  return (
    <figure {...props}>
      <ResponsiveImage
        // src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
        src={src}
        alt={alt}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export type VideoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>

export function Video({ children, ...props }: VideoProps) {
  // eslint-disable-next-line jsx-a11y/media-has-caption
  return <video {...props}>{children}</video>
}
