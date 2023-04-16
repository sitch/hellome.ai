import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StoryCreateNestedOneWithoutUserStoryInputSchema } from './StoryCreateNestedOneWithoutUserStoryInputSchema';

export const UserStoryCreateInputSchema: z.ZodType<Prisma.UserStoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutUserStoryInputSchema)
}).strict();

export default UserStoryCreateInputSchema;
