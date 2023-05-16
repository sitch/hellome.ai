import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvOpenAPITools = {
  server: {
    TS_POST_PROCESS_FILE: z.string().min(1).optional(),
  },
  client: {},
  runtimeEnv: {
    TS_POST_PROCESS_FILE: process.env.TS_POST_PROCESS_FILE,
  },
}
