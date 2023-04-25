import { z } from 'zod'
import { CloudFileSelectObjectSchema } from './objects/CloudFileSelect.schema'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileUpdateInputObjectSchema } from './objects/CloudFileUpdateInput.schema'
import { CloudFileUncheckedUpdateInputObjectSchema } from './objects/CloudFileUncheckedUpdateInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'

export const CloudFileUpdateOneSchema = z.object({
  select: CloudFileSelectObjectSchema.optional(),
  include: CloudFileIncludeObjectSchema.optional(),
  data: z.union([
    CloudFileUpdateInputObjectSchema,
    CloudFileUncheckedUpdateInputObjectSchema,
  ]),
  where: CloudFileWhereUniqueInputObjectSchema,
})
