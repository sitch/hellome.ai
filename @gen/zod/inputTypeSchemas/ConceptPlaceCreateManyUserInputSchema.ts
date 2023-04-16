import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPlaceCreateManyUserInputSchema: z.ZodType<Prisma.ConceptPlaceCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  familyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPlaceCreateManyUserInputSchema;
