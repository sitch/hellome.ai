import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { FaceMeshCountOutputTypeArgsSchema } from "../outputTypeSchemas/FaceMeshCountOutputTypeArgsSchema"

export const FaceMeshIncludeSchema: z.ZodType<Prisma.FaceMeshInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FaceMeshCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default FaceMeshIncludeSchema;
