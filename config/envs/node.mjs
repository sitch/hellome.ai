import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvNode = {
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NODE_OPTIONS: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV ?? "development",
    NODE_OPTIONS: process.env.NODE_OPTIONS,
  },
}
