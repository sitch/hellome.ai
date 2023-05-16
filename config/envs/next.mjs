import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvNext = {
  server: {
    NEXT_TELEMETRY_DISABLED: z.enum(["1"]),
    NEXT_RUNTIME: z.enum(["nodejs", "edge", "experimental-edge"]).optional(),
    ANALYZE: z.enum(["true", "false"]).optional(),
    // SITE_URL: z.string().url().optional(),
    HOST: z.string().url().optional(),
    PORT: z
      .string()
      .transform((val) => parseInt(val, 10))
      .pipe(z.number().gte(1).lte(9999))
      .optional(),
  },
  client: {},
  runtimeEnv: {
    NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    ANALYZE: process.env.ANALYZE,
    // SITE_URL: process.env.SITE_URL,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
  },
}
