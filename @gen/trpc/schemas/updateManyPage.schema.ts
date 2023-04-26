import { PageUpdateManyMutationInputObjectSchema } from './objects/PageUpdateManyMutationInput.schema'
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema'
import { z } from 'zod'

export const PageUpdateManySchema = z.object({
  data: PageUpdateManyMutationInputObjectSchema,
  where: PageWhereInputObjectSchema.optional(),
})
