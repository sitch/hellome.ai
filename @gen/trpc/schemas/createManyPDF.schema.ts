import { PDFCreateManyInputObjectSchema } from './objects/PDFCreateManyInput.schema'
import { z } from 'zod'

export const PDFCreateManySchema = z.object({
  data: z.union([
    PDFCreateManyInputObjectSchema,
    z.array(PDFCreateManyInputObjectSchema),
  ]),
})
