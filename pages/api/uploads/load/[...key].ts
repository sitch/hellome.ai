// GET
// ?load=<source>

import { NextApiRequest, NextApiResponse } from "next"
import { generateTemporaryUrl } from "next-s3-upload"

export type UploaderKey = string
export type UploaderSignedUrl = string

type Props = {
  query: {
    key: string
  }
}

type Data = {
  key: UploaderKey
  temporaryUrl: UploaderSignedUrl
}

type Failed = {
  message: string
}

// pages/api/generate-temporary-url.js
// http://my-next-app/api/generate-temporary-url?key=file-on-s3
// returns { temporaryUrl: "..." }
export default async function handler(
  { method, query: { key } }: NextApiRequest & Props,
  res: NextApiResponse<Data | Failed>,
) {
  if (method !== "GET") {
    res.setHeader("Allow", ["GET"])
    return res.status(405).json({ message: `Method ${method} Not Allowed` })
  }

  try {
    const temporaryUrl = await generateTemporaryUrl(key)
    const payload = {
      key,
      temporaryUrl,
    }
    return res.status(200).json(payload)
  } catch (error) {
    return res.status(500).json({ message: JSON.stringify(error) })
  }
}
