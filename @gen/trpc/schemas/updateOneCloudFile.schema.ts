import { z } from 'zod'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileUpdateInputObjectSchema } from './objects/CloudFileUpdateInput.schema'
import { CloudFileUncheckedUpdateInputObjectSchema } from './objects/CloudFileUncheckedUpdateInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'

export const CloudFileUpdateOneSchema = z.object({
  include: CloudFileIncludeObjectSchema.optional(),
  data: z.union([
    CloudFileUpdateInputObjectSchema,
    CloudFileUncheckedUpdateInputObjectSchema,
  ]),
  where: CloudFileWhereUniqueInputObjectSchema,
})
