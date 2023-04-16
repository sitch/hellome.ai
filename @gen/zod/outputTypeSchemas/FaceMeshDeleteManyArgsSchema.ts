import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshWhereInputSchema } from '../inputTypeSchemas/FaceMeshWhereInputSchema'

export const FaceMeshDeleteManyArgsSchema: z.ZodType<Prisma.FaceMeshDeleteManyArgs> = z.object({
  where: FaceMeshWhereInputSchema.optional(),
}).strict()

export default FaceMeshDeleteManyArgsSchema;
