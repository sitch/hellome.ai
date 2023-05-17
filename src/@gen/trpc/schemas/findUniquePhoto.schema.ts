import { z } from "zod"

import { PhotoIncludeObjectSchema } from "./objects/PhotoInclude.schema"
import { PhotoSelectObjectSchema } from "./objects/PhotoSelect.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./objects/PhotoWhereUniqueInput.schema"

export const PhotoFindUniqueSchema = z.object({
  select: PhotoSelectObjectSchema.optional(),
  include: PhotoIncludeObjectSchema.optional(),
  where: PhotoWhereUniqueInputObjectSchema,
})
