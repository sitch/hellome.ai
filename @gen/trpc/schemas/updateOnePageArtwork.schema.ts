import { z } from "zod"

import { PageArtworkIncludeObjectSchema } from "./objects/PageArtworkInclude.schema"
import { PageArtworkSelectObjectSchema } from "./objects/PageArtworkSelect.schema"
import { PageArtworkUncheckedUpdateInputObjectSchema } from "./objects/PageArtworkUncheckedUpdateInput.schema"
import { PageArtworkUpdateInputObjectSchema } from "./objects/PageArtworkUpdateInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./objects/PageArtworkWhereUniqueInput.schema"

export const PageArtworkUpdateOneSchema = z.object({
  select: PageArtworkSelectObjectSchema.optional(),
  include: PageArtworkIncludeObjectSchema.optional(),
  data: z.union([
    PageArtworkUpdateInputObjectSchema,
    PageArtworkUncheckedUpdateInputObjectSchema,
  ]),
  where: PageArtworkWhereUniqueInputObjectSchema,
})
