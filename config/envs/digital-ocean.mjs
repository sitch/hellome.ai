import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvDigitalOceanSpaces = {
  server: {
    DIGITAL_OCEAN_SPACES_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    DIGITAL_OCEAN_SPACES_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    DIGITAL_OCEAN_SPACES_BUCKET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    DIGITAL_OCEAN_SPACES_ENDPOINT:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  client: {},
  runtimeEnv: {
    DIGITAL_OCEAN_SPACES_KEY: process.env.DIGITAL_OCEAN_SPACES_KEY,
    DIGITAL_OCEAN_SPACES_SECRET: process.env.DIGITAL_OCEAN_SPACES_SECRET,
    DIGITAL_OCEAN_SPACES_BUCKET: process.env.DIGITAL_OCEAN_SPACES_BUCKET,
    DIGITAL_OCEAN_SPACES_ENDPOINT: process.env.DIGITAL_OCEAN_SPACES_ENDPOINT,
  },
}
