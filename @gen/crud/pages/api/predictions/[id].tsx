import { NextApiRequest, NextApiResponse } from "next"

import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const id = req.query.id as string

  if (method === "GET") {
    const prediction = await prisma.prediction.findUnique({
      where: { id },
    })
    return res.status(200).json(prediction)
  } else if (method === "PUT") {
    try {
      const data =
        typeof req.body === "object" ? req.body : JSON.parse(req.body)
      const prediction = await prisma.prediction.update({
        where: { id },
        data,
      })
      return res.status(201).json(prediction)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  } else if (method === "DELETE") {
    try {
      const prediction = await prisma.prediction.delete({
        where: { id },
      })
      return res.status(200).json(prediction)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  res.setHeader("Allow", ["GET", "PUT, DELETE"])
  return res.status(405).end(`Method ${method} Not Allowed`)
}
