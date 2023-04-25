import { z } from 'zod'
import { TranslatorSelectObjectSchema } from './objects/TranslatorSelect.schema'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'

export const TranslatorDeleteOneSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
})
