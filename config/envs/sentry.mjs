import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvSentry = {
  server: {
    SENTRY_DSN:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_SENTRY_DSN:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
  },
  runtimeEnv: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
}
