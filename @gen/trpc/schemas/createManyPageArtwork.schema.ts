import { z } from "zod"

import { PageArtworkCreateManyInputObjectSchema } from "./objects/PageArtworkCreateManyInput.schema"

export const PageArtworkCreateManySchema = z.object({
  data: z.union([
    PageArtworkCreateManyInputObjectSchema,
    z.array(PageArtworkCreateManyInputObjectSchema),
  ]),
})
