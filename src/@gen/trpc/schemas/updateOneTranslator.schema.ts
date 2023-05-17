import { z } from "zod"

import { TranslatorIncludeObjectSchema } from "./objects/TranslatorInclude.schema"
import { TranslatorSelectObjectSchema } from "./objects/TranslatorSelect.schema"
import { TranslatorUncheckedUpdateInputObjectSchema } from "./objects/TranslatorUncheckedUpdateInput.schema"
import { TranslatorUpdateInputObjectSchema } from "./objects/TranslatorUpdateInput.schema"
import { TranslatorWhereUniqueInputObjectSchema } from "./objects/TranslatorWhereUniqueInput.schema"

export const TranslatorUpdateOneSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  data: z.union([
    TranslatorUpdateInputObjectSchema,
    TranslatorUncheckedUpdateInputObjectSchema,
  ]),
  where: TranslatorWhereUniqueInputObjectSchema,
})
