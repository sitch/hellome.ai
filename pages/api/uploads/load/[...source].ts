import { type NextApiRequest, type NextApiResponse } from "next"
import { generateTemporaryUrl } from "next-s3-upload"
import { type S3Config } from "next-s3-upload/dist/utils/config"

import { env } from "@/config/env.mjs"
import {
  type FilePondSource,
  type ResponseFailed,
  type UploaderSignedUrl,
} from "@/lib/uploader/types"

const methods = ["GET"]

type Props = {
  query: {
    source: string
  }
}

type ResponsePayload = {
  source: FilePondSource
  temporaryUrl: UploaderSignedUrl
}

/**
 * Load
 *
 * @methods GET
 * @default "<SERVER>/?load=<source>"
 * @link https://pqina.nl/filepond/docs/api/server/#load
 */

export default async function handler(
  { method, query: { source } }: NextApiRequest & Props,
  res: NextApiResponse<ResponsePayload | ResponseFailed>,
) {
  if (!methods.includes(method!)) {
    res.setHeader("Allow", methods)
    return res.status(405).end(`Method ${method} Not Allowed`)
    // return res.status(405).json({ message: `Method ${method} Not Allowed` })
  }

  // try {
  const s3config: S3Config = {
    accessKeyId: env.S3_UPLOAD_KEY,
    secretAccessKey: env.S3_UPLOAD_SECRET,
    bucket: env.S3_UPLOAD_BUCKET,
    region: env.S3_UPLOAD_REGION,
  }

  const temporaryUrl = await generateTemporaryUrl(source, s3config)
  const payload: ResponsePayload = {
    source,
    temporaryUrl,
  }
  return res.status(200).json(payload)
  // } catch (error) {
  // return res.status(500).json({ message: JSON.stringify(error) })
  // }
}
