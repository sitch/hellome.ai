import Image, { StaticImageData } from "next/image"

import styles from "@/components/books/Book/Book.module.css"

export type BookProps = {
  src: StaticImageData | string
  alt: string
}

// Source: https://codemyui.com/image-to-coffee-table-book-cover-effect-using-pure-css/
// Codepen: https://codepen.io/lynnandtonic/pen/JjGmrBz
export function Book({ src, alt }: BookProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.book}>
          <Image src={src} alt={alt} height={395} width={220} />
        </div>
      </div>
    </>
  )
}
