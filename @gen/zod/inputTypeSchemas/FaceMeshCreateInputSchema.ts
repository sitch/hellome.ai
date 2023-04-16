import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { UserCreateNestedManyWithoutFaceInputSchema } from './UserCreateNestedManyWithoutFaceInputSchema';

export const FaceMeshCreateInputSchema: z.ZodType<Prisma.FaceMeshCreateInput> = z.object({
  id: z.string().cuid().optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedManyWithoutFaceInputSchema).optional()
}).strict();

export default FaceMeshCreateInputSchema;
