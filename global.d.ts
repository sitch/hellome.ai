// Declarations for modules without types
declare module 'next-themes'

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
  }
}

declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}
