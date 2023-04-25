import { z } from 'zod'
import { PageArtworkSelectObjectSchema } from './objects/PageArtworkSelect.schema'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkCreateInputObjectSchema } from './objects/PageArtworkCreateInput.schema'
import { PageArtworkUncheckedCreateInputObjectSchema } from './objects/PageArtworkUncheckedCreateInput.schema'

export const PageArtworkCreateOneSchema = z.object({
  select: PageArtworkSelectObjectSchema.optional(),
  include: PageArtworkIncludeObjectSchema.optional(),
  data: z.union([
    PageArtworkCreateInputObjectSchema,
    PageArtworkUncheckedCreateInputObjectSchema,
  ]),
})
