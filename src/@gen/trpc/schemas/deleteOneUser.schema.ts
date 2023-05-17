import { z } from "zod"

import { UserIncludeObjectSchema } from "./objects/UserInclude.schema"
import { UserSelectObjectSchema } from "./objects/UserSelect.schema"
import { UserWhereUniqueInputObjectSchema } from "./objects/UserWhereUniqueInput.schema"

export const UserDeleteOneSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  include: UserIncludeObjectSchema.optional(),
  where: UserWhereUniqueInputObjectSchema,
})
