import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshIncludeSchema } from '../inputTypeSchemas/FaceMeshIncludeSchema'
import { FaceMeshCreateInputSchema } from '../inputTypeSchemas/FaceMeshCreateInputSchema'
import { FaceMeshUncheckedCreateInputSchema } from '../inputTypeSchemas/FaceMeshUncheckedCreateInputSchema'
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

export const FaceMeshCreateArgsSchema: z.ZodType<Prisma.FaceMeshCreateArgs> = z.object({
  select: FaceMeshSelectSchema.optional(),
  include: FaceMeshIncludeSchema.optional(),
  data: z.union([ FaceMeshCreateInputSchema,FaceMeshUncheckedCreateInputSchema ]),
}).strict()

export default FaceMeshCreateArgsSchema;
