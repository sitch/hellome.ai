import { z } from "zod"

import { PageArtworkCreateInputObjectSchema } from "./objects/PageArtworkCreateInput.schema"
import { PageArtworkIncludeObjectSchema } from "./objects/PageArtworkInclude.schema"
import { PageArtworkSelectObjectSchema } from "./objects/PageArtworkSelect.schema"
import { PageArtworkUncheckedCreateInputObjectSchema } from "./objects/PageArtworkUncheckedCreateInput.schema"

export const PageArtworkCreateOneSchema = z.object({
  select: PageArtworkSelectObjectSchema.optional(),
  include: PageArtworkIncludeObjectSchema.optional(),
  data: z.union([
    PageArtworkCreateInputObjectSchema,
    PageArtworkUncheckedCreateInputObjectSchema,
  ]),
})
