import { NextApiRequest, NextApiResponse } from "next"

import { FilePondId } from "@/lib/uploader/types"

const methods = ["GET"]

type Props = {
  query: {
    id: FilePondId
  }
}

/**
 * Restore
 *
 * @methods GET
 * @default "<SERVER>/?restore=<id>"
 * @link https://pqina.nl/filepond/docs/api/server/#restore
 */
export default async function handler(
  { method, query: { id } }: NextApiRequest & Props,
  res: NextApiResponse,
) {
  if (!methods.includes(method!)) {
    res.setHeader("Allow", methods)
    return res.status(405).end(`Method ${method} Not Allowed`)
    // return res.status(405).json({ message: `Method ${method} Not Allowed` })
  }

  return res.status(500).json({ message: "restore not implemented" })
}
