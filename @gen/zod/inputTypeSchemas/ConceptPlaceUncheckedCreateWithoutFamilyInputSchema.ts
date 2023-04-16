import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPlaceUncheckedCreateWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceUncheckedCreateWithoutFamilyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPlaceUncheckedCreateWithoutFamilyInputSchema;
