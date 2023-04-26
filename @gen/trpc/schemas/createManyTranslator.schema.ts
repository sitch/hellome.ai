import { TranslatorCreateManyInputObjectSchema } from './objects/TranslatorCreateManyInput.schema'
import { z } from 'zod'

export const TranslatorCreateManySchema = z.object({
  data: z.union([
    TranslatorCreateManyInputObjectSchema,
    z.array(TranslatorCreateManyInputObjectSchema),
  ]),
})
