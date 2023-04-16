// Declarations for `process.env`
declare namespace NodeJS {
  export interface ProcessEnv {
    // Next.js
    NEXT_TELEMETRY_DISABLED: string

    // Mailer
    MAILER_HOST: string
    MAILER_PORT: number
    MAILER_USERNAME: string
    MAILER_PASSWORD: string
    MAILER_DEFAULT_FROM: string

    // Google ReCaptcha
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY: string
    GOOGLE_RECAPTCHA_V3_SECRET_KEY: string
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY: string
    GOOGLE_RECAPTCHA_V2_SECRET_KEY: string

    // Digital Ocean
    DATABASE_URL: string
    DO_SPACES_KEY: string
    DO_SPACES_SECRET: string

    // NewRelic
    NEW_RELIC_APP_NAME: string
    NEW_RELIC_INGEST_LICENSE_KEY: string
    NEW_RELIC_BROWSER_LICENSE_KEY: string
  }
}

// Declarations for modules without types
declare module 'flowbite/plugin'
declare module 'flowbite-typography'
declare module 'next-compose-plugins'
