import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';
import { UserUpdateManyMutationInputSchema } from './UserUpdateManyMutationInputSchema';
import { UserUncheckedUpdateManyWithoutUserInputSchema } from './UserUncheckedUpdateManyWithoutUserInputSchema';

export const UserUpdateManyWithWhereWithoutFamiliesInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutFamiliesInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default UserUpdateManyWithWhereWithoutFamiliesInputSchema;
