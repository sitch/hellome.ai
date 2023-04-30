import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvNewRelic = {
  server: {
    NEW_RELIC_APP_NAME: z.string().min(1),
    NEW_RELIC_LICENSE_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    NEW_RELIC_APP_NAME: process.env.NEW_RELIC_APP_NAME,
    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
  },
}
