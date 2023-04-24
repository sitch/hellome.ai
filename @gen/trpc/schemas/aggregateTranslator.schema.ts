import { z } from 'zod'
import { TranslatorOrderByWithRelationInputObjectSchema } from './objects/TranslatorOrderByWithRelationInput.schema'
import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './objects/TranslatorWhereUniqueInput.schema'
import { TranslatorCountAggregateInputObjectSchema } from './objects/TranslatorCountAggregateInput.schema'
import { TranslatorMinAggregateInputObjectSchema } from './objects/TranslatorMinAggregateInput.schema'
import { TranslatorMaxAggregateInputObjectSchema } from './objects/TranslatorMaxAggregateInput.schema'

export const TranslatorAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), TranslatorCountAggregateInputObjectSchema])
    .optional(),
  _min: TranslatorMinAggregateInputObjectSchema.optional(),
  _max: TranslatorMaxAggregateInputObjectSchema.optional(),
})
