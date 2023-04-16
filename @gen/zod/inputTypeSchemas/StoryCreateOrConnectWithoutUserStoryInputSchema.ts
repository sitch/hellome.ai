import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StoryWhereUniqueInputSchema } from './StoryWhereUniqueInputSchema';
import { StoryCreateWithoutUserStoryInputSchema } from './StoryCreateWithoutUserStoryInputSchema';
import { StoryUncheckedCreateWithoutUserStoryInputSchema } from './StoryUncheckedCreateWithoutUserStoryInputSchema';

export const StoryCreateOrConnectWithoutUserStoryInputSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutUserStoryInput> = z.object({
  where: z.lazy(() => StoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoryCreateWithoutUserStoryInputSchema),z.lazy(() => StoryUncheckedCreateWithoutUserStoryInputSchema) ]),
}).strict();

export default StoryCreateOrConnectWithoutUserStoryInputSchema;
