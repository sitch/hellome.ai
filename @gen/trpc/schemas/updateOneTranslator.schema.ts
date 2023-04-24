import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorUpdateInputObjectSchema } from './objects/TranslatorUpdateInput.schema'
import { TranslatorUncheckedUpdateInputObjectSchema } from './objects/TranslatorUncheckedUpdateInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'

export const TranslatorUpdateOneSchema = z.object({
  include: TranslatorIncludeObjectSchema.optional(),
  data: z.union([
    TranslatorUpdateInputObjectSchema,
    TranslatorUncheckedUpdateInputObjectSchema,
  ]),
  where: TranslatorWhereUniqueInputObjectSchema,
})
