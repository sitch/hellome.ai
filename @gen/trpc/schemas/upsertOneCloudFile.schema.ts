import { z } from 'zod'
import { CloudFileSelectObjectSchema } from './objects/CloudFileSelect.schema'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'
import { CloudFileCreateInputObjectSchema } from './objects/CloudFileCreateInput.schema'
import { CloudFileUncheckedCreateInputObjectSchema } from './objects/CloudFileUncheckedCreateInput.schema'
import { CloudFileUpdateInputObjectSchema } from './objects/CloudFileUpdateInput.schema'
import { CloudFileUncheckedUpdateInputObjectSchema } from './objects/CloudFileUncheckedUpdateInput.schema'

export const CloudFileUpsertSchema = z.object({
  select: CloudFileSelectObjectSchema.optional(),
  include: CloudFileIncludeObjectSchema.optional(),
  where: CloudFileWhereUniqueInputObjectSchema,
  create: z.union([
    CloudFileCreateInputObjectSchema,
    CloudFileUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CloudFileUpdateInputObjectSchema,
    CloudFileUncheckedUpdateInputObjectSchema,
  ]),
})
