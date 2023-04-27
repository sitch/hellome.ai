import { z } from "zod"

import { PhotoCreateManyInputObjectSchema } from "./objects/PhotoCreateManyInput.schema"

export const PhotoCreateManySchema = z.object({
  data: z.union([
    PhotoCreateManyInputObjectSchema,
    z.array(PhotoCreateManyInputObjectSchema),
  ]),
})
