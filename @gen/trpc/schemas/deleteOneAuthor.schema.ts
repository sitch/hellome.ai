import { z } from "zod"

import { AuthorIncludeObjectSchema } from "./objects/AuthorInclude.schema"
import { AuthorSelectObjectSchema } from "./objects/AuthorSelect.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./objects/AuthorWhereUniqueInput.schema"

export const AuthorDeleteOneSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  where: AuthorWhereUniqueInputObjectSchema,
})
