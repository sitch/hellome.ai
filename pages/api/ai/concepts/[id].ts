import { NextResponse, type NextRequest } from "next/server"

import Replicate from "replicate"

import { env } from "@/config/env.mjs"

import packageData from "package.json"

const replicate = new Replicate({
  auth: env.REPLICATE_API_TOKEN,
  userAgent: `${packageData.name}/${packageData.version}`,
})

export default async function handler(req: NextRequest) {
  const predictionId = req.nextUrl.searchParams.get("id")
  const prediction = await replicate.predictions.get(predictionId!)

  if (prediction.error) {
    return NextResponse.json({ detail: prediction.error }, { status: 500 })
  }

  return NextResponse.json(prediction)
}

export const config = {
  runtime: "edge",
}
