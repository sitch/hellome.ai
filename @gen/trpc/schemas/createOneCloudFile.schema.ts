import { z } from 'zod'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileCreateInputObjectSchema } from './objects/CloudFileCreateInput.schema'
import { CloudFileUncheckedCreateInputObjectSchema } from './objects/CloudFileUncheckedCreateInput.schema'

export const CloudFileCreateOneSchema = z.object({
  include: CloudFileIncludeObjectSchema.optional(),
  data: z.union([
    CloudFileCreateInputObjectSchema,
    CloudFileUncheckedCreateInputObjectSchema,
  ]),
})
