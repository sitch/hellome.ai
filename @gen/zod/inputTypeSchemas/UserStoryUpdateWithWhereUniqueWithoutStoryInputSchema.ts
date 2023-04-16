import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryWhereUniqueInputSchema } from './UserStoryWhereUniqueInputSchema';
import { UserStoryUpdateWithoutStoryInputSchema } from './UserStoryUpdateWithoutStoryInputSchema';
import { UserStoryUncheckedUpdateWithoutStoryInputSchema } from './UserStoryUncheckedUpdateWithoutStoryInputSchema';

export const UserStoryUpdateWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.UserStoryUpdateWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => UserStoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserStoryUpdateWithoutStoryInputSchema),z.lazy(() => UserStoryUncheckedUpdateWithoutStoryInputSchema) ]),
}).strict();

export default UserStoryUpdateWithWhereUniqueWithoutStoryInputSchema;
