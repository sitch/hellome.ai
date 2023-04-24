import { z } from 'zod'
import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'

export const TranslatorDeleteManySchema = z.object({
  where: TranslatorWhereInputObjectSchema.optional(),
})
