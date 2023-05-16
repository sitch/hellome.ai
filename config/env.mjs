/* eslint-disable */

import { createEnv } from "@t3-oss/env-nextjs"

import { EnvAwsS3 } from "./envs/aws.mjs"
import { EnvGoogleAnalytics, EnvGoogleReCaptchaV2 } from "./envs/google.mjs"
import { EnvMailer } from "./envs/mailer.mjs"
import { EnvNext } from "./envs/next.mjs"
import { EnvNode } from "./envs/node.mjs"
import { EnvOpenAPITools } from "./envs/openapi.mjs"
import { EnvPrisma } from "./envs/prisma.mjs"
import { EnvReplicate } from "./envs/replicate.mjs"
import { EnvSentry } from "./envs/sentry.mjs"
import { EnvVercel } from "./envs/vercel.mjs"

// Filepond
// NEXT_PUBLIC_API_IMAGE_UPLOAD_TIMEOUT

export const env = createEnv(
  [
    EnvAwsS3,
    EnvGoogleAnalytics,
    EnvGoogleReCaptchaV2,
    EnvMailer,
    EnvNext,
    EnvNode,
    EnvOpenAPITools,
    EnvPrisma,
    EnvReplicate,
    EnvVercel,
    // EnvDigitalOceanSpaces,
    // EnvGoogleReCaptchaV3,
    // EnvLulu,
    // EnvNewRelic,
    // EnvNextAuth,
    // EnvOpenAI,
    // EnvSentry,
  ].reduce((prev, next) => ({
    server: { ...prev.server, ...next.server },
    client: { ...prev.client, ...next.client },
    runtimeEnv: { ...prev.runtimeEnv, ...next.runtimeEnv },
  })),
)
