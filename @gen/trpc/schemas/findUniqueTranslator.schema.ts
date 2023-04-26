import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorSelectObjectSchema } from './objects/TranslatorSelect.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'
import { z } from 'zod'

export const TranslatorFindUniqueSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
})
