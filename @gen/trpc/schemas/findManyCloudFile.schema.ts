import { z } from 'zod'
import { CloudFileSelectObjectSchema } from './objects/CloudFileSelect.schema'
import { CloudFileIncludeObjectSchema } from './objects/CloudFileInclude.schema'
import { CloudFileOrderByWithRelationInputObjectSchema } from './objects/CloudFileOrderByWithRelationInput.schema'
import { CloudFileWhereInputObjectSchema } from './objects/CloudFileWhereInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'
import { CloudFileScalarFieldEnumSchema } from './enums/CloudFileScalarFieldEnum.schema'

export const CloudFileFindManySchema = z.object({
  select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
  include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      CloudFileOrderByWithRelationInputObjectSchema,
      CloudFileOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CloudFileWhereInputObjectSchema.optional(),
  cursor: CloudFileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CloudFileScalarFieldEnumSchema).optional(),
})
