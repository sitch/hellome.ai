import { Component } from "react"

import type { FaceResult, Human, Result } from "@vladmandic/human"
import { isEqual, remove } from "lodash"

import {
  runFaceAnalysis,
  type FaceAnalysis,
} from "@/components/vision.working/human/analysis"
import { defaultFaceAnalysis } from "@/components/vision.working/human/config"
import FaceImporterInstructions from "@/components/vision.working/human/FaceImporterInstructions/FaceImporterInstructions"
import { FaceManifold } from "@/components/vision.working/human/FaceManifold/FaceManifold"
import { config } from "@/components/vision.working/human/FacePredictionOverlay/config"
import { type ManifoldVector } from "@/components/vision.working/human/manifolds"
import { log, status } from "@/components/vision/logging"

type FacePredictionOverlayProps = {
  inputId: string // video
  outputId: string // canvas
}
type FacePredictionOverlayState = {
  ready: boolean
  frame: number
  analysis: FaceAnalysis
}

class FacePredictionOverlay extends Component<
  FacePredictionOverlayProps,
  FacePredictionOverlayState
> {
  // HumanImport: any
  human: Human | undefined = undefined
  video: HTMLVideoElement | undefined = undefined
  canvas: HTMLCanvasElement | undefined = undefined
  timestamp = 0
  fps = 0

  constructor(props: FacePredictionOverlayProps) {
    super(props)

    this.state = {
      ready: false,
      frame: 0,
      analysis: defaultFaceAnalysis,
    }

    if (typeof document === "undefined") {
      return
    }

    // bind elements
    this.video =
      (document.getElementById(
        this.props.inputId,
      ) as HTMLVideoElement | null) ?? document.createElement("video")
    this.canvas =
      (document.getElementById(
        this.props.outputId,
      ) as HTMLCanvasElement | null) ?? document.createElement("canvas")

    // human is loaded as dynamic import in component constructor and then sets ready state
    import("@vladmandic/human").then((H) => {
      this.human = new H.default(config)

      log(
        `human version:${this.human.version}| tfjs version:${this.human.tf.version["tfjs-core"]}`,
      )
      log(`platform:${this.human.env.platform}| agent:${this.human.env.agent}`)

      // preload all models
      status("loading models...")
      this.human.load().then(() => {
        log(
          `backend:${this.human!.tf.getBackend()}| available:${
            this.human!.env.backends
          }`,
        )

        log(
          `loaded models: ${
            Object.values(this.human!.models).filter(Boolean).length
          }`,
        )

        // warmup function to initialize backend for future faster detection
        status("initializing...")
        this.human!.warmup().then(() => {
          this.setState({ ready: true })
          status("ready...")
        })
      })
    })
  }

  override async componentDidMount() {
    // add event handlers for resize and click
    if (this.video)
      this.video.onresize = () => {
        this.canvas!.width = this.video!.videoWidth
        this.canvas!.height = this.video!.videoHeight
      }
    if (this.canvas)
      this.canvas.onclick = () => {
        this.video?.paused ? this.video.play() : this.video?.pause()
      }
  }

  async detect(this: FacePredictionOverlay) {
    // main detection loop
    if (!this.human || !this.video || !this.canvas) {
      return
    }

    // actual detection; were not capturing output in a local variable as it can also be reached via this.human.result
    const result = await this.human.detect(this.video)

    // timestamp
    const now = this.human.now()
    this.fps = 1000 / (now - this.timestamp)
    this.timestamp = now

    // state
    this.setState({ ready: true, frame: this.state.frame + 1 })

    // result
    this.#handleResult(result)
  }

  #handleResult(result: Result) {
    const nextAnalysis = runFaceAnalysis(result, this.state.analysis)

    // update state
    this.setState({ analysis: nextAnalysis.analysis })

    // dispose of now unused tensors
    nextAnalysis.disposeResults.forEach((result) => {
      this.#disposeResult(result)
    })
  }

  // See: https://github.com/vladmandic/human/issues/300
  // See: https://github.com/vladmandic/human/issues/257
  #disposeResult(result: Result) {
    result.face.forEach((face) => {
      this.human!.tf.dispose(face.tensor)
    })
  }

  async #handleError(
    error: any,
    { face, vector }: { face?: FaceResult; vector?: ManifoldVector },
  ) {
    // console.log({face,vector})
    // !!face && console.error('face')
    // !!vector && console.error('vector')

    if (error) {
      console.error(error)
      throw error
    }

    if (face) {
      // const prev = this.state.analysis
      // const vectors = remove(prev.vectors, (item) => isEqual(item, vector))
      // const analysis = { ...prev, vectors }

      this.human!.tf.dispose(face.tensor)
      // this.setState({ analysis })
    }

    if (vector) {
      const prev = this.state.analysis
      const vectors = remove(prev.vectors, (item) => isEqual(item, vector))
      const analysis = { ...prev, vectors }

      this.human!.tf.dispose(vector.candidate?.face.tensor)
      this.setState({ analysis })
    }
  }

  override render(this: FacePredictionOverlay) {
    if (this.state.ready) {
      // start detection loop once component is created and human state is ready trigger detection and draw loops
      this.detect()
    }
    // if (!this.video || !this.canvas || !this.human || !this.human.result) {
    if (!this.video || !this.canvas || !this.human) {
      return null
    }
    if (this.video.paused) {
      status("paused")
    } else {
      status(`fps: ${this.fps.toFixed(1).padStart(5, " ")}`)

      const interpolated = this.human.next(this.human.result) // smoothen result using last-known results
      this.human.draw.canvas(this.video, this.canvas) // draw canvas to screen
      this.human.draw.all(this.canvas, interpolated) // draw labels, boxes, lines, etc.
    }
    return (
      <>
        <FaceImporterInstructions analysis={this.state.analysis} />
        <FaceManifold
          human={this.human}
          analysis={this.state.analysis}
          onError={(error, face) => this.#handleError(error, face)}
        />
      </>
    )
  }
}

export default FacePredictionOverlay
