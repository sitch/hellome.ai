import { z } from 'zod'
import { CloudFileWhereInputObjectSchema } from './objects/CloudFileWhereInput.schema'

export const CloudFileDeleteManySchema = z.object({
  where: CloudFileWhereInputObjectSchema.optional(),
})
