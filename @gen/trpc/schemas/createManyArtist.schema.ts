import { z } from "zod"

import { ArtistCreateManyInputObjectSchema } from "./objects/ArtistCreateManyInput.schema"

export const ArtistCreateManySchema = z.object({
  data: z.union([
    ArtistCreateManyInputObjectSchema,
    z.array(ArtistCreateManyInputObjectSchema),
  ]),
})
