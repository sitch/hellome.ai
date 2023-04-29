// POST
// pages/api/uploads/process.ts

import { APIRoute } from "next-s3-upload"

// AWS s3
export default APIRoute.configure({
  accessKeyId: process.env.S3_UPLOAD_KEY,
  secretAccessKey: process.env.S3_UPLOAD_SECRET,
  bucket: process.env.S3_UPLOAD_BUCKET,
  region: process.env.S3_UPLOAD_REGION,
})

// Digital Ocean Spaces
// See: https://github.com/ryanto/next-s3-upload/blob/5f28ea82ceb17362ae5890d6282266893908b534/packages/docs-site/src/pages/other-providers.mdx
// export default APIRoute.configure({
//   accessKeyId: process.env.DIGITAL_OCEAN_SPACES_KEY,
//   secretAccessKey: process.env.DIGITAL_OCEAN_SPACES_SECRET,
//   bucket: process.env.DIGITAL_OCEAN_SPACES_BUCKET,
//   endpoint: process.env.DIGITAL_OCEAN_SPACES_ENDPOINT,
//   region: 'us-east-1',
// })
