import { z } from "zod"

import { EditionCountAggregateInputObjectSchema } from "./objects/EditionCountAggregateInput.schema"
import { EditionMaxAggregateInputObjectSchema } from "./objects/EditionMaxAggregateInput.schema"
import { EditionMinAggregateInputObjectSchema } from "./objects/EditionMinAggregateInput.schema"
import { EditionOrderByWithRelationInputObjectSchema } from "./objects/EditionOrderByWithRelationInput.schema"
import { EditionWhereInputObjectSchema } from "./objects/EditionWhereInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./objects/EditionWhereUniqueInput.schema"

export const EditionAggregateSchema = z.object({
  orderBy: z
    .union([
      EditionOrderByWithRelationInputObjectSchema,
      EditionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EditionWhereInputObjectSchema.optional(),
  cursor: EditionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EditionCountAggregateInputObjectSchema])
    .optional(),
  _min: EditionMinAggregateInputObjectSchema.optional(),
  _max: EditionMaxAggregateInputObjectSchema.optional(),
})
