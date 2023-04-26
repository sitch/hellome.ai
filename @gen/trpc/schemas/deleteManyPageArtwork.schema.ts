import { PageArtworkWhereInputObjectSchema } from './objects/PageArtworkWhereInput.schema'
import { z } from 'zod'

export const PageArtworkDeleteManySchema = z.object({
  where: PageArtworkWhereInputObjectSchema.optional(),
})
