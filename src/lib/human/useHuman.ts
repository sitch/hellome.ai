// import { Component, RefObject, useState } from 'react'
// import type { FaceResult, Human, Result } from '@vladmandic/human'
// import { log, status } from '@/components/vision/logging'
// import { config } from '@/lib/human/config'
// import { FaceManifold } from '../FaceManifold/FaceManifold'
// import { runFaceAnalysis } from '../analysis'
// import { defaultFaceAnalysis } from '@/components/vision/human/config'

// import type { FaceAnalysis } from '../analysis'
// import FaceImporterInstructions from '../FaceImporterInstructions/FaceImporterInstructions'
// import { ManifoldVector } from '../manifolds'
// import { isEqual, remove } from 'lodash'
// import { useRafLoop, useUpdate } from 'react-use';

// import useRequestAnimationFrame from 'use-request-animation-frame'

// async function detectVideo() {
//   const inputVideo = document.getElementById('video-id')
//   result = await human.detect(inputVideo) // run detection
//   requestAnimationFrame(detectVideo) // run detect loop
// }

// async function drawVideo() {
//   const outputCanvas = document.getElementById('canvas-id')
//   const interpolated = human.next(result) // calculate next interpolated frame from last known result
//   human.draw.all(outputCanvas, interpolated) // draw the frame
//   requestAnimationFrame(drawVideo) // run draw loop
// }

import { useLayoutEffect, useState, type RefObject } from "react"

import { useTimeoutFn } from "react-use"
import { human } from "__tests__/components/vision/human/fixtures"
import { type DrawOptions, type Human } from "@vladmandic/human"

// Estimates 30fps = 1000ms / 30 == ~33.3
export const DRAW_LOOP_INTERVAL_MS = 30

// async function detectionLoop() { // main detection loop
//   if (!dom.video.paused) {
//     if (timestamp.start === 0) timestamp.start = human.now();
//     // log('profiling data:', await human.profile(dom.video));
//     await human.detect(dom.video); // actual detection; were not capturing output in a local variable as it can also be reached via human.result
//     const tensors = human.tf.memory().numTensors; // check current tensor usage for memory leaks
//     if (tensors - timestamp.tensors !== 0) log('allocated tensors:', tensors - timestamp.tensors); // printed on start and each time there is a tensor leak
//     timestamp.tensors = tensors;
//     fps.detectFPS = Math.round(1000 * 1000 / (human.now() - timestamp.detect)) / 1000;
//     fps.frames++;
//     fps.averageMs = Math.round(1000 * (human.now() - timestamp.start) / fps.frames) / 1000;
//     if (fps.frames % 100 === 0 && !dom.video.paused) log('performance', { ...fps, tensors: timestamp.tensors });
//   }
//   timestamp.detect = human.now();
//   requestAnimationFrame(detectionLoop); // start new frame immediately
// }

// async function drawLoop() { // main screen refresh loop
//   if (!dom.video.paused) {
//     const interpolated = human.next(human.result); // smoothen result using last-known results
//     const processed = await human.image(dom.video); // get current video frame, but enhanced with human.filters
//     human.draw.canvas(processed.canvas as HTMLCanvasElement, dom.canvas);

//     const opt: Partial<H.DrawOptions> = { bodyLabels: `person confidence [score] and ${human.result?.body?.[0]?.keypoints.length} keypoints` };
//     await human.draw.all(dom.canvas, interpolated, opt); // draw labels, boxes, lines, etc.
//     perf(interpolated.performance); // write performance data
//   }
//   const now = human.now();
//   fps.drawFPS = Math.round(1000 * 1000 / (now - timestamp.draw)) / 1000;
//   timestamp.draw = now;
//   status(dom.video.paused ? 'paused' : `fps: ${fps.detectFPS.toFixed(1).padStart(5, ' ')} detect | ${fps.drawFPS.toFixed(1).padStart(5, ' ')} draw`); // write status
//   setTimeout(drawLoop, 30); // use to slow down refresh from max refresh rate to target of 30 fps
// }

export type UseHumanProps = {
  human: Human
  canvasRef: RefObject<HTMLCanvasElement>
  videoRef: RefObject<HTMLVideoElement>
  statusRef: RefObject<HTMLDivElement>
  logRef: RefObject<HTMLDivElement>
  performanceRef: RefObject<HTMLDivElement>
}

export type RenderPerformance = {
  frames: number
  fps: number
  timestampStart: number
  timestamp: number
  avgDurationMs: number
}

// export type UseHumanState = {

// }

