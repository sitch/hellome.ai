import {
  GetObjectCommand,
  PutObjectCommand,
  S3,
  type PutObjectCommandInput,
} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

import { env } from "@/config/env.mjs"

const Bucket = env.DIGITAL_OCEAN_SPACES_BUCKET

const s3Client = new S3({
  forcePathStyle: false,
  endpoint: env.DIGITAL_OCEAN_SPACES_ENDPOINT,
  region: "us-east-1",
  credentials: {
    accessKeyId: env.DIGITAL_OCEAN_SPACES_KEY,
    secretAccessKey: env.DIGITAL_OCEAN_SPACES_SECRET,
  },
})

export async function uploadFile(input: Omit<PutObjectCommandInput, "Bucket">) {
  const data = await s3Client.send(new PutObjectCommand({ ...input, Bucket }))

  console.log("PutObjectCommand", data)

  const url = await getSignedUrl(
    s3Client,
    new GetObjectCommand({ Key: input.Key, Bucket }),
    {
      expiresIn: 15 * 60,
    },
  )

  console.log("GetObjectCommand", url)

  return url
}
