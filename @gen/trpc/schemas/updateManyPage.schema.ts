import { z } from 'zod'
import { PageUpdateManyMutationInputObjectSchema } from './objects/PageUpdateManyMutationInput.schema'
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema'

export const PageUpdateManySchema = z.object({
  data: PageUpdateManyMutationInputObjectSchema,
  where: PageWhereInputObjectSchema.optional(),
})
