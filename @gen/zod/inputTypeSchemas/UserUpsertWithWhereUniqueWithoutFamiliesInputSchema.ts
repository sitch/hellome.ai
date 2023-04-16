import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutFamiliesInputSchema } from './UserUpdateWithoutFamiliesInputSchema';
import { UserUncheckedUpdateWithoutFamiliesInputSchema } from './UserUncheckedUpdateWithoutFamiliesInputSchema';
import { UserCreateWithoutFamiliesInputSchema } from './UserCreateWithoutFamiliesInputSchema';
import { UserUncheckedCreateWithoutFamiliesInputSchema } from './UserUncheckedCreateWithoutFamiliesInputSchema';

export const UserUpsertWithWhereUniqueWithoutFamiliesInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutFamiliesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutFamiliesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFamiliesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutFamiliesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFamiliesInputSchema) ]),
}).strict();

export default UserUpsertWithWhereUniqueWithoutFamiliesInputSchema;
