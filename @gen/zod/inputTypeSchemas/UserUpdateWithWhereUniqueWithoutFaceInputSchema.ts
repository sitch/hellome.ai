import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutFaceInputSchema } from './UserUpdateWithoutFaceInputSchema';
import { UserUncheckedUpdateWithoutFaceInputSchema } from './UserUncheckedUpdateWithoutFaceInputSchema';

export const UserUpdateWithWhereUniqueWithoutFaceInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutFaceInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutFaceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFaceInputSchema) ]),
}).strict();

export default UserUpdateWithWhereUniqueWithoutFaceInputSchema;
