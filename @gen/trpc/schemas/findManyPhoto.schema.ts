import { z } from "zod"

import { PhotoScalarFieldEnumSchema } from "./enums/PhotoScalarFieldEnum.schema"
import { PhotoIncludeObjectSchema } from "./objects/PhotoInclude.schema"
import { PhotoOrderByWithRelationInputObjectSchema } from "./objects/PhotoOrderByWithRelationInput.schema"
import { PhotoSelectObjectSchema } from "./objects/PhotoSelect.schema"
import { PhotoWhereInputObjectSchema } from "./objects/PhotoWhereInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./objects/PhotoWhereUniqueInput.schema"

export const PhotoFindManySchema = z.object({
  select: z.lazy(() => PhotoSelectObjectSchema.optional()),
  include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      PhotoOrderByWithRelationInputObjectSchema,
      PhotoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PhotoWhereInputObjectSchema.optional(),
  cursor: PhotoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PhotoScalarFieldEnumSchema).optional(),
})
