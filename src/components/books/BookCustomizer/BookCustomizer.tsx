/*
Udemy course: https://www.udemy.com/course/react-three-fiber-configurator/learn/lecture/36721122#overview

https://codesandbox.io/s/ioxywi
*/

import { Suspense, useEffect, useState } from "react"

import Webcam from "react-webcam"
import { LayoutGroup } from "framer-motion"

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
      <Webcam
        // className
        id="webcam"
        className="invisible h-0 w-0"
        audio={false}
        // height={720}
        // width={1280}
        // height={50}
        // width={50}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "user",
        }}
      />

      {/* <Suspense
      // fallback={null}
      > */}
      {/* <div id="root"
      // className="h-screen w-full"
      > */}

      {/* <LayoutGroup> */}
      <Canvas />
      <Overlay />
      {/* </LayoutGroup> */}
      {/* </div> */}
      {/* </Suspense> */}
    </>
  )
}
