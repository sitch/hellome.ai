import { PageTextUpdateManyMutationInputObjectSchema } from './objects/PageTextUpdateManyMutationInput.schema'
import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'
import { z } from 'zod'

export const PageTextUpdateManySchema = z.object({
  data: PageTextUpdateManyMutationInputObjectSchema,
  where: PageTextWhereInputObjectSchema.optional(),
})
