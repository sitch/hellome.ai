import { z } from "zod"

import { PDFScalarFieldEnumSchema } from "./enums/PDFScalarFieldEnum.schema"
import { PDFOrderByWithAggregationInputObjectSchema } from "./objects/PDFOrderByWithAggregationInput.schema"
import { PDFScalarWhereWithAggregatesInputObjectSchema } from "./objects/PDFScalarWhereWithAggregatesInput.schema"
import { PDFWhereInputObjectSchema } from "./objects/PDFWhereInput.schema"

export const PDFGroupBySchema = z.object({
  where: PDFWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PDFOrderByWithAggregationInputObjectSchema,
      PDFOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PDFScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PDFScalarFieldEnumSchema),
})
