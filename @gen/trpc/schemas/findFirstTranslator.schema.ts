import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './objects/TranslatorInclude.schema'
import { TranslatorOrderByWithRelationInputObjectSchema } from './objects/TranslatorOrderByWithRelationInput.schema'
import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'
import { TranslatorScalarFieldEnumSchema } from './enums/TranslatorScalarFieldEnum.schema'

export const TranslatorFindFirstSchema = z.object({
  include: TranslatorIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      TranslatorOrderByWithRelationInputObjectSchema,
      TranslatorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TranslatorWhereInputObjectSchema.optional(),
  cursor: TranslatorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TranslatorScalarFieldEnumSchema).optional(),
})
