import { z } from 'zod'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextOrderByWithRelationInputObjectSchema } from './objects/PageTextOrderByWithRelationInput.schema'
import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'
import { PageTextScalarFieldEnumSchema } from './enums/PageTextScalarFieldEnum.schema'

export const PageTextFindFirstSchema = z.object({
  include: PageTextIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PageTextOrderByWithRelationInputObjectSchema,
      PageTextOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PageTextWhereInputObjectSchema.optional(),
  cursor: PageTextWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PageTextScalarFieldEnumSchema).optional(),
})
