import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvPrisma = {
  server: {
    DATABASE_URL:
      process.env.VERCEL_ENV !== "preview" &&
      process.env.VERCEL_ENV !== "development"
        ? z.string().url()
        : z.string().url().optional(),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
}
