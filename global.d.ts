// Declarations for modules without types
declare module 'next-themes'

declare namespace NodeJS {
  export interface ProcessEnv {
    // next.js
    NEXT_TELEMETRY_DISABLED: string

    // mailer
    MAILER_HOST: string
    MAILER_PORT: number
    MAILER_USERNAME: string
    MAILER_PASSWORD: string
    MAILER_DEFAULT_FROM: string
  }
}

declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}
