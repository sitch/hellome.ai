import { PDFWhereInputObjectSchema } from './objects/PDFWhereInput.schema'
import { z } from 'zod'

export const PDFDeleteManySchema = z.object({
  where: PDFWhereInputObjectSchema.optional(),
})
