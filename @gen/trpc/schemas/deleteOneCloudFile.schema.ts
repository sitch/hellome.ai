import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileSelectObjectSchema } from './objects/CloudFileSelect.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'
import { z } from 'zod'

export const CloudFileDeleteOneSchema = z.object({
  select: CloudFileSelectObjectSchema.optional(),
  include: CloudFileIncludeObjectSchema.optional(),
  where: CloudFileWhereUniqueInputObjectSchema,
})
