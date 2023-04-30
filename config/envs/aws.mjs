import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvAwsS3 = {
  server: {
    S3_UPLOAD_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
    S3_UPLOAD_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
    S3_UPLOAD_BUCKET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
    S3_UPLOAD_REGION:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
    S3_UPLOAD_ENDPOINT: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    S3_UPLOAD_KEY: process.env.S3_UPLOAD_KEY,
    S3_UPLOAD_SECRET: process.env.S3_UPLOAD_SECRET,
    S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
    S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
    S3_UPLOAD_ENDPOINT: process.env.S3_UPLOAD_ENDPOINT,
  },
}