export function useHuman({ human, videoRef, canvasRef }: UseHumanProps) {
  const [detectPerformance, setDetectPerformance] = useState<RenderPerformance>(
    () => ({
      frames: 0,
      fps: 0,
      timestamp: 0,
      timestampStart: 0,
      avgDurationMs: 0,
    }),
  )

  const [drawPerformance, setDrawPerformance] = useState<RenderPerformance>(
    () => ({
      frames: 0,
      fps: 0,
      timestamp: 0,
      timestampStart: 0,
      avgDurationMs: 0,
    }),
  )

  const [frameCount, setFrameCount] = useState<number>(0)
  const [tensorCount, setTensorCount] = useState<number>(0)
  const [drawFPS, setDrawFPS] = useState<number>(0)
  const [detectFPS, setDetectFPS] = useState<number>(0)
  const [avgRefreshMs, setAvgRefreshMs] = useState<number>(0)

  const [timestampDetect, setTimestampDetect] = useState<number>(() =>
    human.now(),
  )
  // const [timestamp, setTimestamp] = useState<number>(() => human.now())
  const [paused, setPaused] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (!paused) {
      let timerId: number

      const loop = async () => {
        await human.detect(videoRef.current!) // actual detection; were not capturing output in a local variable as it can also be reached via human.result
        const tensors = human.tf.memory().numTensors // check current tensor usage for memory leaks

        const timestamp = human.now()

        setTensorCount(tensors)
        const frames = detectPerformance.frames + 1

        const fps =
          Math.round(
            (1000 * 1000) / (timestamp - detectPerformance.timestamp),
          ) / 1000
        const avgDurationMs =
          Math.round(
            (1000 * (timestamp - detectPerformance.timestampStart)) / frames,
          ) / 1000

        setDetectPerformance({
          ...detectPerformance,
          frames,
          fps,
          timestamp,
          avgDurationMs,
        })

        // if (tensors - timestamp.tensors !== 0) log('allocated tensors:', tensors - timestamp.tensors); // printed on start and each time there is a tensor leak
        // timestamp.tensors = tensors;

        // fps.detectFPS = Math.round(1000 * 1000 / (now - timestamp.detect)) / 1000;
        // fps.frames++;
        // fps.averageMs = Math.round(1000 * (now - timestamp.start) / fps.frames) / 1000;
        // if (fps.frames % 100 === 0 && !dom.video.paused) log('performance', { ...fps, tensors: timestamp.tensors });

        setFrameCount((x) => x + 1)

        //  setTimestampDetect(human.now())

        timerId = requestAnimationFrame(loop)
      }
      timerId = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(timerId)
    }
  }, [paused, detectPerformance, human, videoRef])

  async function drawLoop() {
    console.log("timeout")

    if (!paused) {
      const interpolated = human.next(human.result) // smoothen result using last-known results
      const processed = await human.image(videoRef.current!) // get current video frame, but enhanced with human.filters
      human.draw.canvas(
        processed.canvas as HTMLCanvasElement,
        canvasRef.current!,
      )

      const opt: Partial<DrawOptions> = {
        bodyLabels: `person confidence [score] and ${human.result.body[0]?.keypoints.length} keypoints`,
      }
      await human.draw.all(canvasRef.current!, interpolated, opt) // draw labels, boxes, lines, etc.
      // perf(interpolated.performance); // write performance data

      const timestamp = human.now()

      const frames = drawPerformance.frames + 1

      const fps =
        Math.round((1000 * 1000) / (timestamp - drawPerformance.timestamp)) /
        1000
      const avgDurationMs =
        Math.round(
          (1000 * (timestamp - drawPerformance.timestampStart)) / frames,
        ) / 1000

      setDrawPerformance({
        ...drawPerformance,
        frames,
        fps,
        timestamp,
        avgDurationMs,
      })
    }
  }

  const [isReady, clear, set] = useTimeoutFn(drawLoop, DRAW_LOOP_INTERVAL_MS)

  return {
    paused,
    pause: () => {
      clear()
      setPaused(true)
    },
    resume: () => {
      setPaused(false)
    },
    draw: drawPerformance,
    detect: detectPerformance,
  }
}

// async function drawLoop() { // main screen refresh loop
//   if (!dom.video.paused) {
//     const interpolated = human.next(human.result); // smoothen result using last-known results
//     const processed = await human.image(dom.video); // get current video frame, but enhanced with human.filters
//     human.draw.canvas(processed.canvas as HTMLCanvasElement, dom.canvas);

//     const opt: Partial<H.DrawOptions> = { bodyLabels: `person confidence [score] and ${human.result?.body?.[0]?.keypoints.length} keypoints` };
//     await human.draw.all(dom.canvas, interpolated, opt); // draw labels, boxes, lines, etc.
//     perf(interpolated.performance); // write performance data
//   }
//   const now = human.now();
//   fps.drawFPS = Math.round(1000 * 1000 / (now - timestamp.draw)) / 1000;
//   timestamp.draw = now;

//   // status(dom.video.paused ? 'paused' : `fps: ${fps.detectFPS.toFixed(1).padStart(5, ' ')} detect | ${fps.drawFPS.toFixed(1).padStart(5, ' ')} draw`); // write status

//   setTimeout(drawLoop, 30); // use to slow down refresh from max refresh rate to target of 30 fps
// }
