import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

import Replicate from "replicate"

import { env } from "@/config/env.mjs"

import packageData from "package.json"

// const WEBHOOK_HOST = env.VERCEL_URL
// ? `https://${env.VERCEL_URL}`
// : env.NGROK_HOST

const WEBHOOK_HOST = env.NGROK_HOST

const replicate = new Replicate({
  auth: env.REPLICATE_API_TOKEN,
  userAgent: `${packageData.name}/${packageData.version}`,
})

async function getObjectFromRequestBodyStream(body: NextApiRequest["body"]) {
  const input = await body.getReader().read()
  const decoder = new TextDecoder()
  const string = decoder.decode(input.value)
  return JSON.parse(string)
}

export const config = {
  runtime: "edge",
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
}

export default async function handler(
  req: NextApiRequest,
  _res: NextApiResponse,
) {
  const input = await getObjectFromRequestBodyStream(req.body)
  const prediction = await await replicate.predictions.create({
    version: "d55b9f2dcfb156089686b8f767776d5b61b007187a4e1e611881818098100fbb",
    webhook: `${WEBHOOK_HOST}/api/ai/replicate/prediction-webhook`,
    webhook_events_filter: ["start", "completed"],
    input,
  })

  console.log({
    input,
    prediction,
    WEBHOOK_HOST,
  })

  if (prediction.error) {
    return NextResponse.json({ detail: prediction.error }, { status: 500 })
  }

  return NextResponse.json(prediction, { status: 201 })
}
