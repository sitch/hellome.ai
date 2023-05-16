import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvOpenAI = {
  server: {
    OPENAI_API_SECRET_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  client: {},
  runtimeEnv: {
    OPENAI_API_SECRET_KEY: process.env.OPENAI_API_SECRET_KEY,
  },
}
