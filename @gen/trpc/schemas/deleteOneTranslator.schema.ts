import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'

export const TranslatorDeleteOneSchema = z.object({
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
})
