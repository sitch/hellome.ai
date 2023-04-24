import { z } from 'zod'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'
import { PDFCreateInputObjectSchema } from './objects/PDFCreateInput.schema'
import { PDFUncheckedCreateInputObjectSchema } from './objects/PDFUncheckedCreateInput.schema'
import { PDFUpdateInputObjectSchema } from './objects/PDFUpdateInput.schema'
import { PDFUncheckedUpdateInputObjectSchema } from './objects/PDFUncheckedUpdateInput.schema'

export const PDFUpsertSchema = z.object({
  include: PDFIncludeObjectSchema.optional(),
  where: PDFWhereUniqueInputObjectSchema,
  create: z.union([
    PDFCreateInputObjectSchema,
    PDFUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PDFUpdateInputObjectSchema,
    PDFUncheckedUpdateInputObjectSchema,
  ]),
})
