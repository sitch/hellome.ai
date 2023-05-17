import { z } from "zod"

import { TranslatorCreateInputObjectSchema } from "./objects/TranslatorCreateInput.schema"
import { TranslatorIncludeObjectSchema } from "./objects/TranslatorInclude.schema"
import { TranslatorSelectObjectSchema } from "./objects/TranslatorSelect.schema"
import { TranslatorUncheckedCreateInputObjectSchema } from "./objects/TranslatorUncheckedCreateInput.schema"

export const TranslatorCreateOneSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  data: z.union([
    TranslatorCreateInputObjectSchema,
    TranslatorUncheckedCreateInputObjectSchema,
  ]),
})
