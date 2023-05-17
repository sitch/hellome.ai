import { NextApiRequest, NextApiResponse } from "next"

import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req

  if (method === "GET") {
    const dreamboothtrainings = await prisma.dreamboothtraining.findMany()
    return res.status(200).json(dreamboothtrainings)
  } else if (method === "POST") {
    const data = typeof req.body === "object" ? req.body : JSON.parse(req.body)
    const dreamboothtraining = await prisma.dreamboothtraining.create({
      data,
    })
    return res.status(201).json(dreamboothtraining)
  }

  res.setHeader("Allow", ["GET", "POST"])
  return res.status(405).end(`Method ${method} Not Allowed`)
}
