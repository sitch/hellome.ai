import { z } from 'zod'
import { TranslatorSelectObjectSchema } from './objects/TranslatorSelect.schema'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorUpdateInputObjectSchema } from './objects/TranslatorUpdateInput.schema'
import { TranslatorUncheckedUpdateInputObjectSchema } from './objects/TranslatorUncheckedUpdateInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'

export const TranslatorUpdateOneSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  data: z.union([
    TranslatorUpdateInputObjectSchema,
    TranslatorUncheckedUpdateInputObjectSchema,
  ]),
  where: TranslatorWhereUniqueInputObjectSchema,
})
