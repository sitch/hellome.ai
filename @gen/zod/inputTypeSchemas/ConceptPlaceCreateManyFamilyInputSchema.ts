import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPlaceCreateManyFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceCreateManyFamilyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPlaceCreateManyFamilyInputSchema;
