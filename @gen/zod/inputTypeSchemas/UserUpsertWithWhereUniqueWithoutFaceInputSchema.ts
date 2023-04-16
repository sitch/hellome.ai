import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutFaceInputSchema } from './UserUpdateWithoutFaceInputSchema';
import { UserUncheckedUpdateWithoutFaceInputSchema } from './UserUncheckedUpdateWithoutFaceInputSchema';
import { UserCreateWithoutFaceInputSchema } from './UserCreateWithoutFaceInputSchema';
import { UserUncheckedCreateWithoutFaceInputSchema } from './UserUncheckedCreateWithoutFaceInputSchema';

export const UserUpsertWithWhereUniqueWithoutFaceInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutFaceInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutFaceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFaceInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutFaceInputSchema),z.lazy(() => UserUncheckedCreateWithoutFaceInputSchema) ]),
}).strict();

export default UserUpsertWithWhereUniqueWithoutFaceInputSchema;
