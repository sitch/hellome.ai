import '@types/newrelic'

// for the New Relic Node.js agent
interface Collector {
  isConnected(): boolean
}

interface Agent {
  on(event: string, callback: (arg: any) => void): void
  collector: Collector
}

type NewRelicError = Error & { statusCode?: number | undefined }

declare module 'newrelic' {
  export const agent: Agent
  export function noticeError(error: NewRelicError | null | undefined): void
  export function getBrowserTimingHeader(options?: {
    nonce?: string
    hasToRemoveScriptWrapper?: boolean
    allowTransactionlessInjection?: boolean
  }): string
}
