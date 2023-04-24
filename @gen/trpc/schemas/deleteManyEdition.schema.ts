import { z } from 'zod'
import { EditionWhereInputObjectSchema } from './objects/EditionWhereInput.schema'

export const EditionDeleteManySchema = z.object({
  where: EditionWhereInputObjectSchema.optional(),
})
