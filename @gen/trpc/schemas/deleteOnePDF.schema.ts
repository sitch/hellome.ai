import { z } from 'zod'
import { PDFSelectObjectSchema } from './objects/PDFSelect.schema'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'

export const PDFDeleteOneSchema = z.object({
  select: PDFSelectObjectSchema.optional(),
  include: PDFIncludeObjectSchema.optional(),
  where: PDFWhereUniqueInputObjectSchema,
})
