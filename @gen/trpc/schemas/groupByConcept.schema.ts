import { z } from "zod"

import { ConceptScalarFieldEnumSchema } from "./enums/ConceptScalarFieldEnum.schema"
import { ConceptOrderByWithAggregationInputObjectSchema } from "./objects/ConceptOrderByWithAggregationInput.schema"
import { ConceptScalarWhereWithAggregatesInputObjectSchema } from "./objects/ConceptScalarWhereWithAggregatesInput.schema"
import { ConceptWhereInputObjectSchema } from "./objects/ConceptWhereInput.schema"

export const ConceptGroupBySchema = z.object({
  where: ConceptWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ConceptOrderByWithAggregationInputObjectSchema,
      ConceptOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ConceptScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ConceptScalarFieldEnumSchema),
})
