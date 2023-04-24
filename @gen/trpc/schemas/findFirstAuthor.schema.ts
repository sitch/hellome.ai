import { z } from 'zod'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema'
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'
import { AuthorScalarFieldEnumSchema } from './enums/AuthorScalarFieldEnum.schema'

export const AuthorFindFirstSchema = z.object({
  include: AuthorIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      AuthorOrderByWithRelationInputObjectSchema,
      AuthorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AuthorWhereInputObjectSchema.optional(),
  cursor: AuthorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuthorScalarFieldEnumSchema).optional(),
})
