import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

import packageData from "package.json"
import Replicate from "replicate"

import { env } from "@/config/env.mjs"

const replicate = new Replicate({
  auth: env.REPLICATE_API_TOKEN,
  userAgent: `${packageData.name}/${packageData.version}`,
})

async function getObjectFromRequestBodyStream(body: any) {
  const input = await body.getReader().read()
  const decoder = new TextDecoder()
  const string = decoder.decode(input.value)
  return JSON.parse(string)
}

const WEBHOOK_HOST = env.VERCEL_URL
  ? `https://${env.VERCEL_URL}`
  : env.NGROK_HOST

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.",
    )
  }

  const input = await getObjectFromRequestBodyStream(req.body)

  // https://replicate.com/rossjillian/controlnet
  const prediction = await replicate.predictions.create({
    version: "d55b9f2dcfb156089686b8f767776d5b61b007187a4e1e611881818098100fbb",
    input,
    webhook: `${WEBHOOK_HOST}/api/ai/concepts/replicate-webhook`,
    webhook_events_filter: ["start", "completed"],
  })

  if (prediction.error) {
    return NextResponse.json({ detail: prediction.error }, { status: 500 })
  }

  return NextResponse.json(prediction, { status: 201 })
}

export const config = {
  runtime: "edge",
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
}
