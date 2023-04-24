import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'
import { TranslatorCreateInputObjectSchema } from './objects/TranslatorCreateInput.schema'
import { TranslatorUncheckedCreateInputObjectSchema } from './objects/TranslatorUncheckedCreateInput.schema'
import { TranslatorUpdateInputObjectSchema } from './objects/TranslatorUpdateInput.schema'
import { TranslatorUncheckedUpdateInputObjectSchema } from './objects/TranslatorUncheckedUpdateInput.schema'

export const TranslatorUpsertSchema = z.object({
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
  create: z.union([
    TranslatorCreateInputObjectSchema,
    TranslatorUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TranslatorUpdateInputObjectSchema,
    TranslatorUncheckedUpdateInputObjectSchema,
  ]),
})