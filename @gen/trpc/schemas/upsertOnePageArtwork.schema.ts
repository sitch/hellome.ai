import { PageArtworkCreateInputObjectSchema } from './objects/PageArtworkCreateInput.schema'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkSelectObjectSchema } from './objects/PageArtworkSelect.schema'
import { PageArtworkUncheckedCreateInputObjectSchema } from './objects/PageArtworkUncheckedCreateInput.schema'
import { PageArtworkUncheckedUpdateInputObjectSchema } from './objects/PageArtworkUncheckedUpdateInput.schema'
import { PageArtworkUpdateInputObjectSchema } from './objects/PageArtworkUpdateInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './objects/PageArtworkWhereUniqueInput.schema'
import { z } from 'zod'

export const PageArtworkUpsertSchema = z.object({
  select: PageArtworkSelectObjectSchema.optional(),
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
