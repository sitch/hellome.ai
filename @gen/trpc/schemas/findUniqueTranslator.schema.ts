import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'

export const TranslatorFindUniqueSchema = z.object({
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
})
