import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserCountOrderByAggregateInputSchema } from './UserCountOrderByAggregateInputSchema';
import { UserMaxOrderByAggregateInputSchema } from './UserMaxOrderByAggregateInputSchema';
import { UserMinOrderByAggregateInputSchema } from './UserMinOrderByAggregateInputSchema';

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  faceMeshId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nickname: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  genderPronounSingluar: z.lazy(() => SortOrderSchema).optional(),
  genderPronounPlural: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithAggregationInputSchema;
