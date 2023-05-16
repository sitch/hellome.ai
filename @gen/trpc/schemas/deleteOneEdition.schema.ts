import { z } from "zod"

import { EditionIncludeObjectSchema } from "./objects/EditionInclude.schema"
import { EditionSelectObjectSchema } from "./objects/EditionSelect.schema"
import { EditionWhereUniqueInputObjectSchema } from "./objects/EditionWhereUniqueInput.schema"

export const EditionDeleteOneSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  where: EditionWhereUniqueInputObjectSchema,
})
