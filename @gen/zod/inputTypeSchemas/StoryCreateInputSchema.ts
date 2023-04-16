import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryCreateNestedManyWithoutStoryInputSchema } from './UserStoryCreateNestedManyWithoutStoryInputSchema';

export const StoryCreateInputSchema: z.ZodType<Prisma.StoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserStory: z.lazy(() => UserStoryCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export default StoryCreateInputSchema;
