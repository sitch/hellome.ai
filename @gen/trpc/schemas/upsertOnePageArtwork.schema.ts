import { z } from 'zod'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './objects/PageArtworkWhereUniqueInput.schema'
import { PageArtworkCreateInputObjectSchema } from './objects/PageArtworkCreateInput.schema'
import { PageArtworkUncheckedCreateInputObjectSchema } from './objects/PageArtworkUncheckedCreateInput.schema'
import { PageArtworkUpdateInputObjectSchema } from './objects/PageArtworkUpdateInput.schema'
import { PageArtworkUncheckedUpdateInputObjectSchema } from './objects/PageArtworkUncheckedUpdateInput.schema'

export const PageArtworkUpsertSchema = z.object({
  include: PageArtworkIncludeObjectSchema.optional(),
  where: PageArtworkWhereUniqueInputObjectSchema,
  create: z.union([
    PageArtworkCreateInputObjectSchema,
    PageArtworkUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PageArtworkUpdateInputObjectSchema,
    PageArtworkUncheckedUpdateInputObjectSchema,
  ]),
})
