import { z } from 'zod'
import { PDFSelectObjectSchema } from './objects/PDFSelect.schema'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFCreateInputObjectSchema } from './objects/PDFCreateInput.schema'
import { PDFUncheckedCreateInputObjectSchema } from './objects/PDFUncheckedCreateInput.schema'

export const PDFCreateOneSchema = z.object({
  select: PDFSelectObjectSchema.optional(),
  include: PDFIncludeObjectSchema.optional(),
  data: z.union([
    PDFCreateInputObjectSchema,
    PDFUncheckedCreateInputObjectSchema,
  ]),
})
