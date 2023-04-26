import { CloudFileCreateManyInputObjectSchema } from './objects/CloudFileCreateManyInput.schema'
import { z } from 'zod'

export const CloudFileCreateManySchema = z.object({
  data: z.union([
    CloudFileCreateManyInputObjectSchema,
    z.array(CloudFileCreateManyInputObjectSchema),
  ]),
})
