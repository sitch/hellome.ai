import { z } from "zod"

import { PageArtworkCountAggregateInputObjectSchema } from "./objects/PageArtworkCountAggregateInput.schema"
import { PageArtworkMaxAggregateInputObjectSchema } from "./objects/PageArtworkMaxAggregateInput.schema"
import { PageArtworkMinAggregateInputObjectSchema } from "./objects/PageArtworkMinAggregateInput.schema"
import { PageArtworkOrderByWithRelationInputObjectSchema } from "./objects/PageArtworkOrderByWithRelationInput.schema"
import { PageArtworkWhereInputObjectSchema } from "./objects/PageArtworkWhereInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./objects/PageArtworkWhereUniqueInput.schema"

export const PageArtworkAggregateSchema = z.object({
  orderBy: z
    .union([
      PageArtworkOrderByWithRelationInputObjectSchema,
      PageArtworkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PageArtworkWhereInputObjectSchema.optional(),
  cursor: PageArtworkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PageArtworkCountAggregateInputObjectSchema])
    .optional(),
  _min: PageArtworkMinAggregateInputObjectSchema.optional(),
  _max: PageArtworkMaxAggregateInputObjectSchema.optional(),
})
