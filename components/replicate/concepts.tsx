import { Fragment, useEffect, useRef, useState } from "react"

import { Prediction } from "@prisma/client"
import Loader from "components/loader"
import copy from "copy-to-clipboard"

type Props = {
  predictions: object
  submissionCount: number
  isProcessing?: boolean
}

export default function Predictions({ predictions, submissionCount }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (submissionCount > 0) {
      scrollRef.current!.scrollIntoView({ behavior: "smooth" })
    }
  }, [predictions, submissionCount])

  if (submissionCount === 0) return null

  return (
    <section className="my-10 w-full">
      <h2 className="m-6 text-center text-3xl font-bold">Results</h2>

      {submissionCount > Object.keys(predictions).length && (
        <div className="mx-auto w-full pb-10 text-center">
          <div className="pt-10" ref={scrollRef} />
          <Loader />
        </div>
      )}

      {Object.values(predictions)
        .slice()
        .reverse()
        .map((prediction, index) => (
          <Fragment key={prediction.id}>
            {index === 0 &&
              submissionCount == Object.keys(predictions).length && (
                <div ref={scrollRef} />
              )}
            <PredictionItem prediction={prediction} />
          </Fragment>
        ))}
    </section>
  )
}

type PredictionItemProps = {
  prediction?: Prediction & {
    input: {
      image: string
      prompt: string
    }
    output: string[]
  }
  showLinkToNewScribble?: boolean
}

export function PredictionItem({
  prediction,
  showLinkToNewScribble = false,
}: PredictionItemProps) {
  const [linkCopied, setLinkCopied] = useState(false)

  const copyLink = () => {
    const url =
      window.location.origin +
      "/scribbles/" +
      (prediction!.uuid || prediction!.id) // if the prediction is from the Replicate API it'll have `id`. If it's from the SQL database, it'll have `uuid`
    copy(url)
    setLinkCopied(true)
  }

  // Clear the "Copied!" message after 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLinkCopied(false)
    }, 4 * 1000)

    return () => clearInterval(intervalId)
  }, [])

  console.log({ prediction })

  if (!prediction) return null

  return (
    <div className="mb-12 mt-6">
      <div className="my-5 flex border bg-white p-5 shadow-lg">
        <div className="relative aspect-square w-1/2 border">
          <img
            src={prediction.input.image}
            alt="input scribble"
            className="aspect-square w-full"
          />
        </div>
        <div className="relative aspect-square w-1/2">
          {prediction.output.length ? (
            <img
              src={prediction.output[prediction.output.length - 1]}
              alt="output scribble"
              className="aspect-square w-full"
            />
          ) : (
            <div className="grid h-full place-items-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
      <div className="px-4 text-center text-xl opacity-60">
        &ldquo;{prediction.input.prompt}&rdquo;
      </div>
    </div>
  )
}
