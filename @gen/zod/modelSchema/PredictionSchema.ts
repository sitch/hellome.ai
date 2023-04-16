import { z } from 'zod';
import { NullableJsonValue } from "../inputTypeSchemas/NullableJsonValue"

/////////////////////////////////////////
// PREDICTION SCHEMA
/////////////////////////////////////////

export const PredictionSchema = z.object({
  id: z.string().cuid(),
  input: NullableJsonValue.optional(),
  output: NullableJsonValue.optional(),
  status: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  started_at: z.coerce.date().nullable(),
  completed_at: z.coerce.date().nullable(),
  version: z.string().nullable(),
  metrics: NullableJsonValue.optional(),
  error: z.string().nullable(),
  logs: z.string().nullable(),
})

export type Prediction = z.infer<typeof PredictionSchema>

/////////////////////////////////////////
// PREDICTION PARTIAL SCHEMA
/////////////////////////////////////////

export const PredictionPartialSchema = PredictionSchema.partial()

export type PredictionPartial = z.infer<typeof PredictionPartialSchema>

/////////////////////////////////////////
// PREDICTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PredictionOptionalDefaultsSchema = PredictionSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type PredictionOptionalDefaults = z.infer<typeof PredictionOptionalDefaultsSchema>

export default PredictionSchema;
