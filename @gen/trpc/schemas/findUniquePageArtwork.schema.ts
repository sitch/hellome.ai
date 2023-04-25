import { z } from 'zod'
import { PageArtworkSelectObjectSchema } from './objects/PageArtworkSelect.schema'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './objects/PageArtworkWhereUniqueInput.schema'

export const PageArtworkFindUniqueSchema = z.object({
  select: PageArtworkSelectObjectSchema.optional(),
  include: PageArtworkIncludeObjectSchema.optional(),
  where: PageArtworkWhereUniqueInputObjectSchema,
})
