export type CastPayloadError = string | string[]

export type CastPayload<T> = {
  ok: boolean
  data: T | undefined
  error: CastPayloadError | undefined
}

export type BaseSuccessResponseStatus = "OK"
export type BaseErrorResponseStatus = "request_error"

export type BaseApiResponse = {
  message?: string
}

export type EmailErrorResponseStatus =
  | BaseErrorResponseStatus
  | "validation_error"
  | "transport_error"
  | "send_error"

export type EmailSuccessResponse = BaseApiResponse & {
  status: BaseSuccessResponseStatus
}

export type EmailErrorResponse = BaseApiResponse & {
  status: EmailErrorResponseStatus
  error: any
}

export type EmailResponse = EmailSuccessResponse | EmailErrorResponse

export type ZipFile = string

export type VisionTrainPayload = {
  data: ZipFile
}

export type VisionTrainErrorResponseStatus =
  | BaseErrorResponseStatus
  | "training_error"

export type VisionTrainSuccessResponse = BaseApiResponse & {
  status: BaseSuccessResponseStatus
}

export type VisionTrainErrorResponse = BaseApiResponse & {
  status: VisionTrainErrorResponseStatus
  error: any
}

export type VisionTrainResponse =
  | VisionTrainSuccessResponse
  | VisionTrainErrorResponse
