import { CloudFileWhereInputObjectSchema } from './objects/CloudFileWhereInput.schema'
import { z } from 'zod'

export const CloudFileDeleteManySchema = z.object({
  where: CloudFileWhereInputObjectSchema.optional(),
})
