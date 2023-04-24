import { z } from 'zod'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptOrderByWithRelationInputObjectSchema } from './objects/ConceptOrderByWithRelationInput.schema'
import { ConceptWhereInputObjectSchema } from './objects/ConceptWhereInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'
import { ConceptScalarFieldEnumSchema } from './enums/ConceptScalarFieldEnum.schema'

export const ConceptFindManySchema = z.object({
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
