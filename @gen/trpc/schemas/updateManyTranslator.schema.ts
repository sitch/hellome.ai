import { TranslatorUpdateManyMutationInputObjectSchema } from './objects/TranslatorUpdateManyMutationInput.schema'
import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'
import { z } from 'zod'

export const TranslatorUpdateManySchema = z.object({
  data: TranslatorUpdateManyMutationInputObjectSchema,
  where: TranslatorWhereInputObjectSchema.optional(),
})
