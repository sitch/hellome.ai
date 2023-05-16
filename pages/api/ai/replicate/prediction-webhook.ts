// The Replicate webhook is a POST request where the request body is a prediction object.
// Identical webhooks can be sent multiple times, so this handler must be idempotent.

import type { NextApiRequest, NextApiResponse } from "next"

// import { upsertPrediction } from "@/lib/replicate/db"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(
    "[replicate] received webhook for prediction: ",
    req.body.id,
    req.body,
  )
  // await upsertPrediction(req.body)

  res.end()
}
