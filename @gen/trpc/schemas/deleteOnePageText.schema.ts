import { z } from "zod"

import { PageTextIncludeObjectSchema } from "./objects/PageTextInclude.schema"
import { PageTextSelectObjectSchema } from "./objects/PageTextSelect.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./objects/PageTextWhereUniqueInput.schema"

export const PageTextDeleteOneSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  where: PageTextWhereUniqueInputObjectSchema,
})
