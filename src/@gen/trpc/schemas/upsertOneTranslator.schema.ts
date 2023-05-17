import { z } from "zod"

import { TranslatorCreateInputObjectSchema } from "./objects/TranslatorCreateInput.schema"
import { TranslatorIncludeObjectSchema } from "./objects/TranslatorInclude.schema"
import { TranslatorSelectObjectSchema } from "./objects/TranslatorSelect.schema"
import { TranslatorUncheckedCreateInputObjectSchema } from "./objects/TranslatorUncheckedCreateInput.schema"
import { TranslatorUncheckedUpdateInputObjectSchema } from "./objects/TranslatorUncheckedUpdateInput.schema"
import { TranslatorUpdateInputObjectSchema } from "./objects/TranslatorUpdateInput.schema"
import { TranslatorWhereUniqueInputObjectSchema } from "./objects/TranslatorWhereUniqueInput.schema"

export const TranslatorUpsertSchema = z.object({
  select: TranslatorSelectObjectSchema.optional(),
  include: TranslatorIncludeObjectSchema.optional(),
  where: TranslatorWhereUniqueInputObjectSchema,
  create: z.union([
    TranslatorCreateInputObjectSchema,
    TranslatorUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TranslatorUpdateInputObjectSchema,
    TranslatorUncheckedUpdateInputObjectSchema,
  ]),
})
