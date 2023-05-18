/*
Udemy course: https://www.udemy.com/course/react-three-fiber-configurator/learn/lecture/36721122#overview
*/

import { Suspense, useEffect, useState } from "react"

import { App as Canvas } from "@/components/books/BookCustomizer/Canvas"
import { Overlay } from "@/components/books/BookCustomizer/Overlay"

// import "@/components/books/BookCustomizer/styles.css"

export function BookCustomizer() {
  const [ready, setReady] = useState(false)

  useEffect(() => setReady(true), [])

  if (!ready) {
    return null
  }

  return (
    <>
      {/* <Suspense
      // fallback={null}
      > */}
      {/* <div id="root"
      // className="h-screen w-full"
      > */}

      <Canvas />
      <Overlay />
      {/* </div> */}
      {/* </Suspense> */}
    </>
  )
}
