// import { withImageProxy } from '@blazity/next-image-proxy'
// export default withImageProxy({ whitelistedPatterns: [/^https?:\/\/(.*).hellome.ai/] })

import { NextApiRequest, NextApiResponse } from "next"

import { UploaderSignedUrl } from "@/lib/uploader/types"

const methods = ["GET", "HEAD"]

type Props = {
  query: {
    url: UploaderSignedUrl
  }
}

/**
 * Fetch
 *
 * This is a simple pass through proxy route
 *
 * @methods GET | HEAD
 * @default "<SERVER>/?fetch=<url>"
 * @link https://pqina.nl/filepond/docs/api/server/#fetch
 */
export default async function handler(
  { method, query: { url } }: NextApiRequest & Props,
  res: NextApiResponse,
) {
  if (!methods.includes(method!)) {
    res.setHeader("Allow", methods)
    return res.status(405).end(`Method ${method} Not Allowed`)
    // return res.status(405).json({ message: `Method ${method} Not Allowed` })
  }

  return res.status(500).json({ message: "restore not implemented" })
}
