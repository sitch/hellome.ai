import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryCreateWithoutStoryInputSchema } from './UserStoryCreateWithoutStoryInputSchema';
import { UserStoryUncheckedCreateWithoutStoryInputSchema } from './UserStoryUncheckedCreateWithoutStoryInputSchema';
import { UserStoryCreateOrConnectWithoutStoryInputSchema } from './UserStoryCreateOrConnectWithoutStoryInputSchema';
import { UserStoryUpsertWithWhereUniqueWithoutStoryInputSchema } from './UserStoryUpsertWithWhereUniqueWithoutStoryInputSchema';
import { UserStoryCreateManyStoryInputEnvelopeSchema } from './UserStoryCreateManyStoryInputEnvelopeSchema';
import { UserStoryWhereUniqueInputSchema } from './UserStoryWhereUniqueInputSchema';
import { UserStoryUpdateWithWhereUniqueWithoutStoryInputSchema } from './UserStoryUpdateWithWhereUniqueWithoutStoryInputSchema';
import { UserStoryUpdateManyWithWhereWithoutStoryInputSchema } from './UserStoryUpdateManyWithWhereWithoutStoryInputSchema';
import { UserStoryScalarWhereInputSchema } from './UserStoryScalarWhereInputSchema';

export const UserStoryUncheckedUpdateManyWithoutStoryNestedInputSchema: z.ZodType<Prisma.UserStoryUncheckedUpdateManyWithoutStoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserStoryCreateWithoutStoryInputSchema),z.lazy(() => UserStoryCreateWithoutStoryInputSchema).array(),z.lazy(() => UserStoryUncheckedCreateWithoutStoryInputSchema),z.lazy(() => UserStoryUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserStoryCreateOrConnectWithoutStoryInputSchema),z.lazy(() => UserStoryCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserStoryUpsertWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => UserStoryUpsertWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserStoryCreateManyStoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserStoryWhereUniqueInputSchema),z.lazy(() => UserStoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserStoryWhereUniqueInputSchema),z.lazy(() => UserStoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserStoryWhereUniqueInputSchema),z.lazy(() => UserStoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserStoryWhereUniqueInputSchema),z.lazy(() => UserStoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserStoryUpdateWithWhereUniqueWithoutStoryInputSchema),z.lazy(() => UserStoryUpdateWithWhereUniqueWithoutStoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserStoryUpdateManyWithWhereWithoutStoryInputSchema),z.lazy(() => UserStoryUpdateManyWithWhereWithoutStoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserStoryScalarWhereInputSchema),z.lazy(() => UserStoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserStoryUncheckedUpdateManyWithoutStoryNestedInputSchema;
