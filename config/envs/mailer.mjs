import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvMailer = {
  server: {
    MAILER_DISABLED: z.enum(["true", "false"]).optional(),
    MAILER_HOST:
      process.env.NODE_ENV === "production" &&
      process.env.VERCEL_ENV !== "preview" &&
      process.env.VERCEL_ENV !== "development"
        ? z.string().min(1)
        : z.string().optional(),
    MAILER_PORT: z
      .string()
      .transform((val) => parseInt(val, 10))
      .pipe(z.number().gte(1).lte(9999))
      .optional(),
    MAILER_USERNAME:
      process.env.NODE_ENV === "production" &&
      process.env.VERCEL_ENV !== "preview" &&
      process.env.VERCEL_ENV !== "development"
        ? z.string().min(1)
        : z.string().optional(),
    MAILER_PASSWORD:
      process.env.NODE_ENV === "production" &&
      process.env.VERCEL_ENV !== "preview" &&
      process.env.VERCEL_ENV !== "development"
        ? z.string().min(1)
        : z.string().optional(),
    MAILER_DEFAULT_FROM:
      process.env.NODE_ENV === "production" &&
      process.env.VERCEL_ENV !== "preview" &&
      process.env.VERCEL_ENV !== "development"
        ? z.string().min(1).email()
        : z.string().min(1).email().optional(),
  },
  client: {},
  runtimeEnv: {
    MAILER_DISABLED: process.env.MAILER_DISABLED,
    MAILER_HOST: process.env.MAILER_HOST,
    MAILER_PORT: process.env.MAILER_PORT,
    MAILER_USERNAME: process.env.MAILER_USERNAME,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD,
    MAILER_DEFAULT_FROM: process.env.MAILER_DEFAULT_FROM,
  },
}
