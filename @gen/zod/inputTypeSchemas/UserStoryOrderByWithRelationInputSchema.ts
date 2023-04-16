import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StoryOrderByWithRelationInputSchema } from './StoryOrderByWithRelationInputSchema';

export const UserStoryOrderByWithRelationInputSchema: z.ZodType<Prisma.UserStoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  story: z.lazy(() => StoryOrderByWithRelationInputSchema).optional()
}).strict();

export default UserStoryOrderByWithRelationInputSchema;
