import { PageArtworkUpdateManyMutationInputObjectSchema } from './objects/PageArtworkUpdateManyMutationInput.schema'
import { PageArtworkWhereInputObjectSchema } from './objects/PageArtworkWhereInput.schema'
import { z } from 'zod'

export const PageArtworkUpdateManySchema = z.object({
  data: PageArtworkUpdateManyMutationInputObjectSchema,
  where: PageArtworkWhereInputObjectSchema.optional(),
})
