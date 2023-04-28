import { RefObject, useState } from "react"

import { MemoryInfo } from "@tensorflow/tfjs-core"
import Human, { Result } from "@vladmandic/human"
import { useMount } from "react-use"

import { detectLoop, drawLoop } from "@/lib/human/callbacks"
import useRequestAnimationFrame from "@/lib/human/useRequestAnimationFrame"
import { disposeResult } from "@/lib/human/utils"

import FaceImporterInstructions from "../FaceImporterInstructions/FaceImporterInstructions"
import { FaceManifold } from "../FaceManifold/FaceManifold"
import { FaceAnalysis, runFaceAnalysis } from "../analysis"
import { defaultFaceAnalysis } from "../defaults"

export type PerformanceMetricsProps = {
  memory: MemoryInfo
  performance: Result["performance"] | undefined
}

export function PerformanceMetrics({
  performance,
  memory,
}: PerformanceMetricsProps) {
  // const perf = (msg) => dom.perf.innerText = 'tensors:' + human.tf.memory().numTensors.toString() + ' | performance: ' + JSON.stringify(msg).replace(/"|{|}/g, '').replace(/,/g, ' | '); // print performance element

  return (
    <>
      {JSON.stringify(performance, null, 2)}
      {JSON.stringify(memory, null, 2)}
    </>
  )
}

type FacePredictionProps = {
  human: Human
  canvasRef: RefObject<HTMLCanvasElement>
  videoRef: RefObject<HTMLVideoElement>
  // statusRef: RefObject<HTMLDivElement>
  // logRef: RefObject<HTMLDivElement>
  // performanceRef: RefObject<HTMLDivElement>
}

export default function FacePrediction({
  human,
  videoRef,
  canvasRef,
}: FacePredictionProps) {
  const video = videoRef.current
  const canvas = canvasRef.current

  // if(!video || !canvas) {
  //   return 'Loading Video | Canvas'
  // }

  const [paused, setPaused] = useState(false)
  const [memory, setMemory] = useState<MemoryInfo>(
    () => human.tf.memory() as MemoryInfo,
  )
  const [performance, setPerformance] = useState<Result["performance"]>()
  const [analysis, setAnalysis] = useState<FaceAnalysis>(defaultFaceAnalysis)

  // useMount(() => {
  //   if (video && canvas) {
  //     video.onresize = () => {
  //       canvas.width = video.videoWidth
  //       canvas.height = video.videoHeight
  //     }

  //     canvas.onclick = () => {
  //       paused ? video.play() : video.pause()
  //       setPaused(!paused)
  //     }
  //   }
  // })

  // Detect Loop
  useRequestAnimationFrame(
    async () => {
      if (!video || !canvas) {
        return
      }

      const { result, memory: nextMemory } = await detectLoop(human, video)
      setMemory(nextMemory)

      const { analysis: nextAnalysis, disposeResults } = await runFaceAnalysis(
        human,
        result,
        analysis,
      )

      // update state
      setAnalysis(nextAnalysis)
      // dispose results
      disposeResults.forEach(disposeResult)
    },
    { fps: { max: 1 } },
  )

  // Draw Loop
  useRequestAnimationFrame(
    async () => {
      if (video && canvas) {
        const { interpolated } = await drawLoop(human, video, canvas)
        setPerformance(interpolated.performance)
      }
    },
    { fps: { max: 30 } },
  )

  return (
    <p>
      <PerformanceMetrics performance={performance} memory={memory} />

      <FaceManifold
        human={human}
        analysis={analysis}
        // onError={(error, face) => this.#handleError(error, face)}
      />
      <FaceImporterInstructions analysis={analysis} />
    </p>
  )
}
