import { z } from "zod"

import { PageCreateManyInputObjectSchema } from "./objects/PageCreateManyInput.schema"

export const PageCreateManySchema = z.object({
  data: z.union([
    PageCreateManyInputObjectSchema,
    z.array(PageCreateManyInputObjectSchema),
  ]),
})
