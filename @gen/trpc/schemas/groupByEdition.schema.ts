import { z } from "zod"

import { EditionScalarFieldEnumSchema } from "./enums/EditionScalarFieldEnum.schema"
import { EditionOrderByWithAggregationInputObjectSchema } from "./objects/EditionOrderByWithAggregationInput.schema"
import { EditionScalarWhereWithAggregatesInputObjectSchema } from "./objects/EditionScalarWhereWithAggregatesInput.schema"
import { EditionWhereInputObjectSchema } from "./objects/EditionWhereInput.schema"

export const EditionGroupBySchema = z.object({
  where: EditionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EditionOrderByWithAggregationInputObjectSchema,
      EditionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EditionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EditionScalarFieldEnumSchema),
})
