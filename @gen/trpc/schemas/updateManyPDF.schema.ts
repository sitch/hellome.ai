import { PDFUpdateManyMutationInputObjectSchema } from './objects/PDFUpdateManyMutationInput.schema'
import { PDFWhereInputObjectSchema } from './objects/PDFWhereInput.schema'
import { z } from 'zod'

export const PDFUpdateManySchema = z.object({
  data: PDFUpdateManyMutationInputObjectSchema,
  where: PDFWhereInputObjectSchema.optional(),
})
