import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StoryUpdateWithoutUserStoryInputSchema } from './StoryUpdateWithoutUserStoryInputSchema';
import { StoryUncheckedUpdateWithoutUserStoryInputSchema } from './StoryUncheckedUpdateWithoutUserStoryInputSchema';
import { StoryCreateWithoutUserStoryInputSchema } from './StoryCreateWithoutUserStoryInputSchema';
import { StoryUncheckedCreateWithoutUserStoryInputSchema } from './StoryUncheckedCreateWithoutUserStoryInputSchema';

export const StoryUpsertWithoutUserStoryInputSchema: z.ZodType<Prisma.StoryUpsertWithoutUserStoryInput> = z.object({
  update: z.union([ z.lazy(() => StoryUpdateWithoutUserStoryInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutUserStoryInputSchema) ]),
  create: z.union([ z.lazy(() => StoryCreateWithoutUserStoryInputSchema),z.lazy(() => StoryUncheckedCreateWithoutUserStoryInputSchema) ]),
}).strict();

export default StoryUpsertWithoutUserStoryInputSchema;
