import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutFaceInputSchema } from './UserCreateWithoutFaceInputSchema';
import { UserUncheckedCreateWithoutFaceInputSchema } from './UserUncheckedCreateWithoutFaceInputSchema';

export const UserCreateOrConnectWithoutFaceInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFaceInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutFaceInputSchema),z.lazy(() => UserUncheckedCreateWithoutFaceInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutFaceInputSchema;
