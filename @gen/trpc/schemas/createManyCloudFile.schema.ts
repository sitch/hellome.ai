import { z } from "zod"

import { CloudFileCreateManyInputObjectSchema } from "./objects/CloudFileCreateManyInput.schema"

export const CloudFileCreateManySchema = z.object({
  data: z.union([
    CloudFileCreateManyInputObjectSchema,
    z.array(CloudFileCreateManyInputObjectSchema),
  ]),
})
