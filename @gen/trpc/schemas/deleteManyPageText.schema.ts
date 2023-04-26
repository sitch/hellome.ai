import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'
import { z } from 'zod'

export const PageTextDeleteManySchema = z.object({
  where: PageTextWhereInputObjectSchema.optional(),
})
