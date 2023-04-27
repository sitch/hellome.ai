import { z } from "zod"

import { PDFCreateManyInputObjectSchema } from "./objects/PDFCreateManyInput.schema"

export const PDFCreateManySchema = z.object({
  data: z.union([
    PDFCreateManyInputObjectSchema,
    z.array(PDFCreateManyInputObjectSchema),
  ]),
})
