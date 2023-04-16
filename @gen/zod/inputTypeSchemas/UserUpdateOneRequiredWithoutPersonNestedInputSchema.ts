import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPersonInputSchema } from './UserCreateWithoutPersonInputSchema';
import { UserUncheckedCreateWithoutPersonInputSchema } from './UserUncheckedCreateWithoutPersonInputSchema';
import { UserCreateOrConnectWithoutPersonInputSchema } from './UserCreateOrConnectWithoutPersonInputSchema';
import { UserUpsertWithoutPersonInputSchema } from './UserUpsertWithoutPersonInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutPersonInputSchema } from './UserUpdateWithoutPersonInputSchema';
import { UserUncheckedUpdateWithoutPersonInputSchema } from './UserUncheckedUpdateWithoutPersonInputSchema';

export const UserUpdateOneRequiredWithoutPersonNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPersonInputSchema),z.lazy(() => UserUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPersonInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPersonInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutPersonInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPersonInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutPersonNestedInputSchema;
