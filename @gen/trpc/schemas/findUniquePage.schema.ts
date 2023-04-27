import { z } from "zod"

import { PageIncludeObjectSchema } from "./objects/PageInclude.schema"
import { PageSelectObjectSchema } from "./objects/PageSelect.schema"
import { PageWhereUniqueInputObjectSchema } from "./objects/PageWhereUniqueInput.schema"

export const PageFindUniqueSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  where: PageWhereUniqueInputObjectSchema,
})
