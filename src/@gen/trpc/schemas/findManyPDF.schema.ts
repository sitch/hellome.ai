import { z } from "zod"

import { PDFScalarFieldEnumSchema } from "./enums/PDFScalarFieldEnum.schema"
import { PDFIncludeObjectSchema } from "./objects/PDFInclude.schema"
import { PDFOrderByWithRelationInputObjectSchema } from "./objects/PDFOrderByWithRelationInput.schema"
import { PDFSelectObjectSchema } from "./objects/PDFSelect.schema"
import { PDFWhereInputObjectSchema } from "./objects/PDFWhereInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./objects/PDFWhereUniqueInput.schema"

export const PDFFindManySchema = z.object({
  select: z.lazy(() => PDFSelectObjectSchema.optional()),
  include: z.lazy(() => PDFIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      PDFOrderByWithRelationInputObjectSchema,
      PDFOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PDFWhereInputObjectSchema.optional(),
  cursor: PDFWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PDFScalarFieldEnumSchema).optional(),
})
