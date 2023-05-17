import { z } from "zod"

import { AuthorCreateInputObjectSchema } from "./objects/AuthorCreateInput.schema"
import { AuthorIncludeObjectSchema } from "./objects/AuthorInclude.schema"
import { AuthorSelectObjectSchema } from "./objects/AuthorSelect.schema"
import { AuthorUncheckedCreateInputObjectSchema } from "./objects/AuthorUncheckedCreateInput.schema"
import { AuthorUncheckedUpdateInputObjectSchema } from "./objects/AuthorUncheckedUpdateInput.schema"
import { AuthorUpdateInputObjectSchema } from "./objects/AuthorUpdateInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./objects/AuthorWhereUniqueInput.schema"

export const AuthorUpsertSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  where: AuthorWhereUniqueInputObjectSchema,
  create: z.union([
    AuthorCreateInputObjectSchema,
    AuthorUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AuthorUpdateInputObjectSchema,
    AuthorUncheckedUpdateInputObjectSchema,
  ]),
})
