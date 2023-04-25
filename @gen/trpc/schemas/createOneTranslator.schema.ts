import { z } from 'zod'
import { TranslatorSelectObjectSchema } from './objects/TranslatorSelect.schema'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorCreateInputObjectSchema } from './objects/TranslatorCreateInput.schema'
import { TranslatorUncheckedCreateInputObjectSchema } from './objects/TranslatorUncheckedCreateInput.schema'

export const TranslatorCreateOneSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  data: z.union([
    TranslatorCreateInputObjectSchema,
    TranslatorUncheckedCreateInputObjectSchema,
  ]),
})
