import { PDFCreateInputObjectSchema } from './objects/PDFCreateInput.schema'
import { PDFIncludeObjectSchema } from './objects/PDFInclude.schema'
import { PDFSelectObjectSchema } from './objects/PDFSelect.schema'
import { PDFUncheckedCreateInputObjectSchema } from './objects/PDFUncheckedCreateInput.schema'
import { PDFUncheckedUpdateInputObjectSchema } from './objects/PDFUncheckedUpdateInput.schema'
import { PDFUpdateInputObjectSchema } from './objects/PDFUpdateInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './objects/PDFWhereUniqueInput.schema'
import { z } from 'zod'

export const PDFUpsertSchema = z.object({
  select: PDFSelectObjectSchema.optional(),
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
