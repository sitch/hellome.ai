import { APIRoute } from "next-s3-upload"

import { env } from "~/config/env.mjs"

// const methods = ["POST"]

//
/**
 * Process
 *
 * AWS S3 Route
 *
 * @methods POST
 * @default "<SERVER>/"
 * @link https://pqina.nl/filepond/docs/api/server/#process
 */

export default APIRoute.configure({
  accessKeyId: env.S3_UPLOAD_KEY,
  secretAccessKey: env.S3_UPLOAD_SECRET,
  bucket: env.S3_UPLOAD_BUCKET,
  region: env.S3_UPLOAD_REGION,
})

// Digital Ocean Spaces
// See: https://github.com/ryanto/next-s3-upload/blob/5f28ea82ceb17362ae5890d6282266893908b534/packages/docs-site/src/pages/other-providers.mdx
// export default APIRoute.configure({
//   accessKeyId: env.DIGITAL_OCEAN_SPACES_KEY,
//   secretAccessKey: env.DIGITAL_OCEAN_SPACES_SECRET,
//   bucket: env.DIGITAL_OCEAN_SPACES_BUCKET,
//   endpoint: env.DIGITAL_OCEAN_SPACES_ENDPOINT,
//   region: 'us-east-1',
// })
