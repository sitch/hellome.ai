import { z } from "zod"

import { ArtistIncludeObjectSchema } from "./objects/ArtistInclude.schema"
import { ArtistSelectObjectSchema } from "./objects/ArtistSelect.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./objects/ArtistWhereUniqueInput.schema"

export const ArtistDeleteOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  where: ArtistWhereUniqueInputObjectSchema,
})
