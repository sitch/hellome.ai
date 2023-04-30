import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvReplicate = {
  server: {
    REPLICATE_API_TOKEN:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NGROK_HOST:
      process.env.NODE_ENV === "production"
        ? z.string().url().optional()
        : z.string().url(),
  },
  client: {},
  runtimeEnv: {
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
    NGROK_HOST: process.env.NGROK_HOST,
  },
}
