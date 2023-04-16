import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const ConceptPersonWhereInputSchema: z.ZodType<Prisma.ConceptPersonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptPersonWhereInputSchema),z.lazy(() => ConceptPersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptPersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptPersonWhereInputSchema),z.lazy(() => ConceptPersonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default ConceptPersonWhereInputSchema;
