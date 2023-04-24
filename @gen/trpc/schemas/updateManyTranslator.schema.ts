import { z } from 'zod'
import { TranslatorUpdateManyMutationInputObjectSchema } from './objects/TranslatorUpdateManyMutationInput.schema'
import { TranslatorWhereInputObjectSchema } from './objects/TranslatorWhereInput.schema'

export const TranslatorUpdateManySchema = z.object({
  data: TranslatorUpdateManyMutationInputObjectSchema,
  where: TranslatorWhereInputObjectSchema.optional(),
})
