import Canvas from 'components/canvas'
import PromptForm from 'components/prompt-form'
import Head from 'next/head'
import { FormEventHandler, useState } from 'react'
import Predictions from 'components/concepts'
import Error from 'components/error'
import uploadFile from 'lib/upload'
import naughtyWords from 'naughty-words'
import Script from 'next/script'
import seeds from 'lib/seeds'
import pkg from '@/package.json'
import sleep from 'lib/sleep'

const HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export default function Home() {
  const [error, setError] = useState(null)
  const [submissionCount, setSubmissionCount] = useState(0)
  const [predictions, setPredictions] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [scribbleExists, setScribbleExists] = useState(false)
  const [seed] = useState(seeds[Math.floor(Math.random() * seeds.length)])
  const [initialPrompt] = useState(seed.prompt)
  const [scribble, setScribble] = useState<string | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    // track submissions so we can show a spinner while waiting for the next prediction to be created
    setSubmissionCount(submissionCount + 1)

    const target = e.target as EventTarget & { prompt: { value: string } }

    const prompt = (target.prompt.value ?? '')
      .split(/\s+/)
      .map((word: string) =>
        naughtyWords.en.includes(word) ? 'something' : word
      )
      .join(' ')

    setError(null)
    setIsProcessing(true)

    const fileUrl = scribble ? await uploadFile(scribble) : undefined

    const body = {
      prompt,
      image: fileUrl,
      structure: 'scribble',
    }

    const response = await fetch('/api/ai/concepts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    let prediction = await response.json()

    setPredictions((predictions) => ({
      ...predictions,
      [prediction.id]: prediction,
    }))

    if (response.status !== 201) {
      setError(prediction.detail)
      return
    }

    while (
      prediction.status !== 'succeeded' &&
      prediction.status !== 'failed'
    ) {
      await sleep(500)
      const response = await fetch('/api/ai/concepts/' + prediction.id)
      prediction = await response.json()
      setPredictions((predictions) => ({
        ...predictions,
        [prediction.id]: prediction,
      }))
      if (response.status !== 200) {
        setError(prediction.detail)
        return
      }
    }

    setIsProcessing(false)
  }

  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  // }

  return (
    <>
      <main className="container mx-auto max-w-[1024px] p-5 ">
        <div className="container mx-auto max-w-[512px]">
          <hgroup>
            <h1 className="m-4 text-center text-5xl font-bold">
              {pkg.appName}
            </h1>
            <p className="m-4 text-center text-xl opacity-60">
              {pkg.appSubtitle}
            </p>
          </hgroup>

          <Canvas
            startingPaths={seed.paths}
            onScribble={setScribble}
            scribbleExists={scribbleExists}
            setScribbleExists={setScribbleExists}
          />

          <PromptForm
            initialPrompt={initialPrompt}
            onSubmit={handleSubmit}
            isProcessing={isProcessing}
            scribbleExists={scribbleExists}
          />

          <Error error={error} />
        </div>

        <Predictions
          predictions={predictions}
          isProcessing={isProcessing}
          submissionCount={submissionCount}
        />
      </main>

      {/* <Script src="https://js.upload.io/upload-js-full/v1" /> */}
    </>
  )
}
