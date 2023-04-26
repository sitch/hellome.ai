import { ConceptScalarFieldEnumSchema } from './enums/ConceptScalarFieldEnum.schema'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptOrderByWithRelationInputObjectSchema } from './objects/ConceptOrderByWithRelationInput.schema'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptWhereInputObjectSchema } from './objects/ConceptWhereInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'
import { z } from 'zod'

export const ConceptFindManySchema = z.object({
  select: z.lazy(() => ConceptSelectObjectSchema.optional()),
  include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ConceptOrderByWithRelationInputObjectSchema,
      ConceptOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConceptWhereInputObjectSchema.optional(),
  cursor: ConceptWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ConceptScalarFieldEnumSchema).optional(),
})
