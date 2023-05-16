import { z } from "zod"

import { UserScalarFieldEnumSchema } from "./enums/UserScalarFieldEnum.schema"
import { UserIncludeObjectSchema } from "./objects/UserInclude.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./objects/UserOrderByWithRelationInput.schema"
import { UserSelectObjectSchema } from "./objects/UserSelect.schema"
import { UserWhereInputObjectSchema } from "./objects/UserWhereInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./objects/UserWhereUniqueInput.schema"

export const UserFindFirstSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  include: UserIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      UserOrderByWithRelationInputObjectSchema,
      UserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserWhereInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserScalarFieldEnumSchema).optional(),
})
