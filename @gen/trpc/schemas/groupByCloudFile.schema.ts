import { z } from 'zod'
import { CloudFileWhereInputObjectSchema } from './objects/CloudFileWhereInput.schema'
import { CloudFileOrderByWithAggregationInputObjectSchema } from './objects/CloudFileOrderByWithAggregationInput.schema'
import { CloudFileScalarWhereWithAggregatesInputObjectSchema } from './objects/CloudFileScalarWhereWithAggregatesInput.schema'
import { CloudFileScalarFieldEnumSchema } from './enums/CloudFileScalarFieldEnum.schema'

export const CloudFileGroupBySchema = z.object({
  where: CloudFileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CloudFileOrderByWithAggregationInputObjectSchema,
      CloudFileOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CloudFileScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CloudFileScalarFieldEnumSchema),
})
