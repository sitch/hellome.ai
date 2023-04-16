import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryUncheckedCreateNestedManyWithoutStoryInputSchema } from './UserStoryUncheckedCreateNestedManyWithoutStoryInputSchema';

export const StoryUncheckedCreateInputSchema: z.ZodType<Prisma.StoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserStory: z.lazy(() => UserStoryUncheckedCreateNestedManyWithoutStoryInputSchema).optional()
}).strict();

export default StoryUncheckedCreateInputSchema;
