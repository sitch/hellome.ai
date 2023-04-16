import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const FaceMeshUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.FaceMeshUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FaceMeshUncheckedCreateWithoutUserInputSchema;
