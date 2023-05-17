import { z } from "zod"

import { PDFCreateInputObjectSchema } from "./objects/PDFCreateInput.schema"
import { PDFIncludeObjectSchema } from "./objects/PDFInclude.schema"
import { PDFSelectObjectSchema } from "./objects/PDFSelect.schema"
import { PDFUncheckedCreateInputObjectSchema } from "./objects/PDFUncheckedCreateInput.schema"

export const PDFCreateOneSchema = z.object({
  select: PDFSelectObjectSchema.optional(),
  include: PDFIncludeObjectSchema.optional(),
  data: z.union([
    PDFCreateInputObjectSchema,
    PDFUncheckedCreateInputObjectSchema,
  ]),
})
