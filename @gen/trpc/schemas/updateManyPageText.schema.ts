import { z } from 'zod'
import { PageTextUpdateManyMutationInputObjectSchema } from './objects/PageTextUpdateManyMutationInput.schema'
import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'

export const PageTextUpdateManySchema = z.object({
  data: PageTextUpdateManyMutationInputObjectSchema,
  where: PageTextWhereInputObjectSchema.optional(),
})
