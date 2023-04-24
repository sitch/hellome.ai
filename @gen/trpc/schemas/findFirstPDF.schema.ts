import { z } from 'zod'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFOrderByWithRelationInputObjectSchema } from './objects/PDFOrderByWithRelationInput.schema'
import { PDFWhereInputObjectSchema } from './objects/PDFWhereInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'
import { PDFScalarFieldEnumSchema } from './enums/PDFScalarFieldEnum.schema'

export const PDFFindFirstSchema = z.object({
  include: PDFIncludeObjectSchema.optional(),
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
