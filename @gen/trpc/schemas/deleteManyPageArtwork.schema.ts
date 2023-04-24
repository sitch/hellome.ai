import { z } from 'zod'
import { PageArtworkWhereInputObjectSchema } from './objects/PageArtworkWhereInput.schema'

export const PageArtworkDeleteManySchema = z.object({
  where: PageArtworkWhereInputObjectSchema.optional(),
})
