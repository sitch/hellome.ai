import { z } from 'zod'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'

export const CloudFileDeleteOneSchema = z.object({
  include: CloudFileIncludeObjectSchema.optional(),
  where: CloudFileWhereUniqueInputObjectSchema,
})
