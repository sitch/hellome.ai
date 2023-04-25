import { z } from 'zod'
import { CloudFileSelectObjectSchema } from './objects/CloudFileSelect.schema'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileCreateInputObjectSchema } from './objects/CloudFileCreateInput.schema'
import { CloudFileUncheckedCreateInputObjectSchema } from './objects/CloudFileUncheckedCreateInput.schema'

export const CloudFileCreateOneSchema = z.object({
  select: CloudFileSelectObjectSchema.optional(),
  include: CloudFileIncludeObjectSchema.optional(),
  data: z.union([
    CloudFileCreateInputObjectSchema,
    CloudFileUncheckedCreateInputObjectSchema,
  ]),
})
