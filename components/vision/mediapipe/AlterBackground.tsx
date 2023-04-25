import React, { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { SelfieSegmentation } from '@mediapipe/selfie_segmentation'
import { Camera } from '@mediapipe/camera_utils'
import * as StackBlur from 'stackblur-canvas'
import { isIOS, isMacOs } from 'react-device-detect'
import { getRecordingOptions } from './utils'
import type { ResultsListener } from '@mediapipe/selfie_segmentation'

export const AlterBackground = () => {
  const selfieSegmentationRef = useRef<SelfieSegmentation | null>(null)
  const [isVirtualBg, setVirtualBg] = useState<boolean>(false)
  const isVirtualBgRef = useRef<boolean>(isVirtualBg)
  const webcamRef = useRef<Webcam | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const audioStreamRef = useRef<MediaStream | null>(null)
  const canvasStreamRef = useRef<MediaStream | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const backgroundImgRef = useRef<HTMLImageElement | null>(null)
  const [isRecording, setRecording] = useState<boolean>(false)
  const [recordedChunks, setRecordedChunks] = useState<BlobPart[]>([])
  const [blobURL, setBlobURL] = useState('')

  const onResults: ResultsListener = (results) => {
    const videoWidth = webcamRef.current!.video!.videoWidth
    const videoHeight = webcamRef.current!.video!.videoHeight

    canvasRef.current!.width = videoWidth
    canvasRef.current!.height = videoHeight
    const canvasElement = canvasRef.current! as HTMLCanvasElement
    const canvasCtx = canvasElement.getContext('2d')

    canvasCtx!.save()
    canvasCtx!.clearRect(0, 0, canvasElement.width, canvasElement.height)

    canvasCtx!.globalCompositeOperation = 'copy'
    canvasCtx!.filter = `blur(3px)`
    canvasCtx!.drawImage(
      results.segmentationMask,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    )

    canvasCtx!.globalCompositeOperation =
      (isIOS || isMacOs) && !isVirtualBgRef.current ? 'source-out' : 'source-in'
    canvasCtx!.filter = 'none'
    canvasCtx!.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    )

    canvasCtx!.globalCompositeOperation = 'destination-atop'
    if ((isIOS || isMacOs) && !isVirtualBgRef.current) {
      StackBlur.canvasRGB(
        canvasElement,
        0,
        0,
        canvasElement.width,
        canvasElement.height,
        15
      )
    } else {
      canvasCtx!.filter = isVirtualBgRef.current ? 'none' : 'blur(15px)'
    }
    canvasCtx!.drawImage(
      isVirtualBgRef.current ? backgroundImgRef.current! : results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    )

    canvasCtx!.restore()
  }

  useEffect(() => {
    const selfieSegmentation = new SelfieSegmentation({
      locateFile: (file: string) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`
      },
    })
    selfieSegmentationRef.current = selfieSegmentation

    selfieSegmentation.setOptions({
      modelSelection: 0,
    })

    selfieSegmentation.onResults(onResults)

    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null
    ) {
      const maskFilterImage = document.createElement('img', {
        ref: backgroundImgRef,
        style: { objectFit: 'contain' },
      } as ElementCreationOptions)
      // maskFilterImage.objectFit = 'contain'
      maskFilterImage.onload = function () {
        backgroundImgRef.current = maskFilterImage
        webcamRef.current!.video!.crossOrigin = 'anonymous'

        const camera = new Camera(webcamRef.current!.video!, {
          onFrame: async () => {
            webcamRef.current &&
              (await selfieSegmentation.send({
                image: webcamRef.current!.video!,
              }))
          },
          width: 640,
          height: 480,
        })
        camera.start()
      }
      maskFilterImage.src = 'images/lab.png'
    }
  }, [])

  const getAudioStream = async () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        audioStreamRef.current = stream
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const stopAudioStream = () => {
    const stream = audioStreamRef.current
    // if (stream) {
    //   if (stream.getAudioTracks) {
    //     stream.getAudioTracks().forEach((track) => {
    //       track.stop()
    //     })
    //   } else {
    //     stream.stop()
    //   }
    // }

    stream?.getAudioTracks().forEach((track) => {
      track.stop()
    })
  }

  const stopCanvasStream = () => {
    const stream = canvasStreamRef.current
    // if (stream) {
    //   if (stream.getVideoTracks) {
    //     stream.getVideoTracks().forEach((track) => {
    //       track.stop()
    //     })
    //   } else {
    //     stream.stop()
    //   }
    // }
    stream?.getVideoTracks().forEach((track) => {
      track.stop()
    })
  }

  const cleanUpFunc = () => {
    selfieSegmentationRef && selfieSegmentationRef.current!.close()
  }

  useEffect(() => {
    getAudioStream()
    return () => {
      cleanUpFunc()
    }
  }, [])

  useEffect(() => {
    isVirtualBgRef.current = isVirtualBg
  }, [isVirtualBg])

  const handleOptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    switch (e.target.value) {
      case 'blur':
        setVirtualBg(false)
        break
      case 'virtual':
        setVirtualBg(true)
        break
      default:
        setVirtualBg(false)
        break
    }
  }

  const handleDataAvailable = function ({ data }: BlobEvent) {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data))
    }
    setRecording(false)
  }

  const startRecording = () => {
    canvasStreamRef.current = canvasRef.current!.captureStream()
    const stream = new MediaStream([
      ...canvasStreamRef.current!.getTracks(),
      ...(audioStreamRef.current ? audioStreamRef.current!.getTracks() : []),
    ])
    const options = getRecordingOptions(true)
    mediaRecorderRef.current = new MediaRecorder(
      stream,
      options as MediaRecorderOptions
    )
    mediaRecorderRef.current!.addEventListener(
      'dataavailable',
      handleDataAvailable
    )
    mediaRecorderRef.current!.start()
    setRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current!.stop()
  }

  const stopStreaming = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      const portal = document.getElementById('fk-dialog')
      if (portal) {
        portal.style.top = '99px'
        portal.style.bottom = 'unset'
      }
      stopRecording()
    }
    stopAudioStream()
    stopCanvasStream()

    mediaRecorderRef.current!.removeEventListener(
      'dataavailable',
      handleDataAvailable
    )
  }

  const handleStartRecording = () => {
    startRecording()
  }

  const handleStopRecording = () => {
    stopStreaming()
  }

  useEffect(() => {
    if (recordedChunks.length) {
      const options = getRecordingOptions()
      const blob = new Blob(recordedChunks, options as BlobPropertyBag)
      const url = window.URL.createObjectURL(blob)
      setBlobURL(url)
    }
  }, [recordedChunks])

  return (
    <>
      <div className="select-bg">
        <label>
          <input
            type="radio"
            value="blur"
            checked={!isVirtualBg}
            onChange={handleOptionChange}
          />
          Blur Background
        </label>
        <label>
          <input
            type="radio"
            value="virtual"
            checked={isVirtualBg}
            onChange={handleOptionChange}
          />
          Virtual Background
        </label>
        <br />
        {!blobURL ? (
          <button
            onClick={isRecording ? handleStopRecording : handleStartRecording}
          >
            {isRecording ? 'Stop' : 'Start'} Recording
          </button>
        ) : (
          <video
            src={blobURL}
            controls
            style={{ position: 'unset', transform: 'unset' }}
          />
        )}
      </div>
      <Webcam
        ref={webcamRef}
        videoConstraints={{
          facingMode: 'user',
        }}
      />
      <canvas ref={canvasRef} className="output_canvas"></canvas>
    </>
  )
}

export default AlterBackground
