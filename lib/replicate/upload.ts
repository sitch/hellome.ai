import { S3 } from "@aws-sdk/client-s3"
import dataUriToBuffer from "data-uri-to-buffer"

import { env } from "@/config/env.mjs"
import { uploadFile } from "@/lib/s3/client"

// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import * as Upload from 'upload-js-full'
// import {UploadManager, Configuration} from 'upload-js-full'

// const UPLOAD_IO_ACCOUNT_ID = 'FW25b4F'
// const UPLOAD_IO_PUBLIC_API_KEY = 'public_FW25b4FAzSgqxpyPhtmMePN3hSFg'

// import Spaces from 'do-spaces';

// const spaces = new Spaces({
//   endpoint: "https://spaces-hellome-production.nyc3.digitaloceanspaces.com",
//   endpoint: env.DO_SPACES_ENDPOINT, // under settings of bucket in digital ocean
//   accessKey: env.DO_SPACES_KEY, // in GLOBAL settings of digital ocean
//   secret: env.DO_SPACES_SECRET, // in GLOBAL settings of digital ocean
//   bucket: `test`,
// });

const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: "https://nyc3.digitaloceanspaces.com",
  // endpoint: env.DIGITAL_OCEAN_SPACES_ENDPOINT,
  region: "us-east-1",
  credentials: {
    accessKeyId: env.DIGITAL_OCEAN_SPACES_KEY,
    secretAccessKey: env.DIGITAL_OCEAN_SPACES_SECRET,

    //   // endpoint: env.DIGITAL_OCEAN_SPACES_ENDPOINT, // under settings of bucket in digital ocean
    //   accessKey: env.DIGITAL_OCEAN_SPACES_KEY, // in GLOBAL settings of digital ocean
    //   secret: env.DIGITAL_OCEAN_SPACES_SECRET, // in GLOBAL settings of digital ocean
  },
})

export default async function uploader(scribbleDataURI: string | undefined) {
  console.log({ scribbleDataURI })

  if (!scribbleDataURI) {
    return undefined
  }

  const url = await uploadFile({
    Key: "test/test.png",
    Body: dataUriToBuffer(scribbleDataURI),
  })

  return url

  // return "https://avatars.githubusercontent.com/u/468006?s=80&v=4"

  // return fileUrl
}
