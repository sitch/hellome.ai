import { Human, Result, DrawOptions } from '@vladmandic/human'
import { MemoryInfo } from '@tensorflow/tfjs'

export type DetectLoopResult = {
  result: Result
  memory: MemoryInfo
}

export async function detectLoop(
  human: Human,
  video: HTMLVideoElement
): Promise<DetectLoopResult> {
  const result = await human.detect(video)
  const memory = human.tf.memory() as MemoryInfo

  return {
    result,
    memory,
  }
}

export type DrawLoopResult = {
  interpolated: Result
}

export async function drawLoop(
  human: Human,
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement
): Promise<DrawLoopResult> {
  const drawOptions: Partial<DrawOptions> = {
    bodyLabels: `person confidence [score] and ${human.result.body[0]?.keypoints.length} keypoints`,
  }

  // smoothen result using last-known results
  const interpolated = human.next(human.result)

  // get current video frame, but enhanced with human.filters
  const processed = await human.image(video)
  human.draw.canvas(processed.canvas as HTMLCanvasElement, canvas)

  // draw labels, boxes, lines, etc.
  await human.draw.all(canvas, interpolated, drawOptions)

  processed.tensor?.dispose()

  return {
    interpolated,
  }
}
