import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { UserUncheckedCreateNestedManyWithoutFaceInputSchema } from './UserUncheckedCreateNestedManyWithoutFaceInputSchema';

export const FaceMeshUncheckedCreateInputSchema: z.ZodType<Prisma.FaceMeshUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserUncheckedCreateNestedManyWithoutFaceInputSchema).optional()
}).strict();

export default FaceMeshUncheckedCreateInputSchema;
