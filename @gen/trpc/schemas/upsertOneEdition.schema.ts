import { EditionCreateInputObjectSchema } from './objects/EditionCreateInput.schema'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionSelectObjectSchema } from './objects/EditionSelect.schema'
import { EditionUncheckedCreateInputObjectSchema } from './objects/EditionUncheckedCreateInput.schema'
import { EditionUncheckedUpdateInputObjectSchema } from './objects/EditionUncheckedUpdateInput.schema'
import { EditionUpdateInputObjectSchema } from './objects/EditionUpdateInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './objects/EditionWhereUniqueInput.schema'
import { z } from 'zod'

export const EditionUpsertSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  where: EditionWhereUniqueInputObjectSchema,
  create: z.union([
    EditionCreateInputObjectSchema,
    EditionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EditionUpdateInputObjectSchema,
    EditionUncheckedUpdateInputObjectSchema,
  ]),
})
