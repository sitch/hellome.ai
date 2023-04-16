import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { FaceMeshCountOutputTypeArgsSchema } from "../outputTypeSchemas/FaceMeshCountOutputTypeArgsSchema"

export const FaceMeshSelectSchema: z.ZodType<Prisma.FaceMeshSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FaceMeshCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default FaceMeshSelectSchema;
