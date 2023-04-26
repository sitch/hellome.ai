import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema'
import { z } from 'zod'

export const PageDeleteManySchema = z.object({
  where: PageWhereInputObjectSchema.optional(),
})
