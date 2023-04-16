import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutPlacesInputSchema } from './UserUpdateWithoutPlacesInputSchema';
import { UserUncheckedUpdateWithoutPlacesInputSchema } from './UserUncheckedUpdateWithoutPlacesInputSchema';
import { UserCreateWithoutPlacesInputSchema } from './UserCreateWithoutPlacesInputSchema';
import { UserUncheckedCreateWithoutPlacesInputSchema } from './UserUncheckedCreateWithoutPlacesInputSchema';

export const UserUpsertWithoutPlacesInputSchema: z.ZodType<Prisma.UserUpsertWithoutPlacesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPlacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPlacesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPlacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPlacesInputSchema) ]),
}).strict();

export default UserUpsertWithoutPlacesInputSchema;
