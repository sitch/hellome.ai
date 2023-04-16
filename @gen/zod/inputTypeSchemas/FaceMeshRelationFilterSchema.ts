import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FaceMeshWhereInputSchema } from './FaceMeshWhereInputSchema';

export const FaceMeshRelationFilterSchema: z.ZodType<Prisma.FaceMeshRelationFilter> = z.object({
  is: z.lazy(() => FaceMeshWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FaceMeshWhereInputSchema).optional().nullable()
}).strict();

export default FaceMeshRelationFilterSchema;
