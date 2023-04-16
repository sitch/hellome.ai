import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StoryCreateWithoutUserStoryInputSchema } from './StoryCreateWithoutUserStoryInputSchema';
import { StoryUncheckedCreateWithoutUserStoryInputSchema } from './StoryUncheckedCreateWithoutUserStoryInputSchema';
import { StoryCreateOrConnectWithoutUserStoryInputSchema } from './StoryCreateOrConnectWithoutUserStoryInputSchema';
import { StoryWhereUniqueInputSchema } from './StoryWhereUniqueInputSchema';

export const StoryCreateNestedOneWithoutUserStoryInputSchema: z.ZodType<Prisma.StoryCreateNestedOneWithoutUserStoryInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutUserStoryInputSchema),z.lazy(() => StoryUncheckedCreateWithoutUserStoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutUserStoryInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional()
}).strict();

export default StoryCreateNestedOneWithoutUserStoryInputSchema;
