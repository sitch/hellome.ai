import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptThingCreateManyUserInputSchema: z.ZodType<Prisma.ConceptThingCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  familyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptThingCreateManyUserInputSchema;
