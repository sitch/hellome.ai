import { EditionWhereInputObjectSchema } from './objects/EditionWhereInput.schema'
import { z } from 'zod'

export const EditionDeleteManySchema = z.object({
  where: EditionWhereInputObjectSchema.optional(),
})
