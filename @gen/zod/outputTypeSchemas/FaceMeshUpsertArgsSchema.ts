import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshIncludeSchema } from '../inputTypeSchemas/FaceMeshIncludeSchema'
import { FaceMeshWhereUniqueInputSchema } from '../inputTypeSchemas/FaceMeshWhereUniqueInputSchema'
import { FaceMeshCreateInputSchema } from '../inputTypeSchemas/FaceMeshCreateInputSchema'
import { FaceMeshUncheckedCreateInputSchema } from '../inputTypeSchemas/FaceMeshUncheckedCreateInputSchema'
import { FaceMeshUpdateInputSchema } from '../inputTypeSchemas/FaceMeshUpdateInputSchema'
import { FaceMeshUncheckedUpdateInputSchema } from '../inputTypeSchemas/FaceMeshUncheckedUpdateInputSchema'
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

export const FaceMeshUpsertArgsSchema: z.ZodType<Prisma.FaceMeshUpsertArgs> = z.object({
  select: FaceMeshSelectSchema.optional(),
  include: FaceMeshIncludeSchema.optional(),
  where: FaceMeshWhereUniqueInputSchema,
  create: z.union([ FaceMeshCreateInputSchema,FaceMeshUncheckedCreateInputSchema ]),
  update: z.union([ FaceMeshUpdateInputSchema,FaceMeshUncheckedUpdateInputSchema ]),
}).strict()

export default FaceMeshUpsertArgsSchema;
