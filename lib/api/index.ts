export type EmailErrorResponseStatus =
  | 'request_error'
  | 'validation_error'
  | 'transport_error'
  | 'send_error'

export interface BaseApiResponse {
  message?: string
}

export type EmailSuccessResponse = BaseApiResponse & {
  status: 'OK'
}

export type EmailErrorResponse = BaseApiResponse & {
  status: EmailErrorResponseStatus
  error: any
}

export type EmailResponse = EmailSuccessResponse | EmailErrorResponse
