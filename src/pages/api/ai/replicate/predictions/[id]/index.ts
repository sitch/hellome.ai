import { NextResponse, type NextRequest } from "next/server"

import Replicate from "replicate"

import { env } from "~/env.mjs"
import pkg from "package.json"

const replicate = new Replicate({
  auth: env.REPLICATE_API_TOKEN,
  userAgent: `${pkg.name}/${pkg.version}`,
})

export const config = {
  runtime: "edge",
}

export default async function handler(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id")
  const prediction = await replicate.predictions.get(id!)

  if (prediction.error) {
    return NextResponse.json({ detail: prediction.error }, { status: 500 })
  }

  return NextResponse.json(prediction)
}
