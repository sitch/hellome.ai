import { z } from 'zod'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './objects/PageArtworkWhereUniqueInput.schema'

export const PageArtworkDeleteOneSchema = z.object({
  include: PageArtworkIncludeObjectSchema.optional(),
  where: PageArtworkWhereUniqueInputObjectSchema,
})
