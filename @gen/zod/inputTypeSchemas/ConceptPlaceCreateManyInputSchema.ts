import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPlaceCreateManyInputSchema: z.ZodType<Prisma.ConceptPlaceCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  familyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPlaceCreateManyInputSchema;
