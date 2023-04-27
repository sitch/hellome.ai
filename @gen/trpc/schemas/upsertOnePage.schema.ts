import { z } from "zod"

import { PageCreateInputObjectSchema } from "./objects/PageCreateInput.schema"
import { PageIncludeObjectSchema } from "./objects/PageInclude.schema"
import { PageSelectObjectSchema } from "./objects/PageSelect.schema"
import { PageUncheckedCreateInputObjectSchema } from "./objects/PageUncheckedCreateInput.schema"
import { PageUncheckedUpdateInputObjectSchema } from "./objects/PageUncheckedUpdateInput.schema"
import { PageUpdateInputObjectSchema } from "./objects/PageUpdateInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./objects/PageWhereUniqueInput.schema"

export const PageUpsertSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  where: PageWhereUniqueInputObjectSchema,
  create: z.union([
    PageCreateInputObjectSchema,
    PageUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PageUpdateInputObjectSchema,
    PageUncheckedUpdateInputObjectSchema,
  ]),
})
