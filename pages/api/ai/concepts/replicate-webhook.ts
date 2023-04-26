// The Replicate webhook is a POST request where the request body is a prediction object.
// Identical webhooks can be sent multiple times, so this handler must be idempotent.

import { upsertPrediction } from '@/lib/db'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('received webhook for prediction: ', req.body.id)
  await upsertPrediction(req.body)

  res.end()
}
