import { z } from "zod"

import { PageIncludeObjectSchema } from "./objects/PageInclude.schema"
import { PageSelectObjectSchema } from "./objects/PageSelect.schema"
import { PageUncheckedUpdateInputObjectSchema } from "./objects/PageUncheckedUpdateInput.schema"
import { PageUpdateInputObjectSchema } from "./objects/PageUpdateInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./objects/PageWhereUniqueInput.schema"

export const PageUpdateOneSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  data: z.union([
    PageUpdateInputObjectSchema,
    PageUncheckedUpdateInputObjectSchema,
  ]),
  where: PageWhereUniqueInputObjectSchema,
})
