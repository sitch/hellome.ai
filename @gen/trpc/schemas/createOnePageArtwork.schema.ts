import { z } from 'zod'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkCreateInputObjectSchema } from './objects/PageArtworkCreateInput.schema'
import { PageArtworkUncheckedCreateInputObjectSchema } from './objects/PageArtworkUncheckedCreateInput.schema'

export const PageArtworkCreateOneSchema = z.object({
  include: PageArtworkIncludeObjectSchema.optional(),
  data: z.union([
    PageArtworkCreateInputObjectSchema,
    PageArtworkUncheckedCreateInputObjectSchema,
  ]),
})
