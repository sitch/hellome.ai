import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFSelectObjectSchema } from './objects/PDFSelect.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'
import { z } from 'zod'

export const PDFFindUniqueSchema = z.object({
  select: PDFSelectObjectSchema.optional(),
  include: PDFIncludeObjectSchema.optional(),
  where: PDFWhereUniqueInputObjectSchema,
})
