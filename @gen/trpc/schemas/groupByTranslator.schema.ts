import { z } from 'zod'
import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'
import { TranslatorOrderByWithAggregationInputObjectSchema } from './objects/TranslatorOrderByWithAggregationInput.schema'
import { TranslatorScalarWhereWithAggregatesInputObjectSchema } from './objects/TranslatorScalarWhereWithAggregatesInput.schema'
import { TranslatorScalarFieldEnumSchema } from './enums/TranslatorScalarFieldEnum.schema'

export const TranslatorGroupBySchema = z.object({
  where: TranslatorWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TranslatorOrderByWithAggregationInputObjectSchema,
      TranslatorOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TranslatorScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TranslatorScalarFieldEnumSchema),
})
