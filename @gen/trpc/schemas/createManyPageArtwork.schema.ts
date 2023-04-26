import { PageArtworkCreateManyInputObjectSchema } from './objects/PageArtworkCreateManyInput.schema'
import { z } from 'zod'

export const PageArtworkCreateManySchema = z.object({
  data: z.union([
    PageArtworkCreateManyInputObjectSchema,
    z.array(PageArtworkCreateManyInputObjectSchema),
  ]),
})
