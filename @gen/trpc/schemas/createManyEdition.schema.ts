import { z } from "zod"

import { EditionCreateManyInputObjectSchema } from "./objects/EditionCreateManyInput.schema"

export const EditionCreateManySchema = z.object({
  data: z.union([
    EditionCreateManyInputObjectSchema,
    z.array(EditionCreateManyInputObjectSchema),
  ]),
})
