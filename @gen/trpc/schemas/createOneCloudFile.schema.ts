import { CloudFileCreateInputObjectSchema } from './objects/CloudFileCreateInput.schema'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileSelectObjectSchema } from './objects/CloudFileSelect.schema'
import { CloudFileUncheckedCreateInputObjectSchema } from './objects/CloudFileUncheckedCreateInput.schema'
import { z } from 'zod'

export const CloudFileCreateOneSchema = z.object({
  select: CloudFileSelectObjectSchema.optional(),
  include: CloudFileIncludeObjectSchema.optional(),
  data: z.union([
    CloudFileCreateInputObjectSchema,
    CloudFileUncheckedCreateInputObjectSchema,
  ]),
})
