import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPlaceUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  familyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPlaceUncheckedCreateWithoutUserInputSchema;
