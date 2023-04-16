import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StoryCreateWithoutUserStoryInputSchema } from './StoryCreateWithoutUserStoryInputSchema';
import { StoryUncheckedCreateWithoutUserStoryInputSchema } from './StoryUncheckedCreateWithoutUserStoryInputSchema';
import { StoryCreateOrConnectWithoutUserStoryInputSchema } from './StoryCreateOrConnectWithoutUserStoryInputSchema';
import { StoryUpsertWithoutUserStoryInputSchema } from './StoryUpsertWithoutUserStoryInputSchema';
import { StoryWhereUniqueInputSchema } from './StoryWhereUniqueInputSchema';
import { StoryUpdateWithoutUserStoryInputSchema } from './StoryUpdateWithoutUserStoryInputSchema';
import { StoryUncheckedUpdateWithoutUserStoryInputSchema } from './StoryUncheckedUpdateWithoutUserStoryInputSchema';

export const StoryUpdateOneRequiredWithoutUserStoryNestedInputSchema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutUserStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoryCreateWithoutUserStoryInputSchema),z.lazy(() => StoryUncheckedCreateWithoutUserStoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutUserStoryInputSchema).optional(),
  upsert: z.lazy(() => StoryUpsertWithoutUserStoryInputSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StoryUpdateWithoutUserStoryInputSchema),z.lazy(() => StoryUncheckedUpdateWithoutUserStoryInputSchema) ]).optional(),
}).strict();

export default StoryUpdateOneRequiredWithoutUserStoryNestedInputSchema;
