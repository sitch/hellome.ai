import { z } from "zod"

import { PageCreateInputObjectSchema } from "./objects/PageCreateInput.schema"
import { PageIncludeObjectSchema } from "./objects/PageInclude.schema"
import { PageSelectObjectSchema } from "./objects/PageSelect.schema"
import { PageUncheckedCreateInputObjectSchema } from "./objects/PageUncheckedCreateInput.schema"

export const PageCreateOneSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  data: z.union([
    PageCreateInputObjectSchema,
    PageUncheckedCreateInputObjectSchema,
  ]),
})
