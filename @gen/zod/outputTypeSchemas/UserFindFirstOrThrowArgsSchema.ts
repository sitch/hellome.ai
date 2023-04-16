import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema'
import { UserOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserOrderByWithRelationInputSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { UserScalarFieldEnumSchema } from '../inputTypeSchemas/UserScalarFieldEnumSchema'
import { FaceMeshArgsSchema } from "../outputTypeSchemas/FaceMeshArgsSchema"
import { FamilyFindManyArgsSchema } from "../outputTypeSchemas/FamilyFindManyArgsSchema"
import { ConceptPersonArgsSchema } from "../outputTypeSchemas/ConceptPersonArgsSchema"
import { ConceptPlaceFindManyArgsSchema } from "../outputTypeSchemas/ConceptPlaceFindManyArgsSchema"
import { ConceptThingFindManyArgsSchema } from "../outputTypeSchemas/ConceptThingFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  faceMeshId: z.boolean().optional(),
  name: z.boolean().optional(),
  nickname: z.boolean().optional(),
  birthdate: z.boolean().optional(),
  sex: z.boolean().optional(),
  gender: z.boolean().optional(),
  genderPronounSingluar: z.boolean().optional(),
  genderPronounPlural: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  face: z.union([z.boolean(),z.lazy(() => FaceMeshArgsSchema)]).optional(),
  families: z.union([z.boolean(),z.lazy(() => FamilyFindManyArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => ConceptPersonArgsSchema)]).optional(),
  places: z.union([z.boolean(),z.lazy(() => ConceptPlaceFindManyArgsSchema)]).optional(),
  things: z.union([z.boolean(),z.lazy(() => ConceptThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export default UserFindFirstOrThrowArgsSchema;
