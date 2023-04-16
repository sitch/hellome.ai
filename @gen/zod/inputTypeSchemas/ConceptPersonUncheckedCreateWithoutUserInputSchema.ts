import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPersonUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptPersonUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPersonUncheckedCreateWithoutUserInputSchema;
