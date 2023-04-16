import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptThingUncheckedCreateWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingUncheckedCreateWithoutFamilyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptThingUncheckedCreateWithoutFamilyInputSchema;
