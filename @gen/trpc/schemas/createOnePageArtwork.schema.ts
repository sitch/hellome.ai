import { PageArtworkCreateInputObjectSchema } from './objects/PageArtworkCreateInput.schema'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkSelectObjectSchema } from './objects/PageArtworkSelect.schema'
import { PageArtworkUncheckedCreateInputObjectSchema } from './objects/PageArtworkUncheckedCreateInput.schema'
import { z } from 'zod'

export const PageArtworkCreateOneSchema = z.object({
  select: PageArtworkSelectObjectSchema.optional(),
  include: PageArtworkIncludeObjectSchema.optional(),
  data: z.union([
    PageArtworkCreateInputObjectSchema,
    PageArtworkUncheckedCreateInputObjectSchema,
  ]),
})
