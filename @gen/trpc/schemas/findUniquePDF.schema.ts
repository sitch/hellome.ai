import { z } from 'zod'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'

export const PDFFindUniqueSchema = z.object({
  include: PDFIncludeObjectSchema.optional(),
  where: PDFWhereUniqueInputObjectSchema,
})
