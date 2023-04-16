import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserListRelationFilterSchema } from './UserListRelationFilterSchema';

export const FaceMeshWhereInputSchema: z.ZodType<Prisma.FaceMeshWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FaceMeshWhereInputSchema),z.lazy(() => FaceMeshWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaceMeshWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaceMeshWhereInputSchema),z.lazy(() => FaceMeshWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.lazy(() => UserListRelationFilterSchema).optional()
}).strict();

export default FaceMeshWhereInputSchema;
