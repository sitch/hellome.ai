import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptThingUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  familyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptThingUncheckedCreateWithoutUserInputSchema;
