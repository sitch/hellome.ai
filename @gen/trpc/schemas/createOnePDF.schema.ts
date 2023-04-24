import { z } from 'zod'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFCreateInputObjectSchema } from './objects/PDFCreateInput.schema'
import { PDFUncheckedCreateInputObjectSchema } from './objects/PDFUncheckedCreateInput.schema'

export const PDFCreateOneSchema = z.object({
  include: PDFIncludeObjectSchema.optional(),
  data: z.union([
    PDFCreateInputObjectSchema,
    PDFUncheckedCreateInputObjectSchema,
  ]),
})
