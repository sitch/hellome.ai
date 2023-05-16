import { z } from "zod"

import { EditionIncludeObjectSchema } from "./objects/EditionInclude.schema"
import { EditionSelectObjectSchema } from "./objects/EditionSelect.schema"
import { EditionUncheckedUpdateInputObjectSchema } from "./objects/EditionUncheckedUpdateInput.schema"
import { EditionUpdateInputObjectSchema } from "./objects/EditionUpdateInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./objects/EditionWhereUniqueInput.schema"

export const EditionUpdateOneSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  data: z.union([
    EditionUpdateInputObjectSchema,
    EditionUncheckedUpdateInputObjectSchema,
  ]),
  where: EditionWhereUniqueInputObjectSchema,
})
