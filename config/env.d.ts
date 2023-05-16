// Declarations for `process.env`
declare namespace NodeJS {
  export interface ProcessEnv {
    S3_UPLOAD_KEY: string
    S3_UPLOAD_SECRET: string
    S3_UPLOAD_BUCKET: string
    S3_UPLOAD_REGION: string
    S3_UPLOAD_ENDPOINT: string
    DIGITAL_OCEAN_SPACES_KEY: string
    DIGITAL_OCEAN_SPACES_SECRET: string
    DIGITAL_OCEAN_SPACES_BUCKET: string
    DIGITAL_OCEAN_SPACES_ENDPOINT: string
    GOOGLE_RECAPTCHA_V3_SECRET_KEY: string
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY: string
    GOOGLE_RECAPTCHA_V2_SECRET_KEY: string
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY: string
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string
    LULU_CLIENT_KEY: string
    LULU_CLIENT_SECRET: string
    LULU_BASE64_ENCODED_KEY_AND_SECRET: string
    MAILER_DISABLED: string
    MAILER_HOST: string
    MAILER_PORT: string
    MAILER_USERNAME: string
    MAILER_PASSWORD: string
    MAILER_DEFAULT_FROM: string
    NEXT_TELEMETRY_DISABLED: string
    NEXT_RUNTIME: string
    ANALYZE: string
    SITE_URL: string
    HOST: string
    PORT: string
    OPENAI_API_SECRET_KEY: string
    DATABASE_URL: string
    REPLICATE_API_TOKEN: string
    NGROK_HOST: string
    SENTRY_DSN: string
    NEXT_PUBLIC_SENTRY_DSN: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    NEW_RELIC_APP_NAME: string
    NEW_RELIC_LICENSE_KEY: string
    //=========================================================================
    // Vercel
    //=========================================================================
    VERCEL_URL: string
    VERCEL: string
    CI: string
    VERCEL_ENV?: string
    VERCEL_REGION?: string
    VERCEL_GIT_PROVIDER?: string
    VERCEL_GIT_REPO_SLUG?: string
    VERCEL_GIT_REPO_OWNER?: string
    VERCEL_GIT_REPO_ID?: string
    VERCEL_GIT_COMMIT_REF?: string
    VERCEL_GIT_COMMIT_SHA?: string
    VERCEL_GIT_COMMIT_MESSAGE?: string
    VERCEL_GIT_COMMIT_AUTHOR_LOGIN?: string
    VERCEL_GIT_COMMIT_AUTHOR_NAME?: string
    VERCEL_GIT_PREVIOUS_SHA?: string
    VERCEL_GIT_PULL_REQUEST_ID?: string
    NEXT_PUBLIC_VERCEL_ENV?: string
    NEXT_PUBLIC_VERCEL_URL?: string
    NEXT_PUBLIC_VERCEL_GIT_PROVIDER?: string
    NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG?: string
    NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER?: string
    NEXT_PUBLIC_VERCEL_GIT_REPO_ID?: string
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF?: string
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?: string
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE?: string
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN?: string
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME?: string
    NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID?: string
  }
}
