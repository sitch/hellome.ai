import { CloudFileUpdateManyMutationInputObjectSchema } from './objects/CloudFileUpdateManyMutationInput.schema'
import { CloudFileWhereInputObjectSchema } from './objects/CloudFileWhereInput.schema'
import { z } from 'zod'

export const CloudFileUpdateManySchema = z.object({
  data: CloudFileUpdateManyMutationInputObjectSchema,
  where: CloudFileWhereInputObjectSchema.optional(),
})
