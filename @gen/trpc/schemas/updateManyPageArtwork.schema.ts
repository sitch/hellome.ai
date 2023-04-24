import { z } from 'zod'
import { PageArtworkUpdateManyMutationInputObjectSchema } from './objects/PageArtworkUpdateManyMutationInput.schema'
import { PageArtworkWhereInputObjectSchema } from './objects/PageArtworkWhereInput.schema'

export const PageArtworkUpdateManySchema = z.object({
  data: PageArtworkUpdateManyMutationInputObjectSchema,
  where: PageArtworkWhereInputObjectSchema.optional(),
})
