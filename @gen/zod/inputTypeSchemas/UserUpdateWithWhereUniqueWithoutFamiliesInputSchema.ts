import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutFamiliesInputSchema } from './UserUpdateWithoutFamiliesInputSchema';
import { UserUncheckedUpdateWithoutFamiliesInputSchema } from './UserUncheckedUpdateWithoutFamiliesInputSchema';

export const UserUpdateWithWhereUniqueWithoutFamiliesInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutFamiliesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutFamiliesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFamiliesInputSchema) ]),
}).strict();

export default UserUpdateWithWhereUniqueWithoutFamiliesInputSchema;
