import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutThingsInputSchema } from './UserCreateWithoutThingsInputSchema';
import { UserUncheckedCreateWithoutThingsInputSchema } from './UserUncheckedCreateWithoutThingsInputSchema';
import { UserCreateOrConnectWithoutThingsInputSchema } from './UserCreateOrConnectWithoutThingsInputSchema';
import { UserUpsertWithoutThingsInputSchema } from './UserUpsertWithoutThingsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutThingsInputSchema } from './UserUpdateWithoutThingsInputSchema';
import { UserUncheckedUpdateWithoutThingsInputSchema } from './UserUncheckedUpdateWithoutThingsInputSchema';

export const UserUpdateOneRequiredWithoutThingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutThingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutThingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutThingsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutThingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutThingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutThingsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutThingsNestedInputSchema;
