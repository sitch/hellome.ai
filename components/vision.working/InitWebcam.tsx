import { Component } from "react"

type InitWebcamProps = {
  elementId: string
}
type InitWebcamState = {
  ready: boolean
}

class InitWebcam extends Component<InitWebcamProps, InitWebcamState> {
  video: HTMLVideoElement | undefined
  stream: MediaStream | undefined
  track: MediaStreamTrack | undefined
  settings: MediaTrackSettings | undefined
  constraints: MediaStreamConstraints | undefined
  capabilities: MediaTrackCapabilities | undefined

  constructor(props: InitWebcamProps) {
    super(props)

    this.state = {
      ready: false,
    }

    if (typeof document === "undefined") {
      return
    }

    // video
    this.video =
      (document.getElementById(this.props.elementId) as
        | HTMLVideoElement
        | undefined) ?? document.createElement("video")
    this.video.style.display = "none"
    this.video.id = this.props.elementId

    // media
    this.constraints = {
      audio: false,
      video: {
        facingMode: "user",
        width: { ideal: document.body.clientWidth },
      },
    }
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then((stream: MediaStream) => {
        this.stream = stream
        this.track = this.stream.getVideoTracks()[0]
        this.capabilities = this.track.getCapabilities()
        this.settings = this.track.getSettings()
        this.video!.onloadeddata = () => {
          this.setState({ ready: true })
        }
        this.video!.srcObject = this.stream
        this.video!.play()
      })
  }

  override render(this: InitWebcam) {
    if (this.state.ready)
      console.log(
        "video:",
        this.video!.videoWidth,
        this.video!.videoHeight,
        this.track!.label,
        {
          stream: this.stream,
          track: this.track,
          settings: this.settings,
          constraints: this.constraints,
          capabilities: this.capabilities,
        },
      )
    return null
  }
}

export default InitWebcam
