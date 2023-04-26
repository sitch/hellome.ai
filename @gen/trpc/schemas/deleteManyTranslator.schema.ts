import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'
import { z } from 'zod'

export const TranslatorDeleteManySchema = z.object({
  where: TranslatorWhereInputObjectSchema.optional(),
})
