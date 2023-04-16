import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const FaceMeshCreateManyInputSchema: z.ZodType<Prisma.FaceMeshCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FaceMeshCreateManyInputSchema;
