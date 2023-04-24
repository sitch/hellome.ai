import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorCreateInputObjectSchema } from './objects/TranslatorCreateInput.schema'
import { TranslatorUncheckedCreateInputObjectSchema } from './objects/TranslatorUncheckedCreateInput.schema'

export const TranslatorCreateOneSchema = z.object({
  include: TranslatorIncludeObjectSchema.optional(),
  data: z.union([
    TranslatorCreateInputObjectSchema,
    TranslatorUncheckedCreateInputObjectSchema,
  ]),
})
