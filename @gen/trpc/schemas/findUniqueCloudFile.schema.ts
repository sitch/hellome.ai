import { z } from 'zod'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'

export const CloudFileFindUniqueSchema = z.object({
  include: CloudFileIncludeObjectSchema.optional(),
  where: CloudFileWhereUniqueInputObjectSchema,
})
