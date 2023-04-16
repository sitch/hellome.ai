import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyIncludeSchema } from '../inputTypeSchemas/FamilyIncludeSchema'
import { FamilyWhereInputSchema } from '../inputTypeSchemas/FamilyWhereInputSchema'
import { FamilyOrderByWithRelationInputSchema } from '../inputTypeSchemas/FamilyOrderByWithRelationInputSchema'
import { FamilyWhereUniqueInputSchema } from '../inputTypeSchemas/FamilyWhereUniqueInputSchema'
import { FamilyScalarFieldEnumSchema } from '../inputTypeSchemas/FamilyScalarFieldEnumSchema'
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConceptPlaceFindManyArgsSchema } from "../outputTypeSchemas/ConceptPlaceFindManyArgsSchema"
import { ConceptThingFindManyArgsSchema } from "../outputTypeSchemas/ConceptThingFindManyArgsSchema"
import { FamilyCountOutputTypeArgsSchema } from "../outputTypeSchemas/FamilyCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FamilySelectSchema: z.ZodType<Prisma.FamilySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  places: z.union([z.boolean(),z.lazy(() => ConceptPlaceFindManyArgsSchema)]).optional(),
  things: z.union([z.boolean(),z.lazy(() => ConceptThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FamilyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FamilyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FamilyFindFirstOrThrowArgs> = z.object({
  select: FamilySelectSchema.optional(),
  include: FamilyIncludeSchema.optional(),
  where: FamilyWhereInputSchema.optional(),
  orderBy: z.union([ FamilyOrderByWithRelationInputSchema.array(),FamilyOrderByWithRelationInputSchema ]).optional(),
  cursor: FamilyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: FamilyScalarFieldEnumSchema.array().optional(),
}).strict()

export default FamilyFindFirstOrThrowArgsSchema;
