import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvLulu = {
  server: {
    LULU_CLIENT_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    LULU_CLIENT_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    LULU_BASE64_ENCODED_KEY_AND_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  client: {},
  runtimeEnv: {
    LULU_CLIENT_KEY: process.env.LULU_CLIENT_KEY,
    LULU_CLIENT_SECRET: process.env.LULU_CLIENT_SECRET,
    LULU_BASE64_ENCODED_KEY_AND_SECRET:
      process.env.LULU_BASE64_ENCODED_KEY_AND_SECRET,
  },
}
