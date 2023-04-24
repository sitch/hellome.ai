import { z } from 'zod'
import { PDFWhereInputObjectSchema } from './objects/PDFWhereInput.schema'

export const PDFDeleteManySchema = z.object({
  where: PDFWhereInputObjectSchema.optional(),
})
