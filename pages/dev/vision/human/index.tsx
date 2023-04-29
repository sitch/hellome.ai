import { useRef } from "react"
import Head from "next/head"

import InitWebcam from "@/components/vision/InitWebcam"
import FacePredictionOverlay from "@/components/vision/human/FacePredictionOverlay/FacePredictionOverlay"

import styles from "@/pages/dev/vision/human/index.module.css"

// import { Layout } from '@/components/common'

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const logRef = useRef<HTMLDivElement>(null)
  const performanceRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.container}>
      <Head>
        <title>Human</title>
        <meta
          name="description"
          content="Human: Demo with TypeScript/ReactJS/NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* placeholder element that will be used by human for output */}
      <canvas ref={canvasRef} id="canvas" className={styles.output} />
      <video
        ref={videoRef}
        id="video"
        className={styles.webcam}
        autoPlay
        muted
      />

      {/* <Webcam id="video" className={styles.webcam} autoPlay muted /> */}

      {/* placeholder element that will be used by webcam */}
      <div ref={statusRef} id="status" className={styles.status} />
      <div ref={logRef} id="log" className={styles.log} />
      <div
        ref={performanceRef}
        id="performance"
        className={styles.performance}
      />
      <InitWebcam elementId="video" />

      {/* initialized webcam using html video element with specified id */}
      <FacePredictionOverlay
        inputId="video"
        outputId="canvas"
        canvasRef={canvasRef}
        videoRef={videoRef}
        statusRef={statusRef}
        logRef={logRef}
        performanceRef={performanceRef}

        // handleResult={handleHumanResult}
      />
    </div>
  )
}

// Index.Layout = Layout
