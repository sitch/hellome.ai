import { z } from "zod"

import { TranslatorIncludeObjectSchema } from "./objects/TranslatorInclude.schema"
import { TranslatorSelectObjectSchema } from "./objects/TranslatorSelect.schema"
import { TranslatorWhereUniqueInputObjectSchema } from "./objects/TranslatorWhereUniqueInput.schema"

export const TranslatorDeleteOneSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
})
