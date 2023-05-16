import { z } from "zod"

import { PDFUpdateManyMutationInputObjectSchema } from "./objects/PDFUpdateManyMutationInput.schema"
import { PDFWhereInputObjectSchema } from "./objects/PDFWhereInput.schema"

export const PDFUpdateManySchema = z.object({
  data: PDFUpdateManyMutationInputObjectSchema,
  where: PDFWhereInputObjectSchema.optional(),
})
