import { z } from "zod"

import { TranslatorCreateManyInputObjectSchema } from "./objects/TranslatorCreateManyInput.schema"

export const TranslatorCreateManySchema = z.object({
  data: z.union([
    TranslatorCreateManyInputObjectSchema,
    z.array(TranslatorCreateManyInputObjectSchema),
  ]),
})
