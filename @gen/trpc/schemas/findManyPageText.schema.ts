import { PageTextScalarFieldEnumSchema } from './enums/PageTextScalarFieldEnum.schema'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextOrderByWithRelationInputObjectSchema } from './objects/PageTextOrderByWithRelationInput.schema'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'
import { z } from 'zod'

export const PageTextFindManySchema = z.object({
  select: z.lazy(() => PageTextSelectObjectSchema.optional()),
  include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
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
