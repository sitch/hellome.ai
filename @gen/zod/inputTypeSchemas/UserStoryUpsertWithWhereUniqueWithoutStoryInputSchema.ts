import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryWhereUniqueInputSchema } from './UserStoryWhereUniqueInputSchema';
import { UserStoryUpdateWithoutStoryInputSchema } from './UserStoryUpdateWithoutStoryInputSchema';
import { UserStoryUncheckedUpdateWithoutStoryInputSchema } from './UserStoryUncheckedUpdateWithoutStoryInputSchema';
import { UserStoryCreateWithoutStoryInputSchema } from './UserStoryCreateWithoutStoryInputSchema';
import { UserStoryUncheckedCreateWithoutStoryInputSchema } from './UserStoryUncheckedCreateWithoutStoryInputSchema';

export const UserStoryUpsertWithWhereUniqueWithoutStoryInputSchema: z.ZodType<Prisma.UserStoryUpsertWithWhereUniqueWithoutStoryInput> = z.object({
  where: z.lazy(() => UserStoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserStoryUpdateWithoutStoryInputSchema),z.lazy(() => UserStoryUncheckedUpdateWithoutStoryInputSchema) ]),
  create: z.union([ z.lazy(() => UserStoryCreateWithoutStoryInputSchema),z.lazy(() => UserStoryUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export default UserStoryUpsertWithWhereUniqueWithoutStoryInputSchema;
