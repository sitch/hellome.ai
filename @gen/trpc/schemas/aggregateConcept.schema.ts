import { z } from 'zod'
import { ConceptOrderByWithRelationInputObjectSchema } from './objects/ConceptOrderByWithRelationInput.schema'
import { ConceptWhereInputObjectSchema } from './objects/ConceptWhereInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'
import { ConceptCountAggregateInputObjectSchema } from './objects/ConceptCountAggregateInput.schema'
import { ConceptMinAggregateInputObjectSchema } from './objects/ConceptMinAggregateInput.schema'
import { ConceptMaxAggregateInputObjectSchema } from './objects/ConceptMaxAggregateInput.schema'

export const ConceptAggregateSchema = z.object({
  orderBy: z
    .union([
      ConceptOrderByWithRelationInputObjectSchema,
      ConceptOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConceptWhereInputObjectSchema.optional(),
  cursor: ConceptWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ConceptCountAggregateInputObjectSchema])
    .optional(),
  _min: ConceptMinAggregateInputObjectSchema.optional(),
  _max: ConceptMaxAggregateInputObjectSchema.optional(),
})
