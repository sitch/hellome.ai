import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutThingsInputSchema } from './UserUpdateWithoutThingsInputSchema';
import { UserUncheckedUpdateWithoutThingsInputSchema } from './UserUncheckedUpdateWithoutThingsInputSchema';
import { UserCreateWithoutThingsInputSchema } from './UserCreateWithoutThingsInputSchema';
import { UserUncheckedCreateWithoutThingsInputSchema } from './UserUncheckedCreateWithoutThingsInputSchema';

export const UserUpsertWithoutThingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutThingsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutThingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutThingsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutThingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThingsInputSchema) ]),
}).strict();

export default UserUpsertWithoutThingsInputSchema;
