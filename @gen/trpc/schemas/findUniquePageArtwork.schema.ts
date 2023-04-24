import { z } from 'zod'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './objects/PageArtworkWhereUniqueInput.schema'

export const PageArtworkFindUniqueSchema = z.object({
  include: PageArtworkIncludeObjectSchema.optional(),
  where: PageArtworkWhereUniqueInputObjectSchema,
})
