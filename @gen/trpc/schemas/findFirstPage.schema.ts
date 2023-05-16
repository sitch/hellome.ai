import { z } from "zod"

import { PageScalarFieldEnumSchema } from "./enums/PageScalarFieldEnum.schema"
import { PageIncludeObjectSchema } from "./objects/PageInclude.schema"
import { PageOrderByWithRelationInputObjectSchema } from "./objects/PageOrderByWithRelationInput.schema"
import { PageSelectObjectSchema } from "./objects/PageSelect.schema"
import { PageWhereInputObjectSchema } from "./objects/PageWhereInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./objects/PageWhereUniqueInput.schema"

export const PageFindFirstSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PageOrderByWithRelationInputObjectSchema,
      PageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PageWhereInputObjectSchema.optional(),
  cursor: PageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PageScalarFieldEnumSchema).optional(),
})
