import { z } from 'zod'
import { AuthorSelectObjectSchema } from './objects/AuthorSelect.schema'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema'
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'
import { AuthorScalarFieldEnumSchema } from './enums/AuthorScalarFieldEnum.schema'

export const AuthorFindManySchema = z.object({
  select: z.lazy(() => AuthorSelectObjectSchema.optional()),
  include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
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
