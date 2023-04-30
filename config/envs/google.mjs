import { z } from "zod"

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvGoogleAnalytics = {
  server: {},
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
}

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const EnvGoogleReCaptchaV2 = {
  server: {
    GOOGLE_RECAPTCHA_V2_SECRET_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  runtimeEnv: {
    GOOGLE_RECAPTCHA_V2_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_V2_SECRET_KEY,
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY,
  },
}

/** @type {Parameters<import("@t3-oss/env-nextjs").createEnv>[0]} */
export const GoogleReCaptchaV3 = {
  server: {
    GOOGLE_RECAPTCHA_V3_SECRET_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
  },
  runtimeEnv: {
    GOOGLE_RECAPTCHA_V3_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_V3_SECRET_KEY,
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY,
  },
}
