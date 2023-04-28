import {
  Component,
  RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import { useMount } from "react-use"

type InitWebcamProps = {
  elementId: string
  videoRef?: RefObject<HTMLVideoElement>
  streamRef?: RefObject<MediaStream>
  trackRef?: RefObject<MediaStreamTrack>
  settingsRef?: RefObject<MediaTrackSettings>
  constraintsRef?: RefObject<MediaStreamConstraints>
  capabilitiesRef?: RefObject<MediaTrackCapabilities>
}
type InitWebcamState = {
  ready: boolean
}

export default function InitWebcam({
  elementId,
  videoRef,
  streamRef,
  trackRef,
  settingsRef,
  constraintsRef,
  capabilitiesRef,
}: InitWebcamProps) {
  const getVideo = useCallback(
    () =>
      videoRef?.current ??
      (document.getElementById(elementId) as HTMLVideoElement),
    [videoRef, elementId],
  )

  const [ready, setReady] = useState<boolean>(false)
  // const [video, setVideo] = useState()
  const [video, setVideo] = useState<HTMLVideoElement | null>(getVideo)
  const [stream, setStream] = useState<MediaStream>()
  const [track, setTrack] = useState<MediaStreamTrack>()
  const [settings, setSettings] = useState<MediaTrackSettings>()
  // const [constraints, setConstraints] = useState<MediaStreamConstraints>()
  const [capabilities, setCapabilities] = useState<MediaTrackCapabilities>()

  // const videoCallback = useCallback((video: HTMLVideoElement | null) => {
  useLayoutEffect(() => {
    if (!video) {
      setVideo(getVideo)
      return
    }

    const constraints = {
      audio: false,
      video: {
        facingMode: "user",
        // width: { ideal: document.body.clientWidth },
      },
    }
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(async (nextStream: MediaStream) => {
        setStream(nextStream)

        const nextTrack = nextStream.getVideoTracks()[0]
        setTrack(nextTrack)
        setCapabilities(nextTrack.getCapabilities())
        setSettings(nextTrack.getSettings())

        video.onloadeddata = () => {
          setReady(true)
        }
        video.srcObject = nextStream
        await video.play()

        console.log(
          "video:",
          video.videoWidth,
          video.videoHeight,
          track?.label,
          {
            stream,
            track,
            settings,
            constraints,
            capabilities,
          },
        )
      })
  }, [
    capabilities,
    elementId,
    settings,
    track,
    video,
    videoRef,
    stream,
    getVideo,
  ])

  if (!video) {
    return <>No Video</>
  }

  if (!ready) {
    return <>Loading...</>
  }

  return null
}

// class InitWebcam extends Component<InitWebcamProps, InitWebcamState> {
//   video: HTMLVideoElement | undefined
//   stream: MediaStream | undefined
//   track: MediaStreamTrack | undefined
//   settings: MediaTrackSettings | undefined
//   constraints: MediaStreamConstraints | undefined
//   capabilities: MediaTrackCapabilities | undefined

//   constructor(props: InitWebcamProps) {
//     super(props)

//     this.state = {
//       ready: false,
//     }

//     if (typeof document === 'undefined') {
//       return
//     }

//     this.video = props.videoRef?.current || (document.getElementById(props.elementId) as HTMLVideoElement)

//     if(!this.video) return

//     // video
//     // this.video =
//     //   (document.getElementById(this.props.elementId) as
//     //     | HTMLVideoElement
//     //     | undefined) || document.createElement('video')
//     // this.video.style.display = 'none'
//     // this.video.id = this.props.elementId

//     // media
//     this.constraints = {
//       audio: false,
//       video: {
//         facingMode: 'user',
//         width: { ideal: document.body.clientWidth },
//       },
//     }
//     navigator.mediaDevices
//       .getUserMedia(this.constraints)
//       .then((stream: MediaStream) => {
//         this.stream = stream
//         this.track = this.stream.getVideoTracks()[0]
//         this.capabilities = this.track.getCapabilities?.()
//         this.settings = this.track.getSettings?.()
//         this.video!.onloadeddata = () => {
//           this.setState({ ready: true })
//         }
//         this.video!.srcObject = this.stream
//         this.video!.play()
//       })
//   }

//   override render(this: InitWebcam) {

//     if (this.state.ready)
//       console.log(
//         'video:',
//         this.video!.videoWidth,
//         this.video!.videoHeight,
//         this.track!.label,
//         {
//           stream: this.stream,
//           track: this.track,
//           settings: this.settings,
//           constraints: this.constraints,
//           capabilities: this.capabilities,
//         }
//       )
//     return null
//   }
// }

// export default InitWebcam
