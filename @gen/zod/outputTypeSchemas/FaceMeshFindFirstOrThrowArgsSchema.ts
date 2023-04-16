import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshIncludeSchema } from '../inputTypeSchemas/FaceMeshIncludeSchema'
import { FaceMeshWhereInputSchema } from '../inputTypeSchemas/FaceMeshWhereInputSchema'
import { FaceMeshOrderByWithRelationInputSchema } from '../inputTypeSchemas/FaceMeshOrderByWithRelationInputSchema'
import { FaceMeshWhereUniqueInputSchema } from '../inputTypeSchemas/FaceMeshWhereUniqueInputSchema'
import { FaceMeshScalarFieldEnumSchema } from '../inputTypeSchemas/FaceMeshScalarFieldEnumSchema'
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { FaceMeshCountOutputTypeArgsSchema } from "../outputTypeSchemas/FaceMeshCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FaceMeshSelectSchema: z.ZodType<Prisma.FaceMeshSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FaceMeshCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FaceMeshFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FaceMeshFindFirstOrThrowArgs> = z.object({
  select: FaceMeshSelectSchema.optional(),
  include: FaceMeshIncludeSchema.optional(),
  where: FaceMeshWhereInputSchema.optional(),
  orderBy: z.union([ FaceMeshOrderByWithRelationInputSchema.array(),FaceMeshOrderByWithRelationInputSchema ]).optional(),
  cursor: FaceMeshWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: FaceMeshScalarFieldEnumSchema.array().optional(),
}).strict()

export default FaceMeshFindFirstOrThrowArgsSchema;
